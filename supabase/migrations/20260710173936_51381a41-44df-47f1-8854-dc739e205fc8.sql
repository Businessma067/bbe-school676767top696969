
-- Roles
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role public.app_role NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);

GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own roles"
  ON public.user_roles FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role public.app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  );
$$;

-- Economics cases
CREATE TABLE public.economics_cases (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  subject TEXT NOT NULL DEFAULT 'economics',
  subsection TEXT NOT NULL,
  case_id TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  context TEXT NOT NULL,
  statements TEXT[] NOT NULL,
  answer_key BOOLEAN[] NOT NULL,
  tactical_explanations TEXT[] NOT NULL,
  difficulty_level TEXT NOT NULL DEFAULT '3/5',
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  CHECK (array_length(statements, 1) = 5),
  CHECK (array_length(answer_key, 1) = 5),
  CHECK (array_length(tactical_explanations, 1) = 5)
);

GRANT SELECT ON public.economics_cases TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.economics_cases TO authenticated;
GRANT ALL ON public.economics_cases TO service_role;

ALTER TABLE public.economics_cases ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view economics cases"
  ON public.economics_cases FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Admins can insert economics cases"
  ON public.economics_cases FOR INSERT
  TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update economics cases"
  ON public.economics_cases FOR UPDATE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete economics cases"
  ON public.economics_cases FOR DELETE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$ BEGIN NEW.updated_at = now(); RETURN NEW; END; $$
LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_economics_cases_updated_at
  BEFORE UPDATE ON public.economics_cases
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE INDEX idx_economics_cases_subsection_sort
  ON public.economics_cases (subsection, sort_order);

-- Seed cases 2.11 - 2.16
INSERT INTO public.economics_cases (subsection, case_id, title, context, statements, answer_key, tactical_explanations, difficulty_level, sort_order) VALUES
('2', 'CASE 2.11', 'Business Operations and Institutional Needs',
'Consider the foundational principles of a market system where individual citizens, startups, and manufacturing firms interact. Evaluate the following economic assertions:',
ARRAY[
  'Businesses provide goods like computers and services like installing software for people to satisfy their needs.',
  'Fulfilling needs is a phenomenon unique to individual human consumers, meaning that corporate businesses operate with zero internal needs.',
  'Manufacturers of smartphones, tablets, and laptops might have an operational need for the printed circuit boards (PCBs) produced by AT&S.',
  'To maintain active operations and fabricate components, a manufacturer like AT&S requires raw materials and a workforce to produce these PCBs.',
  'In the economy, only businesses are entitled to exchange goods and services to fulfill needs, while individuals are excluded from direct trading.'
],
ARRAY[true, false, true, true, false],
ARRAY[
  'TRUE — Businesses provide physical items (computers) and explicit services (installing software) to help consumers satisfy their needs.',
  'FALSE — Not only individuals but also corporate businesses have operational needs that must be satisfied.',
  'TRUE — High-end hardware manufacturers of devices like smartphones, tablets, and laptops require printed circuit boards (PCBs) from suppliers like AT&S.',
  'TRUE — A technology manufacturer like AT&S cannot operate in a vacuum; it requires raw materials and an active workforce to produce its components.',
  'FALSE — Individuals frequently exchange goods and services directly with each other, meaning they are fully active in trading.'
],
'3/5', 1),

('2', 'CASE 2.12', 'Personal Consumption History and Household Units',
'Analyze the historical participation of individuals within the broader economic loop and the nature of household demand segments:',
ARRAY[
  'Individuals become an active part of the economic ecosystem for the first time only when they register a business or act as entrepreneurs.',
  'Tina and Steve were an active part of the economy a long time before starting their business by being part of private households.',
  'Individuals as part of private households buy goods and services from a wide range of commercial businesses.',
  'The economic requirements of private households are strictly limited to food and a home to live in, completely excluding transportation and leisure.',
  'Households need food, a home, and medical care, and they also want to do sports, go to the cinema, or visit a café or a restaurant.'
],
ARRAY[false, true, true, false, true],
ARRAY[
  'FALSE — Running a business is not a prerequisite to join the economy; individuals are part of the system a long time before launching any venture.',
  'TRUE — Prior to starting their business, these individuals participated fully in the economic system as members of private households.',
  'TRUE — Members of households interact with the market by purchasing various commodities and services from a wide network of businesses.',
  'FALSE — Household demands extend far beyond basic shelter and food, actively including transit options and recreational wants.',
  'TRUE — Household consumption tracks a mix of survival needs (food, medical care) and personal lifestyle wants (sports, cinema, cafés, restaurants).'
],
'3/5', 2),

('2', 'CASE 2.13', 'Informal Barter and the Basic Dynamics of Resource Limits',
'Analyze the ground-level mechanics of direct property transactions, non-monetary trade, and the overarching boundaries governing market assets:',
ARRAY[
  'Individuals might exchange goods and services with each other, such as selling a house, an apartment, or a used car.',
  'Direct peer-to-peer exchanges can include informal trading, like exchanging vegetables or flowers from the garden and getting a bottle of wine in return.',
  'Exchanging goods and services would become significantly more difficult and complex if all that we want or need was available in abundance.',
  'Resources are scarce and need to be managed, which is why there is a universal need to economise.',
  'An individual can successfully opt out of making economic decisions if they choose to live strictly as a private consumer without running a business.'
],
ARRAY[true, true, false, true, false],
ARRAY[
  'TRUE — Individuals are fully capable of executing direct transactions with one another, including high-value assets like houses, apartments, or cars.',
  'TRUE — Trade can manifest informally between peers, such as bartering garden crops or flowers in exchange for a bottle of wine.',
  'FALSE — Exchanging would actually become much easier, not harder, if everything humans wanted or needed was available in absolute abundance.',
  'TRUE — Because resources are fundamentally scarce, they cannot satisfy all wants simultaneously, forcing every actor to manage them and economise.',
  'FALSE — Making choices is an absolute constraint for everyone in the system; no individual is able to opt out of making economic decisions.'
],
'3/5', 3),

('2', 'CASE 2.14', 'The Interdependence of Business Needs',
'Evaluate the relationships between different manufacturing tiers and consumer tech brands based on operational inputs and resource requirements.',
ARRAY[
  'Industrial manufacturers of smartphones, tablets, and laptops operate with zero internal or production-level needs.',
  'Companies that manufacture smartphones, tablets, and laptops might have a specific operational need for printed circuit boards (PCBs).',
  'Printed circuit boards (PCBs) are a type of good that can be produced by a supplier like AT&S.',
  'A manufacturing company like AT&S can seamlessly produce printed circuit boards without requiring a workforce or raw materials.',
  'To maintain its production lines, a company like AT&S has fundamental operational needs, specifically requiring raw materials and a workforce.'
],
ARRAY[false, true, true, false, true],
ARRAY[
  'FALSE — The text directly states that "not only individuals, but also businesses have needs," meaning corporations are not exempt from operational requirements.',
  'TRUE — According to the text, manufacturers of smartphones, tablets, and laptops might need the printed circuit boards (PCBs) that are produced by AT&S.',
  'TRUE — The text literally notes that printed circuit boards (PCBs) are produced by AT&S.',
  'FALSE — This contradicts the text, which states that AT&S explicitly needs raw materials and a workforce to produce these components.',
  'TRUE — The text states line-by-line that "in turn, AT&S needs raw materials and a workforce to produce these PCBs."'
],
'3/5', 4),

('2', 'CASE 2.15', 'Consumption Habits and Leisure Wants',
'Analyze the spending habits and lifestyle choices of private households interacting with the commercial marketplace.',
ARRAY[
  'Individuals buy final goods and services from a wide range of businesses only after they become active entrepreneurs.',
  'Long before starting a business, individuals participate in the economy as part of private households.',
  'The physical and survival needs of a private household are strictly limited to food and a home to live in, with no other necessities mentioned.',
  'Like thousands of other households, individual consumers have a requirement for medical care, a car, and/or other kinds of transportation.',
  'Household desires are limited to basic survival needs, meaning they have zero interest in doing sports, going to the cinema, or visiting cafés and restaurants.'
],
ARRAY[false, true, false, true, false],
ARRAY[
  'FALSE — The text proves that individuals buy goods and services from a wide range of businesses as part of private households long before starting an enterprise.',
  'TRUE — The text directly states that "Tina and Steve were part of the economy a long time before starting their business. As individuals, they have been part of private households."',
  'FALSE — Reversal trap. The text expands the baseline household needs to explicitly include medical care, a car, and/or other kinds of transportation.',
  'TRUE — This is a literal match with the text, which states that thousands of households need food, a home to live in, medical care, and transportation.',
  'FALSE — The text highlights that household members also want to do sports, go to the cinema, or visit a café or a restaurant.'
],
'3/5', 5),

('2', 'CASE 2.16', 'Supply Channels and Market Interdependence',
'Review the baseline purpose of corporate supply channels and the friction governing resource management under general constraints.',
ARRAY[
  'Commercial businesses design and offer goods and services that people, as part of private households or other businesses, need and/or want.',
  'Economic exchange between market actors would become significantly more difficult and complex if all that we want or need was available in abundance.',
  'Real-world resources are available in absolute abundance, meaning they never require active management or organizational constraints.',
  'Because resources are scarce and need to be managed, there is a clear, universal requirement for all economic actors to economise.',
  'An individual can successfully opt out of making economic decisions by choosing to live strictly as a private consumer without running a business.'
],
ARRAY[true, false, false, true, false],
ARRAY[
  'TRUE — The text explicitly states that "businesses offer the goods and services that people (as part of private households or other businesses) need and/or want."',
  'FALSE — Reversal trap. The text notes the exact opposite: "exchanging would be much easier if all that we want or need is available in abundance."',
  'FALSE — This directly contradicts the text, which establishes that "abundance is not the case. Resources are scarce and need to be managed."',
  'TRUE — The text connects these parameters directly: "Resources are scarce and need to be managed. This is why we all need to economise."',
  'FALSE — Universal rule. The text concludes with a definitive statement: "No one is able to opt out of making economic decisions."'
],
'3/5', 6);
