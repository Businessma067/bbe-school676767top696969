-- Update expanded explanations for 2.3-part1 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['A price change becomes micro or macro only through the unit of analysis. One shop''s sticker price, studied on its own, is a micro pricing decision. Macroeconomics looks at general price levels and economy-wide inflation, not every local price move. The absolute claim that any price change is automatically macro fails for that reason.

The statement is false.', 'Fatima is still one household weighing two cars under a limited budget. A national bonus may change her net price, but the object of study remains her individual purchase. Policy origin does not flip the scope; an individual choice stays micro unless the analysis shifts to nationwide aggregates.

The statement is false.', 'One café resetting cake prices is a single-firm price decision in one product market. That is classic micro territory. Calling it macroeconomic simply because a price moved confuses topic wording with the level of aggregation.

The statement is false.', 'Total car sales for the whole country after the bonus summarise an economy-wide outcome. Aggregated national sales and related growth effects belong to macroeconomic analysis.

The statement is true.', 'Both branches ask about scarce resources and choices, but they do not ask the same questions at the same scale. Micro zooms in on households, firms, and individual markets; macro zooms out to the whole economy. Treating the scopes as identical erases that distinction.

The statement is false.'] WHERE case_id = 'CASE 2.3.01' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['National GDP and economy-wide job losses are aggregates that describe the whole economy. When those totals fall together across quarters, the phenomena sit squarely in macroeconomics.

The statement is true.', 'Two staff leaving one closed shop, studied as that shop''s decision, is a micro labour adjustment. Sharing a headline with national job losses does not turn two layoffs into an economy-wide aggregate. Scope of analysis still decides the branch.

The statement is false.', 'Recessions and recoveries are whole-economy patterns. Building theories that explain why output and employment swing, and that predict how they may turn, is a central macroeconomic task.

The statement is true.', 'Economics is the study of decisions under limited resources. Micro and macro share that foundation; they simply apply it at different scales, from individual units up to the entire economy.

The statement is true.', 'Unemployment appears in national statistics, but firms still hire and fire, and households still weigh job risk. Microeconomics can study those unit-level labour decisions. The claim that unemployment exists only as a macro topic is too absolute.

The statement is false.'] WHERE case_id = 'CASE 2.3.02' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['The Freonia report tracks national growth, unemployment, and policy rates for the country as a whole. That is analysis of economy-wide indicators, not one household''s or firm''s private decision, so it is macroeconomic.

The statement is true.', 'Growth, unemployment, and interest rates sit with inflation and general price levels among the standard whole-economy variables. The report is listing classic macroeconomic topics.

The statement is true.', 'A bakery that looks only at its own sales and staffing is studying one firm. That unit-level operational analysis is microeconomics.

The statement is true.', 'Economics builds theories so that observed behaviour can be explained and future effects predicted. Nationwide growth and unemployment are exactly the sort of aggregate outcomes that scientific economic theory targets.

The statement is true.', 'Micro and macro are branches of one discipline. Both rest on the idea that limited resources force choices, whether the chooser is a single unit or the economy taken as a whole.

The statement is true.'] WHERE case_id = 'CASE 2.3.03' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Macroeconomics exists precisely to explain economy-wide downturns, output gaps, and related aggregates. Individual markets do not exhaust the subject; recession theory is a macro task. The claim that macro cannot explain recessions is wrong.

The statement is false.', 'Energy can be studied as one family''s heating contract or as national consumption and inflation. Topic labels alone do not decide the branch; the level of analysis does. Calling every energy question macro overreaches.

The statement is false.', 'Once the object of study is total household energy use and its effect on national inflation, the analysis has moved to economy-wide aggregates. That is macroeconomic scope.

The statement is true.', 'The Weiss family is choosing under a limited monthly budget between competing heating options. Household trade-offs of that kind are core economic subject matter, especially at the micro level.

The statement is true.', 'Studying one family''s contract is not the same question as studying the whole economy. Micro and macro share a scarcity foundation, but their scopes differ, so the Weiss family analysis does not equal a national analysis.

The statement is false.'] WHERE case_id = 'CASE 2.3.04' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Country-wide export and import totals summarise trade for the economy as a whole. Those aggregates are macroeconomic statistics.

The statement is true.', 'One winery''s shipment schedule, examined on its own, is a firm-level logistics and pricing decision. Crossing a border does not automatically make the analysis macro; the unit studied is still a single business.

The statement is false.', 'Macroeconomics covers growth, unemployment, inflation, and interest rates, and it also works with other aggregates such as national trade totals. The list of topics fits that branch.

The statement is true.', 'Explaining why a country''s export performance rises or falls over time is an aggregate question. Economics builds theories for exactly that kind of nationwide pattern.

The statement is true.', 'When the unit of analysis is one firm choosing whether and how to export, the study is microeconomic. Firm-level export decisions belong in micro whenever that is the scope.

The statement is true.'] WHERE case_id = 'CASE 2.3.05' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['The meaningful difference is scope. Micro asks about individual households, firms, and markets; macro asks about economy-wide aggregates. Saying the questions are identical erases that split.

The statement is false.', 'Wages can be a firm''s pay scale or a national average. Labour markets have national dimensions, but that does not force every wage discussion into macro. Classification follows the unit analysed, not the word "wages" alone.

The statement is false.', 'An economy-wide average wage growth figure from a statistics office is an aggregate for the whole labour market. That is macroeconomic.

The statement is true.', 'Choosing between two job offers allocates scarce time and effort for one household. That comparison of alternatives is micro-level labour allocation.

The statement is true.', 'Economics explains and predicts both individual choices and nationwide aggregates. Limiting the subject to aggregates only would discard microeconomics entirely.

The statement is false.'] WHERE case_id = 'CASE 2.3.06' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['The usual textbook split is exactly this: micro looks at individual households, businesses, or markets, while macro looks at the economy as a whole. That is the core scope distinction.

The statement is true.', 'One consumer picking organic milk is a single household''s product choice. That is microeconomics.

The statement is true.', 'The national unemployment rate summarises joblessness across the entire economy. That indicator is macroeconomic.

The statement is true.', 'Both branches use theories about limited resources to explain what happened and to predict what may happen next. Explanation and prediction are not reserved for one scope only.

The statement is true.', 'Government can appear in a local permit for one project or in a nationwide policy that moves aggregates. Mentioning government does not force a macro label; the analysed scope still decides.

The statement is false.'] WHERE case_id = 'CASE 2.3.07' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['National unemployment figures are aggregates for the whole labour market. The fact that each worker is a person does not pull those totals into microeconomics; the published rate is a macro indicator.

The statement is false.', 'Inês changing BrewPeak''s espresso price for her Porto shop is one firm''s pricing response. Macroeconomics studies general price levels and inflation, not every individual café menu change. Equating macro with any price move is wrong.

The statement is false.', 'Microeconomics routinely studies how firms interact in a product market, including rivalry, pricing responses, and market structure. The claim that micro never studies two-firm interaction is false.

The statement is false.', 'Inflation is a central macroeconomic topic: the general price level across the economy. Even if price rises begin in individual shops, macro still analyses the aggregate movement. It does not refuse the subject.

The statement is false.', 'Economics remains a science because it builds theories that explain and predict behaviour, even though foresight is imperfect. That scientific aim holds for Inês''s pricing choice and for larger aggregates alike.

The statement is true.'] WHERE case_id = 'CASE 2.3.08' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['One farmer allocating limited irrigation water between crops is a single producer''s resource choice. That unit-level allocation is microeconomics.

The statement is true.', 'One bakery resetting its loaf price after flour costs rise is a firm-level pricing decision studied alone. That is microeconomic analysis.

The statement is true.', 'When only the bus company''s own route fare is analysed, the scope stays with one firm. Single-firm fare setting under that lens is microeconomics.

The statement is true.', 'Published national GDP growth summarises output for the entire economy. That whole-economy indicator is macroeconomic.

The statement is true.', 'Microeconomics builds theories precisely to explain and predict how individual markets, households, and firms behave. That is its scientific role at unit scope.

The statement is true.'] WHERE case_id = 'CASE 2.3.09' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['One platform''s surge pricing in one district is a single-market pricing episode. Studying that platform''s local fare response is microeconomics.

The statement is true.', 'Many riders can be affected without turning the analysis into macro. Macro requires economy-wide aggregates, not merely a crowded local market. Participant count alone does not reclassify the scope.

The statement is false.', 'A city''s overall consumer price index is a general price-level measure. If analysts ask whether local fare spikes moved that index, they have shifted to aggregate price measurement, which is macroeconomic.

The statement is true.', 'Economics builds theories of how buyers and sellers respond to prices. Predicting rider and driver reactions to a local spike applies that microeconomic toolkit.

The statement is true.', 'Firms set market prices all the time; that is central microeconomic subject matter. The claim that only governments set prices, and that market pricing falls outside economics, is false.

The statement is false.'] WHERE case_id = 'CASE 2.3.10' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['A probe of pricing across the entire national mobile market looks at market-wide structure and outcomes, not one subscriber''s bill. That market-wide lens can involve macro-style analysis of the whole market.

The statement is true.', 'A single subscriber picking a cheaper text plan is ordinarily a household decision. In this case, though, the investigation concerns national carrier pricing across the mobile market, and the claim treats the subscriber side-choice as if it settles that market-wide classification. Keeping the regulator probe separate from one phone plan means the sentence does not hold as framed here.

The statement is false.', 'Economics builds theories to explain how firms behave and how markets turn out, including competition and collusion questions. Those explanatory targets sit inside the subject.

The statement is true.', 'When only one carrier''s pricing strategy is analysed, the unit is a single firm. That firm-level pricing study is microeconomics.

The statement is true.', 'Market competition is core microeconomic and industrial-organisation subject matter. Economics does not exclude it in favour of government budgets alone.

The statement is false.'] WHERE case_id = 'CASE 2.3.11' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Tracking one branch''s weekly revenue after its own price cut keeps the analysis on a single business unit. That revenue response is microeconomic.

The statement is true.', 'Inflation targeting for an entire currency area is a whole-economy price-stability policy. That policy scope is macroeconomic.

The statement is true.', 'Economy-wide consumer price inflation reported by the national statistics office is a general price-level aggregate. Reporting that figure is macroeconomic.

The statement is true.', 'Microeconomics focuses on individual households, businesses, and markets rather than on the economy taken as a whole. That is the standard scope split.

The statement is true.', 'Economics aims to explain and predict outcomes such as how one branch''s sales respond to a price cut. Branch-level response prediction is exactly that scientific aim at micro scope.

The statement is true.'] WHERE case_id = 'CASE 2.3.12' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['GDP growth is an economy-wide aggregate; a grocery list is one household''s allocation problem. They are not analysed with the same scope, even if both involve scarce resources.

The statement is false.', 'A nationwide policy rate is a macro instrument aimed at inflation for the whole economy. The fact that each mortgage is signed by one borrower does not pull national interest-rate policy into microeconomics.

The statement is false.', 'Both branches use theories, data, and models; neither is limited to diagrams or newspaper opinion. Reducing micro to pictures and macro to commentary misstates what economics does.

The statement is false.', 'Specific families may refinance after the rate rise, but those individual effects do not reclassify a whole-economy central-bank move as microeconomics. The policy still targets nationwide inflation.

The statement is false.', 'Economics builds theories that explain why central banks raise rates and that predict how inflation and spending may respond. That explanatory and predictive aim is part of economics as a science.

The statement is true.'] WHERE case_id = 'CASE 2.3.13' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['An average household savings rate for the entire country is an economy-wide statistic. That aggregate belongs in macroeconomics.

The statement is true.', 'One family raising monthly saving by fifty euros, studied on its own, is a household budget choice. Calling it macro merely because saving also appears in national policy debates confuses topic with scope.

The statement is false.', 'Macroeconomics covers growth, unemployment, inflation, and interest rates, and it also works with economy-wide averages such as the national savings rate. Those sit together as macro variables.

The statement is true.', 'How aggregate saving responds when interest rates change is a whole-economy question. Economics builds theories to explain and predict that aggregate link.

The statement is true.', 'When the unit analysed is one family alone, its saving choice is microeconomics. Single-household portfolio and budget decisions stay at that scope.

The statement is true.'] WHERE case_id = 'CASE 2.3.14' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Choosing a smartphone brand is a household product choice. Crossing a €500 price tag does not turn that individual purchase into macroeconomics; price size does not rewrite scope.

The statement is false.', 'Venture capital may be discussed nationally, but studying one robotics firm''s hiring plan keeps the unit at a single business. A national funding backdrop does not reclassify that firm-level study as macro.

The statement is false.', 'Summing all startup investment in the country to assess growth moves from one firm to an economy-wide total. That aggregated investment analysis is macroeconomic.

The statement is true.', 'Microeconomics explains and predicts how individual businesses and markets behave. One firm''s hiring plan is exactly that kind of unit-level target.

The statement is true.', 'Startups and small entrepreneurial firms are standard microeconomic units. Economics does not exclude them for being small; scarcity and choice still apply.

The statement is false.'] WHERE case_id = 'CASE 2.3.15' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Fare and booking analysis for one airline on one holiday route is a single-firm, single-market demand study. That is microeconomics.

The statement is true.', 'Airlines may fly internationally, but that does not make every route fare decision macro. Scope follows the unit analysed, not the mere fact of cross-border operations.

The statement is false.', 'Economics predicts how passengers on that route respond to a fare cut when their holiday budgets are limited. That behavioural response is microeconomic analysis.

The statement is true.', 'National transport inflation reported by the statistics office is a general price-level aggregate for the sector. That index move is macroeconomic.

The statement is true.', 'One household booking a holiday under a fare sale is allocating a limited travel budget. That consumption choice is microeconomics.

The statement is true.'] WHERE case_id = 'CASE 2.3.16' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Micro and macro are branches of one discipline that share the limited-resources foundation. They are not unrelated subjects; they simply work at different scopes.

The statement is false.', 'Households deciding how to use scarce time and income are squarely inside economics. Being a student rather than a company does not place Elif outside the subject.

The statement is false.', 'Economics studies individual markets and also economy-wide aggregates. Recessions are a core macroeconomic topic; the claim that economics only ever looks at one market at a time is false.

The statement is false.', 'Elif is allocating limited hours and earnings among tuition, rent, and study. Economics studies exactly such household choices under scarce time and income.

The statement is true.', 'Ordinary household labour and budget choices can be analysed with economic theory without any special government bonus. A programme is not a prerequisite for the analysis.

The statement is false.'] WHERE case_id = 'CASE 2.3.17' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Analysts who study only this family''s payback calculation are working at household investment appraisal. That unit-level study is microeconomics.

The statement is true.', 'A national subsidy may change the net price, but it does not rewrite the scope when the object of study remains one family''s purchase. Policy backdrop alone does not block a micro classification.

The statement is false.', 'Measuring how the subsidy shifted total national renewable investment looks at an economy-wide aggregate. That investment shift is macroeconomic analysis.

The statement is true.', 'Household investment under a limited budget and expected energy savings is standard economic subject matter. The family''s panels decision fits that micro focus.

The statement is true.', 'Subsidies change incentives; they do not erase the need to study individual buyers. Microeconomic analysis of one household''s choice remains useful even when a policy programme exists.

The statement is false.'] WHERE case_id = 'CASE 2.3.18' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Economy-wide employment totals and unemployment rates summarise the labour market for the whole country. Those figures are macroeconomic indicators.

The statement is true.', 'Growth, unemployment, inflation, and interest rates are the usual list of whole-economy variables. They are typical macroeconomic topics.

The statement is true.', 'One restaurant deciding whether to extend opening hours, studied as that firm alone, is a single-business staffing and revenue choice. That is microeconomics.

The statement is true.', 'Macro theory links downturns to rising unemployment across the economy. Explaining why joblessness climbs in a recession is a macroeconomic application.

The statement is true.', 'Even at the macro level, economics concerns outcomes under limited economy-wide resources. Aggregate constraints and results stay inside the same scarcity framework.

The statement is true.'] WHERE case_id = 'CASE 2.3.19' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Mentioning the word "price" does not decide the branch. Whose price is studied, and at what aggregation, still matters. One shop''s price can be micro while a general price index is macro.

The statement is false.', 'One grocery item in one shop is a single-product price observation. Macro inflation uses general price levels across many goods, so labelling that lone item''s rise as macro just because the word inflation appears is wrong.

The statement is false.', 'A household switching bread brands after a price rise is reallocating a limited food budget. That unit-level response is microeconomics.

The statement is true.', 'Macroeconomics aims to explain and predict economy-wide price-level changes and the policy responses that follow. Euro-area inflation and tighter policy sit in that agenda.

The statement is true.', 'Economics studies both aggregates and individual household adjustments. Ignoring brand switches and budget responses would discard microeconomics; the subject is not macro-only.

The statement is false.'] WHERE case_id = 'CASE 2.3.20' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Building theories that explain observed economic behaviour and outcomes is central to economics as a science. Explanation is not optional decoration; it is the aim.

The statement is true.', 'The same theories are used to predict likely effects of choices and policies. Prediction sits beside explanation in the scientific method of economics.

The statement is true.', 'Total national car sales after a subsidy summarise a whole-economy outcome. Reporting that aggregate is macroeconomic analysis.

The statement is true.', 'Micro and macro each develop theories that explain and predict at their own scale. Both branches contribute that scientific work rather than only one of them.

The statement is true.', 'Limited resources that force choices are the shared foundation. Micro and macro differ in scope, not in whether scarcity and decision-making matter.

The statement is true.'] WHERE case_id = 'CASE 2.3.21' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Economics builds theories precisely because behaviour is not pure randomness forever. Patterns in choices and aggregates can be explained and predicted, even if imperfectly.

The statement is false.', 'One apartment block''s permit can affect local construction without becoming a macro study. GDP linkage does not automatically reclassify every local building decision as macroeconomics.

The statement is false.', 'Total national housing starts used to assess growth are economy-wide construction aggregates. That measurement is macroeconomic.

The statement is true.', 'A municipality allocating scarce land and budget capacity when it approves one permit is making an economic decision. Limited local resources shape that choice, and economics can study it.

The statement is true.', 'Households searching for flats under limited budgets and competing options are classic micro housing and consumption choices. Housing is not reserved for macro alone.

The statement is false.'] WHERE case_id = 'CASE 2.3.22' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Economy-wide inflation expectations and guidance on the future rate path for the currency area are whole-economy policy communication. That is macroeconomic.

The statement is true.', 'One shopkeeper raising coffee by ten cents, studied alone, is a single-firm price change. National importance of coffee as a product does not turn that shop''s move into macroeconomics.

The statement is false.', 'How aggregate demand and inflation interact is a core macroeconomic question. Explaining and predicting that link is part of macro theory.

The statement is true.', 'Monetary policy manages economy-wide liquidity and price stability under scarce real resources. Money''s special role does not eject monetary policy from economics.

The statement is false.', 'Deciding whether to fix a mortgage rate after the announcement is one household''s financial choice under uncertainty. That unit-level decision is microeconomics.

The statement is true.'] WHERE case_id = 'CASE 2.3.23' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Microeconomics focuses on individual households, firms, and markets. That unit-level focus is the standard definition of the branch.

The statement is true.', 'Macroeconomics focuses on the whole economy, including growth, unemployment, inflation, and interest rates. Those aggregates define its usual scope.

The statement is true.', 'Both branches study decisions under limited resources and aim to explain and predict outcomes. They share that foundation and scientific aim while differing in scale.

The statement is true.', 'Micro and macro are not identical branches that differ only in name. Scope of analysis is the meaningful distinction between them.

The statement is false.', 'Classification turns on whether the analysis looks at a single unit or at the whole economy. That unit-versus-aggregate rule is how examples get sorted.

The statement is true.'] WHERE case_id = 'CASE 2.3.24' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Economics studies human behaviour with theories that explain and predict, even when foresight is imperfect. Declaring that behaviour can never be studied theoretically rejects the subject''s scientific method without basis.

The statement is false.', 'One shop hiring two extra cashiers is a single firm''s staffing decision. Involving the word employment does not make that hire macroeconomic; economy-wide employment totals would.

The statement is false.', 'Household budgets are central to microeconomics. Limiting economics to listed corporations alone would erase households, which routinely face scarce income and competing uses.

The statement is false.', 'Macroeconomics aims to explain and predict aggregate outcomes such as growth and price levels. That scientific role at whole-economy scope is exactly the claim.

The statement is true.', 'Micro and macro are branches of one discipline that both study decisions under limited resources. Microeconomics is not an unrelated subject cut off from scarcity.

The statement is false.'] WHERE case_id = 'CASE 2.3.25' AND tier = 'full';
