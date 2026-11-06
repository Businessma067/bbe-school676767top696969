-- Dashboard consultation-call booking ledger (free allowance + paid credits).

CREATE TABLE IF NOT EXISTS public.call_bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  calendly_event_uri text,
  calendly_invitee_uri text,
  source text NOT NULL DEFAULT 'calendly' CHECK (char_length(btrim(source)) BETWEEN 1 AND 40),
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE UNIQUE INDEX IF NOT EXISTS call_bookings_event_uri_uidx
  ON public.call_bookings (calendly_event_uri)
  WHERE calendly_event_uri IS NOT NULL;

CREATE UNIQUE INDEX IF NOT EXISTS call_bookings_invitee_uri_uidx
  ON public.call_bookings (calendly_invitee_uri)
  WHERE calendly_invitee_uri IS NOT NULL;

CREATE INDEX IF NOT EXISTS call_bookings_user_created_idx
  ON public.call_bookings (user_id, created_at DESC);

ALTER TABLE public.call_bookings ENABLE ROW LEVEL SECURITY;

GRANT ALL ON public.call_bookings TO service_role;

DROP POLICY IF EXISTS call_bookings_select_own ON public.call_bookings;
CREATE POLICY call_bookings_select_own
  ON public.call_bookings
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);
