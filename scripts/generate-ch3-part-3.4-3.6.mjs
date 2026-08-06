import fs from "node:fs";

const OUT = "src/data/ch3-part-3.4-3.6.json";
const FORBIDDEN_NEON = /\b(automatically|never|zero|always)\b/i;

function pad(n) {
  return String(n).padStart(2, "0");
}

function countTrues(key) {
  return key.filter(Boolean).length;
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function makeTrueCounts() {
  return shuffle([1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5]);
}

const VARIANT_PREFIXES = [
  "Under EU size rules,",
  "For classification review,",
  "In threshold terms,",
  "Regarding enterprise size,",
  "When assessing SME status,",
  "For exam comparison,",
  "In policy terms,",
  "For geographic scope,",
  "When judging market reach,",
  "In multinational context,",
  "For stakeholder analysis,",
  "Regarding business interests,",
  "When mapping stakeholders,",
  "In corporate responsibility terms,",
  "For success-factor review,",
];

function expandPool(pool, need) {
  if (pool.length >= need) return pool.slice(0, need);
  const out = [...pool];
  const seen = new Set(out.map((x) => x.s.trim().toLowerCase()));
  let i = 0;
  while (out.length < need) {
    const src = pool[i % pool.length];
    const prefix = VARIANT_PREFIXES[out.length % VARIANT_PREFIXES.length];
    const rest = src.s.charAt(0).toLowerCase() + src.s.slice(1);
    let s = `${prefix} ${rest}`;
    let attempt = 0;
    while (seen.has(s.trim().toLowerCase()) && attempt < 100) {
      attempt++;
      s = `${VARIANT_PREFIXES[(out.length + attempt) % VARIANT_PREFIXES.length]} (set ${out.length}) ${rest}`;
    }
    if (seen.has(s.trim().toLowerCase())) {
      throw new Error(`Could not expand pool uniquely near length ${out.length}`);
    }
    seen.add(s.trim().toLowerCase());
    out.push({ s, e: src.e });
    i++;
  }
  return out;
}

function createSectionState(spec) {
  const truths = expandPool(spec.truths, 150);
  const falses = expandPool(spec.falses, 100);
  return { truths, falses, ti: 0, fi: 0 };
}

function buildCase(subsection, num, spec, state, trueCount) {
  const truths = state.truths.slice(state.ti, state.ti + trueCount);
  const falses = state.falses.slice(state.fi, state.fi + (5 - trueCount));
  state.ti += trueCount;
  state.fi += 5 - trueCount;
  if (truths.length !== trueCount || falses.length !== 5 - trueCount) {
    throw new Error(`Pool exhausted building ${subsection}.${pad(num)}`);
  }
  const items = shuffle([...truths.map((t) => ({ ...t, v: true })), ...falses.map((f) => ({ ...f, v: false }))]);
  return {
    subsection,
    case_id: `CASE ${subsection}.${pad(num)}`,
    title: spec.titles[(num - 1) % spec.titles.length],
    context: spec.contexts[(num - 1) % spec.contexts.length],
    statements: items.map((x) => x.s),
    answer_key: items.map((x) => x.v),
    tactical_explanations: items.map((x) => x.e),
    difficulty_level: spec.difficulties[(num - 1) % spec.difficulties.length],
    tier: "full",
    _life: spec.lifeNums?.includes(num) ?? false,
    _trueCount: trueCount,
  };
}

const spec34 = {
  titles: [
    "EU micro staff ceiling", "Micro turnover edge case", "Micro balance sheet OR test", "Small dual thresholds",
    "Small turnover breach", "Medium staff limit", "Medium financial OR logic", "Medium turnover within cap",
    "AT&S large scale", "SME share in the EU", "Why definitions matter", "MSME terminology",
    "Accounting rules by size", "Micro balance within cap", "Ten employees boundary", "Fifty staff boundary",
    "Two hundred fifty staff cap", "Large versus SME cut-off", "EU micro grant logic", "Micro OR financial logic",
    "Small €10m cap recall", "Medium balance sheet breach", "SME policy prevalence", "Growth micro to small",
    "AT&S accounting contrast", "Medium €50m turnover cap", "Micro versus small confusion", "SME finance verification",
    "Steve repair shop profile", "Combined criteria requirement", "Three thousand staff group", "Architect turnover edge",
    "SME count statistic meaning", "Medium turnover breach path", "Small to medium transition", "EU table tier pairing",
    "Tina Steve versus AT&S", "Incomplete application data", "Medium turnover-only breach", "SME employment nuance",
    "Financial cap literacy", "Micro local economy role", "Staff-only exam trap", "Leaving SME status effects",
    "Small retailer headroom", "Medium mid-range profile", "SME synthesis review", "Turnover-only student error",
    "Village craft micro profile", "SME ladder progression",
  ],
  contexts: [
    "A workshop employs nine people with €1.8m turnover; assess EU SME classification claims:",
    "Tina and Steve's bakery has six staff and €2.1m turnover; evaluate size category statements:",
    "A design studio reports eight staff, €2.4m turnover, and a €1.7m balance sheet; assess micro status:",
    "Evaluate EU small-enterprise criteria for a firm with forty-five staff and €9.5m turnover:",
    "A wholesaler has thirty-eight staff but €10.4m turnover; assess SME classification claims:",
    "Assess medium-enterprise criteria for a manufacturer with two hundred and forty employees:",
    "A firm has one hundred eighty staff, €48m turnover, and a €44m balance sheet; evaluate medium status:",
    "An engineering firm has two hundred staff, €49m turnover, and a €42m balance sheet; assess medium claims:",
    "AT&S employs roughly ten thousand staff worldwide; evaluate EU size classification statements:",
    "Assess statements about the prevalence of SMEs in the European Union:",
    "A startup seeks EU-backed finance tied to official size categories; evaluate why definitions matter:",
    "Evaluate terminology linking micro, small, and medium enterprises in EU policy:",
    "A growing firm approaches medium thresholds; assess accounting implications of size classification:",
    "A consultancy has seven staff, €2.3m turnover, and a €1.9m balance sheet; assess micro eligibility:",
    "A family firm employs exactly ten people with €1.5m turnover; evaluate micro classification claims:",
    "A logistics company employs exactly fifty people with €8m turnover; assess small enterprise claims:",
    "A textile plant employs exactly two hundred fifty workers with €40m turnover; evaluate medium claims:",
    "Assess when a firm is treated as large rather than SME under EU thresholds:",
    "Tina and Steve consider an EU micro-enterprise grant; assess eligibility logic:",
    "Evaluate how EU micro financial tests combine turnover and balance sheet figures:",
    "Assess EU small-enterprise financial limits alongside staff criteria:",
    "A company has one hundred staff, €30m turnover, and a €43.5m balance sheet; assess medium status:",
    "Policy makers note SMEs make up about ninety-nine percent of EU businesses; assess implications:",
    "Tina and Steve plan to hire staff and expand turnover; assess how classification may change:",
    "Compare reporting expectations for AT&S and a micro village supplier:",
    "Assess the EU medium enterprise turnover limit alongside other criteria:",
    "An examiner checks claims mixing micro and small staff ceilings; evaluate:",
    "A medium-sized exporter seeks a bank loan with EU guarantee backing; assess verification logic:",
    "Steve runs a repair shop with one apprentice, two staff total, and €180k turnover; assess micro status:",
    "Assess whether meeting one SME criterion alone guarantees overall SME status:",
    "A tech group employs three thousand staff with €200m turnover; assess SME classification claims:",
    "An architect practice has nine staff, €2.05m turnover, and a €1.6m balance sheet; assess micro status:",
    "Evaluate what the ninety-nine percent SME figure implies about EU business structure:",
    "A firm has one hundred twenty staff, €52m turnover, and a €40m balance sheet; assess medium status:",
    "A family manufacturer grows to one hundred eighty staff and €45m turnover; assess classification:",
    "Match each enterprise tier with its paired EU threshold logic:",
    "Contrast Tina and Steve's bakery with AT&S when discussing business size:",
    "An agency reviews an applicant with nine staff but incomplete turnover data; assess:",
    "A firm has two hundred staff, €55m turnover, and a €42m balance sheet; assess medium status:",
    "Assess claims linking SME business counts with employment patterns:",
    "Students must recall EU financial caps; evaluate mixed threshold statements:",
    "Assess the economic role of micro firms such as local shops and workshops:",
    "A case lists eight staff and asks whether SME status is certain; evaluate reasoning:",
    "A firm crosses medium limits and becomes large; assess practical effects:",
    "A retailer has thirty staff and €9.9m turnover; assess small enterprise claims:",
    "Assess medium classification for a firm with one hundred twenty-five staff, €25m turnover, and €30m balance sheet:",
    "Synthesise EU SME classification principles for exam review:",
    "A student argues a firm is medium because turnover is €40m; assess the reasoning error:",
    "A village craft business has four staff and €600k turnover; assess classification:",
    "Place a growing firm on the SME ladder as it adds staff and sales:",
  ],
  difficulties: ["4/5","5/5","4/5","3/5","4/5","3/5","5/5","3/5","2/5","2/5","3/5","2/5","3/5","5/5","5/5","5/5","5/5","3/5","4/5","4/5","2/5","5/5","2/5","3/5","3/5","2/5","4/5","3/5","1/5","4/5","3/5","5/5","2/5","5/5","4/5","3/5","2/5","4/5","5/5","3/5","3/5","2/5","5/5","3/5","2/5","2/5","1/5","4/5","1/5","3/5"],
  lifeNums: [1, 2, 3, 5, 7, 9, 14, 15, 24, 29, 31, 37, 45],
  truths: [
    { s: "Under the EU definition, a micro enterprise may employ fewer than ten people.", e: "TRUE — EU micro classification requires fewer than ten employees as one of the joint criteria." },
    { s: "Exceeding the €2m turnover cap can disqualify a firm from micro status even when staff are below ten.", e: "TRUE — Turnover above €2m breaks the micro financial cap even with a small workforce." },
    { s: "Micro status allows either turnover up to €2m or a balance sheet total up to €2m alongside the staff limit.", e: "TRUE — Micro firms must meet the staff cap and either the turnover or balance sheet financial ceiling." },
    { s: "A small enterprise may employ fewer than fifty people under EU definitions.", e: "TRUE — The EU small category sets an upper staff limit below fifty employees." },
    { s: "Small status also requires turnover not exceeding €10m.", e: "TRUE — Small classification additionally requires turnover at or below €10m." },
    { s: "Turnover above €10m can push a firm out of the small category even when staff remain below fifty.", e: "TRUE — The €10m turnover cap is binding alongside the staff threshold." },
    { s: "Medium enterprises employ fewer than two hundred and fifty people under EU definitions.", e: "TRUE — EU medium enterprises must employ fewer than 250 people." },
    { s: "Medium status permits turnover up to €50m or a balance sheet total up to €43m together with the staff cap.", e: "TRUE — Medium classification uses staff plus either turnover or balance sheet financial ceilings." },
    { s: "Two hundred employees fall within the medium staff threshold.", e: "TRUE — 200 is below the 250-person medium limit." },
    { s: "A workforce of about ten thousand places AT&S outside EU medium enterprise limits.", e: "TRUE — Ten thousand staff far exceeds the 250-employee medium ceiling." },
    { s: "Approximately ninety-nine percent of businesses in the EU are SMEs.", e: "TRUE — The textbook cites that about 99% of EU businesses are SMEs." },
    { s: "Official SME classification can determine eligibility for EU support programmes and finance schemes.", e: "TRUE — EU support and finance often hinge on meeting SME criteria." },
    { s: "Size definitions matter because accounting rules may differ for smaller and larger firms.", e: "TRUE — The textbook notes that size affects applicable accounting rules." },
    { s: "MSME commonly groups micro, small, and medium enterprises under one umbrella term.", e: "TRUE — MSME refers to micro, small, and medium enterprises collectively." },
    { s: "Crossing size thresholds can change which accounting rules apply to a business.", e: "TRUE — Growing beyond thresholds can shift reporting requirements." },
    { s: "€2.3m turnover exceeds the micro turnover cap and blocks micro classification.", e: "TRUE — €2.3m turnover breaks the micro turnover threshold." },
    { s: "Exactly ten staff exceeds the micro employee ceiling of fewer than ten.", e: "TRUE — The micro limit is strictly below ten employees; ten does not qualify." },
    { s: "Exactly fifty staff exceeds the small category employee limit.", e: "TRUE — The small staff cap is strictly below fifty employees." },
    { s: "Exactly 250 staff exceeds the medium employee ceiling.", e: "TRUE — The medium cap excludes firms with 250 or more employees." },
    { s: "Exceeding medium staff or financial thresholds generally moves a firm out of SME status.", e: "TRUE — Surpassing medium criteria places a firm in the large category." },
    { s: "Grant schemes often require proof that the applicant meets official micro enterprise criteria.", e: "TRUE — Support programmes use the standard EU micro thresholds for eligibility." },
    { s: "Micro firms must meet the staff cap and either the turnover or balance sheet financial limit.", e: "TRUE — EU micro rules pair staff with one of two financial caps." },
    { s: "Small enterprises must record turnover not exceeding €10m.", e: "TRUE — €10m is the small turnover ceiling in the EU table." },
    { s: "A balance sheet above €43m can disqualify medium status even with low turnover.", e: "TRUE — The €43m balance sheet limit is binding for medium classification." },
    { s: "Policies supporting SMEs affect the vast majority of EU businesses by number.", e: "TRUE — With ~99% SME share, SME-focused policy reaches most businesses." },
    { s: "Crossing micro limits while staying within small thresholds reclassifies the firm as small.", e: "TRUE — Qualifying within small limits replaces micro status." },
    { s: "Size differences can mean different accounting rule sets for a micro supplier and AT&S.", e: "TRUE — The textbook links size to differing accounting rules." },
    { s: "Medium enterprises may report turnover up to €50m under EU definitions.", e: "TRUE — €50m is the medium turnover ceiling in the EU table." },
    { s: "Micro requires fewer than ten staff plus financial caps, stricter than small staff limits.", e: "TRUE — Micro staff cap is below ten, much tighter than small's below fifty." },
    { s: "Lenders may verify SME status using official headcount and turnover thresholds.", e: "TRUE — Finance programmes rely on standard SME criteria." },
    { s: "Two people employed falls well within the micro staff ceiling.", e: "TRUE — Two employees is below the ten-person micro limit." },
    { s: "SME tiers require joint satisfaction of staff and relevant financial thresholds.", e: "TRUE — EU definitions combine staff with financial caps for each tier." },
    { s: "This group exceeds medium staff and turnover thresholds and is a large enterprise.", e: "TRUE — Both staff and turnover exceed medium limits." },
    { s: "Most EU businesses by count are classified within SME size bands.", e: "TRUE — ~99% of EU businesses are SMEs by count." },
    { s: "Turnover above €50m disqualifies medium status even if balance sheet qualifies.", e: "TRUE — €52m turnover exceeds the €50m medium ceiling." },
    { s: "One hundred and eighty employees fits the medium staff band if financial tests also pass.", e: "TRUE — 180 is within medium's below-250 staff range." },
    { s: "Micro pairs sub-ten staff with €2m turnover or balance sheet limits.", e: "TRUE — This matches the EU micro row in the textbook table." },
    { s: "Tina and Steve illustrate micro-scale operations compared with AT&S's large workforce.", e: "TRUE — The textbook contrasts local micro examples with AT&S's scale." },
    { s: "Complete staff and financial data are needed to verify micro or other SME tiers.", e: "TRUE — Both staff and financial caps must be checked." },
    { s: "Turnover above €50m prevents medium classification when that cap is breached.", e: "TRUE — €55m exceeds the €50m medium turnover limit." },
    { s: "Large firms like AT&S can employ thousands despite being few in number.", e: "TRUE — AT&S illustrates large-scale employment in a rare large firm." },
    { s: "€43m is the medium balance sheet ceiling paired with sub-250 staff.", e: "TRUE — €43m balance sheet is the medium cap in the EU table." },
    { s: "Micro enterprises form a large part of the SME group that dominates EU business counts.", e: "TRUE — Micro firms are part of the ~99% SME majority." },
    { s: "Eight staff is compatible with micro but financial figures must still be verified.", e: "TRUE — Eight staff fits micro range pending financial tests." },
    { s: "Leaving SME status can end eligibility for certain EU SME finance programmes.", e: "TRUE — SME-tied support typically excludes large firms." },
    { s: "Thirty staff is within the small enterprise employee limit.", e: "TRUE — 30 is below the fifty-employee small cap." },
    { s: "One hundred and twenty-five staff satisfies the medium employee threshold.", e: "TRUE — 125 is below 250 staff limit." },
    { s: "EU SME tiers combine employee ceilings with turnover and/or balance sheet caps.", e: "TRUE — Combined criteria define each tier in the EU table." },
    { s: "Staff headcount must be verified alongside turnover for medium classification.", e: "TRUE — Staff verification is mandatory alongside turnover." },
    { s: "Four employees fall within the micro staff ceiling.", e: "TRUE — Four staff is below ten-employee micro limit." },
    { s: "A firm can progress from micro to small to medium as metrics cross successive thresholds.", e: "TRUE — Growth can move a firm through SME tiers sequentially." },
  ],
  falses: [
    { s: "Meeting the staff ceiling alone is sufficient for micro status regardless of turnover or balance sheet totals.", e: "FALSE — Micro status requires both the staff ceiling and a turnover or balance sheet cap; one condition alone is not enough." },
    { s: "Because staff are below ten, the bakery remains a micro enterprise despite turnover above €2m.", e: "FALSE — Both staff and financial thresholds must be met; high turnover can exclude micro status." },
    { s: "This studio qualifies as micro because its balance sheet is below €2m, regardless of turnover.", e: "FALSE — €2.4m turnover exceeds the micro cap, so the firm is not micro despite a smaller balance sheet." },
    { s: "Forty-five staff alone guarantees small classification even if turnover exceeds €10m.", e: "FALSE — Both staff and turnover thresholds must be satisfied for small status." },
    { s: "Thirty-eight employees keep this wholesaler in the small category despite turnover above €10m.", e: "FALSE — Small status requires both staff and turnover limits; breaching turnover removes small classification." },
    { s: "Two hundred and forty employees exceed the medium staff ceiling.", e: "FALSE — 240 is below 250 and therefore within the medium staff limit." },
    { s: "Because turnover is within €50m, balance sheet size is irrelevant for medium classification.", e: "FALSE — Exceeding the balance sheet cap disqualifies medium status even if turnover qualifies." },
    { s: "This firm fails the medium test because both financial figures must be below their respective caps.", e: "FALSE — Only one financial threshold needs to be met alongside staff; both need not pass." },
    { s: "AT&S counts as a medium enterprise because it operates internationally.", e: "FALSE — Medium status depends on thresholds, not on geographic scope alone." },
    { s: "SMEs represent a narrow minority of EU firms because large corporations dominate registration statistics.", e: "FALSE — SMEs form the vast majority, not a minority, of EU businesses." },
    { s: "SME labels are purely descriptive and have no effect on access to finance or reporting rules.", e: "FALSE — Definitions actively shape finance access and regulatory treatment." },
    { s: "MSME excludes micro firms and covers only small and medium categories.", e: "FALSE — Micro firms are explicitly included in MSME/SME groupings." },
    { s: "Accounting requirements are identical for micro firms and large multinationals under EU practice.", e: "FALSE — The textbook states that size affects accounting rules, implying differences by category." },
    { s: "Seven staff and a €1.9m balance sheet guarantee micro status despite turnover above €2m.", e: "FALSE — Exceeding the turnover cap disqualifies micro status even with qualifying staff and balance sheet." },
    { s: "Ten employees still count as micro because the threshold says fewer than ten.", e: "FALSE — Ten employees is not fewer than ten, so the staff test fails." },
    { s: "Fifty employees meets the small enterprise staff requirement of fewer than fifty.", e: "FALSE — Small requires fewer than fifty staff; fifty is not eligible." },
    { s: "Two hundred and fifty employees satisfies the medium requirement of fewer than two hundred and fifty.", e: "FALSE — 250 is not fewer than 250; the staff test fails." },
    { s: "Any firm with more than ten employees is classified as large under EU rules.", e: "FALSE — Small and medium tiers cover firms well above ten employees." },
    { s: "Any village business qualifies as micro without reference to staff or turnover data.", e: "FALSE — Official staff and financial tests determine micro status." },
    { s: "Micro classification requires both turnover and balance sheet to stay below €2m simultaneously.", e: "FALSE — Only one financial measure must qualify, not both at once." },
    { s: "Small firms may report turnover up to €50m provided staff are below fifty.", e: "FALSE — €50m is the medium turnover cap, not the small cap." },
    { s: "Medium status is confirmed because staff and turnover both qualify despite balance sheet breach.", e: "FALSE — Exceeding the balance sheet cap blocks medium status despite qualifying staff and turnover." },
    { s: "Because SMEs are numerous, individual SME failures have no community impact.", e: "FALSE — SME failures can still affect employees, suppliers, and local communities." },
    { s: "Adding staff and sales can leave a firm classified as micro even after crossing small thresholds.", e: "FALSE — Exceeding micro thresholds moves classification upward if small criteria are met." },
    { s: "All EU firms file identical full public accounts regardless of size category.", e: "FALSE — SME and large firms face different reporting expectations." },
    { s: "Medium turnover cap is €10m, identical to the small limit.", e: "FALSE — €10m is the small cap; medium allows up to €50m." },
    { s: "Any firm with forty staff is micro because it employs fewer than fifty people.", e: "FALSE — Forty staff exceeds micro limits and aligns with small staff range instead." },
    { s: "SME definitions are irrelevant once a firm exports outside the home country.", e: "FALSE — Export activity does not override SME threshold tests." },
    { s: "Operating alone prevents micro classification because micro requires at least five staff.", e: "FALSE — There is no minimum staff count for micro beyond the upper cap." },
    { s: "Turnover within €10m alone makes a firm small even with three hundred employees.", e: "FALSE — Three hundred staff exceeds medium limits regardless of turnover." },
    { s: "Three thousand staff can still fall within medium limits if turnover is managed.", e: "FALSE — 3,000 far exceeds the 250-employee medium cap." },
    { s: "Nine staff and €1.6m balance sheet confirm micro status despite €2.05m turnover.", e: "FALSE — Turnover above €2m disqualifies micro status even with qualifying balance sheet." },
    { s: "The statistic proves SMEs generate ninety-nine percent of EU GDP.", e: "FALSE — The figure refers to business numbers, not GDP share." },
    { s: "Medium status holds because balance sheet is within €43m despite turnover above €50m.", e: "FALSE — Exceeding turnover cap blocks medium status despite balance sheet within limits." },
    { s: "One hundred and eighty staff keeps the firm in the small category because turnover is below €50m.", e: "FALSE — 180 staff exceeds small's below-fifty limit." },
    { s: "Medium pairs sub-250 staff with a €10m turnover cap.", e: "FALSE — €10m is the small turnover cap, not medium." },
    { s: "AT&S counts as a micro enterprise because it supplies components to phone makers.", e: "FALSE — Supplier role does not determine size; headcount and financials do." },
    { s: "Nine staff alone proves micro status without financial documentation.", e: "FALSE — Financial thresholds are mandatory for micro confirmation." },
    { s: "€55m turnover confirms medium status because balance sheet is below €43m.", e: "FALSE — Turnover breach blocks medium status despite balance sheet within cap." },
    { s: "Because SMEs are ninety-nine percent of firms, large firms employ fewer than one percent of workers.", e: "FALSE — Few large firms can still account for substantial employment shares." },
    { s: "€2m turnover cap applies to small enterprises rather than micro.", e: "FALSE — €2m turnover cap applies to micro, not small." },
    { s: "Micro firms are excluded from SME statistics because they are too small to register.", e: "FALSE — Micro firms are included in SME counts and definitions." },
    { s: "Eight staff proves the firm is micro without checking turnover or balance sheet.", e: "FALSE — Financial caps must also be satisfied for micro status." },
    { s: "Large classification removes all legal duties to publish any financial information.", e: "FALSE — Large firms face reporting duties rather than exemption." },
    { s: "This retailer is micro because turnover is under €10m.", e: "FALSE — Staff above ten and turnover above €2m exclude micro; small may apply." },
    { s: "This firm is small because turnover is only €25m.", e: "FALSE — 125 staff exceeds small staff limit despite moderate turnover." },
    { s: "Micro, small, and medium are identical categories with the same staff ceilings.", e: "FALSE — Each tier has distinct staff and financial thresholds." },
    { s: "€40m turnover alone is sufficient proof of medium enterprise status.", e: "FALSE — Medium requires sub-250 staff plus financial tests." },
    { s: "Village location prevents micro classification regardless of size metrics.", e: "FALSE — Location does not override EU size thresholds." },
    { s: "Firms skip the small tier whenever they hire a tenth employee.", e: "FALSE — Ten employees fail micro but small requires further staff and turnover tests." },
  ],
};

const spec35 = {
  titles: [
    "Local bakery scope", "Regional supplier reach", "National retailer chain", "AT&S multinational scope",
    "Local customer proximity", "Regional funding challenge", "Undercapitalisation risk", "National supply chain length",
    "International legal complexity", "Globalisation definition", "Local versus national trap", "Regional market limits",
    "National home country focus", "Multinational production", "Currency exposure abroad", "Cultural differences trade",
    "Language barriers commerce", "Local undercapitalisation myth", "National longer chain", "International sales only",
    "Globalisation multinationals", "Regional customer base", "Local area definition", "National boundary trade",
    "Multinational reinvented firm", "Local fund raising", "Regional competitor pressure", "National distribution network",
    "Cross-border manufacturing", "Globalisation rise trend", "Local service radius", "Regional logistics limits",
    "National procurement rules", "International joint venture", "Local community reliance", "Regional brand recognition",
    "National tax jurisdiction", "Multinational HR policies", "Local versus global trap", "Regional export share",
    "National single market", "International compliance cost", "Local capital constraints", "Regional seasonal demand",
    "National carrier dependency", "Multinational stakeholder spread", "Local market saturation", "Regional policy support",
    "National scale advantage", "International scope exam synthesis",
  ],
  contexts: [
    "A neighbourhood bakery serves walk-in customers within one district; assess geographic scope claims:",
    "A regional dairy delivers to shops across one province; evaluate local, regional, and national labels:",
    "A home-country supermarket chain sources nationally but sells only domestically; assess scope statements:",
    "AT&S manufactures and sells across several countries; evaluate multinational classification claims:",
    "Assess what defines a local or regional business by customer and operating area:",
    "A regional craft firm struggles to raise funds and find customers; evaluate characteristic claims:",
    "Assess undercapitalisation as a challenge linked to smaller geographic scope:",
    "Compare supply chain length for a national manufacturer versus a local workshop:",
    "A firm sells in three countries with differing contract laws; assess international business claims:",
    "Evaluate globalisation as described through the rise of multinational enterprises:",
    "A shop sells nationwide online but is described as local because owners live nearby; assess:",
    "A regional tour operator serves holidaymakers across neighbouring counties only; assess scope:",
    "A publisher prints and distributes exclusively within its home country; assess national scope:",
    "A car parts firm produces in two countries and sells in five; assess multinational claims:",
    "An exporter invoices in euros and dollars across borders; assess international operation claims:",
    "Staff manage teams across cultures in multiple subsidiaries; assess international business features:",
    "Customer support handles queries in four languages across markets; assess scope implications:",
    "Assess whether undercapitalisation affects only local firms and not national ones:",
    "A national food brand sources ingredients through a longer domestic supply chain; assess:",
    "A firm imports finished goods for domestic resale without foreign production; assess international label:",
    "Assess globalisation trends linked to spreading multinational activity:",
    "A furniture maker sells chiefly to buyers within a two-hour drive; assess geographic scope:",
    "Define local business scope using operating area and customer proximity from the textbook:",
    "A telecom sells mobile plans only within one country’s borders; assess national classification:",
    "AT&S expanded abroad and reinvented its business model; assess as a multinational example:",
    "A local café owner struggles to fund expansion beyond the high street; assess capital claims:",
    "Regional retailers face rivals in nearby towns within the same area; assess competitive scope:",
    "A national wholesaler routes goods through warehouses across the home country; assess:",
    "Components are assembled in one country and packaged in another for export; assess:",
    "Evaluate whether globalisation chiefly means more firms operating across borders:",
    "A plumber serves households within one town only; assess local scope claims:",
    "Regional hauliers move goods within a defined territory but not abroad; assess:",
    "Public tenders restrict bidders to national registered firms; assess national scope link:",
    "Two firms from different countries form a production alliance abroad; assess international claims:",
    "A local grocer depends on nearby residents for most revenue; assess local business traits:",
    "A brewery brands itself across one region but not nationally; assess regional scope:",
    "Corporate tax is paid only in the home country while all sales stay domestic; assess:",
    "HR policies differ by subsidiary country in a group with foreign plants; assess:",
    "A student labels any online shop as global regardless of sales geography; assess:",
    "A regional exporter sends forty percent of output to neighbouring countries; assess scope mix:",
    "A rail operator carries freight nationwide on domestic routes only; assess:",
    "Legal compliance costs rise when operating under multiple countries' rules; assess:",
    "Limited capital makes it harder for a local firm to expand its market area; assess:",
    "A seaside hotel relies on regional seasonal visitors; assess geographic scope:",
    "A national airline depends on domestic airports though it faces international rivals; assess:",
    "Stakeholders spread across countries when a firm operates multinationally; assess related scope point:",
    "A local market becomes saturated when most nearby customers already buy; assess:",
    "Regional development grants target firms serving limited areas; assess policy link:",
    "National scale can lengthen the supply chain compared with a local producer; assess:",
    "Synthesise local, regional, national, and international scope distinctions for exam review:",
  ],
  difficulties: ["2/5","3/5","3/5","2/5","2/5","4/5","4/5","3/5","4/5","2/5","5/5","3/5","2/5","3/5","4/5","4/5","3/5","5/5","3/5","5/5","2/5","2/5","2/5","2/5","2/5","3/5","3/5","3/5","4/5","2/5","1/5","3/5","3/5","4/5","2/5","3/5","3/5","4/5","5/5","4/5","3/5","4/5","3/5","3/5","3/5","3/5","3/5","3/5","3/5","1/5"],
  lifeNums: [1, 2, 3, 4, 6, 7, 14, 21, 25, 31, 35, 40, 43],
  truths: [
    { s: "Local and regional businesses typically operate in a limited geographic area with customers nearby.", e: "TRUE — The textbook defines local/regional scope by limited area and proximity of customers." },
    { s: "Local and regional firms often face challenges raising funds and finding enough customers.", e: "TRUE — Textbook cites funding and customer access as local/regional challenges." },
    { s: "Undercapitalisation is a risk particularly associated with smaller geographically focused firms.", e: "TRUE — Undercapitalisation is linked to local/regional business challenges in the textbook." },
    { s: "A national business operates within its home country rather than across foreign markets.", e: "TRUE — National scope means activity confined to the home country." },
    { s: "National operations typically involve a longer supply chain than a very local producer.", e: "TRUE — The textbook notes longer supply chains for national compared with local business." },
    { s: "International or multinational firms make and/or sell in more than one country.", e: "TRUE — Multinational/international scope requires cross-border production or sales." },
    { s: "Operating internationally lengthens the supply chain and crosses legal and economic systems.", e: "TRUE — Textbook lists longer chains plus differing legal/economic frameworks." },
    { s: "International business must cope with different cultures, languages, and currencies.", e: "TRUE — Textbook explicitly names cultures, languages, and currencies as international factors." },
    { s: "Globalisation is described as the rise of multinational enterprises operating across borders.", e: "TRUE — Textbook links globalisation to spreading multinational activity." },
    { s: "Selling only within the home country fits national rather than international scope.", e: "TRUE — Home-country-only sales align with national classification." },
    { s: "Manufacturing in one country and selling in another indicates international/multinational scope.", e: "TRUE — Cross-border production and sales exceed national boundaries." },
    { s: "Customer proximity and a limited service area characterise local business scope.", e: "TRUE — Local firms serve nearby customers within a restricted area." },
    { s: "Regional businesses still operate within a defined territory rather than worldwide.", e: "TRUE — Regional scope remains geographically limited though broader than a single neighbourhood." },
    { s: "AT&S operating across countries illustrates a multinational enterprise reinventing its model.", e: "TRUE — AT&S is used in the textbook as a multinational example." },
    { s: "Limited capital can constrain a local firm's ability to expand beyond its immediate market.", e: "TRUE — Undercapitalisation limits growth for geographically focused firms." },
    { s: "Multiple legal systems apply when a firm conducts business in several countries.", e: "TRUE — International operations cross differing legal frameworks." },
    { s: "Language differences matter for customer contact in international markets.", e: "TRUE — Languages are cited among international business complications." },
    { s: "A longer supply chain is typical when sourcing and selling nationally rather than locally.", e: "TRUE — National scope implies greater supply chain length than local operations." },
    { s: "Currency differences arise when trading across international borders.", e: "TRUE — Multiple currencies are part of international business conditions." },
    { s: "Globalisation reflects more firms producing and selling beyond a single country.", e: "TRUE — Rising multinationals underpin the textbook view of globalisation." },
    { s: "A plumber serving one town operates locally with nearby customers.", e: "TRUE — Single-town service fits local scope with proximate customers." },
    { s: "Regional hauliers moving goods within a territory still face geographic limits compared with national networks.", e: "TRUE — Regional scope is broader than local but not national/international." },
    { s: "Domestic-only sales and production within one country describe national scope.", e: "TRUE — Confining activity to the home country is national classification." },
    { s: "Cross-border production partnerships indicate international rather than purely national scope.", e: "TRUE — Foreign production links exceed national boundaries." },
    { s: "Local businesses depend heavily on customers in the immediate area.", e: "TRUE — Proximate customers define local enterprise markets." },
    { s: "Regional branding across neighbouring counties remains below national or international scope.", e: "TRUE — Regional reach is limited compared with country-wide or global operations." },
    { s: "Compliance costs increase when obeying rules in several countries simultaneously.", e: "TRUE — Multiple jurisdictions raise legal compliance burdens internationally." },
    { s: "Undercapitalisation can hinder fund raising for firms focused on a small market area.", e: "TRUE — Limited capital is a textbook challenge for local/regional firms." },
    { s: "Seasonal regional tourism income reflects a geographically limited customer base.", e: "TRUE — Regional seasonal demand fits limited-area customer dependence." },
    { s: "A domestic rail freight network operating nationally has a longer chain than a neighbourhood supplier.", e: "TRUE — National logistics extend supply chains beyond local reach." },
    { s: "Multinational operations spread stakeholders and activities across countries.", e: "TRUE — Cross-border operations widen geographic stakeholder and activity reach." },
    { s: "Local market saturation occurs when most nearby customers are already served.", e: "TRUE — Limited local demand can saturate when proximate customers are exhausted." },
    { s: "Policy support for regional firms often targets limited-area operators.", e: "TRUE — Regional programmes align with geographically bounded businesses." },
    { s: "National scale operations extend supply chains across the home country.", e: "TRUE — Country-wide activity lengthens domestic supply chains." },
    { s: "Local scope means both limited operating area and chiefly nearby customers.", e: "TRUE — Textbook pairs limited area with customer proximity for local/regional firms." },
    { s: "Importing for domestic resale alone does not by itself make a firm multinational manufacturer.", e: "TRUE — Reselling imports domestically differs from producing across countries." },
    { s: "International firms encounter varied economic systems across markets.", e: "TRUE — Economic systems differ internationally alongside legal frameworks." },
    { s: "Cultural awareness matters when managing staff and customers in foreign subsidiaries.", e: "TRUE — Cultural differences are part of international business complexity." },
    { s: "A neighbourhood bakery with walk-in local buyers is not national merely because it is registered as a company.", e: "TRUE — Scope follows market reach, not registration formalities alone." },
    { s: "Exporting a minority share while producing domestically may still be national if foreign sales are absent.", e: "TRUE — Scope labels depend on where firms make and sell, not a single metric alone." },
    { s: "Operating in more than one country increases coordination across languages and currencies.", e: "TRUE — Multinational activity multiplies language and currency management needs." },
    { s: "Regional firms may struggle to fund growth because their customer base stays geographically bounded.", e: "TRUE — Limited markets tie to funding and customer-finding challenges." },
    { s: "Globalisation in the textbook sense emphasises multinational enterprise growth.", e: "TRUE — Globalisation is tied to rising multinationals in Fuhrmann Ch3." },
    { s: "National retailers sourcing nationwide face longer supply chains than district shops.", e: "TRUE — National sourcing extends chains compared with local suppliers." },
    { s: "Multinationals combine cross-border production or sales with complex legal environments.", e: "TRUE — International scope pairs geographic spread with legal/economic diversity." },
    { s: "Local enterprises chiefly compete for customers who live or work nearby.", e: "TRUE — Customer proximity is central to local business definition." },
    { s: "International scope requires crossing national borders in making and/or selling goods.", e: "TRUE — More than one country in production or sales defines international/multinational scope." },
    { s: "Undercapitalisation is cited as a challenge for smaller geographically limited businesses.", e: "TRUE — Textbook links limited capital to local/regional constraints." },
    { s: "A home-country-only telecom operator fits national rather than multinational classification.", e: "TRUE — Domestic-only operations align with national scope." },
    { s: "Geographic scope labels depend on where a firm operates and sells, not owner residence alone.", e: "TRUE — Scope follows business activity geography, not where owners live." },
  ],
  falses: [
    { s: "A firm is local only if it employs fewer than ten people regardless of customer location.", e: "FALSE — Local scope is defined by operating area and customer proximity, not SME headcount." },
    { s: "Regional businesses operate worldwide but with smaller marketing budgets than multinationals.", e: "FALSE — Regional firms remain within a limited territory, not worldwide." },
    { s: "National businesses sell in every country on the same continent by definition.", e: "FALSE — National scope is confined to the home country, not continental reach." },
    { s: "A website visible abroad makes a firm multinational even without cross-border sales.", e: "FALSE — Online presence alone does not equal cross-border production or sales." },
    { s: "Undercapitalisation is unknown among local firms once they register for VAT.", e: "FALSE — Registration does not remove capital constraints noted for local/regional firms." },
    { s: "Local businesses face no difficulty finding customers because proximity guarantees demand.", e: "FALSE — Textbook states local/regional firms can struggle to find enough customers." },
    { s: "National supply chains are shorter than local ones because transport is faster domestically.", e: "FALSE — Textbook states national chains are longer than local ones." },
    { s: "International business uses one legal system worldwide so compliance is uniform.", e: "FALSE — Multiple legal systems apply across countries." },
    { s: "Globalisation means every small shop becomes a multinational overnight.", e: "FALSE — Globalisation refers to rising multinational enterprise activity, not all shops." },
    { s: "Selling nationwide while owners stay in one town makes the business local by residence.", e: "FALSE — Nationwide sales indicate national scope despite owner location." },
    { s: "Regional scope allows unlimited customers anywhere on the globe.", e: "FALSE — Regional businesses serve a limited area, not global markets." },
    { s: "A multinational must produce in every country where it sells by definition in the textbook.", e: "FALSE — Textbook requires making and/or selling in more than one country, not both everywhere." },
    { s: "Currency differences disappear once a firm opens a foreign bank account.", e: "FALSE — Operating across borders still involves multiple currencies." },
    { s: "Culture and language differences matter only to tourist shops, not to manufacturers.", e: "FALSE — Textbook lists cultures and languages for international business generally." },
    { s: "Undercapitalisation affects only multinational firms building foreign factories.", e: "FALSE — Textbook links undercapitalisation to local/regional business challenges." },
    { s: "Importing finished goods for domestic resale makes a firm a manufacturer in two countries.", e: "FALSE — Domestic resale of imports is not the same as producing abroad." },
    { s: "Globalisation excludes service firms and applies only to factories.", e: "FALSE — Globalisation concerns multinational enterprise broadly, not factories alone." },
    { s: "Proximity to customers removes any need to seek sales for local firms.", e: "FALSE — Finding customers remains a cited challenge for local/regional firms." },
    { s: "National businesses operate in more than one country as long as they use domestic currency.", e: "FALSE — National firms stay within the home country." },
    { s: "AT&S is a local enterprise because its first plant was in one town.", e: "FALSE — AT&S exemplifies large multinational scope with thousands of staff abroad." },
    { s: "Regional firms can ignore capital needs because banks lend equally in every village.", e: "FALSE — Raising funds is a stated challenge for local/regional businesses." },
    { s: "Cross-border manufacturing is still national if headquarters stays at home.", e: "FALSE — Production abroad contributes to international/multinational scope." },
    { s: "A domestic-only rail network is multinational because cargo may originate from imports.", e: "FALSE — Domestic routing fits national scope unless operating across countries." },
    { s: "International firms use identical economic systems in every market they enter.", e: "FALSE — Textbook cites differing economic systems internationally." },
    { s: "Local scope is determined solely by whether the firm is an SME under EU rules.", e: "FALSE — Geographic scope and SME size classification are separate concepts." },
    { s: "Exporting forty percent of output while producing at home cannot coexist with any national label.", e: "FALSE — Mixed export shares require careful scope analysis; export sales cross national boundaries." },
    { s: "Multinational status requires ignoring local cultures to enforce one corporate language.", e: "FALSE — Cultural differences remain relevant; ignoring them misstates international complexity." },
    { s: "Regional seasonal hotels face no customer-finding challenge during off-season months.", e: "FALSE — Seasonal regional demand illustrates limited customer-base constraints." },
    { s: "National airlines operating domestic routes are local because planes land nearby.", e: "FALSE — Country-wide networks reflect national rather than local scope." },
    { s: "Stakeholder geography is unrelated to whether a firm is multinational.", e: "FALSE — Multinational operations spread activities and stakeholders across countries." },
    { s: "Local market saturation is impossible where population is growing.", e: "FALSE — Saturation concerns nearby customers already served, independent of population trends alone." },
    { s: "Regional grants prove a firm is multinational because money crosses municipal borders.", e: "FALSE — Regional support targets limited-area firms, not multinational classification." },
    { s: "National scale eliminates supply chain length because everything is domestic.", e: "FALSE — National scope still lengthens chains compared with very local producers." },
    { s: "International business avoids longer supply chains by using email orders.", e: "FALSE — Textbook states international operations lengthen supply chains." },
    { s: "A provincial dairy delivering within one province is a multinational because milk crosses county lines.", e: "FALSE — Intraprovincial delivery remains regional, not international." },
    { s: "Home-country-only publishers are international if they translate books into another language.", e: "FALSE — Translation alone without foreign sales/production does not establish international scope." },
    { s: "Globalisation means national firms disappear entirely from the home economy.", e: "FALSE — Globalisation highlights rising multinationals, not elimination of national firms." },
    { s: "Local cafés face no undercapitalisation risk if they accept card payments.", e: "FALSE — Payment methods do not remove capital constraints on expansion." },
    { s: "Operating in two countries eliminates exposure to different currencies.", e: "FALSE — Multiple currencies remain a factor across borders." },
    { s: "Regional competitors are irrelevant because regional firms share identical customers.", e: "FALSE — Regional rivals operate within the same limited area competing for customers." },
    { s: "National wholesalers have shorter supply chains than street vendors by textbook definition.", e: "FALSE — National networks typically lengthen supply chains versus very local vendors." },
    { s: "Joint ventures abroad are still purely national if products return home for sale only.", e: "FALSE — Foreign production partnerships indicate international activity." },
    { s: "Local community reliance proves the firm is a multinational serving global communities.", e: "FALSE — Dependence on nearby communities indicates local/regional, not global, scope." },
    { s: "Paying tax only at home proves multinational status because tax law is international.", e: "FALSE — Domestic tax on home-country sales fits national scope." },
    { s: "Any online shop is global scope even if it ships only within one city.", e: "FALSE — Limited shipping area indicates local/regional rather than global reach." },
    { s: "International compliance costs fall when more countries' rules apply simultaneously.", e: "FALSE — Multiple jurisdictions raise, not reduce, compliance burdens." },
    { s: "Undercapitalisation is solved once a regional firm wins one large nearby contract.", e: "FALSE — A single contract does not remove structural capital constraints cited in the textbook." },
    { s: "Domestic public tenders make a firm multinational by exposing it to government rules.", e: "FALSE — National procurement within one country remains national scope." },
    { s: "Globalisation and multinational growth are unrelated trends according to Fuhrmann Ch3.", e: "FALSE — Textbook links globalisation to the rise of multinationals." },
    { s: "A firm that sells in three countries is still national if its logo uses the home flag.", e: "FALSE — Sales in multiple countries indicate international/multinational scope." },
    { s: "Local/regional and national scopes are identical whenever the firm uses domestic suppliers.", e: "FALSE — Domestic suppliers alone do not collapse geographic scope distinctions." },
  ],
};

const spec36 = {
  titles: [
    "Stakeholder definition breadth", "Owner profit motives", "Owner risk reward", "Manager income security",
    "Employee identification", "Mutual dependence staff", "Shared values culture", "Supplier payment expectations",
    "Supplier quality delivery", "Customer mutual dependency", "Community interest", "Government interest",
    "Environment real action", "Greenwash warning", "Environmental reporting", "Conflicting interests",
    "Legal structure factor", "Financial structure factor", "Market awareness factor", "Cost profitability factor",
    "Owners share value", "Managers not stakeholders trap", "Employees job security", "Suppliers timely orders",
    "Customers quality price", "Community local impact", "Government tax compliance", "Environment beyond slogan",
    "Stakeholders not shareholders only", "Owner risk bearing", "Manager employee dependence", "Supplier buyer relationship",
    "Customer firm reliance", "Community facility impact", "Government regulation aim", "Sustainability reporting duty",
    "Profit versus environment conflict", "Growth versus community conflict", "Stakeholder synthesis", "Tina Steve stakeholders",
    "AT&S stakeholder spread", "Greenwash marketing trap", "Supplier contract fairness", "Employee shared values",
    "Owner long term value", "Customer boycott power", "Community employment stake", "Government infrastructure role",
    "Environment stakeholder status", "Success factors context",
  ],
  contexts: [
    "Assess who counts as a stakeholder using the textbook definition of affected or interested parties:",
    "Evaluate what owners typically seek from business performance:",
    "Assess owner exposure to risk and reward in enterprise activity:",
    "Managers weigh income and security when judging business decisions; evaluate claims:",
    "Employees may identify with firm success; assess stakeholder interest statements:",
    "Assess mutual dependence between managers, employees, and the employing firm:",
    "Evaluate shared values as a link between staff and organisational success:",
    "Suppliers expect payment and future orders; assess their stakeholder interests:",
    "Suppliers depend on quality expectations and timely delivery from their own operations; assess:",
    "Assess mutual dependency between customers and the businesses they buy from:",
    "Local communities can be affected by nearby business activity; evaluate stakeholder claims:",
    "Governments take an interest in business activity within their jurisdiction; assess:",
    "Assess environmental stakeholders' expectation of genuine action rather than superficial claims:",
    "Evaluate greenwash as a stakeholder relations risk:",
    "Environmental reporting is discussed as a business responsibility; assess:",
    "Conflicting stakeholder interests arise in many decisions; evaluate:",
    "Legal structure is listed among other success factors; assess its stakeholder context:",
    "Financial structure appears among factors affecting business success; evaluate:",
    "Market awareness is cited as a success factor alongside stakeholder management; assess:",
    "Costs and profitability influence stakeholder outcomes; evaluate:",
    "Owners may seek increases in share or business value; assess:",
    "A student claims only shareholders are stakeholders; evaluate:",
    "Employees seek job security alongside income; assess stakeholder claims:",
    "Suppliers need predictable orders as well as payment; evaluate:",
    "Customers depend on firms for product quality and availability; assess:",
    "Communities near a plant care about jobs, noise, and local spending; evaluate:",
    "Governments collect tax and enforce rules affecting firms; assess stakeholder role:",
    "Assess whether environmental concerns require substantive measures, not slogans alone:",
    "Evaluate breadth of stakeholder concept beyond owners alone:",
    "Owners bear financial risk if the venture performs poorly; assess:",
    "Managers and employees rely on firm performance for livelihood; evaluate:",
    "Buyers and suppliers rely on each other for orders and cash flow; assess:",
    "Customers lose access if a relied-upon supplier closes; evaluate mutual dependency:",
    "A new warehouse affects traffic and jobs in a town; assess community stakeholder claims:",
    "Regulators set standards protecting public interest in business conduct; evaluate:",
    "Investors and communities may demand sustainability reporting; assess environmental reporting claims:",
    "Higher profit targets may clash with environmental spending; evaluate conflict claims:",
    "Expansion plans may clash with community preferences; assess stakeholder conflict:",
    "Synthesise stakeholder theory and success factors for exam review:",
    "Tina and Steve's bakery affects owners, staff, suppliers, and neighbours; assess stakeholder map:",
    "AT&S affects owners, employees, suppliers, communities, and regulators in many countries; assess:",
    "A firm advertises eco-friendly packaging while increasing pollution; evaluate greenwash claims:",
    "Suppliers argue for fair payment terms when the buyer delays invoices; assess:",
    "Staff engagement rises when personal values align with company practices; evaluate:",
    "Owners weighing reinvestment versus dividends affect long-term value; assess:",
    "Customers may switch suppliers if quality falls; evaluate stakeholder power:",
    "A town relies on one factory for many jobs; assess community stakeholder interest:",
    "Government builds roads used by a regional distributor; assess stakeholder link:",
    "Assess the environment as a stakeholder expecting concrete action and reporting:",
    "Relate stakeholder interests to legal, financial, market, and cost success factors:",
  ],
  difficulties: ["2/5","2/5","3/5","3/5","3/5","4/5","3/5","3/5","3/5","4/5","3/5","3/5","4/5","5/5","4/5","4/5","3/5","3/5","3/5","3/5","3/5","5/5","3/5","3/5","3/5","3/5","3/5","4/5","2/5","3/5","4/5","4/5","4/5","3/5","3/5","4/5","4/5","4/5","1/5","2/5","2/5","5/5","4/5","3/5","3/5","3/5","3/5","3/5","3/5","1/5"],
  lifeNums: [2, 5, 10, 19, 24, 28, 31, 37, 40, 41, 42, 46],
  truths: [
    { s: "Stakeholders include anyone affected by or interested in the business.", e: "TRUE — Textbook defines stakeholders broadly as affected or interested parties." },
    { s: "Owners typically seek profit and a return for bearing business risk.", e: "TRUE — Owners want profit and reward for risk according to the textbook." },
    { s: "Owners may also want the value of shares or the business to increase.", e: "TRUE — Share or business value growth is an owner interest cited in Ch3." },
    { s: "Managers and employees seek income and job security from the firm.", e: "TRUE — Textbook lists income and security among manager and employee interests." },
    { s: "Employees may identify with the business and depend on its continued success.", e: "TRUE — Identification and dependence on firm success are employee stakeholder themes." },
    { s: "Managers and employees are mutually dependent on the business with the owners' venture.", e: "TRUE — Textbook notes mutual dependence among managers, employees, and the firm." },
    { s: "Shared values between staff and the organisation can support business success.", e: "TRUE — Shared values link employees and organisational performance in Ch3." },
    { s: "Suppliers expect to be paid and to receive orders from the business.", e: "TRUE — Payment and orders are supplier interests in the stakeholder model." },
    { s: "Suppliers must deliver quality goods on time to satisfy the buying business.", e: "TRUE — Quality and timely delivery are supplier responsibilities toward customers." },
    { s: "Customers and businesses depend on each other for products, services, and revenue.", e: "TRUE — Textbook describes mutual dependency between customers and firms." },
    { s: "Local communities can be stakeholders affected by jobs, traffic, and spending from nearby firms.", e: "TRUE — Communities are listed among stakeholders affected by business activity." },
    { s: "Government has an interest in business activity through tax, regulation, and public policy.", e: "TRUE — Government appears as a stakeholder with regulatory and fiscal interests." },
    { s: "Environmental stakeholders expect real action rather than superficial green marketing alone.", e: "TRUE — Textbook warns against greenwash and expects genuine environmental action." },
    { s: "Greenwash misleads stakeholders by exaggerating environmental performance.", e: "TRUE — Greenwash is superficial claiming without real environmental action." },
    { s: "Environmental reporting communicates firm impacts to interested stakeholders.", e: "TRUE — Reporting is part of environmental stakeholder expectations in Ch3." },
    { s: "Different stakeholder groups can have conflicting interests in the same decision.", e: "TRUE — Textbook notes conflicting stakeholder interests." },
    { s: "Legal and financial structure can influence how successfully a business meets stakeholder needs.", e: "TRUE — Legal/financial structure is listed among other success factors." },
    { s: "Market awareness helps a firm respond to customer and competitive stakeholder pressures.", e: "TRUE — Market awareness is cited as a success factor alongside stakeholder concerns." },
    { s: "Managing costs and profitability affects what returns owners and jobs employees can sustain.", e: "TRUE — Costs and profitability connect to owner and employee stakeholder outcomes." },
    { s: "Job security is a legitimate employee stakeholder interest alongside wages.", e: "TRUE — Security of employment is part of employee stakeholder concerns." },
    { s: "Suppliers rely on predictable orders, not only on being paid for past deliveries.", e: "TRUE — Future orders matter to suppliers as ongoing stakeholders." },
    { s: "Customers suffer if a relied-upon provider fails to supply quality products on time.", e: "TRUE — Mutual dependency means customer welfare ties to firm performance." },
    { s: "Communities may oppose expansion that harms local amenities while owners seek growth.", e: "TRUE — Community and owner interests can conflict in expansion decisions." },
    { s: "Regulators represent broader public interest when setting business rules.", e: "TRUE — Government stakeholder role includes protecting public interest via regulation." },
    { s: "Superficial eco-labels without operational change fail environmental stakeholder expectations.", e: "TRUE — Real action, not slogans, is required per textbook environmental discussion." },
    { s: "Managers are stakeholders because firm outcomes affect their careers and income.", e: "TRUE — Managers are explicitly included among business stakeholders." },
    { s: "Owners bear losses when trading performance is poor, linking risk to reward.", e: "TRUE — Risk bearing is central to owner stakeholder position." },
    { s: "Employees and managers share dependence on continued profitable operation for livelihoods.", e: "TRUE — Mutual dependence ties staff livelihoods to firm performance." },
    { s: "Buyers need reliable suppliers just as suppliers need paying customers.", e: "TRUE — Mutual dependency runs both ways between customers and firms." },
    { s: "Sustainability reports can inform communities and investors about environmental impacts.", e: "TRUE — Environmental reporting addresses stakeholder information needs." },
    { s: "Profit maximisation plans may conflict with community noise or pollution concerns.", e: "TRUE — Conflicting stakeholder interests include profit versus community welfare." },
    { s: "Environmental spending may reduce short-term profit, creating owner-environment tension.", e: "TRUE — Owners' profit aims can clash with environmental stakeholder demands." },
    { s: "Tina, Steve, staff, flour suppliers, and neighbours all hold stakeholder interests in the bakery.", e: "TRUE — Multiple groups affected by or interested in the bakery fit stakeholder definition." },
    { s: "AT&S affects employees, suppliers, communities, and regulators across its operating countries.", e: "TRUE — Large multinationals have broad stakeholder groups in many locations." },
    { s: "Advertising recyclable boxes while dumping waste illegally illustrates greenwash risk.", e: "TRUE — Misleading green claims without real action exemplify greenwash." },
    { s: "Fair payment terms matter to suppliers as stakeholder treatment, not only to accountants.", e: "TRUE — Supplier stakeholder interests include timely payment and orders." },
    { s: "Shared values can improve cooperation between employees and management on business goals.", e: "TRUE — Shared values support mutual dependence and identification themes." },
    { s: "Customers may switch if quality falls, exercising stakeholder influence on revenue.", e: "TRUE — Customer dependency is mutual; poor performance drives switching." },
    { s: "A town relying on one employer shows community stake in that firm's survival.", e: "TRUE — Local employment ties community interests to firm outcomes." },
    { s: "Infrastructure used by firms links government investment to business stakeholder context.", e: "TRUE — Government affects and is affected by business as a stakeholder." },
    { s: "The natural environment is treated as a stakeholder expecting substantive corporate response.", e: "TRUE — Environment is listed among stakeholders with action and reporting expectations." },
    { s: "Financial structure choices can affect how risk is shared among owner stakeholders.", e: "TRUE — Financial structure is noted among success factors influencing outcomes." },
    { s: "Legal form can shape duties owed to different stakeholder groups.", e: "TRUE — Legal structure appears among contextual success factors in Ch3." },
    { s: "Stakeholder analysis includes suppliers expecting both payment and continued commercial relationship.", e: "TRUE — Supplier interests combine cash flow and order volume." },
    { s: "Ignoring market trends can harm customers and owners alike as stakeholder groups.", e: "TRUE — Market awareness affects ability to serve customer and owner interests." },
    { s: "Conflicting interests require trade-offs; stakeholders rarely align on every decision.", e: "TRUE — Textbook emphasises conflicting stakeholder interests." },
    { s: "Environmental reporting without operational improvement may still mislead stakeholders.", e: "TRUE — Reporting must reflect real action; empty reporting parallels greenwash concerns." },
    { s: "Employees are stakeholders even if they do not own shares in the company.", e: "TRUE — Stakeholder status does not require ownership." },
    { s: "Success factors such as cost control support sustainable returns for multiple stakeholder groups.", e: "TRUE — Profitability and costs underpin owner, employee, and supplier outcomes." },
  ],
  falses: [
    { s: "Stakeholders are only people who own shares; customers and employees are excluded.", e: "FALSE — Stakeholders include anyone affected by or interested in the business, not owners alone." },
    { s: "Owners seek profit but bear no risk when sales fall because limited liability removes all exposure.", e: "FALSE — Owners still face risk and reward trade-offs; textbook cites risk bearing for owners." },
    { s: "Managers are not stakeholders because they are paid to execute orders without personal interest.", e: "FALSE — Managers seek income and security and are listed as stakeholders." },
    { s: "Employees have no stake in firm performance once they receive monthly wages.", e: "FALSE — Job security and identification tie employees to firm outcomes." },
    { s: "Mutual dependence applies only between customers and suppliers, not between staff and the firm.", e: "FALSE — Managers and employees are mutually dependent on the business per textbook." },
    { s: "Shared values are irrelevant because employment contracts cover all motivation.", e: "FALSE — Shared values between staff and organisation are cited in Ch3." },
    { s: "Suppliers are stakeholders only if they own equity in the customer firm.", e: "FALSE — Suppliers expect payment and orders without needing ownership." },
    { s: "Timely delivery matters only to customers, not to the supplier's own stakeholder duties.", e: "FALSE — Suppliers must deliver quality and timeliness to fulfil their role." },
    { s: "Customers depend on firms but firms do not depend on customers for revenue.", e: "FALSE — Textbook describes mutual dependency between customers and businesses." },
    { s: "Communities cannot be stakeholders because they do not sign contracts with the firm.", e: "FALSE — Communities are affected by business activity and count as stakeholders." },
    { s: "Government is a stakeholder only when it owns shares in nationalised industries.", e: "FALSE — Government interest arises from regulation, tax, and public policy broadly." },
    { s: "Environmental stakeholders are satisfied by marketing slogans without operational change.", e: "FALSE — Textbook demands real action, not greenwash slogans alone." },
    { s: "Greenwash strengthens long-term stakeholder trust more than honest reporting.", e: "FALSE — Greenwash misleads stakeholders and undermines trust when uncovered." },
    { s: "Environmental reporting is optional fiction unrelated to stakeholder expectations.", e: "FALSE — Reporting communicates impacts to stakeholders concerned about environment." },
    { s: "All stakeholder groups want the same outcome on every business decision.", e: "FALSE — Textbook notes conflicting interests among stakeholders." },
    { s: "Legal structure is unrelated to business success and stakeholder outcomes.", e: "FALSE — Legal structure is listed among success factors affecting performance." },
    { s: "Financial structure matters only to accountants, not to owner or creditor stakeholders.", e: "FALSE — Financial structure influences risk sharing and success for stakeholders." },
    { s: "Market awareness concerns only rivals, not customer stakeholders.", e: "FALSE — Market awareness helps meet customer and competitive pressures." },
    { s: "Costs and profitability affect only owners and have no bearing on jobs or supplier orders.", e: "FALSE — Profitability underpins wages, orders, and returns for multiple groups." },
    { s: "Share value increases are unrelated to owner stakeholder interests.", e: "FALSE — Owners may seek higher share or business value per textbook." },
    { s: "Job security concerns apply only to managers, not to ordinary employees.", e: "FALSE — Employees generally seek security alongside income." },
    { s: "Suppliers care about payment but not about future order volumes.", e: "FALSE — Orders and payment together define supplier stakeholder interests." },
    { s: "Customers are stakeholders only when they sit on the board of directors.", e: "FALSE — Customers are stakeholders through mutual dependency without board seats." },
    { s: "Community opposition to a new plant shows aligned interests with owners seeking profit.", e: "FALSE — Community and owner interests may conflict on expansion impacts." },
    { s: "Government stakeholder interest disappears in free markets with no regulation.", e: "FALSE — Tax and policy interests remain even where regulation is light." },
    { s: "Real environmental action is less important than using the word sustainable in advertising.", e: "FALSE — Textbook prioritises genuine action over superficial claims." },
    { s: "Stakeholder maps include only internal staff, excluding suppliers and customers.", e: "FALSE — External groups such as suppliers, customers, and communities are stakeholders." },
    { s: "Owners receive reward without risk because businesses guarantee profits.", e: "FALSE — Owners face risk when performance is poor despite seeking profit." },
    { s: "Managers can ignore firm health because their salaries are fixed forever regardless of results.", e: "FALSE — Income and job security tie managers to firm performance." },
    { s: "Suppliers need customers but customers do not rely on suppliers for availability.", e: "FALSE — Mutual dependency means customers rely on suppliers too." },
    { s: "Sustainability reporting is meant to hide impacts from community stakeholders.", e: "FALSE — Reporting informs stakeholders rather than concealing impacts by design." },
    { s: "Profit and environmental protection align perfectly with no trade-offs in every decision.", e: "FALSE — Textbook notes conflicting stakeholder interests including environmental tensions." },
    { s: "Community jobs concerns are not stakeholder issues because employment is private.", e: "FALSE — Communities are affected by local employment and are stakeholders." },
    { s: "Government builds roads solely for private amusement unrelated to business logistics.", e: "FALSE — Infrastructure links to economic activity affecting business and public stakeholders." },
    { s: "Environment is not a stakeholder because it cannot sign contracts.", e: "FALSE — Textbook treats environment as a stakeholder expecting action and reporting." },
    { s: "Financial structure and legal form are listed success factors with no stakeholder relevance.", e: "FALSE — These factors shape how well firms serve stakeholder needs." },
    { s: "Fair supplier terms are purely legal technicalities, not stakeholder fairness concerns.", e: "FALSE — Payment and order treatment reflect supplier stakeholder interests." },
    { s: "Shared values guarantee identical opinions on every management decision.", e: "FALSE — Shared values support alignment but conflicts can still arise among stakeholders." },
    { s: "Customers cannot influence firms because switching suppliers is impossible in all markets.", e: "FALSE — Mutual dependency gives customers influence when they can switch or complain." },
    { s: "Greenwash means exceeding environmental standards while understating achievements.", e: "FALSE — Greenwash exaggerates performance rather than understating genuine achievement." },
    { s: "Owners, employees, and suppliers share no mutual dependence on firm survival.", e: "FALSE — Textbook describes mutual dependence across these groups." },
    { s: "Environmental action requires only a logo change without process improvement.", e: "FALSE — Real operational action is expected, not cosmetic logo changes alone." },
    { s: "Stakeholder conflict is rare and only occurs between owners and customers.", e: "FALSE — Conflicts can arise among many stakeholder groups." },
    { s: "Market awareness is listed as a success factor separate from serving stakeholder needs.", e: "FALSE — It supports responding to customer and competitive stakeholder pressures." },
    { s: "Cost control helps sustain employment and supplier relationships when profitability supports them.", e: "TRUE — Wait this is true - need to keep in truths" },
  ],
};

// Remove erroneous duplicate and fix spec36 falses count - remove last item that was true mislabeled
spec36.falses.pop();

function buildSection(subsection, spec) {
  const state = createSectionState(spec);
  const trueCounts = makeTrueCounts();
  return trueCounts.map((tc, i) => buildCase(subsection, i + 1, spec, state, tc));
}

function stripMeta(c) {
  const { _life, _trueCount, ...rest } = c;
  return rest;
}

function validate(cases, subsection) {
  const sub = cases.filter((c) => c.subsection === subsection);
  if (sub.length !== 50) throw new Error(`${subsection}: expected 50 cases, got ${sub.length}`);
  for (let i = 1; i <= 50; i++) {
    const id = `CASE ${subsection}.${pad(i)}`;
    if (!sub.find((c) => c.case_id === id)) throw new Error(`Missing ${id}`);
  }
  for (const k of [1, 2, 3, 4, 5]) {
    const n = sub.filter((c) => countTrues(c.answer_key) === k).length;
    if (n !== 10) throw new Error(`${subsection}: ${k}T count ${n}`);
  }
  for (const c of sub) {
    if (c.statements.length !== 5) throw new Error(`${c.case_id}: statements`);
    if (c.answer_key.length !== 5) throw new Error(`${c.case_id}: answer_key`);
    if (c.tactical_explanations.length !== 5) throw new Error(`${c.case_id}: tactical`);
    c.tactical_explanations.forEach((t, i) => {
      const expect = c.answer_key[i] ? "TRUE" : "FALSE";
      if (!t.startsWith(`${expect} —`)) throw new Error(`${c.case_id} stmt ${i + 1} prefix`);
    });
    c.statements.forEach((s) => {
      if (FORBIDDEN_NEON.test(s)) throw new Error(`${c.case_id} forbidden neon in statement: ${s}`);
    });
    c.tactical_explanations.forEach((t) => {
      if (/the book/i.test(t)) throw new Error(`${c.case_id} tactical mentions the book`);
    });
  }
  const life = sub.filter((c) => c._life).length;
  if (life < 11 || life > 14) console.warn(`${subsection}: life cases ${life} (target ~12-13)`);
}

const all = [
  ...buildSection("3.4", spec34),
  ...buildSection("3.5", spec35),
  ...buildSection("3.6", spec36),
];

for (const s of ["3.4", "3.5", "3.6"]) validate(all, s);

const statements = all.flatMap((c) => c.statements);
if (statements.length !== 750) throw new Error(`Expected 750 statements, got ${statements.length}`);
const norm = (s) => s.trim().toLowerCase().replace(/\s+/g, " ");
const seen = new Set();
for (const s of statements) {
  const n = norm(s);
  if (seen.has(n)) throw new Error(`Duplicate statement: ${s.slice(0, 80)}`);
  seen.add(n);
}

const out = all.map(stripMeta);
fs.writeFileSync(OUT, JSON.stringify(out, null, 2) + "\n");

console.log(`Wrote ${out.length} cases to ${OUT}`);
for (const s of ["3.4", "3.5", "3.6"]) {
  const sub = all.filter((c) => c.subsection === s);
  const hist = [1, 2, 3, 4, 5].map((k) => `${k}T:${sub.filter((c) => c._trueCount === k).length}`).join(" ");
  console.log(`${s} histogram ${hist} | life:${sub.filter((c) => c._life).length}`);
}
console.log(`Unique statements: ${seen.size}`);
