-- Update expanded explanations for 5.5-part3 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Customer analysis asks who buys (and who influences), what buyers do with the product, where and when they buy, and why they prefer one offer — guiding distribution, seasonality, development, and share strategy.

Non-buyers keep market potential above volume.

Under that definition the assertion is the right description of the situation.

The statement is true.
', 'TRUE — Absolute market share equals one business''s (or brand''s) sales divided by total market volume. It informs the firm and investors but says little alone about rivals'' relative strength.

Absolute share is a percentage of total market sales.

The sentence therefore reports the concept accurately for this case.

The statement is true.
', 'FALSE — Market size/volume is total sales of all firms (value or quantity). Market potential adds still-unserved buyers; a firm''s sales potential exceeds its current sales volume when further gains are possible.

Market-potential growth share belongs to sales potential.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'TRUE — Relative market share equals the firm''s market share divided by the largest competitor''s market share, putting own performance in competitive context.

Relative share is a ratio against the leader, not a market percentage.

The sentence therefore reports the concept accurately for this case.

The statement is true.
', 'TRUE — Primary market research collects new data for the firm''s own questions — questionnaires, interviews, online surveys, or studies run by a research institute — tailored but often costly.

Institute-administered questionnaires are primary collection.

Under that definition the assertion is the right description of the situation.

The statement is true.
'] WHERE case_id = 'CASE 5.5.51' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Secondary information reuses research already produced by others (government, associations, published reports). It is often cheaper or free, but usually more general and less tailored.

Secondary size overviews precede firm share calculation.

The sentence therefore reports the concept accurately for this case.

The statement is true.
', 'FALSE — Absolute market share equals one business''s (or brand''s) sales divided by total market volume. It informs the firm and investors but says little alone about rivals'' relative strength.

On this stem (market share): absolute share is relevant to investors per the chapter.

The absolute wording is what breaks the claim once the correct test is applied.

The statement is false.
', 'FALSE — Relative market share equals the firm''s market share divided by the largest competitor''s market share, putting own performance in competitive context.

Relative share uses the largest competitor''s share.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'TRUE — Customer analysis asks who buys (and who influences), what buyers do with the product, where and when they buy, and why they prefer one offer — guiding distribution, seasonality, development, and share strategy.

Influencer example appears in who-customer discussion.

The sentence therefore reports the concept accurately for this case.

The statement is true.
', 'TRUE — Customer analysis asks who buys (and who influences), what buyers do with the product, where and when they buy, and why they prefer one offer — guiding distribution, seasonality, development, and share strategy.

User and buyer can differ in b2b settings.

The sentence therefore reports the concept accurately for this case.

The statement is true.
'] WHERE case_id = 'CASE 5.5.52' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Primary market research collects new data for the firm''s own questions — questionnaires, interviews, online surveys, or studies run by a research institute — tailored but often costly.

Both are primary when newly collected for the study.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Primary market research collects new data for the firm''s own questions — questionnaires, interviews, online surveys, or studies run by a research institute — tailored but often costly.

Competitor publications used without new collection are secondary.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'TRUE — Market research supplies evidence on customers, competitors, and the industry so the firm can judge position and prospects.

Feature alignment follows preferred-use insight.

Under that definition the assertion is the right description of the situation.

The statement is true.
', 'FALSE — Market research supplies evidence on customers, competitors, and the industry so the firm can judge position and prospects.

Competition is explicitly within market research scope.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Market research supplies evidence on customers, competitors, and the industry so the firm can judge position and prospects.

Children may influence without being the buyer.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
'] WHERE case_id = 'CASE 5.5.53' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Customer analysis asks who buys (and who influences), what buyers do with the product, where and when they buy, and why they prefer one offer — guiding distribution, seasonality, development, and share strategy.

Channel weakness responses follow where analysis.

Under that definition the assertion is the right description of the situation.

The statement is true.
', 'TRUE — Customer analysis asks who buys (and who influences), what buyers do with the product, where and when they buy, and why they prefer one offer — guiding distribution, seasonality, development, and share strategy.

Inventory builds follow seasonal timing insight.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
', 'TRUE — Customer analysis asks who buys (and who influences), what buyers do with the product, where and when they buy, and why they prefer one offer — guiding distribution, seasonality, development, and share strategy.

Regional messaging can reflect why-customer motives.

Under that definition the assertion is the right description of the situation.

The statement is true.
', 'TRUE — Market research supplies evidence on customers, competitors, and the industry so the firm can judge position and prospects.

On this stem (positioning / product line): tailored primary research such as commissioning a tailored questionnaire supports informed decisions in the printed circuit boards market.

Under that definition the assertion is the right description of the situation.

The statement is true.
', 'TRUE — Secondary information reuses research already produced by others (government, associations, published reports). It is often cheaper or free, but usually more general and less tailored.

On this stem (secondary information): trade statistics reused for the printed circuit boards segment are secondary market information.

Under that definition the assertion is the right description of the situation.

The statement is true.
'] WHERE case_id = 'CASE 5.5.54' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Market research supplies evidence on customers, competitors, and the industry so the firm can judge position and prospects.

User and buyer may differ even in b2b settings.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Customer analysis asks who buys (and who influences), what buyers do with the product, where and when they buy, and why they prefer one offer — guiding distribution, seasonality, development, and share strategy.

Where analysis is designed to identify purchase channels.

Those restricting words stretch a limited idea past what marketing allows.

The statement is false.
', 'TRUE — Customer analysis asks who buys (and who influences), what buyers do with the product, where and when they buy, and why they prefer one offer — guiding distribution, seasonality, development, and share strategy.

Where, when, and why dimensions apply alongside other customer analysis in printed circuit boards.

Under that definition the assertion is the right description of the situation.

The statement is true.
', 'TRUE — Absolute market share is the firm''s sales divided by total market volume (all businesses'' sales of the product), usually shown as a percentage.

Take firm sales 40 over market volume 200:

$$
\frac{40}{200} = 0.2
$$

Convert to a percentage:

$$
0.2 \times 100 = 20\%
$$

That is the absolute share the statement reports (20%).

The statement is true.
', 'FALSE — Customer analysis asks who buys (and who influences), what buyers do with the product, where and when they buy, and why they prefer one offer — guiding distribution, seasonality, development, and share strategy.

Timing analysis can support seasonal price differentiation.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'] WHERE case_id = 'CASE 5.5.55' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Relative market share equals the firm''s absolute share divided by the largest competitor''s absolute share — a pure ratio, not a percentage of the whole market.

With own share 20% and leader share 40%:

$$
\frac{20}{40} = 0.5
$$

A relative share of 0.5 means the firm holds half the leader''s percentage of the market — not a 50% absolute share, and not half of a geographic area.

That matches the stated relative share of 0.5.

The statement is true.
', 'TRUE — Customer analysis asks who buys (and who influences), what buyers do with the product, where and when they buy, and why they prefer one offer — guiding distribution, seasonality, development, and share strategy.

Unconverted buyers keep market potential above volume in printed circuit boards.

Under that definition the assertion is the right description of the situation.

The statement is true.
', 'TRUE — Market size/volume is total sales of all firms (value or quantity). Market potential adds still-unserved buyers; a firm''s sales potential exceeds its current sales volume when further gains are possible.

On this stem (growth): sales potential includes room beyond current volume for a printed circuit boards supplier.

Under that definition the assertion is the right description of the situation.

The statement is true.
', 'FALSE — Market size/volume is total sales of all firms (value or quantity). Market potential adds still-unserved buyers; a firm''s sales potential exceeds its current sales volume when further gains are possible.

That confuses market measures with a single firm''s sales volume.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'TRUE — Market research supplies evidence on customers, competitors, and the industry so the firm can judge position and prospects.

On this stem (positioning / product line): tailored primary research such as running telephone interviews with buyers supports informed decisions in the industrial adhesives market.

The sentence therefore reports the concept accurately for this case.

The statement is true.
'] WHERE case_id = 'CASE 5.5.56' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Secondary information reuses research already produced by others (government, associations, published reports). It is often cheaper or free, but usually more general and less tailored.

On this stem (secondary information): trade statistics reused for the industrial adhesives segment are secondary market information.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
', 'TRUE — Customer analysis asks who buys (and who influences), what buyers do with the product, where and when they buy, and why they prefer one offer — guiding distribution, seasonality, development, and share strategy.

Where, when, and why dimensions apply alongside other customer analysis in industrial adhesives.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
', 'TRUE — Absolute market share is the firm''s sales divided by total market volume (all businesses'' sales of the product), usually shown as a percentage.

Take firm sales 57 over market volume 342:

$$
\frac{57}{342} = 0.166667
$$

Convert to a percentage:

$$
0.166667 \times 100 = 16.67\%
$$

That is the absolute share the statement reports (16.67%).

The statement is true.
', 'TRUE — Relative market share equals the firm''s absolute share divided by the largest competitor''s absolute share — a pure ratio, not a percentage of the whole market.

With own share 16.7% and leader share 41.75%:

$$
\frac{16.7}{41.75} = 0.4
$$

The calculated relative share is 0.4, matching the claim.

The statement is true.
', 'TRUE — Customer analysis asks who buys (and who influences), what buyers do with the product, where and when they buy, and why they prefer one offer — guiding distribution, seasonality, development, and share strategy.

Unconverted buyers keep market potential above volume in industrial adhesives.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
'] WHERE case_id = 'CASE 5.5.57' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Market size/volume is total sales of all firms (value or quantity). Market potential adds still-unserved buyers; a firm''s sales potential exceeds its current sales volume when further gains are possible.

Sales potential can exceed current sales volume in growing markets.

Those restricting words stretch a limited idea past what marketing allows.

The statement is false.
', 'TRUE — Market size/volume is total sales of all firms (value or quantity). Market potential adds still-unserved buyers; a firm''s sales potential exceeds its current sales volume when further gains are possible.

On this stem (growth): sales potential includes room beyond current volume for a industrial adhesives supplier.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
', 'TRUE — Market research supplies evidence on customers, competitors, and the industry so the firm can judge position and prospects.

On this stem (positioning / product line): tailored primary research such as analysing responses from an online survey supports informed decisions in the commercial laundry equipment market.

Under that definition the assertion is the right description of the situation.

The statement is true.
', 'TRUE — Secondary information reuses research already produced by others (government, associations, published reports). It is often cheaper or free, but usually more general and less tailored.

On this stem (secondary information): trade statistics reused for the commercial laundry equipment segment are secondary market information.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
', 'TRUE — Customer analysis asks who buys (and who influences), what buyers do with the product, where and when they buy, and why they prefer one offer — guiding distribution, seasonality, development, and share strategy.

Where, when, and why dimensions apply alongside other customer analysis in commercial laundry equipment.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
'] WHERE case_id = 'CASE 5.5.58' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Absolute market share equals one business''s (or brand''s) sales divided by total market volume. It informs the firm and investors but says little alone about rivals'' relative strength.

The market is about 6.67 times larger (100/15), not fifteen times.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'TRUE — Absolute market share is the firm''s sales divided by total market volume (all businesses'' sales of the product), usually shown as a percentage.

Take firm sales 74 over market volume 518:

$$
\frac{74}{518} = 0.142857
$$

Convert to a percentage:

$$
0.142857 \times 100 = 14.29\%
$$

That is the absolute share the statement reports (14.29%).

The statement is true.
', 'FALSE — Relative market share equals the firm''s market share divided by the largest competitor''s market share, putting own performance in competitive context.

Relative share of 1.0 means equal percentage with the leader, not 1% market share.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Primary market research collects new data for the firm''s own questions — questionnaires, interviews, online surveys, or studies run by a research institute — tailored but often costly.

On this stem (Primary research): research for another purpose read later is secondary.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Primary market research collects new data for the firm''s own questions — questionnaires, interviews, online surveys, or studies run by a research institute — tailored but often costly.

On this stem (Secondary research): paying for access does not convert existing research into primary collection.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
'] WHERE case_id = 'CASE 5.5.59' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Customer analysis asks who buys (and who influences), what buyers do with the product, where and when they buy, and why they prefer one offer — guiding distribution, seasonality, development, and share strategy.

Who, what, where, when, and why are all included.

The absolute wording is what breaks the claim once the correct test is applied.

The statement is false.
', 'FALSE — Market size/volume is total sales of all firms (value or quantity). Market potential adds still-unserved buyers; a firm''s sales potential exceeds its current sales volume when further gains are possible.

Both are expressions of market size or volume.

The absolute wording is what breaks the claim once the correct test is applied.

The statement is false.
', 'TRUE — Relative market share equals the firm''s absolute share divided by the largest competitor''s absolute share — a pure ratio, not a percentage of the whole market.

With own share 14.3% and leader share 42.9%:

$$
\frac{14.3}{42.9} = 0.3333
$$

That matches the stated relative share of about 0.33.

The statement is true.
', 'TRUE — Customer analysis asks who buys (and who influences), what buyers do with the product, where and when they buy, and why they prefer one offer — guiding distribution, seasonality, development, and share strategy.

Unconverted buyers keep market potential above volume in commercial laundry equipment.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
', 'TRUE — Market size/volume is total sales of all firms (value or quantity). Market potential adds still-unserved buyers; a firm''s sales potential exceeds its current sales volume when further gains are possible.

On this stem (growth): sales potential includes room beyond current volume for a commercial laundry equipment supplier.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
'] WHERE case_id = 'CASE 5.5.60' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Market research supplies evidence on customers, competitors, and the industry so the firm can judge position and prospects.

On this stem (software / positioning): tailored primary research such as hiring an institute to conduct field interviews supports informed decisions in the enterprise accounting software market.

Under that definition the assertion is the right description of the situation.

The statement is true.
', 'FALSE — Relative market share equals the firm''s market share divided by the largest competitor''s market share, putting own performance in competitive context.

On this stem (market share): they measure different relationships and need not match numerically.

The absolute wording is what breaks the claim once the correct test is applied.

The statement is false.
', 'TRUE — Secondary information reuses research already produced by others (government, associations, published reports). It is often cheaper or free, but usually more general and less tailored.

On this stem (software / secondary information): trade statistics reused for the enterprise accounting software segment are secondary market information.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
', 'FALSE — Secondary information reuses research already produced by others (government, associations, published reports). It is often cheaper or free, but usually more general and less tailored.

Institute collection for a bespoke study is primary.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'TRUE — Customer analysis asks who buys (and who influences), what buyers do with the product, where and when they buy, and why they prefer one offer — guiding distribution, seasonality, development, and share strategy.

Where, when, and why dimensions apply alongside other customer analysis in enterprise accounting software.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
'] WHERE case_id = 'CASE 5.5.61' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Primary market research collects new data for the firm''s own questions — questionnaires, interviews, online surveys, or studies run by a research institute — tailored but often costly.

On this stem (primary research / secondary sources): primary is costly; small firms often cannot afford it.

Those restricting words stretch a limited idea past what marketing allows.

The statement is false.
', 'TRUE — Absolute market share is the firm''s sales divided by total market volume (all businesses'' sales of the product), usually shown as a percentage.

Take firm sales 91 over market volume 728:

$$
\frac{91}{728} = 0.125
$$

Convert to a percentage:

$$
0.125 \times 100 = 12.5\%
$$

That is the absolute share the statement reports (12.5%).

The statement is true.
', 'TRUE — Relative market share equals the firm''s absolute share divided by the largest competitor''s absolute share — a pure ratio, not a percentage of the whole market.

With own share 12.5% and leader share 25%:

$$
\frac{12.5}{25} = 0.5
$$

A relative share of 0.5 means the firm holds half the leader''s percentage of the market — not a 50% absolute share, and not half of a geographic area.

That matches the stated relative share of 0.5.

The statement is true.
', 'TRUE — Customer analysis asks who buys (and who influences), what buyers do with the product, where and when they buy, and why they prefer one offer — guiding distribution, seasonality, development, and share strategy.

Unconverted buyers keep market potential above volume in enterprise accounting software.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
', 'FALSE — Customer analysis asks who buys (and who influences), what buyers do with the product, where and when they buy, and why they prefer one offer — guiding distribution, seasonality, development, and share strategy.

Why analysis informs development before collapse.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
'] WHERE case_id = 'CASE 5.5.62' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Customer analysis asks who buys (and who influences), what buyers do with the product, where and when they buy, and why they prefer one offer — guiding distribution, seasonality, development, and share strategy.

Where-customers concerns purchase location.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'TRUE — Market size/volume is total sales of all firms (value or quantity). Market potential adds still-unserved buyers; a firm''s sales potential exceeds its current sales volume when further gains are possible.

On this stem (software / growth): sales potential includes room beyond current volume for a enterprise accounting software supplier.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
', 'TRUE — Primary market research collects new data for the firm''s own questions — questionnaires, interviews, online surveys, or studies run by a research institute — tailored but often costly.

On this stem (positioning / product line): tailored primary research such as designing a primary study around channel preferences supports informed decisions in the organic breakfast cereals market.

Under that definition the assertion is the right description of the situation.

The statement is true.
', 'TRUE — Secondary information reuses research already produced by others (government, associations, published reports). It is often cheaper or free, but usually more general and less tailored.

On this stem (secondary information): trade statistics reused for the organic breakfast cereals segment are secondary market information.

Under that definition the assertion is the right description of the situation.

The statement is true.
', 'TRUE — Customer analysis asks who buys (and who influences), what buyers do with the product, where and when they buy, and why they prefer one offer — guiding distribution, seasonality, development, and share strategy.

Where, when, and why dimensions apply alongside other customer analysis in organic breakfast cereals.

Under that definition the assertion is the right description of the situation.

The statement is true.
'] WHERE case_id = 'CASE 5.5.63' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Customer analysis asks who buys (and who influences), what buyers do with the product, where and when they buy, and why they prefer one offer — guiding distribution, seasonality, development, and share strategy.

When-customers concerns purchase timing.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'TRUE — Absolute market share is the firm''s sales divided by total market volume (all businesses'' sales of the product), usually shown as a percentage.

Take firm sales 108 over market volume 540:

$$
\frac{108}{540} = 0.2
$$

Convert to a percentage:

$$
0.2 \times 100 = 20\%
$$

That is the absolute share the statement reports (20%).

The statement is true.
', 'TRUE — Relative market share equals the firm''s absolute share divided by the largest competitor''s absolute share — a pure ratio, not a percentage of the whole market.

With own share 20% and leader share 50%:

$$
\frac{20}{50} = 0.4
$$

The calculated relative share is 0.4, matching the claim.

The statement is true.
', 'TRUE — Customer analysis asks who buys (and who influences), what buyers do with the product, where and when they buy, and why they prefer one offer — guiding distribution, seasonality, development, and share strategy.

Unconverted buyers keep market potential above volume in organic breakfast cereals.

Under that definition the assertion is the right description of the situation.

The statement is true.
', 'TRUE — Market size/volume is total sales of all firms (value or quantity). Market potential adds still-unserved buyers; a firm''s sales potential exceeds its current sales volume when further gains are possible.

On this stem (growth): sales potential includes room beyond current volume for a organic breakfast cereals supplier.

Under that definition the assertion is the right description of the situation.

The statement is true.
'] WHERE case_id = 'CASE 5.5.64' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Market research supplies evidence on customers, competitors, and the industry so the firm can judge position and prospects.

On this stem (vehicle / positioning): tailored primary research such as commissioning a tailored questionnaire supports informed decisions in the electric vehicle chargers market.

The sentence therefore reports the concept accurately for this case.

The statement is true.
', 'TRUE — Secondary information reuses research already produced by others (government, associations, published reports). It is often cheaper or free, but usually more general and less tailored.

On this stem (vehicle / secondary information): trade statistics reused for the electric vehicle chargers segment are secondary market information.

The sentence therefore reports the concept accurately for this case.

The statement is true.
', 'TRUE — Customer analysis asks who buys (and who influences), what buyers do with the product, where and when they buy, and why they prefer one offer — guiding distribution, seasonality, development, and share strategy.

Where, when, and why dimensions apply alongside other customer analysis in electric vehicle chargers.

The sentence therefore reports the concept accurately for this case.

The statement is true.
', 'TRUE — Absolute market share is the firm''s sales divided by total market volume (all businesses'' sales of the product), usually shown as a percentage.

Take firm sales 125 over market volume 750:

$$
\frac{125}{750} = 0.166667
$$

Convert to a percentage:

$$
0.166667 \times 100 = 16.67\%
$$

That is the absolute share the statement reports (16.67%).

The statement is true.
', 'FALSE — Customer analysis asks who buys (and who influences), what buyers do with the product, where and when they buy, and why they prefer one offer — guiding distribution, seasonality, development, and share strategy.

On this stem (Market share): unchanged firm sales with smaller market raise share, but not automatically in every scenario described.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
'] WHERE case_id = 'CASE 5.5.65' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Customer analysis asks who buys (and who influences), what buyers do with the product, where and when they buy, and why they prefer one offer — guiding distribution, seasonality, development, and share strategy.

Rising market potential can contribute to higher sales potential.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Primary market research collects new data for the firm''s own questions — questionnaires, interviews, online surveys, or studies run by a research institute — tailored but often costly.

Primary studies can be tailored to the commissioning firm.

Those restricting words stretch a limited idea past what marketing allows.

The statement is false.
', 'FALSE — Primary market research collects new data for the firm''s own questions — questionnaires, interviews, online surveys, or studies run by a research institute — tailored but often costly.

On this stem (Secondary information / product line): secondary data are usually general, not more detailed.

Those restricting words stretch a limited idea past what marketing allows.

The statement is false.
', 'TRUE — Relative market share equals the firm''s absolute share divided by the largest competitor''s absolute share — a pure ratio, not a percentage of the whole market.

With own share 16.7% and leader share 50.1%:

$$
\frac{16.7}{50.1} = 0.3333
$$

That matches the stated relative share of about 0.33.

The statement is true.
', 'FALSE — Relative market share equals the firm''s market share divided by the largest competitor''s market share, putting own performance in competitive context.

On this stem (market share): 0.5 means half the leader''s percentage share, not fifty per cent of the market.

Those restricting words stretch a limited idea past what marketing allows.

The statement is false.
'] WHERE case_id = 'CASE 5.5.66' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Absolute market share equals one business''s (or brand''s) sales divided by total market volume. It informs the firm and investors but says little alone about rivals'' relative strength.

On this stem (market share): absolute percentage and relative ratio measure different comparisons.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'TRUE — Customer analysis asks who buys (and who influences), what buyers do with the product, where and when they buy, and why they prefer one offer — guiding distribution, seasonality, development, and share strategy.

Unconverted buyers keep market potential above volume in electric vehicle chargers.

The sentence therefore reports the concept accurately for this case.

The statement is true.
', 'TRUE — Market size/volume is total sales of all firms (value or quantity). Market potential adds still-unserved buyers; a firm''s sales potential exceeds its current sales volume when further gains are possible.

On this stem (vehicle / growth): sales potential includes room beyond current volume for a electric vehicle chargers supplier.

The sentence therefore reports the concept accurately for this case.

The statement is true.
', 'FALSE — Customer analysis asks who buys (and who influences), what buyers do with the product, where and when they buy, and why they prefer one offer — guiding distribution, seasonality, development, and share strategy.

Primary research can ask about similar rival products.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'TRUE — Market research supplies evidence on customers, competitors, and the industry so the firm can judge position and prospects.

On this stem (positioning / product line): tailored primary research such as running telephone interviews with buyers supports informed decisions in the medical diagnostic kits market.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
'] WHERE case_id = 'CASE 5.5.67' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Secondary information reuses research already produced by others (government, associations, published reports). It is often cheaper or free, but usually more general and less tailored.

On this stem (secondary information): trade statistics reused for the medical diagnostic kits segment are secondary market information.

Under that definition the assertion is the right description of the situation.

The statement is true.
', 'FALSE — Market size/volume is total sales of all firms (value or quantity). Market potential adds still-unserved buyers; a firm''s sales potential exceeds its current sales volume when further gains are possible.

Market volume is total current sales; it is not that sum.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'TRUE — Customer analysis asks who buys (and who influences), what buyers do with the product, where and when they buy, and why they prefer one offer — guiding distribution, seasonality, development, and share strategy.

Where, when, and why dimensions apply alongside other customer analysis in medical diagnostic kits.

Under that definition the assertion is the right description of the situation.

The statement is true.
', 'FALSE — Customer analysis asks who buys (and who influences), what buyers do with the product, where and when they buy, and why they prefer one offer — guiding distribution, seasonality, development, and share strategy.

Sales volume is one firm; market volume is all firms.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Customer analysis asks who buys (and who influences), what buyers do with the product, where and when they buy, and why they prefer one offer — guiding distribution, seasonality, development, and share strategy.

Business purchasers for work still indicate b2b.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
'] WHERE case_id = 'CASE 5.5.68' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Absolute market share is the firm''s sales divided by total market volume (all businesses'' sales of the product), usually shown as a percentage.

Take firm sales 142 over market volume 994:

$$
\frac{142}{994} = 0.142857
$$

Convert to a percentage:

$$
0.142857 \times 100 = 14.29\%
$$

That is the absolute share the statement reports (14.29%).

The statement is true.
', 'TRUE — Relative market share equals the firm''s absolute share divided by the largest competitor''s absolute share — a pure ratio, not a percentage of the whole market.

With own share 14.3% and leader share 28.6%:

$$
\frac{14.3}{28.6} = 0.5
$$

A relative share of 0.5 means the firm holds half the leader''s percentage of the market — not a 50% absolute share, and not half of a geographic area.

That matches the stated relative share of 0.5.

The statement is true.
', 'TRUE — Customer analysis asks who buys (and who influences), what buyers do with the product, where and when they buy, and why they prefer one offer — guiding distribution, seasonality, development, and share strategy.

Unconverted buyers keep market potential above volume in medical diagnostic kits.

Under that definition the assertion is the right description of the situation.

The statement is true.
', 'TRUE — Market size/volume is total sales of all firms (value or quantity). Market potential adds still-unserved buyers; a firm''s sales potential exceeds its current sales volume when further gains are possible.

On this stem (growth): sales potential includes room beyond current volume for a medical diagnostic kits supplier.

Under that definition the assertion is the right description of the situation.

The statement is true.
', 'FALSE — Market size/volume is total sales of all firms (value or quantity). Market potential adds still-unserved buyers; a firm''s sales potential exceeds its current sales volume when further gains are possible.

Market volume reflects current sales, not unconverted prospects alone.

Once the defining feature is restored, the assertion falls away.

The statement is false.
'] WHERE case_id = 'CASE 5.5.69' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Market research supplies evidence on customers, competitors, and the industry so the firm can judge position and prospects.

On this stem (positioning / product line): tailored primary research such as analysing responses from an online survey supports informed decisions in the warehouse automation systems market.

Under that definition the assertion is the right description of the situation.

The statement is true.
', 'TRUE — Secondary information reuses research already produced by others (government, associations, published reports). It is often cheaper or free, but usually more general and less tailored.

On this stem (secondary information): trade statistics reused for the warehouse automation systems segment are secondary market information.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
', 'TRUE — Customer analysis asks who buys (and who influences), what buyers do with the product, where and when they buy, and why they prefer one offer — guiding distribution, seasonality, development, and share strategy.

Where, when, and why dimensions apply alongside other customer analysis in warehouse automation systems.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
', 'TRUE — Absolute market share is the firm''s sales divided by total market volume (all businesses'' sales of the product), usually shown as a percentage.

Take firm sales 159 over market volume 1,272:

$$
\frac{159}{1,272} = 0.125
$$

Convert to a percentage:

$$
0.125 \times 100 = 12.5\%
$$

That is the absolute share the statement reports (12.5%).

The statement is true.
', 'TRUE — Relative market share equals the firm''s absolute share divided by the largest competitor''s absolute share — a pure ratio, not a percentage of the whole market.

With own share 12.5% and leader share 31.25%:

$$
\frac{12.5}{31.25} = 0.4
$$

The calculated relative share is 0.4, matching the claim.

The statement is true.
'] WHERE case_id = 'CASE 5.5.70' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Customer analysis asks who buys (and who influences), what buyers do with the product, where and when they buy, and why they prefer one offer — guiding distribution, seasonality, development, and share strategy.

Unconverted buyers keep market potential above volume in warehouse automation systems.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
', 'TRUE — Market size/volume is total sales of all firms (value or quantity). Market potential adds still-unserved buyers; a firm''s sales potential exceeds its current sales volume when further gains are possible.

On this stem (growth): sales potential includes room beyond current volume for a warehouse automation systems supplier.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
', 'TRUE — Market research supplies evidence on customers, competitors, and the industry so the firm can judge position and prospects.

On this stem (positioning / product line): tailored primary research such as hiring an institute to conduct field interviews supports informed decisions in the specialty coffee roasting market.

Under that definition the assertion is the right description of the situation.

The statement is true.
', 'TRUE — Secondary information reuses research already produced by others (government, associations, published reports). It is often cheaper or free, but usually more general and less tailored.

On this stem (secondary information): trade statistics reused for the specialty coffee roasting segment are secondary market information.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
', 'TRUE — Customer analysis asks who buys (and who influences), what buyers do with the product, where and when they buy, and why they prefer one offer — guiding distribution, seasonality, development, and share strategy.

Where, when, and why dimensions apply alongside other customer analysis in specialty coffee roasting.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
'] WHERE case_id = 'CASE 5.5.71' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Absolute market share is the firm''s sales divided by total market volume (all businesses'' sales of the product), usually shown as a percentage.

Take firm sales 176 over market volume 880:

$$
\frac{176}{880} = 0.2
$$

Convert to a percentage:

$$
0.2 \times 100 = 20\%
$$

That is the absolute share the statement reports (20%).

The statement is true.
', 'TRUE — Relative market share equals the firm''s absolute share divided by the largest competitor''s absolute share — a pure ratio, not a percentage of the whole market.

With own share 20% and leader share 60%:

$$
\frac{20}{60} = 0.3333
$$

That matches the stated relative share of about 0.33.

The statement is true.
', 'TRUE — Customer analysis asks who buys (and who influences), what buyers do with the product, where and when they buy, and why they prefer one offer — guiding distribution, seasonality, development, and share strategy.

Unconverted buyers keep market potential above volume in specialty coffee roasting.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
', 'TRUE — Market size/volume is total sales of all firms (value or quantity). Market potential adds still-unserved buyers; a firm''s sales potential exceeds its current sales volume when further gains are possible.

On this stem (growth): sales potential includes room beyond current volume for a specialty coffee roasting supplier.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
', 'TRUE — Primary market research collects new data for the firm''s own questions — questionnaires, interviews, online surveys, or studies run by a research institute — tailored but often costly.

On this stem (positioning / product line): tailored primary research such as designing a primary study around channel preferences supports informed decisions in the renewable-energy inverters market.

The sentence therefore reports the concept accurately for this case.

The statement is true.
'] WHERE case_id = 'CASE 5.5.72' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Secondary information reuses research already produced by others (government, associations, published reports). It is often cheaper or free, but usually more general and less tailored.

On this stem (secondary information): trade statistics reused for the renewable-energy inverters segment are secondary market information.

The sentence therefore reports the concept accurately for this case.

The statement is true.
', 'TRUE — Customer analysis asks who buys (and who influences), what buyers do with the product, where and when they buy, and why they prefer one offer — guiding distribution, seasonality, development, and share strategy.

Where, when, and why dimensions apply alongside other customer analysis in renewable-energy inverters.

The sentence therefore reports the concept accurately for this case.

The statement is true.
', 'FALSE — Primary market research collects new data for the firm''s own questions — questionnaires, interviews, online surveys, or studies run by a research institute — tailored but often costly.

On this stem (primary market research): analysis costs are part of primary research expense.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'TRUE — Absolute market share is the firm''s sales divided by total market volume (all businesses'' sales of the product), usually shown as a percentage.

Take firm sales 193 over market volume 1,158:

$$
\frac{193}{1,158} = 0.166667
$$

Convert to a percentage:

$$
0.166667 \times 100 = 16.67\%
$$

That is the absolute share the statement reports (16.67%).

The statement is true.
', 'TRUE — Relative market share equals the firm''s absolute share divided by the largest competitor''s absolute share — a pure ratio, not a percentage of the whole market.

With own share 16.7% and leader share 33.4%:

$$
\frac{16.7}{33.4} = 0.5
$$

A relative share of 0.5 means the firm holds half the leader''s percentage of the market — not a 50% absolute share, and not half of a geographic area.

That matches the stated relative share of 0.5.

The statement is true.
'] WHERE case_id = 'CASE 5.5.73' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Secondary information reuses research already produced by others (government, associations, published reports). It is often cheaper or free, but usually more general and less tailored.

On this stem (computer): recording method does not make interviews secondary.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'TRUE — Customer analysis asks who buys (and who influences), what buyers do with the product, where and when they buy, and why they prefer one offer — guiding distribution, seasonality, development, and share strategy.

Unconverted buyers keep market potential above volume in renewable-energy inverters.

The sentence therefore reports the concept accurately for this case.

The statement is true.
', 'FALSE — Secondary information reuses research already produced by others (government, associations, published reports). It is often cheaper or free, but usually more general and less tailored.

Self-completion online surveys are still primary collection.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'TRUE — Market size/volume is total sales of all firms (value or quantity). Market potential adds still-unserved buyers; a firm''s sales potential exceeds its current sales volume when further gains are possible.

On this stem (growth): sales potential includes room beyond current volume for a renewable-energy inverters supplier.

The sentence therefore reports the concept accurately for this case.

The statement is true.
', 'FALSE — Primary market research collects new data for the firm''s own questions — questionnaires, interviews, online surveys, or studies run by a research institute — tailored but often costly.

Prior agency research is secondary for later users.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'] WHERE case_id = 'CASE 5.5.74' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Market research supplies evidence on customers, competitors, and the industry so the firm can judge position and prospects.

Procurement managers as customers align with business-to-business classification in who-customer analysis.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
', 'FALSE — Market research supplies evidence on customers, competitors, and the industry so the firm can judge position and prospects.

On this stem (product line): association research is typically general secondary information.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Market research supplies evidence on customers, competitors, and the industry so the firm can judge position and prospects.

The chapter distinguishes absolute and relative market share.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'TRUE — Primary market research collects new data for the firm''s own questions — questionnaires, interviews, online surveys, or studies run by a research institute — tailored but often costly.

On this stem (brand): why and what dimensions can be explored with procurement managers in primary research.

The sentence therefore reports the concept accurately for this case.

The statement is true.
', 'FALSE — Relative market share equals the firm''s market share divided by the largest competitor''s market share, putting own performance in competitive context.

On this stem (market share): trailing the leader implies relative share below one.

Those restricting words stretch a limited idea past what marketing allows.

The statement is false.
'] WHERE case_id = 'CASE 5.5.75' AND tier = 'full';
