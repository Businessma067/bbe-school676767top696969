ALTER TABLE public.promo_course_selections DROP CONSTRAINT promo_course_selections_pkey;
ALTER TABLE public.promo_course_selections ADD PRIMARY KEY (user_id, code, product_slug);
DROP INDEX IF EXISTS public.payments_studyline_once_per_account;
DROP INDEX IF EXISTS public.promo_usages_studyline_once_per_account;
CREATE UNIQUE INDEX payments_studyline_once_per_account_course ON public.payments (user_id, product_slug) WHERE upper(promo_code) = 'STUDYLINE' AND status NOT IN ('failure', 'expired', 'reversed');
CREATE UNIQUE INDEX promo_usages_studyline_once_per_account_course ON public.promo_usages (user_id, product_slug) WHERE upper(code) = 'STUDYLINE';