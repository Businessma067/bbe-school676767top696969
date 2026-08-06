export const cases34 = [
  {
    "title": "EU micro staff ceiling",
    "context": "A workshop employs nine people with €1.8m turnover; assess EU SME classification claims:",
    "life": true,
    "answer_key": [
      false,
      false,
      false,
      true,
      false
    ],
    "statements": [
      "Because staff are below ten, a firm remains a micro enterprise despite turnover above €2m.",
      "Forty-five staff alone guarantees small classification even if turnover exceeds €10m.",
      "Meeting the staff ceiling alone is sufficient for micro status regardless of turnover or balance sheet totals.",
      "Under the EU definition, a micro enterprise may employ fewer than ten people.",
      "A firm qualifies as micro because its balance sheet is below €2m, regardless of turnover above €2m."
    ],
    "tactical_explanations": [
      "FALSE — Both staff and financial thresholds must be met; high turnover can exclude micro status.",
      "FALSE — Both staff and turnover thresholds must be satisfied for small status.",
      "FALSE — Micro status requires both the staff ceiling and a turnover or balance sheet cap.",
      "TRUE — EU micro classification requires fewer than ten employees.",
      "FALSE — Turnover above €2m can disqualify micro status despite a qualifying balance sheet."
    ],
    "difficulty_level": "4/5"
  },
  {
    "title": "Micro turnover edge case",
    "context": "Tina and Steve's bakery has six staff and €2.1m turnover; evaluate size category statements:",
    "life": true,
    "answer_key": [
      true,
      true,
      true,
      true,
      true
    ],
    "statements": [
      "Turnover above €10m can push a firm out of the small category even when staff remain below fifty.",
      "Micro status allows either turnover up to €2m or a balance sheet total up to €2m alongside the staff limit.",
      "Exceeding the €2m turnover cap can disqualify a firm from micro status even when staff are below ten.",
      "Small status also requires turnover not exceeding €10m.",
      "A small enterprise may employ fewer than fifty people under EU definitions."
    ],
    "tactical_explanations": [
      "TRUE — The €10m turnover cap is binding alongside the staff threshold.",
      "TRUE — Micro firms must meet the staff cap and either the turnover or balance sheet financial ceiling.",
      "TRUE — Turnover above €2m breaks the micro financial cap even with a small workforce.",
      "TRUE — Small classification additionally requires turnover at or below €10m.",
      "TRUE — The EU small category sets an upper staff limit below fifty employees."
    ],
    "difficulty_level": "5/5"
  },
  {
    "title": "Micro balance sheet OR test",
    "context": "A design studio reports eight staff, €2.4m turnover, and a €1.7m balance sheet; assess micro status:",
    "life": true,
    "answer_key": [
      false,
      true,
      false,
      false,
      false
    ],
    "statements": [
      "A firm fails the medium test because both financial figures must be below their respective caps.",
      "Medium enterprises employ fewer than two hundred and fifty people under EU definitions.",
      "Because turnover is within €50m, balance sheet size is irrelevant for medium classification.",
      "Two hundred and forty employees exceed the medium staff ceiling.",
      "Thirty-eight staff alone keeps a firm in the small category despite turnover above €10m."
    ],
    "tactical_explanations": [
      "FALSE — Only one financial threshold needs to be met alongside staff; both need not pass.",
      "TRUE — EU medium enterprises must employ fewer than 250 people.",
      "FALSE — Exceeding the balance sheet cap disqualifies medium status even if turnover qualifies.",
      "FALSE — 240 is below 250 and therefore within the medium staff limit.",
      "FALSE — Small status requires both staff and turnover limits; breaching turnover removes small classification."
    ],
    "difficulty_level": "5/5"
  },
  {
    "title": "Small dual thresholds",
    "context": "Evaluate EU small-enterprise criteria for a firm with forty-five staff and €9.5m turnover:",
    "life": false,
    "answer_key": [
      false,
      false,
      false,
      false,
      true
    ],
    "statements": [
      "MSME excludes micro firms and covers only small and medium categories.",
      "SMEs represent a narrow minority of EU firms because large corporations dominate registration statistics.",
      "SME labels are purely descriptive and have no effect on access to finance or reporting rules.",
      "AT&S counts as a medium enterprise because it operates internationally.",
      "Medium status permits turnover up to €50m or a balance sheet total up to €43m together with the staff cap."
    ],
    "tactical_explanations": [
      "FALSE — Micro firms are explicitly included in MSME/SME groupings.",
      "FALSE — SMEs form the vast majority, not a minority, of EU businesses.",
      "FALSE — Definitions actively shape finance access and regulatory treatment.",
      "FALSE — Medium status depends on thresholds, not on geographic scope alone.",
      "TRUE — Medium classification uses staff plus either turnover or balance sheet financial ceilings."
    ],
    "difficulty_level": "3/5"
  },
  {
    "title": "Small turnover breach",
    "context": "A wholesaler has thirty-eight staff but €10.4m turnover; assess SME classification claims:",
    "life": true,
    "answer_key": [
      true,
      true,
      false,
      true,
      false
    ],
    "statements": [
      "A workforce of about ten thousand places AT&S outside EU medium enterprise limits.",
      "Approximately ninety-nine percent of businesses in the EU are SMEs.",
      "Accounting requirements are identical for micro firms and large multinationals under EU practice.",
      "Two hundred employees fall within the medium staff threshold.",
      "Seven staff and a €1.9m balance sheet guarantee micro status despite turnover above €2m."
    ],
    "tactical_explanations": [
      "TRUE — Ten thousand staff far exceeds the 250-employee medium ceiling.",
      "TRUE — Official EU data cite that about 99% of EU businesses are SMEs.",
      "FALSE — Size affects accounting rules, implying differences by category.",
      "TRUE — 200 is below the 250-person medium limit.",
      "FALSE — Exceeding the turnover cap disqualifies micro status even with qualifying staff and balance sheet."
    ],
    "difficulty_level": "4/5"
  },
  {
    "title": "Medium staff limit",
    "context": "Assess medium-enterprise criteria for a manufacturer with two hundred and forty employees:",
    "life": false,
    "answer_key": [
      true,
      true,
      false,
      false,
      false
    ],
    "statements": [
      "Official SME classification can determine eligibility for EU support programmes and finance schemes.",
      "Size definitions matter because accounting rules may differ for smaller and larger firms.",
      "Ten employees still count as micro because the threshold says fewer than ten.",
      "Two hundred and fifty employees satisfies the medium requirement of fewer than two hundred and fifty.",
      "Fifty employees meets the small enterprise staff requirement of fewer than fifty."
    ],
    "tactical_explanations": [
      "TRUE — EU support and finance often hinge on meeting SME criteria.",
      "TRUE — Size classification affects which accounting rules apply to a firm.",
      "FALSE — Ten employees is not fewer than ten, so the staff test fails.",
      "FALSE — 250 is not fewer than 250; the staff test fails.",
      "FALSE — Small requires fewer than fifty staff; fifty is not eligible."
    ],
    "difficulty_level": "4/5"
  },
  {
    "title": "Medium financial OR logic",
    "context": "A firm has one hundred eighty staff, €48m turnover, and a €44m balance sheet; evaluate medium status:",
    "life": true,
    "answer_key": [
      false,
      true,
      true,
      false,
      true
    ],
    "statements": [
      "Any firm with more than ten employees is classified as large under EU rules.",
      "MSME commonly groups micro, small, and medium enterprises under one umbrella term.",
      "Crossing size thresholds can change which accounting rules apply to a business.",
      "Any local shop qualifies as micro without reference to staff or turnover data.",
      "Exactly ten staff exceeds the micro employee ceiling of fewer than ten."
    ],
    "tactical_explanations": [
      "FALSE — Small and medium tiers cover firms well above ten employees.",
      "TRUE — MSME refers to micro, small, and medium enterprises collectively.",
      "TRUE — Growing beyond thresholds can shift reporting requirements.",
      "FALSE — Official staff and financial tests determine micro status.",
      "TRUE — The micro limit is strictly below ten employees; ten does not qualify."
    ],
    "difficulty_level": "5/5"
  },
  {
    "title": "Medium turnover within cap",
    "context": "An engineering firm has two hundred staff, €49m turnover, and a €42m balance sheet; assess medium claims:",
    "life": false,
    "answer_key": [
      true,
      true,
      true,
      true,
      true
    ],
    "statements": [
      "Exceeding medium staff or financial thresholds generally moves a firm out of SME status.",
      "Grant schemes often require proof that the applicant meets official micro enterprise criteria.",
      "Exactly fifty staff exceeds the small category employee limit.",
      "Micro firms must meet the staff cap and either the turnover or balance sheet financial limit.",
      "Exactly 250 staff exceeds the medium employee ceiling."
    ],
    "tactical_explanations": [
      "TRUE — Surpassing medium criteria places a firm in the large category.",
      "TRUE — Support programmes use the standard EU micro thresholds for eligibility.",
      "TRUE — The small staff cap is strictly below fifty employees.",
      "TRUE — EU micro rules pair staff with one of two financial caps.",
      "TRUE — The medium cap excludes firms with 250 or more employees."
    ],
    "difficulty_level": "3/5"
  },
  {
    "title": "AT&S large scale",
    "context": "AT&S employs roughly ten thousand staff worldwide; evaluate EU size classification statements:",
    "life": true,
    "answer_key": [
      true,
      true,
      true,
      true,
      true
    ],
    "statements": [
      "A balance sheet above €43m can disqualify medium status even with low turnover.",
      "Crossing micro limits while staying within small thresholds reclassifies the firm as small.",
      "Policies supporting SMEs affect the vast majority of EU businesses by number.",
      "Size differences can mean different accounting rule sets for a micro supplier and AT&S.",
      "Small enterprises must record turnover not exceeding €10m."
    ],
    "tactical_explanations": [
      "TRUE — The €43m balance sheet limit is binding for medium classification.",
      "TRUE — Qualifying within small limits replaces micro status.",
      "TRUE — With ~99% SME share, SME-focused policy reaches most businesses.",
      "TRUE — Size classification links to differing accounting rules between micro and large firms.",
      "TRUE — €10m is the small turnover ceiling in the EU table."
    ],
    "difficulty_level": "2/5"
  },
  {
    "title": "SME share in the EU",
    "context": "Assess statements about the prevalence of SMEs in the European Union:",
    "life": false,
    "answer_key": [
      true,
      false,
      true,
      false,
      false
    ],
    "statements": [
      "Medium enterprises may report turnover up to €50m under EU definitions.",
      "Micro classification requires both turnover and balance sheet to stay below €2m simultaneously.",
      "Micro requires fewer than ten staff plus financial caps, stricter than small staff limits.",
      "Small firms may report turnover up to €50m provided staff are below fifty.",
      "Medium status is confirmed because staff and turnover both qualify despite balance sheet breach."
    ],
    "tactical_explanations": [
      "TRUE — €50m is the medium turnover ceiling in the EU table.",
      "FALSE — Only one financial measure must qualify, not both at once.",
      "TRUE — Micro staff cap is below ten, much tighter than small's below fifty.",
      "FALSE — €50m is the medium turnover cap, not the small cap.",
      "FALSE — Exceeding the balance sheet cap blocks medium status despite qualifying staff and turnover."
    ],
    "difficulty_level": "2/5"
  },
  {
    "title": "Why definitions matter",
    "context": "A startup seeks EU-backed finance tied to official size categories; evaluate why definitions matter:",
    "life": false,
    "answer_key": [
      true,
      false,
      true,
      true,
      true
    ],
    "statements": [
      "Two people employed falls well within the micro staff ceiling.",
      "Because SMEs are numerous, individual SME failures have no community impact.",
      "Lenders may verify SME status using official headcount and turnover thresholds.",
      "SME tiers require joint satisfaction of staff and relevant financial thresholds.",
      "Most EU businesses by count are classified within SME size bands."
    ],
    "tactical_explanations": [
      "TRUE — Two employees is below the ten-person micro limit.",
      "FALSE — SME failures can still affect employees, suppliers, and local communities.",
      "TRUE — Finance programmes rely on standard SME criteria.",
      "TRUE — EU definitions combine staff with financial caps for each tier.",
      "TRUE — ~99% of EU businesses are SMEs by count."
    ],
    "difficulty_level": "3/5"
  },
  {
    "title": "MSME terminology",
    "context": "Evaluate terminology linking micro, small, and medium enterprises in EU policy:",
    "life": false,
    "answer_key": [
      true,
      false,
      false,
      false,
      false
    ],
    "statements": [
      "Turnover above €50m disqualifies medium status even if balance sheet qualifies.",
      "Medium turnover cap is €10m, identical to the small limit.",
      "Any firm with forty staff is micro because it employs fewer than fifty people.",
      "Adding staff and sales can leave a firm classified as micro even after crossing small thresholds.",
      "All EU firms file identical full public accounts regardless of size category."
    ],
    "tactical_explanations": [
      "TRUE — €52m turnover exceeds the €50m medium ceiling.",
      "FALSE — €10m is the small cap; medium allows up to €50m.",
      "FALSE — Forty staff exceeds micro limits and aligns with small staff range instead.",
      "FALSE — Exceeding micro thresholds moves classification upward if small criteria are met.",
      "FALSE — SME and large firms face different reporting expectations."
    ],
    "difficulty_level": "2/5"
  },
  {
    "title": "Accounting rules by size",
    "context": "A growing firm approaches medium thresholds; assess accounting implications of size classification:",
    "life": false,
    "answer_key": [
      true,
      true,
      false,
      true,
      true
    ],
    "statements": [
      "Tina and Steve illustrate micro-scale operations compared with AT&S's large workforce.",
      "Complete staff and financial data are needed to verify micro or other SME tiers.",
      "SME definitions are irrelevant once a firm exports outside the home country.",
      "One hundred and eighty employees fits the medium staff band if financial tests also pass.",
      "Micro pairs sub-ten staff with €2m turnover or balance sheet limits."
    ],
    "tactical_explanations": [
      "TRUE — Local micro ventures contrast with AT&S's large-scale workforce.",
      "TRUE — Both staff and financial caps must be checked.",
      "FALSE — Export activity does not override SME threshold tests.",
      "TRUE — 180 is within medium's below-250 staff range.",
      "TRUE — This matches the EU micro row in the official SME table."
    ],
    "difficulty_level": "3/5"
  },
  {
    "title": "Micro balance within cap",
    "context": "A consultancy has seven staff, €2.3m turnover, and a €1.9m balance sheet; assess micro eligibility:",
    "life": true,
    "answer_key": [
      false,
      true,
      false,
      false,
      true
    ],
    "statements": [
      "Operating alone prevents micro classification because micro requires at least five staff.",
      "Large firms like AT&S can employ thousands despite being few in number.",
      "Three thousand staff can still fall within medium limits if turnover is managed.",
      "Turnover within €10m alone makes a firm small even with three hundred employees.",
      "Turnover above €50m prevents medium classification when that cap is breached."
    ],
    "tactical_explanations": [
      "FALSE — There is no minimum staff count for micro beyond the upper cap.",
      "TRUE — AT&S illustrates large-scale employment in a rare large firm.",
      "FALSE — 3,000 far exceeds the 250-employee medium cap.",
      "FALSE — Three hundred staff exceeds medium limits regardless of turnover.",
      "TRUE — €55m exceeds the €50m medium turnover limit."
    ],
    "difficulty_level": "5/5"
  },
  {
    "title": "Ten employees boundary",
    "context": "A family firm employs exactly ten people with €1.5m turnover; evaluate micro classification claims:",
    "life": true,
    "answer_key": [
      true,
      true,
      false,
      true,
      false
    ],
    "statements": [
      "Micro enterprises form a large part of the SME group that dominates EU business counts.",
      "€43m is the medium balance sheet ceiling paired with sub-250 staff.",
      "Nine staff and a €1.6m balance sheet confirm micro status despite €2.05m turnover.",
      "Eight staff is compatible with micro but financial figures must still be verified.",
      "The ninety-nine percent statistic proves SMEs generate ninety-nine percent of EU GDP."
    ],
    "tactical_explanations": [
      "TRUE — Micro firms are part of the ~99% SME majority.",
      "TRUE — €43m balance sheet is the medium cap in the EU table.",
      "FALSE — Turnover above €2m disqualifies micro status even with qualifying balance sheet.",
      "TRUE — Eight staff fits micro range pending financial tests.",
      "FALSE — The figure refers to business numbers, not GDP share."
    ],
    "difficulty_level": "5/5"
  },
  {
    "title": "Fifty staff boundary",
    "context": "A logistics company employs exactly fifty people with €8m turnover; assess small enterprise claims:",
    "life": false,
    "answer_key": [
      true,
      false,
      false,
      true,
      false
    ],
    "statements": [
      "Leaving SME status can end eligibility for certain EU SME finance programmes.",
      "Medium status holds because balance sheet is within €43m despite turnover above €50m.",
      "Medium pairs sub-250 staff with a €10m turnover cap.",
      "Thirty staff is within the small enterprise employee limit.",
      "One hundred and eighty staff keeps a firm in the small category because turnover is below €50m."
    ],
    "tactical_explanations": [
      "TRUE — SME-tied support typically excludes large firms.",
      "FALSE — Exceeding turnover cap blocks medium status despite balance sheet within limits.",
      "FALSE — €10m is the small turnover cap, not medium.",
      "TRUE — 30 is below the fifty-employee small cap.",
      "FALSE — 180 staff exceeds small's below-fifty limit."
    ],
    "difficulty_level": "5/5"
  },
  {
    "title": "Two hundred fifty staff cap",
    "context": "A textile plant employs exactly two hundred fifty workers with €40m turnover; evaluate medium claims:",
    "life": false,
    "answer_key": [
      true,
      false,
      false,
      true,
      true
    ],
    "statements": [
      "EU SME tiers combine employee ceilings with turnover and/or balance sheet caps.",
      "Nine staff alone proves micro status without financial documentation.",
      "AT&S counts as a micro enterprise because it supplies components to phone makers.",
      "One hundred and twenty-five staff satisfies the medium employee threshold.",
      "Staff headcount must be verified alongside turnover for medium classification."
    ],
    "tactical_explanations": [
      "TRUE — Combined criteria define each tier in the EU table.",
      "FALSE — Financial thresholds are mandatory for micro confirmation.",
      "FALSE — Supplier role does not determine size; headcount and financials do.",
      "TRUE — 125 is below 250 staff limit.",
      "TRUE — Staff verification is mandatory alongside turnover."
    ],
    "difficulty_level": "5/5"
  },
  {
    "title": "Large versus SME cut-off",
    "context": "Assess when a firm is treated as large rather than SME under EU thresholds:",
    "life": false,
    "answer_key": [
      true,
      false,
      false,
      false,
      true
    ],
    "statements": [
      "Four employees fall within the micro staff ceiling.",
      "€2m turnover cap applies to small enterprises rather than micro.",
      "€55m turnover confirms medium status because balance sheet is below €43m.",
      "Because SMEs are ninety-nine percent of firms, large firms employ fewer than one percent of workers.",
      "A firm can progress from micro to small to medium as metrics cross successive thresholds."
    ],
    "tactical_explanations": [
      "TRUE — Four staff is below ten-employee micro limit.",
      "FALSE — €2m turnover cap applies to micro, not small.",
      "FALSE — Turnover breach blocks medium status despite balance sheet within cap.",
      "FALSE — Few large firms can still account for substantial employment shares.",
      "TRUE — Growth can move a firm through SME tiers sequentially."
    ],
    "difficulty_level": "3/5"
  },
  {
    "title": "EU micro grant logic",
    "context": "Tina and Steve consider an EU micro-enterprise grant; assess eligibility logic:",
    "life": false,
    "answer_key": [
      true,
      true,
      true,
      true,
      true
    ],
    "statements": [
      "Forty-five staff and €9.5m turnover together meet EU small enterprise thresholds.",
      "Thirty-eight staff fits the small employee ceiling below fifty.",
      "€1.8m turnover stays within the micro turnover cap of €2m.",
      "Six employees fit the micro staff ceiling even when turnover exceeds €2m.",
      "Nine employees satisfy the micro staff ceiling of fewer than ten people."
    ],
    "tactical_explanations": [
      "TRUE — Both staff below fifty and turnover below €10m satisfy small criteria.",
      "TRUE — Thirty-eight is within the small staff limit.",
      "TRUE — €1.8m meets the micro turnover threshold.",
      "TRUE — Six staff meets the micro headcount test though turnover may fail.",
      "TRUE — Nine is below the ten-person micro limit."
    ],
    "difficulty_level": "4/5"
  },
  {
    "title": "Micro OR financial logic",
    "context": "Evaluate how EU micro financial tests combine turnover and balance sheet figures:",
    "life": false,
    "answer_key": [
      false,
      false,
      true,
      true,
      false
    ],
    "statements": [
      "Micro firms are excluded from SME statistics because they are too small to register.",
      "Eight staff proves a firm is micro without checking turnover or balance sheet.",
      "Two hundred and forty employees fits the medium staff ceiling below two hundred and fifty.",
      "€48m turnover is within the €50m medium turnover cap.",
      "Large classification removes all legal duties to publish any financial information."
    ],
    "tactical_explanations": [
      "FALSE — Micro firms are included in SME counts and definitions.",
      "FALSE — Financial caps must also be satisfied for micro status.",
      "TRUE — 240 is below the 250-person medium limit.",
      "TRUE — €48m meets the medium turnover threshold.",
      "FALSE — Large firms face reporting duties rather than exemption."
    ],
    "difficulty_level": "4/5"
  },
  {
    "title": "Small €10m cap recall",
    "context": "Assess EU small-enterprise financial limits alongside staff criteria:",
    "life": false,
    "answer_key": [
      true,
      false,
      true,
      true,
      true
    ],
    "statements": [
      "€180k turnover is well below the €2m micro turnover cap.",
      "A retailer is micro because turnover is under €10m despite thirty staff.",
      "Four staff with €600k turnover can qualify as micro when financial caps are met.",
      "Two hundred staff with €49m turnover and a €42m balance sheet can satisfy medium thresholds.",
      "One hundred and twenty-five staff with €25m turnover and €30m balance sheet can satisfy medium thresholds."
    ],
    "tactical_explanations": [
      "TRUE — €180k meets the micro turnover threshold.",
      "FALSE — Staff above ten and turnover above €2m exclude micro; small may apply.",
      "TRUE — Low headcount and turnover can satisfy micro criteria.",
      "TRUE — All three metrics can meet medium caps together.",
      "TRUE — Staff and both financial figures can meet medium caps."
    ],
    "difficulty_level": "2/5"
  },
  {
    "title": "Medium balance sheet breach",
    "context": "A company has one hundred staff, €30m turnover, and a €43.5m balance sheet; assess medium status:",
    "life": false,
    "answer_key": [
      true,
      false,
      true,
      true,
      true
    ],
    "statements": [
      "Thirty staff with €9.9m turnover satisfies EU small enterprise thresholds.",
      "A firm is small because turnover is only €25m despite one hundred twenty-five staff.",
      "One hundred staff with €30m turnover fits the medium staff and turnover bands.",
      "€2m is the micro turnover ceiling in the EU SME table.",
      "Nine staff fits the micro employee ceiling pending turnover verification."
    ],
    "tactical_explanations": [
      "TRUE — Both metrics meet small staff and turnover caps.",
      "FALSE — 125 staff exceeds small staff limit despite moderate turnover.",
      "TRUE — 100 staff and €30m turnover can meet medium thresholds pending balance sheet.",
      "TRUE — €2m turnover cap applies to micro enterprises.",
      "TRUE — Nine is below the ten-person micro limit."
    ],
    "difficulty_level": "5/5"
  },
  {
    "title": "SME policy prevalence",
    "context": "Policy makers note SMEs make up about ninety-nine percent of EU businesses; assess implications:",
    "life": false,
    "answer_key": [
      false,
      true,
      true,
      true,
      true
    ],
    "statements": [
      "Micro, small, and medium are identical categories with the same staff ceilings.",
      "€43m is the medium balance sheet ceiling in the EU SME table.",
      "€10m is the small turnover ceiling in the EU SME table.",
      "€2m is the micro balance sheet ceiling in the EU SME table.",
      "€50m is the medium turnover ceiling in the EU SME table."
    ],
    "tactical_explanations": [
      "FALSE — Each tier has distinct staff and financial thresholds.",
      "TRUE — €43m balance sheet cap applies to medium enterprises.",
      "TRUE — €10m turnover cap applies to small enterprises.",
      "TRUE — €2m balance sheet cap applies to micro enterprises.",
      "TRUE — €50m turnover cap applies to medium enterprises."
    ],
    "difficulty_level": "2/5"
  },
  {
    "title": "Growth micro to small",
    "context": "Tina and Steve plan to hire staff and expand turnover; assess how classification may change:",
    "life": true,
    "answer_key": [
      false,
      false,
      true,
      true,
      true
    ],
    "statements": [
      "Village location prevents micro classification regardless of size metrics.",
      "€40m turnover alone is sufficient proof of medium enterprise status.",
      "SME status depends on official headcount and financial thresholds, not on industry sector.",
      "Medium classification uses an OR test between turnover and balance sheet financial caps.",
      "Micro classification uses an OR test between turnover and balance sheet financial caps."
    ],
    "tactical_explanations": [
      "FALSE — Location does not override EU size thresholds.",
      "FALSE — Medium requires sub-250 staff plus financial tests.",
      "TRUE — Sector does not override EU size threshold tests.",
      "TRUE — Only one financial measure must qualify for medium status.",
      "TRUE — Only one financial measure must qualify for micro status."
    ],
    "difficulty_level": "3/5"
  },
  {
    "title": "AT&S accounting contrast",
    "context": "Compare reporting expectations for AT&S and a micro village supplier:",
    "life": false,
    "answer_key": [
      true,
      true,
      true,
      true,
      true
    ],
    "statements": [
      "Growing beyond small thresholds can reclassify a firm as medium when medium criteria are met.",
      "Three thousand staff far exceeds the two hundred and fifty employee medium ceiling.",
      "Growing beyond micro thresholds can reclassify a firm as small when small criteria are met.",
      "Export activity does not override EU SME threshold tests for classification.",
      "€200m turnover far exceeds the €50m medium turnover ceiling."
    ],
    "tactical_explanations": [
      "TRUE — Progression to medium replaces small when medium limits are satisfied.",
      "TRUE — 3,000 staff places a firm outside medium limits.",
      "TRUE — Progression to small replaces micro when small limits are satisfied.",
      "TRUE — Cross-border sales do not replace official size criteria.",
      "TRUE — €200m turnover places a firm outside medium limits."
    ],
    "difficulty_level": "3/5"
  },
  {
    "title": "Medium €50m turnover cap",
    "context": "Assess the EU medium enterprise turnover limit alongside other criteria:",
    "life": false,
    "answer_key": [
      true,
      true,
      true,
      false,
      true
    ],
    "statements": [
      "€2.1m turnover exceeds the €2m micro turnover cap.",
      "€10.4m turnover exceeds the €10m small turnover cap.",
      "€52m turnover exceeds the €50m medium turnover cap.",
      "Firms skip the small tier whenever they hire a tenth employee.",
      "A €44m balance sheet exceeds the €43m medium balance sheet cap."
    ],
    "tactical_explanations": [
      "TRUE — €2.1m breaks the micro turnover threshold.",
      "TRUE — €10.4m breaks the small turnover threshold.",
      "TRUE — €52m breaks the medium turnover threshold.",
      "FALSE — Ten employees fail micro but small requires further staff and turnover tests.",
      "TRUE — €44m breaks the medium balance sheet threshold."
    ],
    "difficulty_level": "2/5"
  },
  {
    "title": "Micro versus small confusion",
    "context": "An examiner checks claims mixing micro and small staff ceilings; evaluate:",
    "life": false,
    "answer_key": [
      true,
      true,
      false,
      false,
      false
    ],
    "statements": [
      "Eight staff fits the micro employee ceiling below ten.",
      "Seven staff fits the micro employee ceiling below ten.",
      "Exactly ten staff satisfies the micro requirement of fewer than ten employees.",
      "Exactly two hundred fifty staff satisfies the medium requirement of fewer than two hundred and fifty.",
      "Exactly fifty staff satisfies the small enterprise requirement of fewer than fifty."
    ],
    "tactical_explanations": [
      "TRUE — Eight is below the ten-person micro limit.",
      "TRUE — Seven is below the ten-person micro limit.",
      "FALSE — Ten is not fewer than ten; the micro staff test fails.",
      "FALSE — 250 is not fewer than 250; the medium staff test fails.",
      "FALSE — Fifty is not fewer than fifty; the small staff test fails."
    ],
    "difficulty_level": "4/5"
  },
  {
    "title": "SME finance verification",
    "context": "A medium-sized exporter seeks a bank loan with EU guarantee backing; assess verification logic:",
    "life": false,
    "answer_key": [
      true,
      true,
      false,
      false,
      true
    ],
    "statements": [
      "One hundred and eighty staff fits the medium employee ceiling below two hundred and fifty.",
      "One hundred staff fits the medium employee ceiling below two hundred and fifty.",
      "€2.1m turnover still meets the micro turnover cap of €2m.",
      "€10.4m turnover still meets the small turnover cap of €10m.",
      "One hundred and twenty staff fits the medium employee ceiling below two hundred and fifty."
    ],
    "tactical_explanations": [
      "TRUE — 180 is below the 250-person medium limit.",
      "TRUE — 100 is below the 250-person medium limit.",
      "FALSE — €2.1m exceeds the €2m micro turnover threshold.",
      "FALSE — €10.4m exceeds the €10m small turnover threshold.",
      "TRUE — 120 is below the 250-person medium limit."
    ],
    "difficulty_level": "3/5"
  },
  {
    "title": "Steve repair shop profile",
    "context": "Steve runs a repair shop with one apprentice, two staff total, and €180k turnover; assess micro status:",
    "life": true,
    "answer_key": [
      false,
      false,
      false,
      false,
      true
    ],
    "statements": [
      "€52m turnover still meets the medium turnover cap of €50m.",
      "A €44m balance sheet still meets the medium balance sheet cap of €43m.",
      "Two staff exceeds the micro employee ceiling of fewer than ten.",
      "Six staff exceeds the micro employee ceiling of fewer than ten.",
      "Two hundred staff fits the medium employee ceiling below two hundred and fifty."
    ],
    "tactical_explanations": [
      "FALSE — €52m exceeds the €50m medium turnover threshold.",
      "FALSE — €44m exceeds the €43m medium balance sheet threshold.",
      "FALSE — Two is below ten and fits the micro staff ceiling.",
      "FALSE — Six is below ten and fits the micro staff ceiling.",
      "TRUE — 200 is below the 250-person medium limit."
    ],
    "difficulty_level": "1/5"
  },
  {
    "title": "Combined criteria requirement",
    "context": "Assess whether meeting one SME criterion alone guarantees overall SME status:",
    "life": false,
    "answer_key": [
      true,
      false,
      false,
      false,
      false
    ],
    "statements": [
      "Forty-five staff fits the small employee ceiling below fifty.",
      "Thirty staff exceeds the small employee ceiling of fewer than fifty.",
      "One hundred and eighty staff fits the small employee ceiling below fifty.",
      "Two hundred staff fits the small employee ceiling below fifty.",
      "Three thousand staff fits the medium employee ceiling below two hundred and fifty."
    ],
    "tactical_explanations": [
      "TRUE — 45 is below the fifty-employee small limit.",
      "FALSE — Thirty is below fifty and fits the small staff ceiling.",
      "FALSE — 180 exceeds the fifty-employee small limit.",
      "FALSE — 200 exceeds the fifty-employee small limit.",
      "FALSE — 3,000 far exceeds the 250-person medium limit."
    ],
    "difficulty_level": "4/5"
  },
  {
    "title": "Three thousand staff group",
    "context": "A tech group employs three thousand staff with €200m turnover; assess SME classification claims:",
    "life": true,
    "answer_key": [
      false,
      true,
      false,
      false,
      false
    ],
    "statements": [
      "Turnover of €1.8m exceeds the micro turnover cap of €2m.",
      "Micro firms are included in SME counts and MSME groupings.",
      "Ten thousand AT&S staff fits the medium employee ceiling below two hundred and fifty.",
      "Turnover of €9.5m exceeds the small turnover cap of €10m.",
      "Turnover of €49m exceeds the medium turnover cap of €50m."
    ],
    "tactical_explanations": [
      "FALSE — €1.8m is within the €2m micro turnover ceiling.",
      "TRUE — Micro enterprises form part of the SME category.",
      "FALSE — 10,000 far exceeds the 250-person medium limit.",
      "FALSE — €9.5m is within the €10m small turnover ceiling.",
      "FALSE — €49m is within the €50m medium turnover ceiling."
    ],
    "difficulty_level": "3/5"
  },
  {
    "title": "Architect turnover edge",
    "context": "An architect practice has nine staff, €2.05m turnover, and a €1.6m balance sheet; assess micro status:",
    "life": false,
    "answer_key": [
      false,
      true,
      true,
      true,
      true
    ],
    "statements": [
      "A firm with forty-five staff is micro because it employs fewer than fifty people.",
      "Large firms face reporting duties rather than exemption from financial disclosure.",
      "Because SMEs are numerous by count, SME-focused policy reaches most EU businesses.",
      "Few large firms can still account for substantial employment despite being rare by count.",
      "SME failures can still affect employees, suppliers, and local communities."
    ],
    "tactical_explanations": [
      "FALSE — Forty-five staff exceeds the micro ceiling of fewer than ten.",
      "TRUE — Large classification brings reporting obligations.",
      "TRUE — High SME share by number shapes EU business policy.",
      "TRUE — Large employers can be few in number yet significant in jobs.",
      "TRUE — SME insolvency has stakeholder effects beyond firm count statistics."
    ],
    "difficulty_level": "5/5"
  },
  {
    "title": "SME count statistic meaning",
    "context": "Evaluate what the ninety-nine percent SME figure implies about EU business structure:",
    "life": false,
    "answer_key": [
      false,
      true,
      true,
      true,
      true
    ],
    "statements": [
      "A firm with thirty-eight staff is micro because it employs fewer than fifty people.",
      "Small status requires fewer than fifty staff plus turnover at or below €10m.",
      "Medium status requires fewer than two hundred and fifty staff plus a qualifying financial test.",
      "EU support programmes use standard SME thresholds to verify applicant eligibility.",
      "A firm with nine staff still needs turnover or balance sheet data to confirm micro status."
    ],
    "tactical_explanations": [
      "FALSE — Thirty-eight staff exceeds the micro ceiling of fewer than ten.",
      "TRUE — Small combines staff ceiling with the €10m turnover cap.",
      "TRUE — Medium combines staff ceiling with turnover or balance sheet caps.",
      "TRUE — Finance schemes rely on official size criteria.",
      "TRUE — Financial caps must be verified alongside headcount."
    ],
    "difficulty_level": "2/5"
  },
  {
    "title": "Medium turnover breach path",
    "context": "A firm has one hundred twenty staff, €52m turnover, and a €40m balance sheet; assess medium status:",
    "life": false,
    "answer_key": [
      false,
      true,
      true,
      true,
      true
    ],
    "statements": [
      "Medium status follows from international operations regardless of headcount.",
      "AT&S is classified as large under EU thresholds because headcount far exceeds medium limits.",
      "Micro status requires fewer than ten staff plus turnover at or below €2m or balance sheet at or below €2m.",
      "Tina and Steve's bakery with six staff meets the micro headcount test.",
      "A firm with eight staff still needs turnover or balance sheet data to confirm micro status."
    ],
    "tactical_explanations": [
      "FALSE — Medium status depends on EU thresholds, not geographic scope.",
      "TRUE — AT&S's ~10,000 staff exceeds the 250-person medium ceiling.",
      "TRUE — Micro combines staff ceiling with one financial cap.",
      "TRUE — Six employees is below the ten-person micro limit.",
      "TRUE — Financial caps must be verified alongside headcount."
    ],
    "difficulty_level": "5/5"
  },
  {
    "title": "Small to medium transition",
    "context": "A family manufacturer grows to one hundred eighty staff and €45m turnover; assess classification:",
    "life": false,
    "answer_key": [
      true,
      false,
      true,
      true,
      false
    ],
    "statements": [
      "A village craft business with four staff meets the micro headcount test.",
      "Micro status follows from supplying larger manufacturers regardless of headcount.",
      "Steve's repair shop with two staff meets the micro headcount test.",
      "A retailer with thirty staff meets the small headcount test.",
      "SME classification is optional for firms seeking EU support programmes."
    ],
    "tactical_explanations": [
      "TRUE — Four employees is below the ten-person micro limit.",
      "FALSE — Supplier relationships do not determine EU size classification.",
      "TRUE — Two employees is below the ten-person micro limit.",
      "TRUE — Thirty employees is below the fifty-person small limit.",
      "FALSE — Official SME criteria gate access to many support schemes."
    ],
    "difficulty_level": "4/5"
  },
  {
    "title": "EU table tier pairing",
    "context": "Match each enterprise tier with its paired EU threshold logic:",
    "life": false,
    "answer_key": [
      true,
      true,
      true,
      true,
      true
    ],
    "statements": [
      "An architect practice with nine staff meets the micro headcount test.",
      "A family firm with exactly ten staff fails the micro headcount test.",
      "A textile plant with exactly two hundred fifty staff fails the medium headcount test.",
      "A wholesaler with thirty-eight staff meets the small headcount test.",
      "A logistics company with exactly fifty staff fails the small headcount test."
    ],
    "tactical_explanations": [
      "TRUE — Nine employees is below the ten-person micro limit.",
      "TRUE — Ten is not fewer than ten, so micro staff test fails.",
      "TRUE — 250 is not fewer than 250, so medium staff test fails.",
      "TRUE — Thirty-eight employees is below the fifty-person small limit.",
      "TRUE — Fifty is not fewer than fifty, so small staff test fails."
    ],
    "difficulty_level": "3/5"
  },
  {
    "title": "Tina Steve versus AT&S",
    "context": "Contrast Tina and Steve's bakery with AT&S when discussing business size:",
    "life": true,
    "answer_key": [
      true,
      true,
      true,
      true,
      true
    ],
    "statements": [
      "Balance sheet at or below €43m can satisfy the medium financial test.",
      "Balance sheet at or below €2m can satisfy the micro financial test.",
      "Turnover at or below €10m can satisfy the small financial test.",
      "Turnover at or below €2m can satisfy the micro financial test.",
      "Turnover at or below €50m can satisfy the medium financial test."
    ],
    "tactical_explanations": [
      "TRUE — €43m is the medium balance sheet ceiling.",
      "TRUE — €2m is the micro balance sheet ceiling.",
      "TRUE — €10m is the small turnover ceiling.",
      "TRUE — €2m is the micro turnover ceiling.",
      "TRUE — €50m is the medium turnover ceiling."
    ],
    "difficulty_level": "2/5"
  },
  {
    "title": "Incomplete application data",
    "context": "An agency reviews an applicant with nine staff but incomplete turnover data; assess:",
    "life": false,
    "answer_key": [
      false,
      false,
      true,
      false,
      false
    ],
    "statements": [
      "Crossing the small staff ceiling immediately classifies a firm as large.",
      "Both turnover and balance sheet must fail for medium status to be denied.",
      "The ninety-nine percent SME statistic refers to business numbers, not GDP share.",
      "Balance sheet figures are ignored for medium status when turnover qualifies.",
      "Crossing the micro staff ceiling immediately classifies a firm as large."
    ],
    "tactical_explanations": [
      "FALSE — Fifty staff fails small but medium tier may still apply.",
      "FALSE — Breaching either financial cap can block medium classification.",
      "TRUE — The statistic measures business counts rather than GDP share.",
      "FALSE — Either financial cap can disqualify medium status when breached.",
      "FALSE — Ten staff fails micro but small and medium tiers still exist."
    ],
    "difficulty_level": "4/5"
  },
  {
    "title": "Medium turnover-only breach",
    "context": "A firm has two hundred staff, €55m turnover, and a €42m balance sheet; assess medium status:",
    "life": false,
    "answer_key": [
      false,
      false,
      false,
      false,
      true
    ],
    "statements": [
      "Turnover figures are ignored for medium status when balance sheet qualifies.",
      "Grant schemes ignore official micro thresholds when the applicant is a local shop.",
      "A firm with nine staff is confirmed micro without turnover documentation.",
      "Both turnover and balance sheet must pass for micro status to be granted.",
      "Definitions actively shape finance access and regulatory treatment of firms."
    ],
    "tactical_explanations": [
      "FALSE — Either financial cap can disqualify medium status when breached.",
      "FALSE — Support programmes use standard EU micro criteria.",
      "FALSE — Financial thresholds are mandatory for micro confirmation.",
      "FALSE — Only one financial measure must qualify for micro status.",
      "TRUE — SME labels affect support and reporting, not just description."
    ],
    "difficulty_level": "5/5"
  },
  {
    "title": "SME employment nuance",
    "context": "Assess claims linking SME business counts with employment patterns:",
    "life": false,
    "answer_key": [
      true,
      true,
      false,
      true,
      false
    ],
    "statements": [
      "Meeting one SME criterion alone does not guarantee overall SME status in a tier.",
      "Micro enterprises dominate EU business counts as part of the broader SME group.",
      "A firm with eight staff is confirmed micro without turnover documentation.",
      "Progression through SME tiers follows successive threshold crossings as firms grow.",
      "The EU micro cap for turnover is €10m rather than €2m."
    ],
    "tactical_explanations": [
      "TRUE — Each tier requires joint staff and financial tests.",
      "TRUE — Micro firms contribute to the ~99% SME majority by number.",
      "FALSE — Financial thresholds are mandatory for micro confirmation.",
      "TRUE — Firms can move from micro to small to medium with growth.",
      "FALSE — €10m is the small turnover cap, not the micro cap."
    ],
    "difficulty_level": "3/5"
  },
  {
    "title": "Financial cap literacy",
    "context": "Students must recall EU financial caps; evaluate mixed threshold statements:",
    "life": false,
    "answer_key": [
      true,
      true,
      true,
      true,
      true
    ],
    "statements": [
      "Small enterprises must satisfy staff limits and the €10m turnover cap.",
      "Classification review requires both headcount and financial figures for EU SME tiers.",
      "A firm crossing medium limits becomes ineligible for certain EU SME finance programmes.",
      "Medium enterprises must satisfy staff limits and at least one financial cap.",
      "A tech group with three thousand staff is treated as large under EU size rules."
    ],
    "tactical_explanations": [
      "TRUE — Small uses combined staff and turnover criteria.",
      "TRUE — Incomplete data prevents reliable SME verification.",
      "TRUE — SME-tied support excludes firms above medium thresholds.",
      "TRUE — Medium uses combined staff and financial criteria.",
      "TRUE — 3,000 employees exceeds all SME staff ceilings."
    ],
    "difficulty_level": "3/5"
  },
  {
    "title": "Micro local economy role",
    "context": "Assess the economic role of micro firms such as local shops and workshops:",
    "life": false,
    "answer_key": [
      true,
      true,
      false,
      false,
      false
    ],
    "statements": [
      "Accounting rule sets can differ between micro firms and large groups such as AT&S.",
      "EU SME tables pair each tier with distinct staff and financial ceilings.",
      "The EU medium cap for balance sheet is €50m rather than €43m.",
      "The EU medium cap for turnover is €10m rather than €50m.",
      "The EU small cap for turnover is €2m rather than €10m."
    ],
    "tactical_explanations": [
      "TRUE — Size classification affects applicable accounting rules.",
      "TRUE — Micro, small, and medium each have separate threshold rows.",
      "FALSE — €43m is the medium balance sheet cap in the EU table.",
      "FALSE — €10m is the small turnover cap, not the medium cap.",
      "FALSE — €2m is the micro turnover cap, not the small cap."
    ],
    "difficulty_level": "2/5"
  },
  {
    "title": "Staff-only exam trap",
    "context": "A case lists eight staff and asks whether SME status is certain; evaluate reasoning:",
    "life": false,
    "answer_key": [
      false,
      true,
      false,
      false,
      true
    ],
    "statements": [
      "Tina and Steve count as a large enterprise because their bakery supplies many customers.",
      "One hundred and twenty staff with €52m turnover fails the medium turnover test.",
      "About ninety-nine percent of EU employees work in SMEs because ninety-nine percent of firms are SMEs.",
      "AT&S counts as a medium enterprise because its Austrian headquarters defines EU size.",
      "Two hundred staff with €55m turnover fails the medium turnover test."
    ],
    "tactical_explanations": [
      "FALSE — Tina and Steve illustrate micro-scale operations, not large enterprise status.",
      "TRUE — €52m exceeds the €50m medium turnover cap.",
      "FALSE — The statistic refers to business numbers, not employment share.",
      "FALSE — AT&S's ~10,000 staff exceeds medium limits.",
      "TRUE — €55m exceeds the €50m medium turnover cap."
    ],
    "difficulty_level": "5/5"
  },
  {
    "title": "Leaving SME status effects",
    "context": "A firm crosses medium limits and becomes large; assess practical effects:",
    "life": false,
    "answer_key": [
      true,
      true,
      true,
      true,
      true
    ],
    "statements": [
      "An engineering firm with two hundred staff can meet the medium staff test.",
      "Grant eligibility for micro enterprises requires meeting official micro thresholds.",
      "SME verification for bank loans may require proof of headcount and turnover bands.",
      "A manufacturer with two hundred forty staff can meet the medium staff test.",
      "One hundred and eighty staff with €45m turnover can meet medium staff and turnover tests."
    ],
    "tactical_explanations": [
      "TRUE — 200 is below the 250-person medium limit.",
      "TRUE — Micro grants use standard EU micro criteria.",
      "TRUE — Lenders check official SME thresholds for guarantee schemes.",
      "TRUE — 240 is below the 250-person medium limit.",
      "TRUE — 180 staff and €45m turnover fit medium ceilings."
    ],
    "difficulty_level": "3/5"
  },
  {
    "title": "Small retailer headroom",
    "context": "A retailer has thirty staff and €9.9m turnover; assess small enterprise claims:",
    "life": true,
    "answer_key": [
      true,
      false,
      true,
      true,
      false
    ],
    "statements": [
      "Medium turnover of €49m stays within the €50m medium cap.",
      "Micro enterprises are omitted from the ninety-nine percent SME business count.",
      "Small turnover of €9.5m stays within the €10m small cap.",
      "A firm at eight staff is not confirmed as micro without financial verification.",
      "A firm becomes large immediately upon employing a tenth worker."
    ],
    "tactical_explanations": [
      "TRUE — €49m meets the medium turnover threshold.",
      "FALSE — Micro firms are included in SME counts.",
      "TRUE — €9.5m meets the small turnover threshold.",
      "TRUE — Headcount alone does not confirm micro status.",
      "FALSE — Ten staff fails micro but further tiers depend on additional tests."
    ],
    "difficulty_level": "2/5"
  },
  {
    "title": "Medium mid-range profile",
    "context": "Assess medium classification for a firm with one hundred twenty-five staff, €25m turnover, and €30m balance sheet:",
    "life": false,
    "answer_key": [
      true,
      false,
      true,
      false,
      false
    ],
    "statements": [
      "A firm at nine staff is not confirmed as micro without financial verification.",
      "A firm becomes large immediately upon reaching €2.1m turnover.",
      "Micro turnover of €1.5m stays within the €2m micro cap.",
      "One criterion alone is enough for small status when staff are forty-five.",
      "One criterion alone is enough for medium status when turnover is €40m."
    ],
    "tactical_explanations": [
      "TRUE — Headcount alone does not confirm micro status.",
      "FALSE — Turnover above €2m removes micro status but small or medium may apply.",
      "TRUE — €1.5m meets the micro turnover threshold.",
      "FALSE — Small requires turnover at or below €10m as well.",
      "FALSE — Medium requires sub-250 staff plus financial tests."
    ],
    "difficulty_level": "2/5"
  },
  {
    "title": "SME synthesis review",
    "context": "Synthesise EU SME classification principles for exam review:",
    "life": false,
    "answer_key": [
      false,
      false,
      true,
      false,
      false
    ],
    "statements": [
      "Headcount alone confirms small status for a fifty-employee logistics company.",
      "Incomplete turnover data still proves micro status when staff are nine.",
      "Micro turnover of €1.6m balance sheet context still allows €1.6m balance sheet under €2m cap.",
      "Supplier status to phone makers determines AT&S size classification.",
      "Headcount alone confirms micro status for a ten-employee family firm."
    ],
    "tactical_explanations": [
      "FALSE — Fifty staff fails the below-fifty small staff test.",
      "FALSE — Financial thresholds are mandatory for micro confirmation.",
      "TRUE — €1.6m meets the micro balance sheet threshold.",
      "FALSE — Headcount and financial thresholds determine EU size classification.",
      "FALSE — Ten staff fails the below-ten micro staff test."
    ],
    "difficulty_level": "1/5"
  },
  {
    "title": "Turnover-only student error",
    "context": "A student argues a firm is medium because turnover is €40m; assess the reasoning error:",
    "life": false,
    "answer_key": [
      true,
      true,
      true,
      true,
      true
    ],
    "statements": [
      "Micro turnover of €1.7m balance sheet total stays within the €2m micro balance sheet cap.",
      "Tina and Steve serve as micro-scale examples alongside AT&S as a large firm.",
      "SME classification principles combine staff ceilings with turnover and/or balance sheet caps.",
      "About ninety-nine percent of EU businesses are SMEs by number rather than by employment share alone.",
      "Medium balance sheet of €42m stays within the €43m medium cap."
    ],
    "tactical_explanations": [
      "TRUE — €1.7m meets the micro balance sheet threshold.",
      "TRUE — Course examples contrast micro local ventures with AT&S scale.",
      "TRUE — Combined criteria define EU SME tiers in the official table.",
      "TRUE — The statistic measures business counts.",
      "TRUE — €42m meets the medium balance sheet threshold."
    ],
    "difficulty_level": "4/5"
  },
  {
    "title": "Village craft micro profile",
    "context": "A village craft business has four staff and €600k turnover; assess classification:",
    "life": false,
    "answer_key": [
      true,
      true,
      true,
      false,
      true
    ],
    "statements": [
      "An SME may lose access to certain guarantee schemes after reclassification as large.",
      "Micro enterprises remain part of MSME groupings alongside small and medium firms.",
      "Crossing the medium employee or financial ceiling moves classification toward large enterprise status.",
      "Village craft workshops are exempt from EU micro turnover caps.",
      "Official size categories matter for EU-backed finance and support programme access."
    ],
    "tactical_explanations": [
      "TRUE — SME-tied finance programmes typically exclude large firms.",
      "TRUE — MSME terminology covers micro, small, and medium categories together.",
      "TRUE — Exceeding medium thresholds exits SME bands.",
      "FALSE — Official staff and financial tests determine micro status.",
      "TRUE — Definitions gate eligibility for SME support."
    ],
    "difficulty_level": "1/5"
  },
  {
    "title": "SME ladder progression",
    "context": "Place a growing firm on the SME ladder as it adds staff and sales:",
    "life": false,
    "answer_key": [
      true,
      true,
      true,
      false,
      false
    ],
    "statements": [
      "EU SME definitions apply equally regardless of whether a firm operates locally or nationally.",
      "Balance sheet totals can disqualify medium status even when turnover appears moderate.",
      "Staff headcount alone cannot confirm small status without checking the turnover cap.",
      "Medium status requires both turnover and balance sheet below their caps simultaneously.",
      "Small status ignores turnover when staff remain below fifty."
    ],
    "tactical_explanations": [
      "TRUE — Geographic scope does not replace official EU size thresholds.",
      "TRUE — The medium balance sheet cap is binding alongside staff limits.",
      "TRUE — Small classification requires both staff and turnover tests.",
      "FALSE — Only one financial measure must qualify alongside staff for medium status.",
      "FALSE — Small classification requires turnover at or below €10m."
    ],
    "difficulty_level": "3/5"
  }
];
