-- Update expanded explanations for 2.3-part2 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['Economics is the study of how people and organisations choose under scarce resources. Households allocate limited budgets among competing needs and wants every day, so their decisions sit at the centre of the subject, especially in microeconomics. Excluding households because "only businesses matter" contradicts that definition.

The statement is false.', 'The same point applies in sharper form. Households are not a side note; they are one of the main decision-making units economics studies. Restricting the field to corporate profit maximisation alone leaves out consumer choice, labour supply, and saving, all of which are standard topics. The exclusion claim is therefore wrong.

The statement is false.', 'Microeconomics looks at individual units and particular markets. Aggregate price-level questions, such as inflation for the whole economy, belong to macroeconomics even if a story happens to mention one consumer. Naming a single buyer does not reclassify an economy-wide price-level question as micro.

The statement is false.', 'Social sciences routinely work with imperfect prediction. Economics builds useful theories that explain and forecast behaviour under uncertainty; it does not wait for perfect foresight of every human action. Demanding perfect prediction before calling the field a science sets a bar no empirical social science meets.

The statement is false.', 'Microeconomics and macroeconomics apply the same scarcity and allocation logic at different scopes: one unit or market versus the whole economy. They are two branches of one discipline, not unrelated subjects. That is exactly what the claim states.

The statement is true.'] WHERE case_id = 'CASE 2.3.26' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['National GDP growth summarises output for the entire country. That is a classic whole-economy aggregate, so reporting it is macroeconomic work, not the study of one firm''s internal decision. The scope of the indicator matches the label.

The statement is true.', 'A single bakery deciding whether to hire a Saturday assistant is one firm allocating labour. When the analysis stays on that firm alone, the question is microeconomic. Firm-level hiring under its own constraints belongs at unit scope.

The statement is true.', 'The economy-wide unemployment rate pools joblessness across regions and sectors. It is an aggregate labour-market indicator, so publishing it is macroeconomics rather than one household''s personal choice. The unit of measurement is the whole economy.

The statement is true.', 'One student choosing between two part-time offers is allocating scarce time and effort among personal alternatives. That is a household-level labour decision, which microeconomics studies. The comparison stays at the individual unit.

The statement is true.', 'Money shows up in both micro and macro examples: a shop''s price list and a central bank''s policy rate both involve currency. What decides the label is whether you analyse one unit or the whole economy, not whether money appears in the story. The absolute word "automatically" is what fails.

The statement is false.'] WHERE case_id = 'CASE 2.3.27' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Micro and macro share core ideas such as scarcity, prices, and incentives; they differ mainly in the level of aggregation. Courses routinely teach both together for that reason. Claiming they share no vocabulary and cannot appear in one course overstates the divide.

The statement is false.', 'Healthcare may be a large national sector, but that fact alone does not make every pricing discussion macro. A pharmacy switching one customer to a cheaper generic is a firm-and-household decision; scope follows the unit analysed, not the sector''s size.

The statement is false.', 'If health authorities track total pharmaceutical spending across the economy and how it affects budgets, they are measuring an aggregate. Aggregates of that kind are the standard territory of macroeconomics. The claim correctly shifts scope from one sale to the whole.

The statement is true.', 'The five-euro monthly saving is a household reallocating a tight budget toward a cheaper substitute. Economics studies exactly that kind of constrained product choice. Limited income guiding substitution is core subject matter.

The statement is true.', 'Both branches study how scarce resources are allocated; they differ in whether the lens is one unit or the whole economy. Calling them unrelated fields with completely different subject matter ignores that shared foundation.

The statement is false.'] WHERE case_id = 'CASE 2.3.28' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['The discipline studies decisions under limited resources made by households and businesses, from individual choices up to economy-wide patterns. That span is the ordinary definition of economics. The claim states it cleanly.

The statement is true.', 'Microeconomics focuses on individual households, firms, and specific markets rather than national totals. That unit-and-market focus is the standard definition of the micro branch. The wording matches the scope.

The statement is true.', 'Macroeconomics looks at whole-economy outcomes such as growth, unemployment, inflation, and interest rates. Those aggregate topics define the macro syllabus. The claim lists them correctly.

The statement is true.', 'Both branches build theories meant to explain what happens and to predict likely effects of choices or policies. Shared scientific aims of explanation and prediction tie micro and macro together. The claim captures that mandate.

The statement is true.', 'Scarcity drives household and firm choices at the micro level, and those choices feed into aggregates observed at the macro level. The same allocation logic runs through both scopes. The statement is right to link them that way.

The statement is true.'] WHERE case_id = 'CASE 2.3.29' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['A central task of economics is to build theories that explain why prices, employment, output, and similar outcomes turn out as they do. Explanation of economic phenomena is part of its scientific role. The claim matches that aim.

The statement is true.', 'The same theories are used to forecast how decisions and policies are likely to affect behaviour and aggregates. Prediction sits alongside explanation in the discipline''s mandate. The statement is accurate.

The statement is true.', 'A theory can be useful without delivering perfect foresight. Approximate, conditional forecasts still guide decisions and policy, just as in other empirical fields. Requiring perfect foresight before any theory counts as useful sets an impossible standard.

The statement is false.', 'Micro theories are built to anticipate how individual markets and units respond; macro theories anticipate aggregate trends such as inflation or growth. Each branch develops predictive tools at its own scope. The claim states that division correctly.

The statement is true.', 'Human behaviour is noisy, yet economics still explains patterns and produces useful forecasts under uncertainty. Unpredictability weakens perfect certainty; it does not erase scientific explanation or prediction. The absolute "cannot ... anything" overreaches.

The statement is false.'] WHERE case_id = 'CASE 2.3.30' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Household budgeting under limited income is a classic economic decision, not something outside the field. Businesses create value, but that does not push households out of the subject: consumers, workers, and savers are central actors. The claim that budgeting is excluded because "only businesses create value" is false.

The statement is false.', 'Microeconomics is defined by unit-level study: one household, one firm, or one market at a time. That is the standard scope of the micro branch. The statement describes it correctly.

The statement is true.', 'Macroeconomics works with aggregates such as GDP, unemployment, and the general price level. One shop''s inventory list is a single-firm detail and belongs in micro when studied alone. Calling that inventory list macro mislabels the scope.

The statement is false.', 'Economics starts from scarce resources and the choices they force, not from an assumption of unlimited means or from accounting rules alone. Bookkeeping may support analysis, but it is not the subject''s core. The claim misstates both the premise and the content.

The statement is false.', 'The field builds theories to explain outcomes and to predict effects of choices and policies. Collecting stories may illustrate points, but economics is not limited to anecdotes without theory. The word "never" is the overclaim that fails.

The statement is false.'] WHERE case_id = 'CASE 2.3.31' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Looking only at this driver''s choice of Friday airport runs versus Saturday suburban trips for one vehicle keeps the analysis on a single operator. That unit-level scheduling problem is microeconomics. The scope matches the claim.

The statement is true.', 'National ride-share employment totals add workers across many drivers and firms. That aggregate employment figure is macroeconomic, not the same object as one driver''s personal shift plan. The contrast in the claim is right.

The statement is true.', 'The driver faces limited time and fuel and must choose how to use them. Economics studies exactly those constrained resource decisions. The claim places the situation inside the discipline correctly.

The statement is true.', 'City-wide average trip earnings summarise many drivers and trips into one figure. Once the report is an aggregate across the city, the analysis has moved to macroeconomic territory. The claim draws that line correctly.

The statement is true.', 'Predicting how one driver reacts to a surge-pricing alert is a question about an individual unit''s response to incentives. That is a microeconomic prediction task. The claim assigns the right branch.

The statement is true.'] WHERE case_id = 'CASE 2.3.32' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['When GDP growth slows in a broad downturn, macroeconomics seeks theories that explain why aggregate output weakens. Explaining economy-wide slowdowns is a core macro task. The statement is on target.

The statement is true.', 'Whether the lens is one firm or the whole country, economics still studies decisions under limited resources. Scarcity underpins both micro and macro. The claim keeps that definition intact.

The statement is true.', 'Growth, unemployment, inflation, and interest rates are the standard macro syllabus topics. They appear together whenever the focus is the whole economy. The list in the claim is correct.

The statement is true.', 'Labour markets can be studied nationally, but a staffing plan for one workplace analysed on its own remains microeconomic. National scale of labour in general does not turn every hiring decision into macro. The absolute link "staffing is macro because labour markets are national" fails.

The statement is false.', 'A GDP revision is a national aggregate of production. Individual shops contribute sales, yet the published figure is still a whole-economy measure, which is macro, not micro. Contribution from many shops does not make the aggregate itself micro.

The statement is false.'] WHERE case_id = 'CASE 2.3.33' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['A household deciding whether to buy the costlier suit faces a budget constraint and a consumption choice. That individual purchase decision is microeconomic. The claim places it correctly.

The statement is true.', 'Clothing prices for one atelier are micro, but a national clothing price index or economy-wide inflation measure is macro. Prices are not "always" micro once they are aggregated nationally. The word "always" is what breaks the claim.

The statement is false.', 'Inflation is a macro topic when it means the general price level, but one tailor raising suit prices after higher linen costs is still firm-level pricing. The mere existence of inflation somewhere does not turn every price increase into macroeconomics.

The statement is false.', 'How one firm adjusts to higher input costs is a standard micro topic: cost shocks, supply responses, and pricing. Those responses can be modelled for individual firms. The claim that they cannot is wrong.

The statement is false.', 'Craft skill matters for quality, but the tailor still sets prices and allocates time under cost and demand constraints. Those are economic decisions. Calling craft "not economics" leaves out the allocation problem.

The statement is false.'] WHERE case_id = 'CASE 2.3.34' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Inflation and interest rates sit with growth and unemployment as core macroeconomic variables. A governor discussing an economy-wide rate rise to cool inflation is firmly in that set. The claim lists the topics correctly.

The statement is true.', 'Economics builds theories that explain why a central bank tightens policy and what may happen to inflation afterward. Explanation and prediction of policy effects are part of the scientific role. The statement matches that aim.

The statement is true.', 'One saver deciding whether to move deposits after the rate change is allocating personal wealth under new incentives. That single-household portfolio choice is microeconomic. Policy may be macro; the saver''s response, studied alone, is micro.

The statement is true.', 'An interest-rate decision aimed at inflation for the whole economy is monetary policy at aggregate scope. That is macroeconomic policy by definition. The claim labels it correctly.

The statement is true.', 'Macro and micro remain two scopes of one discipline. Discussing policy does not abolish household and firm analysis; savers and borrowers still make unit-level choices under the new rates. Macro does not replace micro entirely.

The statement is false.'] WHERE case_id = 'CASE 2.3.35' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Classification turns on the unit of analysis: one buyer or seller versus national totals for the whole economy. That unit-versus-aggregate rule is the core micro/macro distinction students need. The claim states it clearly.

The statement is true.', 'Monthly consumer price inflation for the whole economy is a general price-level aggregate. Publishing that index change is macroeconomic measurement. The scope is economy-wide, not one shop''s sticker.

The statement is true.', 'Economics develops explanatory models at both the unit level and the aggregate level because scarcity appears in both places. Theory-building at each scope is how the discipline handles constrained choice. The claim is right.

The statement is true.', 'Government activity can be micro or macro depending on what is studied: one local project versus nationwide fiscal aggregates. Public sector involvement alone does not force the macro label. The word "automatically" overclaims.

The statement is false.', 'A student choosing a canteen meal is one person''s consumption decision under a personal budget. National health spending may involve food in other contexts, but that link does not make one meal choice macro. Scope stays with the single decision.

The statement is false.'] WHERE case_id = 'CASE 2.3.36' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['The family must split a limited monthly budget among competing services, including mobile data. Economics studies that kind of constrained allocation. The claim places the decision inside the discipline correctly.

The statement is true.', 'Economy-wide telecom investment is an aggregate capital figure and belongs in macroeconomics. One family''s tablet data plan is a single household choice and is not the same object. The contrast in the claim is accurate.

The statement is true.', 'Choosing a data plan for one family''s tablets, while ignoring national investment totals, keeps the analysis on a single household. That is microeconomic scope. The claim labels it correctly.

The statement is true.', 'Total national mobile data traffic growth summarises behaviour across many users. An aggregate study of that kind is macroeconomic. The claim correctly moves from one plan to the national total.

The statement is true.', 'Wi-Fi may change the trade-offs, but the family still compares plans, prices, and limited spending. Substitution between Wi-Fi and mobile data remains an economic choice under constraint. Availability of Wi-Fi does not erase the economic content.

The statement is false.'] WHERE case_id = 'CASE 2.3.37' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Limited resources forcing choices is the idea that micro and macro both rest on. Scarcity unifies the two branches even though their units of analysis differ. The claim states that shared foundation correctly.

The statement is true.', 'Economics uses theories to forecast how policy changes and price movements are likely to affect behaviour and aggregates. Prediction is part of its scientific method, not an optional extra. The statement is accurate.

The statement is true.', 'Fields such as medicine and meteorology remain scientific while forecasting under uncertainty. Perfect forecasts are not the entry ticket to science. Requiring them would disqualify most empirical disciplines, including economics.

The statement is false.', 'Microeconomics builds testable theories about individual and market behaviour; it is not merely descriptive storytelling. Both branches can be scientific. Restricting science to macro alone misreads the micro toolkit.

The statement is false.', 'Explanatory theory is central: economics organises facts into models that account for outcomes. A pile of unrelated facts without theory is not how the discipline works. The claim denies that theoretical core.

The statement is false.'] WHERE case_id = 'CASE 2.3.38' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['A shopper''s basket that includes imported goods, analysed only as that household''s purchase, is a micro consumption decision. Import content in one basket does not by itself make the analysis macro. The claim''s scope is right.

The statement is true.', 'Goods can cross a border in a single firm''s shipment or in national trade totals. Crossing a border does not automatically select the macro label; the unit of analysis still decides. The absolute "any border crossing" fails.

The statement is false.', 'Containers hold individual products, but customs tables of total national imports and exports are aggregates. Economy-wide trade balances are macroeconomic. Calling trade "micro only" because of containers ignores that aggregate view.

The statement is false.', 'One exporter''s shipping schedule, studied alone, is a single firm''s logistics plan. International shipment does not turn that firm-level schedule into macroeconomics. Scope stays micro when only one exporter is analysed.

The statement is false.', 'Exchange rates affect prices, trade volumes, and policy; national responses to rate moves are standard macro topics. Psychology may influence markets, but that does not remove exchange rates from economics. The exclusion claim is wrong.

The statement is false.'] WHERE case_id = 'CASE 2.3.39' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Unit-level economics models how a single company or local market reacts to incentives such as wages, prices, or funding. That firm-and-market focus defines the micro approach. The claim states it correctly.

The statement is true.', 'Businesses decide how to use limited cash, developer hours, and other inputs. Those constrained business choices are core economics. The claim places them inside the subject correctly.

The statement is true.', 'Reviewing only one indie studio''s hiring plan keeps the lens on a single firm. That is microeconomics by scope. The claim labels the exercise correctly.

The statement is true.', 'Adding investment across all game studios to judge national growth turns many firm figures into an aggregate. Assessing growth from that national sum is macroeconomic analysis. The claim draws the line correctly.

The statement is true.', 'Small and entrepreneurial firms are routine subjects in microeconomics; science does not require studying only multinationals. Excluding small firms on that ground contradicts how the field works. The claim is false.

The statement is false.'] WHERE case_id = 'CASE 2.3.40' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Macroeconomics studies aggregates such as inflation, growth, and national spending; it does not "only" cover central banks, and it does not erase household behaviour from economics. Brand switching by one customer is micro and can sit beside macro topics in the same discipline. The exclusive claim fails.

The statement is false.', 'Advice that steers one customer to a cheaper own-brand lotion, analysed as that sale alone, is a single-transaction decision. That unit-level sale is microeconomics. The claim is right.

The statement is true.', 'Microeconomics asks why a household switches brands to stretch a tight budget. Explaining that constrained substitution is a standard micro task. The claim matches the branch''s aim.

The statement is true.', 'Economy-wide pharmaceutical spending totals are national aggregates. Measuring those totals is macroeconomic work, not the study of one chemist''s recommendation. The claim shifts scope correctly.

The statement is true.', 'Dermatology may explain skin needs, but an eight-euro monthly saving under a fixed budget is still an economic trade-off. Price and brand choice under scarcity belong to economics. "Never economics" is the overclaim.

The statement is false.'] WHERE case_id = 'CASE 2.3.41' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Limiting the analysis to one approved mixed-use building and its local effects keeps the focus on a single project. That local, project-level view is microeconomic. The claim is accurate.

The statement is true.', 'Planners choose among projects with finite land and budgets, so they face an allocation problem under scarcity. That is an economic decision even when the actor is a town council. The claim recognises it correctly.

The statement is true.', 'Counting every new home started nationwide to track growth produces a housing-start aggregate. Using that national total for growth analysis is macroeconomic measurement. The claim labels it correctly.

The statement is true.', 'Economic theory also addresses local household and firm outcomes, not only nationwide aggregates. Micro models of markets and projects are a large part of the toolkit. Restricting theory to national aggregates alone is wrong.

The statement is false.', 'Housing can be micro when one household searches for a flat or one permit is studied, and macro when national starts or rates are the object. Interest-rate changes are one macro channel, not the only door into housing economics. The "macro only when rates change" rule is too narrow.

The statement is false.'] WHERE case_id = 'CASE 2.3.42' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Average pay increases published for all sectors summarise wage growth across the economy. That aggregate earnings release is macroeconomic data. The claim is correct.

The statement is true.', 'A worker choosing between two hourly offers is allocating personal labour time among alternatives. That individual job choice is micro-level labour allocation. The claim places it correctly.

The statement is true.', 'Individual shopping decisions under budget limits are central microeconomic material; national totals matter too, but they do not push personal choices "forever outside" economics. Both scopes belong in the discipline. The exclusion claim fails.

The statement is false.', 'Whether a wage example is micro or macro depends on whether you study one hiring offer or the whole labour market. Scope of analysis is the classification key. The claim states that rule correctly.

The statement is true.', 'One warehouse offering a higher hourly rate to one applicant, studied as that offer alone, is a single hiring decision. That is microeconomics. The claim labels it correctly.

The statement is true.'] WHERE case_id = 'CASE 2.3.43' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Economics constructs theories in order to explain phenomena and to predict how they may evolve under different conditions. Explanation and prediction define its scientific approach. The claim matches that mandate.

The statement is true.', 'Unemployment at the economy-wide level is a standard macroeconomic variable, and macro theories aim to explain and forecast it. Sociology may study related social patterns, but that does not remove unemployment prediction from economics. The exclusion claim is wrong.

The statement is false.', 'Both micro and macro study decisions under limited resources; macro does not assume "unlimited growth" while micro alone faces scarcity. Scarcity runs through both branches. The claimed split misstates the foundation.

The statement is false.', 'Models remain useful under behavioural uncertainty; they organise tendencies and conditional forecasts without needing perfect foresight. Validity does not require omniscience. The perfect-foresight bar is too high.

The statement is false.', 'Firms'' competitive price and quantity responses are routinely modelled in microeconomics. Calling them random and unmodelled denies a large part of market theory. The claim is false.

The statement is false.'] WHERE case_id = 'CASE 2.3.44' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['The translator trades paid hours today against unpaid portfolio work that may bring clients later. Microeconomics explains that kind of intertemporal trade-off under scarce time. The claim assigns the right branch and task.

The statement is true.', 'Personal hour allocation for one self-employed person is analysis of a single economic unit. That is microeconomics. The claim is correct.

The statement is true.', 'Service freelancers allocate limited hours just as factories allocate machines and shifts. Business decision-making is not confined to factory production. The "only factory" restriction fails.

The statement is false.', 'Many small individual choices can feed into employment, income, and output aggregates measured later. Freelance hours are not "too small" to relate to macro indicators in principle. The dismissal overreaches.

The statement is false.', 'Freelancers and other self-employed workers are ordinary microeconomic actors facing prices, time, and income constraints. Models are not limited to listed corporations. The exclusion claim is wrong.

The statement is false.'] WHERE case_id = 'CASE 2.3.45' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Macroeconomics focuses on the whole economy through aggregates such as growth and unemployment. That whole-economy focus is the definition of the macro branch. The claim states it correctly.

The statement is true.', 'To classify an example, ask whether the analysis covers one unit or the entire economy. That scope test is the practical key to micro versus macro. The claim describes the rule accurately.

The statement is true.', 'Economics studies how households and businesses decide under limited resources. That scarcity-and-choice definition is the core of the subject. The claim matches it.

The statement is true.', 'Theories at both micro and macro scopes aim to explain behaviour and to predict likely effects. Both branches contribute to that scientific work. The claim is right.

The statement is true.', 'Unit-level economics looks at one family budget, one company, or one local market in isolation from national totals. That isolated unit focus defines micro scope. The claim is accurate.

The statement is true.'] WHERE case_id = 'CASE 2.3.46' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['One family switching to a cheaper loaf after a price rise is a single household''s consumption response under a budget. That unit-level decision is microeconomic. The claim places it correctly.

The statement is true.', 'Economics as a social science builds theory for both micro behaviour and macro aggregates; it is not limited to laboratory experiments on national totals alone. Requiring only that experimental form misreads how the field works.

The statement is false.', 'Inflation and the policy responses to it are standard topics for macroeconomic theory. Price levels can be and routinely are studied with economic models. The claim that they cannot is wrong.

The statement is false.', 'A price rise for one grocery item in one shop is still a micro observation when that is the unit analysed. The word "inflation" in everyday speech does not automatically promote one sticker price to macroeconomics.

The statement is false.', 'National inflation measurement is macro, but micro analysis of households and firms continues alongside it. Measuring inflation nationally does not make the micro branch disappear. Both scopes coexist.

The statement is false.'] WHERE case_id = 'CASE 2.3.47' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Microeconomics explains and predicts individual behaviour, including how many bookstore shifts a student takes. The student''s hour choice is exactly that kind of unit-level problem. The claim is correct.

The statement is true.', 'Core economics includes how families and individuals split limited hours and pay among competing ends such as tuition and study. Scarcity and household choice define the subject. The claim matches the definition.

The statement is true.', 'Ordinary household labour and budget choices are standard material for economic theory even without a subsidy in the story. Government support is not a precondition for analysis. The claim is right.

The statement is true.', 'If many students change hours and the national unemployment rate moves, the measured aggregate effect is macroeconomic. Individual choices can drive a macro indicator without changing the label of the aggregate itself. The claim draws that line correctly.

The statement is true.', 'Students are households (or household members) making labour and budget decisions under scarce time and money. Not being a company does not push the situation outside economics. The exclusion claim fails.

The statement is false.'] WHERE case_id = 'CASE 2.3.48' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['National car-sales totals after an incentive scheme summarise many purchases into an aggregate relevant for growth and demand. That whole-economy view is macroeconomic rather than firm-level analysis. The claim is correct.

The statement is true.', 'Studying one shop and studying the entire national economy are different scopes: micro versus macro. The questions, data, and aggregates are not the same. Claiming there is no difference erases the central distinction.

The statement is false.', 'A household''s own car purchase remains a micro decision even when a national bonus programme exists in the background. Policy context changes incentives; it does not rewrite the unit of analysis for that one buyer. The claim is right.

The statement is true.', 'Imperfect prediction of individuals does not strip economics of scientific content. Theories still explain patterns and support useful conditional forecasts. The absolute removal of "all scientific content" overreaches.

The statement is false.', 'Subsidies change prices and incentives, but households still choose under those new constraints. Their decisions remain economic subject matter. Offering a subsidy does not exclude households from the field.

The statement is false.'] WHERE case_id = 'CASE 2.3.49' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Studying one Styrian winery''s quarterly bottle output, while ignoring national export totals, keeps the lens on a single firm. That is microeconomics by scope. The claim is accurate.

The statement is true.', 'Summing output across all wineries to measure national export growth builds an aggregate growth indicator. That whole-economy analysis is macroeconomic. The claim draws the contrast correctly.

The statement is true.', 'Agriculture involves biology, but harvest limits, capacity, pricing, and staffing are business allocation choices under scarcity. Those decisions are economic. "Biology only" leaves out the allocation problem.

The statement is false.', 'Weather shocks change yields and costs; firms and markets respond, and those responses are analysed with economic theory. Input scarcity after a shock is a standard micro topic. The claim that weather cannot be analysed economically is wrong.

The statement is false.', 'Wages appear in national accounts, but one winery''s staffing schedule studied alone remains a firm-level plan. Appearance in macro data elsewhere does not turn that single schedule into macroeconomics. Scope stays micro.

The statement is false.'] WHERE case_id = 'CASE 2.3.50' AND tier = 'full';
