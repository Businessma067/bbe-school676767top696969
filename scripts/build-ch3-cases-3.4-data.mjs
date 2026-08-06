/**
 * Build scripts/ch3-cases-3.4-data.mjs — 50 FC cases for Fuhrmann Ch3 §3.4
 * Run: node scripts/build-ch3-cases-3.4-data.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { numSynonymKey, toFcContext } from "./ch3-fc-style-lock.mjs";

const OUT = path.join(import.meta.dirname, "ch3-cases-3.4-data.mjs");
const FORBIDDEN = /\b(automatically|never|zero|always)\b/i;
const BANNED = /\bthe book\b|\baccording to the book\b|\bFuhrmann\b|\(alt\s|case review|\bstyria\b/i;

function countTrues(key) {
  return key.filter(Boolean).length;
}

function shuffle(arr, seed) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = (seed * 17 + i * 31) % (i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const TRUE_COUNTS = shuffle(
  [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5],
  34,
);

const LIFE_NUMS = new Set([1, 2, 3, 5, 7, 9, 14, 15, 24, 29, 31, 37, 45]);

const titles = [
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
];

const contexts = [
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
];

const difficulties = [
  "4/5", "5/5", "5/5", "3/5", "4/5", "4/5", "5/5", "3/5", "2/5", "2/5",
  "3/5", "2/5", "3/5", "5/5", "5/5", "5/5", "5/5", "3/5", "4/5", "4/5",
  "2/5", "5/5", "2/5", "3/5", "3/5", "2/5", "4/5", "3/5", "1/5", "4/5",
  "3/5", "5/5", "2/5", "5/5", "4/5", "3/5", "2/5", "4/5", "5/5", "3/5",
  "3/5", "2/5", "5/5", "3/5", "2/5", "2/5", "1/5", "4/5", "1/5", "3/5",
];

const truths = [
  ["Under the EU definition, a micro enterprise may employ fewer than ten people.", "EU micro classification requires fewer than ten employees."],
  ["Exceeding the €2m turnover cap can disqualify a firm from micro status even when staff are below ten.", "Turnover above €2m breaks the micro financial cap even with a small workforce."],
  ["Micro status allows either turnover up to €2m or a balance sheet total up to €2m alongside the staff limit.", "Micro firms must meet the staff cap and either the turnover or balance sheet financial ceiling."],
  ["A small enterprise may employ fewer than fifty people under EU definitions.", "The EU small category sets an upper staff limit below fifty employees."],
  ["Small status also requires turnover not exceeding €10m.", "Small classification additionally requires turnover at or below €10m."],
  ["Turnover above €10m can push a firm out of the small category even when staff remain below fifty.", "The €10m turnover cap is binding alongside the staff threshold."],
  ["Medium enterprises employ fewer than two hundred and fifty people under EU definitions.", "EU medium enterprises must employ fewer than 250 people."],
  ["Medium status permits turnover up to €50m or a balance sheet total up to €43m together with the staff cap.", "Medium classification uses staff plus either turnover or balance sheet financial ceilings."],
  ["Two hundred employees fall within the medium staff threshold.", "200 is below the 250-person medium limit."],
  ["A workforce of about ten thousand places AT&S outside EU medium enterprise limits.", "Ten thousand staff far exceeds the 250-employee medium ceiling."],
  ["Approximately ninety-nine percent of businesses in the EU are SMEs.", "Official EU data cite that about 99% of EU businesses are SMEs."],
  ["Official SME classification can determine eligibility for EU support programmes and finance schemes.", "EU support and finance often hinge on meeting SME criteria."],
  ["Size definitions matter because accounting rules may differ for smaller and larger firms.", "Size classification affects which accounting rules apply to a firm."],
  ["MSME commonly groups micro, small, and medium enterprises under one umbrella term.", "MSME refers to micro, small, and medium enterprises collectively."],
  ["Crossing size thresholds can change which accounting rules apply to a business.", "Growing beyond thresholds can shift reporting requirements."],
  ["Exactly ten staff exceeds the micro employee ceiling of fewer than ten.", "The micro limit is strictly below ten employees; ten does not qualify."],
  ["Exactly fifty staff exceeds the small category employee limit.", "The small staff cap is strictly below fifty employees."],
  ["Exactly 250 staff exceeds the medium employee ceiling.", "The medium cap excludes firms with 250 or more employees."],
  ["Exceeding medium staff or financial thresholds generally moves a firm out of SME status.", "Surpassing medium criteria places a firm in the large category."],
  ["Grant schemes often require proof that the applicant meets official micro enterprise criteria.", "Support programmes use the standard EU micro thresholds for eligibility."],
  ["Micro firms must meet the staff cap and either the turnover or balance sheet financial limit.", "EU micro rules pair staff with one of two financial caps."],
  ["Small enterprises must record turnover not exceeding €10m.", "€10m is the small turnover ceiling in the EU table."],
  ["A balance sheet above €43m can disqualify medium status even with low turnover.", "The €43m balance sheet limit is binding for medium classification."],
  ["Policies supporting SMEs affect the vast majority of EU businesses by number.", "With ~99% SME share, SME-focused policy reaches most businesses."],
  ["Crossing micro limits while staying within small thresholds reclassifies the firm as small.", "Qualifying within small limits replaces micro status."],
  ["Size differences can mean different accounting rule sets for a micro supplier and AT&S.", "Size classification links to differing accounting rules between micro and large firms."],
  ["Medium enterprises may report turnover up to €50m under EU definitions.", "€50m is the medium turnover ceiling in the EU table."],
  ["Micro requires fewer than ten staff plus financial caps, stricter than small staff limits.", "Micro staff cap is below ten, much tighter than small's below fifty."],
  ["Lenders may verify SME status using official headcount and turnover thresholds.", "Finance programmes rely on standard SME criteria."],
  ["Two people employed falls well within the micro staff ceiling.", "Two employees is below the ten-person micro limit."],
  ["SME tiers require joint satisfaction of staff and relevant financial thresholds.", "EU definitions combine staff with financial caps for each tier."],
  ["Most EU businesses by count are classified within SME size bands.", "~99% of EU businesses are SMEs by count."],
  ["Turnover above €50m disqualifies medium status even if balance sheet qualifies.", "€52m turnover exceeds the €50m medium ceiling."],
  ["One hundred and eighty employees fits the medium staff band if financial tests also pass.", "180 is within medium's below-250 staff range."],
  ["Micro pairs sub-ten staff with €2m turnover or balance sheet limits.", "This matches the EU micro row in the official SME table."],
  ["Tina and Steve illustrate micro-scale operations compared with AT&S's large workforce.", "Local micro ventures contrast with AT&S's large-scale workforce."],
  ["Complete staff and financial data are needed to verify micro or other SME tiers.", "Both staff and financial caps must be checked."],
  ["Turnover above €50m prevents medium classification when that cap is breached.", "€55m exceeds the €50m medium turnover limit."],
  ["Large firms like AT&S can employ thousands despite being few in number.", "AT&S illustrates large-scale employment in a rare large firm."],
  ["€43m is the medium balance sheet ceiling paired with sub-250 staff.", "€43m balance sheet is the medium cap in the EU table."],
  ["Micro enterprises form a large part of the SME group that dominates EU business counts.", "Micro firms are part of the ~99% SME majority."],
  ["Eight staff is compatible with micro but financial figures must still be verified.", "Eight staff fits micro range pending financial tests."],
  ["Leaving SME status can end eligibility for certain EU SME finance programmes.", "SME-tied support typically excludes large firms."],
  ["Thirty staff is within the small enterprise employee limit.", "30 is below the fifty-employee small cap."],
  ["One hundred and twenty-five staff satisfies the medium employee threshold.", "125 is below 250 staff limit."],
  ["EU SME tiers combine employee ceilings with turnover and/or balance sheet caps.", "Combined criteria define each tier in the EU table."],
  ["Staff headcount must be verified alongside turnover for medium classification.", "Staff verification is mandatory alongside turnover."],
  ["Four employees fall within the micro staff ceiling.", "Four staff is below ten-employee micro limit."],
  ["A firm can progress from micro to small to medium as metrics cross successive thresholds.", "Growth can move a firm through SME tiers sequentially."],
  ["Nine employees satisfy the micro staff ceiling of fewer than ten people.", "Nine is below the ten-person micro limit."],
  ["€1.8m turnover stays within the micro turnover cap of €2m.", "€1.8m meets the micro turnover threshold."],
  ["Six employees fit the micro staff ceiling even when turnover exceeds €2m.", "Six staff meets the micro headcount test though turnover may fail."],
  ["Forty-five staff and €9.5m turnover together meet EU small enterprise thresholds.", "Both staff below fifty and turnover below €10m satisfy small criteria."],
  ["Thirty-eight staff fits the small employee ceiling below fifty.", "Thirty-eight is within the small staff limit."],
  ["Two hundred and forty employees fits the medium staff ceiling below two hundred and fifty.", "240 is below the 250-person medium limit."],
  ["€48m turnover is within the €50m medium turnover cap.", "€48m meets the medium turnover threshold."],
  ["Two hundred staff with €49m turnover and a €42m balance sheet can satisfy medium thresholds.", "All three metrics can meet medium caps together."],
  ["€180k turnover is well below the €2m micro turnover cap.", "€180k meets the micro turnover threshold."],
  ["Four staff with €600k turnover can qualify as micro when financial caps are met.", "Low headcount and turnover can satisfy micro criteria."],
  ["One hundred and twenty-five staff with €25m turnover and €30m balance sheet can satisfy medium thresholds.", "Staff and both financial figures can meet medium caps."],
  ["Thirty staff with €9.9m turnover satisfies EU small enterprise thresholds.", "Both metrics meet small staff and turnover caps."],
  ["One hundred staff with €30m turnover fits the medium staff and turnover bands.", "100 staff and €30m turnover can meet medium thresholds pending balance sheet."],
  ["Nine staff fits the micro employee ceiling pending turnover verification.", "Nine is below the ten-person micro limit."],
  ["€2m is the micro turnover ceiling in the EU SME table.", "€2m turnover cap applies to micro enterprises."],
  ["€10m is the small turnover ceiling in the EU SME table.", "€10m turnover cap applies to small enterprises."],
  ["€50m is the medium turnover ceiling in the EU SME table.", "€50m turnover cap applies to medium enterprises."],
  ["€2m is the micro balance sheet ceiling in the EU SME table.", "€2m balance sheet cap applies to micro enterprises."],
  ["€43m is the medium balance sheet ceiling in the EU SME table.", "€43m balance sheet cap applies to medium enterprises."],
  ["Micro classification uses an OR test between turnover and balance sheet financial caps.", "Only one financial measure must qualify for micro status."],
  ["Medium classification uses an OR test between turnover and balance sheet financial caps.", "Only one financial measure must qualify for medium status."],
  ["SME status depends on official headcount and financial thresholds, not on industry sector.", "Sector does not override EU size threshold tests."],
  ["Export activity does not override EU SME threshold tests for classification.", "Cross-border sales do not replace official size criteria."],
  ["Growing beyond micro thresholds can reclassify a firm as small when small criteria are met.", "Progression to small replaces micro when small limits are satisfied."],
  ["Growing beyond small thresholds can reclassify a firm as medium when medium criteria are met.", "Progression to medium replaces small when medium limits are satisfied."],
  ["Three thousand staff far exceeds the two hundred and fifty employee medium ceiling.", "3,000 staff places a firm outside medium limits."],
  ["€200m turnover far exceeds the €50m medium turnover ceiling.", "€200m turnover places a firm outside medium limits."],
  ["€52m turnover exceeds the €50m medium turnover cap.", "€52m breaks the medium turnover threshold."],
  ["€55m turnover exceeds the €50m medium turnover cap.", "€55m breaks the medium turnover threshold."],
  ["€10.4m turnover exceeds the €10m small turnover cap.", "€10.4m breaks the small turnover threshold."],
  ["€2.1m turnover exceeds the €2m micro turnover cap.", "€2.1m breaks the micro turnover threshold."],
  ["€2.3m turnover exceeds the €2m micro turnover cap.", "€2.3m breaks the micro turnover threshold."],
  ["€2.4m turnover exceeds the €2m micro turnover cap.", "€2.4m breaks the micro turnover threshold."],
  ["€2.05m turnover exceeds the €2m micro turnover cap.", "€2.05m breaks the micro turnover threshold."],
  ["A €44m balance sheet exceeds the €43m medium balance sheet cap.", "€44m breaks the medium balance sheet threshold."],
  ["A €43.5m balance sheet exceeds the €43m medium balance sheet cap.", "€43.5m breaks the medium balance sheet threshold."],
  ["Seven staff fits the micro employee ceiling below ten.", "Seven is below the ten-person micro limit."],
  ["Eight staff fits the micro employee ceiling below ten.", "Eight is below the ten-person micro limit."],
  ["One hundred and eighty staff fits the medium employee ceiling below two hundred and fifty.", "180 is below the 250-person medium limit."],
  ["One hundred and twenty staff fits the medium employee ceiling below two hundred and fifty.", "120 is below the 250-person medium limit."],
  ["One hundred staff fits the medium employee ceiling below two hundred and fifty.", "100 is below the 250-person medium limit."],
  ["Two hundred staff fits the medium employee ceiling below two hundred and fifty.", "200 is below the 250-person medium limit."],
  ["Forty-five staff fits the small employee ceiling below fifty.", "45 is below the fifty-employee small limit."],
  ["Micro firms are included in SME counts and MSME groupings.", "Micro enterprises form part of the SME category."],
  ["Because SMEs are numerous by count, SME-focused policy reaches most EU businesses.", "High SME share by number shapes EU business policy."],
  ["Few large firms can still account for substantial employment despite being rare by count.", "Large employers can be few in number yet significant in jobs."],
  ["SME failures can still affect employees, suppliers, and local communities.", "SME insolvency has stakeholder effects beyond firm count statistics."],
  ["Large firms face reporting duties rather than exemption from financial disclosure.", "Large classification brings reporting obligations."],
  ["EU support programmes use standard SME thresholds to verify applicant eligibility.", "Finance schemes rely on official size criteria."],
  ["A firm with nine staff still needs turnover or balance sheet data to confirm micro status.", "Financial caps must be verified alongside headcount."],
  ["A firm with eight staff still needs turnover or balance sheet data to confirm micro status.", "Financial caps must be verified alongside headcount."],
  ["Medium status requires fewer than two hundred and fifty staff plus a qualifying financial test.", "Medium combines staff ceiling with turnover or balance sheet caps."],
  ["Small status requires fewer than fifty staff plus turnover at or below €10m.", "Small combines staff ceiling with the €10m turnover cap."],
  ["Micro status requires fewer than ten staff plus turnover at or below €2m or balance sheet at or below €2m.", "Micro combines staff ceiling with one financial cap."],
  ["AT&S is classified as large under EU thresholds because headcount far exceeds medium limits.", "AT&S's ~10,000 staff exceeds the 250-person medium ceiling."],
  ["Tina and Steve's bakery with six staff meets the micro headcount test.", "Six employees is below the ten-person micro limit."],
  ["Steve's repair shop with two staff meets the micro headcount test.", "Two employees is below the ten-person micro limit."],
  ["A village craft business with four staff meets the micro headcount test.", "Four employees is below the ten-person micro limit."],
  ["A retailer with thirty staff meets the small headcount test.", "Thirty employees is below the fifty-person small limit."],
  ["An architect practice with nine staff meets the micro headcount test.", "Nine employees is below the ten-person micro limit."],
  ["A wholesaler with thirty-eight staff meets the small headcount test.", "Thirty-eight employees is below the fifty-person small limit."],
  ["A textile plant with exactly two hundred fifty staff fails the medium headcount test.", "250 is not fewer than 250, so medium staff test fails."],
  ["A logistics company with exactly fifty staff fails the small headcount test.", "Fifty is not fewer than fifty, so small staff test fails."],
  ["A family firm with exactly ten staff fails the micro headcount test.", "Ten is not fewer than ten, so micro staff test fails."],
  ["Turnover at or below €2m can satisfy the micro financial test.", "€2m is the micro turnover ceiling."],
  ["Turnover at or below €10m can satisfy the small financial test.", "€10m is the small turnover ceiling."],
  ["Turnover at or below €50m can satisfy the medium financial test.", "€50m is the medium turnover ceiling."],
  ["Balance sheet at or below €2m can satisfy the micro financial test.", "€2m is the micro balance sheet ceiling."],
  ["Balance sheet at or below €43m can satisfy the medium financial test.", "€43m is the medium balance sheet ceiling."],
  ["The ninety-nine percent SME statistic refers to business numbers, not GDP share.", "The statistic measures business counts rather than GDP share."],
  ["Definitions actively shape finance access and regulatory treatment of firms.", "SME labels affect support and reporting, not just description."],
  ["Meeting one SME criterion alone does not guarantee overall SME status in a tier.", "Each tier requires joint staff and financial tests."],
  ["Progression through SME tiers follows successive threshold crossings as firms grow.", "Firms can move from micro to small to medium with growth."],
  ["Micro enterprises dominate EU business counts as part of the broader SME group.", "Micro firms contribute to the ~99% SME majority by number."],
  ["Medium enterprises must satisfy staff limits and at least one financial cap.", "Medium uses combined staff and financial criteria."],
  ["Small enterprises must satisfy staff limits and the €10m turnover cap.", "Small uses combined staff and turnover criteria."],
  ["Classification review requires both headcount and financial figures for EU SME tiers.", "Incomplete data prevents reliable SME verification."],
  ["A tech group with three thousand staff is treated as large under EU size rules.", "3,000 employees exceeds all SME staff ceilings."],
  ["A firm crossing medium limits becomes ineligible for certain EU SME finance programmes.", "SME-tied support excludes firms above medium thresholds."],
  ["Accounting rule sets can differ between micro firms and large groups such as AT&S.", "Size classification affects applicable accounting rules."],
  ["EU SME tables pair each tier with distinct staff and financial ceilings.", "Micro, small, and medium each have separate threshold rows."],
  ["One hundred and twenty staff with €52m turnover fails the medium turnover test.", "€52m exceeds the €50m medium turnover cap."],
  ["Two hundred staff with €55m turnover fails the medium turnover test.", "€55m exceeds the €50m medium turnover cap."],
  ["One hundred and eighty staff with €45m turnover can meet medium staff and turnover tests.", "180 staff and €45m turnover fit medium ceilings."],
  ["A manufacturer with two hundred forty staff can meet the medium staff test.", "240 is below the 250-person medium limit."],
  ["An engineering firm with two hundred staff can meet the medium staff test.", "200 is below the 250-person medium limit."],
  ["Grant eligibility for micro enterprises requires meeting official micro thresholds.", "Micro grants use standard EU micro criteria."],
  ["SME verification for bank loans may require proof of headcount and turnover bands.", "Lenders check official SME thresholds for guarantee schemes."],
  ["A firm at eight staff is not confirmed as micro without financial verification.", "Headcount alone does not confirm micro status."],
  ["A firm at nine staff is not confirmed as micro without financial verification.", "Headcount alone does not confirm micro status."],
  ["Medium turnover of €49m stays within the €50m medium cap.", "€49m meets the medium turnover threshold."],
  ["Medium turnover of €40m stays within the €50m medium cap.", "€40m meets the medium turnover threshold."],
  ["Small turnover of €9.5m stays within the €10m small cap.", "€9.5m meets the small turnover threshold."],
  ["Small turnover of €9.9m stays within the €10m small cap.", "€9.9m meets the small turnover threshold."],
  ["Small turnover of €8m stays within the €10m small cap.", "€8m meets the small turnover threshold."],
  ["Micro turnover of €1.5m stays within the €2m micro cap.", "€1.5m meets the micro turnover threshold."],
  ["Micro turnover of €1.6m balance sheet context still allows €1.6m balance sheet under €2m cap.", "€1.6m meets the micro balance sheet threshold."],
  ["Micro turnover of €1.7m balance sheet total stays within the €2m micro balance sheet cap.", "€1.7m meets the micro balance sheet threshold."],
  ["Micro turnover of €1.9m balance sheet total stays within the €2m micro balance sheet cap.", "€1.9m meets the micro balance sheet threshold."],
  ["Medium balance sheet of €42m stays within the €43m medium cap.", "€42m meets the medium balance sheet threshold."],
  ["Medium balance sheet of €40m stays within the €43m medium cap.", "€40m meets the medium balance sheet threshold."],
  ["Medium balance sheet of €30m stays within the €43m medium cap.", "€30m meets the medium balance sheet threshold."],
  ["SME classification principles combine staff ceilings with turnover and/or balance sheet caps.", "Combined criteria define EU SME tiers in the official table."],
  ["Tina and Steve serve as micro-scale examples alongside AT&S as a large firm.", "Course examples contrast micro local ventures with AT&S scale."],
  ["About ninety-nine percent of EU businesses are SMEs by number rather than by employment share alone.", "The statistic measures business counts."],
  ["Official size categories matter for EU-backed finance and support programme access.", "Definitions gate eligibility for SME support."],
  ["Crossing the medium employee or financial ceiling moves classification toward large enterprise status.", "Exceeding medium thresholds exits SME bands."],
  ["An SME may lose access to certain guarantee schemes after reclassification as large.", "SME-tied finance programmes typically exclude large firms."],
  ["Micro enterprises remain part of MSME groupings alongside small and medium firms.", "MSME terminology covers micro, small, and medium categories together."],
  ["Staff headcount alone cannot confirm small status without checking the turnover cap.", "Small classification requires both staff and turnover tests."],
  ["Balance sheet totals can disqualify medium status even when turnover appears moderate.", "The medium balance sheet cap is binding alongside staff limits."],
  ["EU SME definitions apply equally regardless of whether a firm operates locally or nationally.", "Geographic scope does not replace official EU size thresholds."],
  ["A firm that exceeds the micro turnover cap may still qualify as small if small thresholds are met.", "Classification moves upward to the next tier when higher thresholds are satisfied."],
  ["Medium enterprises must satisfy the staff ceiling and at least one qualifying financial test.", "Medium status combines headcount with turnover or balance sheet caps."],
  ["Large employers such as AT&S remain relatively few in number compared with SME business counts.", "Large firms are rare by count despite substantial employment."],
  ["Incomplete financial data prevents reliable verification of micro or other SME tiers.", "Both staff and financial figures are needed for classification review."],
  ["Grant eligibility for micro enterprises requires meeting official micro thresholds.", "Micro grants use standard EU micro criteria."],
  ["SME verification for bank loans may require proof of headcount and turnover bands.", "Lenders check official SME thresholds for guarantee schemes."],
  ["Accounting rule sets can differ between micro firms and large groups such as AT&S.", "Size classification affects applicable accounting rules."],
  ["Reporting thresholds for SMEs may differ from those required of large listed groups.", "Size classification affects reporting obligations."],
];

const falses = [
  ["Meeting the staff ceiling alone is sufficient for micro status regardless of turnover or balance sheet totals.", "Micro status requires both the staff ceiling and a turnover or balance sheet cap."],
  ["Because staff are below ten, a firm remains a micro enterprise despite turnover above €2m.", "Both staff and financial thresholds must be met; high turnover can exclude micro status."],
  ["A firm qualifies as micro because its balance sheet is below €2m, regardless of turnover above €2m.", "Turnover above €2m can disqualify micro status despite a qualifying balance sheet."],
  ["Forty-five staff alone guarantees small classification even if turnover exceeds €10m.", "Both staff and turnover thresholds must be satisfied for small status."],
  ["Thirty-eight staff alone keeps a firm in the small category despite turnover above €10m.", "Small status requires both staff and turnover limits; breaching turnover removes small classification."],
  ["Two hundred and forty employees exceed the medium staff ceiling.", "240 is below 250 and therefore within the medium staff limit."],
  ["Because turnover is within €50m, balance sheet size is irrelevant for medium classification.", "Exceeding the balance sheet cap disqualifies medium status even if turnover qualifies."],
  ["A firm fails the medium test because both financial figures must be below their respective caps.", "Only one financial threshold needs to be met alongside staff; both need not pass."],
  ["AT&S counts as a medium enterprise because it operates internationally.", "Medium status depends on thresholds, not on geographic scope alone."],
  ["SMEs represent a narrow minority of EU firms because large corporations dominate registration statistics.", "SMEs form the vast majority, not a minority, of EU businesses."],
  ["SME labels are purely descriptive and have no effect on access to finance or reporting rules.", "Definitions actively shape finance access and regulatory treatment."],
  ["MSME excludes micro firms and covers only small and medium categories.", "Micro firms are explicitly included in MSME/SME groupings."],
  ["Accounting requirements are identical for micro firms and large multinationals under EU practice.", "Size affects accounting rules, implying differences by category."],
  ["Seven staff and a €1.9m balance sheet guarantee micro status despite turnover above €2m.", "Exceeding the turnover cap disqualifies micro status even with qualifying staff and balance sheet."],
  ["Ten employees still count as micro because the threshold says fewer than ten.", "Ten employees is not fewer than ten, so the staff test fails."],
  ["Fifty employees meets the small enterprise staff requirement of fewer than fifty.", "Small requires fewer than fifty staff; fifty is not eligible."],
  ["Two hundred and fifty employees satisfies the medium requirement of fewer than two hundred and fifty.", "250 is not fewer than 250; the staff test fails."],
  ["Any firm with more than ten employees is classified as large under EU rules.", "Small and medium tiers cover firms well above ten employees."],
  ["Any local shop qualifies as micro without reference to staff or turnover data.", "Official staff and financial tests determine micro status."],
  ["Micro classification requires both turnover and balance sheet to stay below €2m simultaneously.", "Only one financial measure must qualify, not both at once."],
  ["Small firms may report turnover up to €50m provided staff are below fifty.", "€50m is the medium turnover cap, not the small cap."],
  ["Medium status is confirmed because staff and turnover both qualify despite balance sheet breach.", "Exceeding the balance sheet cap blocks medium status despite qualifying staff and turnover."],
  ["Because SMEs are numerous, individual SME failures have no community impact.", "SME failures can still affect employees, suppliers, and local communities."],
  ["Adding staff and sales can leave a firm classified as micro even after crossing small thresholds.", "Exceeding micro thresholds moves classification upward if small criteria are met."],
  ["All EU firms file identical full public accounts regardless of size category.", "SME and large firms face different reporting expectations."],
  ["Medium turnover cap is €10m, identical to the small limit.", "€10m is the small cap; medium allows up to €50m."],
  ["Any firm with forty staff is micro because it employs fewer than fifty people.", "Forty staff exceeds micro limits and aligns with small staff range instead."],
  ["SME definitions are irrelevant once a firm exports outside the home country.", "Export activity does not override SME threshold tests."],
  ["Operating alone prevents micro classification because micro requires at least five staff.", "There is no minimum staff count for micro beyond the upper cap."],
  ["Turnover within €10m alone makes a firm small even with three hundred employees.", "Three hundred staff exceeds medium limits regardless of turnover."],
  ["Three thousand staff can still fall within medium limits if turnover is managed.", "3,000 far exceeds the 250-employee medium cap."],
  ["Nine staff and a €1.6m balance sheet confirm micro status despite €2.05m turnover.", "Turnover above €2m disqualifies micro status even with qualifying balance sheet."],
  ["The ninety-nine percent statistic proves SMEs generate ninety-nine percent of EU GDP.", "The figure refers to business numbers, not GDP share."],
  ["Medium status holds because balance sheet is within €43m despite turnover above €50m.", "Exceeding turnover cap blocks medium status despite balance sheet within limits."],
  ["One hundred and eighty staff keeps a firm in the small category because turnover is below €50m.", "180 staff exceeds small's below-fifty limit."],
  ["Medium pairs sub-250 staff with a €10m turnover cap.", "€10m is the small turnover cap, not medium."],
  ["AT&S counts as a micro enterprise because it supplies components to phone makers.", "Supplier role does not determine size; headcount and financials do."],
  ["Nine staff alone proves micro status without financial documentation.", "Financial thresholds are mandatory for micro confirmation."],
  ["€55m turnover confirms medium status because balance sheet is below €43m.", "Turnover breach blocks medium status despite balance sheet within cap."],
  ["Because SMEs are ninety-nine percent of firms, large firms employ fewer than one percent of workers.", "Few large firms can still account for substantial employment shares."],
  ["€2m turnover cap applies to small enterprises rather than micro.", "€2m turnover cap applies to micro, not small."],
  ["Micro firms are excluded from SME statistics because they are too small to register.", "Micro firms are included in SME counts and definitions."],
  ["Eight staff proves a firm is micro without checking turnover or balance sheet.", "Financial caps must also be satisfied for micro status."],
  ["Large classification removes all legal duties to publish any financial information.", "Large firms face reporting duties rather than exemption."],
  ["A retailer is micro because turnover is under €10m despite thirty staff.", "Staff above ten and turnover above €2m exclude micro; small may apply."],
  ["A firm is small because turnover is only €25m despite one hundred twenty-five staff.", "125 staff exceeds small staff limit despite moderate turnover."],
  ["Micro, small, and medium are identical categories with the same staff ceilings.", "Each tier has distinct staff and financial thresholds."],
  ["€40m turnover alone is sufficient proof of medium enterprise status.", "Medium requires sub-250 staff plus financial tests."],
  ["Village location prevents micro classification regardless of size metrics.", "Location does not override EU size thresholds."],
  ["Firms skip the small tier whenever they hire a tenth employee.", "Ten employees fail micro but small requires further staff and turnover tests."],
  ["Exactly fifty staff satisfies the small enterprise requirement of fewer than fifty.", "Fifty is not fewer than fifty; the small staff test fails."],
  ["Exactly ten staff satisfies the micro requirement of fewer than ten employees.", "Ten is not fewer than ten; the micro staff test fails."],
  ["Exactly two hundred fifty staff satisfies the medium requirement of fewer than two hundred and fifty.", "250 is not fewer than 250; the medium staff test fails."],
  ["€2.1m turnover still meets the micro turnover cap of €2m.", "€2.1m exceeds the €2m micro turnover threshold."],
  ["€2.3m turnover still meets the micro turnover cap of €2m.", "€2.3m exceeds the €2m micro turnover threshold."],
  ["€2.4m turnover still meets the micro turnover cap of €2m.", "€2.4m exceeds the €2m micro turnover threshold."],
  ["€10.4m turnover still meets the small turnover cap of €10m.", "€10.4m exceeds the €10m small turnover threshold."],
  ["€52m turnover still meets the medium turnover cap of €50m.", "€52m exceeds the €50m medium turnover threshold."],
  ["€55m turnover still meets the medium turnover cap of €50m.", "€55m exceeds the €50m medium turnover threshold."],
  ["A €44m balance sheet still meets the medium balance sheet cap of €43m.", "€44m exceeds the €43m medium balance sheet threshold."],
  ["A €43.5m balance sheet still meets the medium balance sheet cap of €43m.", "€43.5m exceeds the €43m medium balance sheet threshold."],
  ["Two staff exceeds the micro employee ceiling of fewer than ten.", "Two is below ten and fits the micro staff ceiling."],
  ["Six staff exceeds the micro employee ceiling of fewer than ten.", "Six is below ten and fits the micro staff ceiling."],
  ["Thirty staff exceeds the small employee ceiling of fewer than fifty.", "Thirty is below fifty and fits the small staff ceiling."],
  ["One hundred and eighty staff fits the small employee ceiling below fifty.", "180 exceeds the fifty-employee small limit."],
  ["Two hundred staff fits the small employee ceiling below fifty.", "200 exceeds the fifty-employee small limit."],
  ["Three thousand staff fits the medium employee ceiling below two hundred and fifty.", "3,000 far exceeds the 250-person medium limit."],
  ["Ten thousand AT&S staff fits the medium employee ceiling below two hundred and fifty.", "10,000 far exceeds the 250-person medium limit."],
  ["Turnover of €9.5m exceeds the small turnover cap of €10m.", "€9.5m is within the €10m small turnover ceiling."],
  ["Turnover of €9.9m exceeds the small turnover cap of €10m.", "€9.9m is within the €10m small turnover ceiling."],
  ["Turnover of €49m exceeds the medium turnover cap of €50m.", "€49m is within the €50m medium turnover ceiling."],
  ["Turnover of €1.8m exceeds the micro turnover cap of €2m.", "€1.8m is within the €2m micro turnover ceiling."],
  ["Turnover of €180k exceeds the micro turnover cap of €2m.", "€180k is within the €2m micro turnover ceiling."],
  ["Turnover of €600k exceeds the micro turnover cap of €2m.", "€600k is within the €2m micro turnover ceiling."],
  ["A firm with forty-five staff is micro because it employs fewer than fifty people.", "Forty-five staff exceeds the micro ceiling of fewer than ten."],
  ["A firm with thirty-eight staff is micro because it employs fewer than fifty people.", "Thirty-eight staff exceeds the micro ceiling of fewer than ten."],
  ["Medium status follows from international operations regardless of headcount.", "Medium status depends on EU thresholds, not geographic scope."],
  ["Micro status follows from supplying larger manufacturers regardless of headcount.", "Supplier relationships do not determine EU size classification."],
  ["SME classification is optional for firms seeking EU support programmes.", "Official SME criteria gate access to many support schemes."],
  ["Crossing the micro staff ceiling immediately classifies a firm as large.", "Ten staff fails micro but small and medium tiers still exist."],
  ["Crossing the small staff ceiling immediately classifies a firm as large.", "Fifty staff fails small but medium tier may still apply."],
  ["Balance sheet figures are ignored for medium status when turnover qualifies.", "Either financial cap can disqualify medium status when breached."],
  ["Turnover figures are ignored for medium status when balance sheet qualifies.", "Either financial cap can disqualify medium status when breached."],
  ["Both turnover and balance sheet must fail for medium status to be denied.", "Breaching either financial cap can block medium classification."],
  ["Both turnover and balance sheet must pass for micro status to be granted.", "Only one financial measure must qualify for micro status."],
  ["A firm with nine staff is confirmed micro without turnover documentation.", "Financial thresholds are mandatory for micro confirmation."],
  ["A firm with eight staff is confirmed micro without turnover documentation.", "Financial thresholds are mandatory for micro confirmation."],
  ["Grant schemes ignore official micro thresholds when the applicant is a local shop.", "Support programmes use standard EU micro criteria."],
  ["The EU micro cap for turnover is €10m rather than €2m.", "€10m is the small turnover cap, not the micro cap."],
  ["The EU small cap for turnover is €2m rather than €10m.", "€2m is the micro turnover cap, not the small cap."],
  ["The EU medium cap for turnover is €10m rather than €50m.", "€10m is the small turnover cap, not the medium cap."],
  ["The EU medium cap for balance sheet is €50m rather than €43m.", "€43m is the medium balance sheet cap in the EU table."],
  ["Large classification removes all legal duties to publish any financial information.", "Large firms face reporting duties rather than exemption."],
  ["AT&S counts as a medium enterprise because its Austrian headquarters defines EU size.", "AT&S's ~10,000 staff exceeds medium limits."],
  ["Tina and Steve count as a large enterprise because their bakery supplies many customers.", "Tina and Steve illustrate micro-scale operations, not large enterprise status."],
  ["About ninety-nine percent of EU employees work in SMEs because ninety-nine percent of firms are SMEs.", "The statistic refers to business numbers, not employment share."],
  ["Micro enterprises are omitted from the ninety-nine percent SME business count.", "Micro firms are included in SME counts."],
  ["A firm becomes large immediately upon employing a tenth worker.", "Ten staff fails micro but further tiers depend on additional tests."],
  ["A firm becomes large immediately upon reaching €2.1m turnover.", "Turnover above €2m removes micro status but small or medium may apply."],
  ["One criterion alone is enough for medium status when turnover is €40m.", "Medium requires sub-250 staff plus financial tests."],
  ["One criterion alone is enough for small status when staff are forty-five.", "Small requires turnover at or below €10m as well."],
  ["Headcount alone confirms small status for a fifty-employee logistics company.", "Fifty staff fails the below-fifty small staff test."],
  ["Headcount alone confirms micro status for a ten-employee family firm.", "Ten staff fails the below-ten micro staff test."],
  ["Incomplete turnover data still proves micro status when staff are nine.", "Financial thresholds are mandatory for micro confirmation."],
  ["Supplier status to phone makers determines AT&S size classification.", "Headcount and financial thresholds determine EU size classification."],
  ["Village craft workshops are exempt from EU micro turnover caps.", "Official staff and financial tests determine micro status."],
  ["Medium status requires both turnover and balance sheet below their caps simultaneously.", "Only one financial measure must qualify alongside staff for medium status."],
  ["Small status ignores turnover when staff remain below fifty.", "Small classification requires turnover at or below €10m."],
  ["Micro status ignores staff headcount when balance sheet is below €2m.", "Micro classification requires fewer than ten employees."],
  ["A balance sheet below €2m alone confirms micro status regardless of turnover.", "Turnover above €2m can disqualify micro status despite a qualifying balance sheet."],
  ["Medium firms may ignore the €43m balance sheet cap when turnover is below €50m.", "Exceeding either financial cap can block medium classification."],
];

if (truths.length < 150) throw new Error(`Need 150 truths, have ${truths.length}`);
if (falses.length < 100) throw new Error(`Need 100 falses, have ${falses.length}`);

function dedupePool(pool) {
  const seen = new Set();
  const out = [];
  for (const item of pool) {
    const key = numSynonymKey(item[0]);
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(item);
  }
  return out;
}

const truthPool = dedupePool(truths);
const falsePool = dedupePool(falses);
if (truthPool.length < 150) throw new Error(`Need 150 unique truth templates, have ${truthPool.length}`);
if (falsePool.length < 100) throw new Error(`Need 100 unique false templates, have ${falsePool.length}`);

const usedTruth = new Set();
const usedFalse = new Set();

function pickFromPool(pool, usedGlobal, need, caseKeys, explKeys) {
  const picked = [];
  for (const item of pool) {
    if (picked.length >= need) break;
    const id = item[0].trim().toLowerCase();
    if (usedGlobal.has(id)) continue;
    const sk = numSynonymKey(item[0]);
    const ek = item[1].trim().toLowerCase();
    if (caseKeys.has(sk) || explKeys.has(ek)) continue;
    picked.push(item);
    usedGlobal.add(id);
    caseKeys.add(sk);
    explKeys.add(ek);
  }
  if (picked.length < need) {
    throw new Error(`Pool pick failed: need ${need}, got ${picked.length}, used ${usedGlobal.size}`);
  }
  return picked;
}

const cases34 = TRUE_COUNTS.map((trueCount, idx) => {
  const n = idx + 1;
  const caseKeys = new Set();
  const explKeys = new Set();
  const t = pickFromPool(truthPool, usedTruth, trueCount, caseKeys, explKeys);
  const f = pickFromPool(falsePool, usedFalse, 5 - trueCount, caseKeys, explKeys);
  const pairs = shuffle(
    [...t.map(([s, e]) => ({ s, e, v: true })), ...f.map(([s, e]) => ({ s, e, v: false }))],
    n * 7,
  );
  return {
    title: titles[idx],
    context: contexts[idx],
    life: LIFE_NUMS.has(n),
    answer_key: pairs.map((p) => p.v),
    statements: pairs.map((p) => p.s),
    tactical_explanations: pairs.map((p) => `${p.v ? "TRUE" : "FALSE"} — ${p.e}`),
    difficulty_level: difficulties[idx],
  };
});

function validate(cases) {
  if (cases.length !== 50) throw new Error(`Expected 50 cases, got ${cases.length}`);
  for (const k of [1, 2, 3, 4, 5]) {
    const n = cases.filter((c) => countTrues(c.answer_key) === k).length;
    if (n !== 10) throw new Error(`${k}T count ${n}, expected 10`);
  }
  const life = cases.filter((c) => c.life).length;
  if (life !== 13) throw new Error(`Life count ${life}, expected 13`);
  const stmts = cases.flatMap((c) => c.statements);
  if (stmts.length !== 250) throw new Error(`Expected 250 statements, got ${stmts.length}`);
  const seen = new Set();
  for (const s of stmts) {
    const norm = s.trim().toLowerCase();
    if (seen.has(norm)) throw new Error(`Duplicate statement: ${s}`);
    seen.add(norm);
    if (FORBIDDEN.test(s)) throw new Error(`Forbidden word in: ${s}`);
    if (BANNED.test(s)) throw new Error(`Banned phrase in: ${s}`);
  }
  for (const c of cases) {
    if (!c.context.trim().endsWith(":")) throw new Error(`Context must end with colon: ${c.title}`);
    const caseKeys = new Set();
    const explSet = new Set();
    for (let i = 0; i < c.statements.length; i++) {
      const sk = numSynonymKey(c.statements[i]);
      if (caseKeys.has(sk)) throw new Error(`Twin in ${c.title} stmt ${i + 1}`);
      caseKeys.add(sk);
      const ek = c.tactical_explanations[i].trim().toLowerCase();
      if (explSet.has(ek)) throw new Error(`Dup expl in ${c.title} stmt ${i + 1}`);
      explSet.add(ek);
    }
    if (c.statements.length !== 5 || c.answer_key.length !== 5 || c.tactical_explanations.length !== 5) {
      throw new Error(`Case ${c.title} wrong array lengths`);
    }
    c.tactical_explanations.forEach((t, i) => {
      const expect = c.answer_key[i] ? "TRUE —" : "FALSE —";
      if (!t.startsWith(expect)) throw new Error(`Prefix mismatch in ${c.title} stmt ${i + 1}`);
      if (BANNED.test(t)) throw new Error(`Banned phrase in ${c.title}`);
    });
    if (!/^([1-5])\/5$/.test(c.difficulty_level)) throw new Error(`Bad difficulty: ${c.difficulty_level}`);
  }
}

validate(cases34);

fs.writeFileSync(OUT, `export const cases34 = ${JSON.stringify(cases34, null, 2)};\n`, "utf8");
console.log(`Wrote ${OUT}`);
console.log(`Cases: ${cases34.length}, statements: ${cases34.length * 5}, life: ${cases34.filter((c) => c.life).length}`);
