-- Direct support chat. Visitors talk on the site; admins reply in the panel.
-- Access goes through these functions so a visitor key cannot read other threads.

CREATE TABLE IF NOT EXISTS public.support_threads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  visitor_key text NOT NULL UNIQUE,
  user_id uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  admin_unread boolean NOT NULL DEFAULT false,
  user_unread boolean NOT NULL DEFAULT false
);

CREATE TABLE IF NOT EXISTS public.support_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  thread_id uuid NOT NULL REFERENCES public.support_threads(id) ON DELETE CASCADE,
  sender text NOT NULL CHECK (sender IN ('user', 'admin')),
  body text NOT NULL CHECK (char_length(btrim(body)) BETWEEN 1 AND 2000),
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS support_messages_thread_idx
  ON public.support_messages (thread_id, created_at);
CREATE INDEX IF NOT EXISTS support_threads_updated_idx
  ON public.support_threads (updated_at DESC);

ALTER TABLE public.support_threads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.support_messages ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.support_thread_for(p_key text)
RETURNS uuid
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  tid uuid;
  uid uuid := auth.uid();
BEGIN
  IF p_key IS NULL OR char_length(p_key) < 16 OR char_length(p_key) > 80 THEN
    RAISE EXCEPTION 'bad key';
  END IF;
  SELECT id INTO tid FROM public.support_threads WHERE visitor_key = p_key;
  IF tid IS NULL THEN
    INSERT INTO public.support_threads (visitor_key, user_id)
    VALUES (p_key, uid)
    RETURNING id INTO tid;
  ELSIF uid IS NOT NULL THEN
    UPDATE public.support_threads SET user_id = uid WHERE id = tid AND user_id IS NULL;
  END IF;
  RETURN tid;
END;
$$;

CREATE OR REPLACE FUNCTION public.support_pull(p_key text)
RETURNS TABLE (id uuid, sender text, body text, created_at timestamptz)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  tid uuid;
BEGIN
  tid := public.support_thread_for(p_key);
  UPDATE public.support_threads SET user_unread = false WHERE id = tid;
  RETURN QUERY
    SELECT m.id, m.sender, m.body, m.created_at
    FROM public.support_messages m
    WHERE m.thread_id = tid
    ORDER BY m.created_at ASC;
END;
$$;

CREATE OR REPLACE FUNCTION public.support_unread(p_key text)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  flag boolean;
BEGIN
  SELECT user_unread INTO flag FROM public.support_threads WHERE visitor_key = p_key;
  RETURN coalesce(flag, false);
END;
$$;

CREATE OR REPLACE FUNCTION public.support_send(p_key text, p_body text)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  tid uuid;
  clean text := btrim(p_body);
BEGIN
  IF clean IS NULL OR char_length(clean) < 1 OR char_length(clean) > 2000 THEN
    RAISE EXCEPTION 'bad message';
  END IF;
  tid := public.support_thread_for(p_key);
  INSERT INTO public.support_messages (thread_id, sender, body)
  VALUES (tid, 'user', clean);
  UPDATE public.support_threads
  SET admin_unread = true, user_unread = false, updated_at = now()
  WHERE id = tid;
END;
$$;

CREATE OR REPLACE FUNCTION public.support_admin_unread()
RETURNS integer
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF NOT public.is_admin_caller() THEN
    RETURN 0;
  END IF;
  RETURN (SELECT count(*)::integer FROM public.support_threads WHERE admin_unread);
END;
$$;

CREATE OR REPLACE FUNCTION public.support_admin_inbox()
RETURNS TABLE (
  id uuid,
  updated_at timestamptz,
  admin_unread boolean,
  user_email text,
  last_body text,
  last_sender text
)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF NOT public.is_admin_caller() THEN
    RAISE EXCEPTION 'Forbidden';
  END IF;
  RETURN QUERY
    SELECT
      t.id,
      t.updated_at,
      t.admin_unread,
      u.email::text,
      lm.body,
      lm.sender
    FROM public.support_threads t
    LEFT JOIN auth.users u ON u.id = t.user_id
    LEFT JOIN LATERAL (
      SELECT m.body, m.sender
      FROM public.support_messages m
      WHERE m.thread_id = t.id
      ORDER BY m.created_at DESC
      LIMIT 1
    ) lm ON true
    WHERE lm.body IS NOT NULL
    ORDER BY t.updated_at DESC
    LIMIT 100;
END;
$$;

CREATE OR REPLACE FUNCTION public.support_admin_thread(p_thread uuid)
RETURNS TABLE (id uuid, sender text, body text, created_at timestamptz)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF NOT public.is_admin_caller() THEN
    RAISE EXCEPTION 'Forbidden';
  END IF;
  UPDATE public.support_threads SET admin_unread = false WHERE id = p_thread;
  RETURN QUERY
    SELECT m.id, m.sender, m.body, m.created_at
    FROM public.support_messages m
    WHERE m.thread_id = p_thread
    ORDER BY m.created_at ASC;
END;
$$;

CREATE OR REPLACE FUNCTION public.support_admin_reply(p_thread uuid, p_body text)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  clean text := btrim(p_body);
BEGIN
  IF NOT public.is_admin_caller() THEN
    RAISE EXCEPTION 'Forbidden';
  END IF;
  IF clean IS NULL OR char_length(clean) < 1 OR char_length(clean) > 2000 THEN
    RAISE EXCEPTION 'bad message';
  END IF;
  IF NOT EXISTS (SELECT 1 FROM public.support_threads WHERE id = p_thread) THEN
    RAISE EXCEPTION 'missing thread';
  END IF;
  INSERT INTO public.support_messages (thread_id, sender, body)
  VALUES (p_thread, 'admin', clean);
  UPDATE public.support_threads
  SET user_unread = true, admin_unread = false, updated_at = now()
  WHERE id = p_thread;
END;
$$;

GRANT EXECUTE ON FUNCTION public.support_thread_for(text) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.support_pull(text) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.support_unread(text) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.support_send(text, text) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.support_admin_unread() TO authenticated;
GRANT EXECUTE ON FUNCTION public.support_admin_inbox() TO authenticated;
GRANT EXECUTE ON FUNCTION public.support_admin_thread(uuid) TO authenticated;
GRANT EXECUTE ON FUNCTION public.support_admin_reply(uuid, text) TO authenticated;
