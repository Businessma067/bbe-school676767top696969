import { BATCH as B06 } from "./_ch8_ov_06_10.mjs";
import { BATCH as B11 } from "./_ch8_ov_11_15.mjs";
import { BATCH as B16 } from "./_ch8_ov_16_20.mjs";
import { BATCH as B21 } from "./_ch8_ov_21_25.mjs";
import { BATCH as B26 } from "./_ch8_ov_26_30.mjs";
import { BATCH as B31 } from "./_ch8_ov_31_35.mjs";
import { BATCH as B36 } from "./_ch8_ov_36_40.mjs";
import { BATCH as B41 } from "./_ch8_ov_41_45.mjs";
import { BATCH as B46 } from "./_ch8_ov_46_50.mjs";

const SOURCE = [...B06, ...B11, ...B16, ...B21, ...B26, ...B31, ...B36, ...B41, ...B46];
const BY_ORDER = new Map(SOURCE.map((task) => [task.sort_order, task]));
const ENDING = " Evaluate each statement. Mark it TRUE or FALSE.";

function explanation(letter, truth, focus, equationOne, equationTwo, result) {
  return "**" + letter + ".** → " + (truth ? "True" : "False") + "\n\n" +
    focus + " The claim must be tested with the finite scale factor from the model, rather than by reading the exponent as though it were an ordinary multiplier. First identify the calibrated law or cancel its coefficient in a ratio; then keep the full power until the numerical comparison is complete.\n\n" +
    "A direct calculation gives\n\n$$\n" + equationOne + "\n$$\n\n" +
    "The relevant comparison can then be written as\n\n$$\n" + equationTwo + "\n$$\n\n" +
    "This second line is also a useful check on units and direction. A positive exponent preserves the direction of the input change, a negative exponent reverses it, and a percentage change is found from the scale factor minus one. That distinction prevents an elasticity shortcut or a convenient-looking input from replacing the exact finite calculation.\n\n" +
    result + " Therefore the statement is " + (truth ? "True." : "False.");
}

function replaceAt(values, replacements) {
  return values.map((value, index) => Object.prototype.hasOwnProperty.call(replacements, index) ? replacements[index] : value);
}

function task(sortOrder, statementChanges, explanationChanges, metadataChanges = {}) {
  const base = BY_ORDER.get(sortOrder);
  const context = base.context.endsWith(ENDING) ? base.context : base.context + ENDING;
  return {
    ...base,
    context,
    statements: replaceAt(base.statements, statementChanges),
    tactical_explanations: replaceAt(base.tactical_explanations, explanationChanges),
    ...metadataChanges,
  };
}

export const BATCH = [
  task(6, {
    2: "Increasing the job count from $30$ to $42$ raises peak load by less than $90\\%$.",
    3: "Increasing the job count from $30$ to $33$ raises peak load by exactly $21\\%$.",
  }, {
    2: explanation("C", false,
      "The move from 30 to 42 jobs is a finite $40\\%$ increase, and the square law amplifies it.",
      "\\frac{L(42)}{L(30)}=\\left(\\frac{42}{30}\\right)^2=1.4^2=1.96",
      "\\frac{L(42)-L(30)}{L(30)}=1.96-1=0.96=96\\%",
      "Peak load rises by $96\\%$, which is not less than $90\\%$."),
    3: explanation("D", true,
      "The move from 30 to 33 jobs is a finite $10\\%$ increase, so the exact square-law response is required.",
      "\\frac{L(33)}{L(30)}=\\left(\\frac{33}{30}\\right)^2=1.1^2=1.21",
      "\\frac{L(33)-L(30)}{L(30)}=1.21-1=0.21=21\\%",
      "The exact increase is $21\\%$."),
  }),

  task(9, {
    1: "The model reaches $300$ pallets per hour at about $214$ staff.",
    2: "Doubling the headcount raises throughput by between $55\\%$ and $60\\%$.",
  }, {
    1: explanation("B", true,
      "The observation gives $H(s)=12s^{0.6}$, so reaching a target requires inversion rather than substitution.",
      "12s^{0.6}=300 \\quad\\Rightarrow\\quad s^{0.6}=25",
      "s=25^{1/0.6}=25^{5/3}\\approx213.75",
      "The continuous model reaches the target at about $214$ staff."),
    2: explanation("C", false,
      "Doubling staff uses the exact scale factor $2^{0.6}$; the exponent itself is not a percentage gain.",
      "\\frac{H(2s)}{H(s)}=2^{0.6}\\approx1.5157",
      "(1.5157-1)\\times100\\%\\approx51.6\\%",
      "The increase is about $51.6\\%$, outside the stated band."),
  }),

  task(10, {
    4: "The model reaches a median response time of $2$ ms at about $22.7$ servers.",
  }, {
    4: explanation("E", true,
      "From the logged difference the calibrated law is $W(k)=216k^{-1.5}$, and the target must be inverted.",
      "216k^{-1.5}=2 \\quad\\Rightarrow\\quad k^{1.5}=108",
      "k=108^{2/3}\\approx22.68",
      "The continuous model reaches $2$ ms at about $22.7$ servers."),
  }),

  task(11, {
    0: "Raising the price by $10\\%$ lowers subscriptions by about $17.4\\%$.",
    2: "At a price of $10$, the curve gives $100$ subscriptions and revenue of $1000$.",
  }, {
    0: explanation("A", true,
      "A finite ten-percent price move must be evaluated by the exact factor $1.1^{-2}$.",
      "\\frac{q(1.1p)}{q(p)}=1.1^{-2}=\\frac{1}{1.21}\\approx0.82645",
      "(1-0.82645)\\times100\\%\\approx17.36\\%",
      "Subscriptions fall by about $17.4\\%$."),
    2: explanation("C", true,
      "Calibration gives $q(p)=10000p^{-2}$, after which quantity and revenue must both be evaluated at the second price.",
      "q(10)=10000(10)^{-2}=100",
      "R(10)=10q(10)=10(100)=1000",
      "Both the quantity and the resulting revenue match the claim."),
  }),

  task(15, {
    1: "After $4$ hours the covered area is $36\\pi$ square kilometres.",
    3: "Increasing elapsed time by $50\\%$ increases the service radius by about $22.5\\%$.",
    4: "The covered area reaches $100\\pi$ square kilometres after about $11.1$ hours.",
  }, {
    1: explanation("B", true,
      "The radius law has to be composed with the disc-area formula before the four-hour level is evaluated.",
      "S(t)=\\pi\\left(3t^{0.5}\\right)^2=9\\pi t",
      "S(4)=9\\pi(4)=36\\pi",
      "The composed area at four hours is $36\\pi$ square kilometres."),
    3: explanation("D", true,
      "A fifty-percent time increase multiplies time by $1.5$, so radius is multiplied by its square root.",
      "\\frac{r(1.5t)}{r(t)}=1.5^{0.5}\\approx1.224745",
      "(1.224745-1)\\times100\\%\\approx22.5\\%",
      "The radius increases by about $22.5\\%$."),
    4: explanation("E", true,
      "The target is an area, so the composed law $S(t)=9\\pi t$ must be inverted for time.",
      "9\\pi t=100\\pi",
      "t=\\frac{100}{9}\\approx11.11",
      "The target area is reached after about $11.1$ hours."),
  }),

  task(17, {
    0: "After three successive doublings, the modelled unit cost is $512$, a total cut of $48.8\\%$ from the first unit.",
  }, {
    0: explanation("A", true,
      "Three successive doublings apply the $0.8$ survival factor three times, not once.",
      "c(8)=1000(0.8)^3=1000(0.512)=512",
      "\\frac{1000-512}{1000}=0.488=48.8\\%",
      "The modelled cost is $512$, which is a cumulative cut of $48.8\\%$."),
  }),

  task(20, {
    2: "At a price of $25$, monthly revenue is $400$.",
  }, {
    2: explanation("C", true,
      "The observation first calibrates demand, and multiplying by price then produces the revenue law used at the new price.",
      "250=A(4)^{-1.5}=\\frac{A}{8} \\quad\\Rightarrow\\quad A=2000",
      "R(25)=2000(25)^{-0.5}=\\frac{2000}{5}=400",
      "Revenue at the different price is exactly $400$."),
  }),

  task(23, {
    1: "Raising price by $44\\%$ cuts quantity by exactly $20\\%$.",
    2: "To reduce monthly quantity to $200$ units, the price must rise to $40$.",
  }, {
    1: explanation("B", false,
      "A forty-four-percent price rise gives a convenient square, but its exact quantity response is not twenty percent.",
      "\\frac{q(1.44p)}{q(p)}=1.44^{-0.5}=\\frac{1}{1.2}=\\frac{5}{6}",
      "1-\\frac{5}{6}=\\frac{1}{6}\\approx16.7\\%",
      "Quantity falls by about $16.7\\%$, not exactly $20\\%$."),
    2: explanation("C", false,
      "The observed pair gives $q(p)=1200p^{-0.5}$, so the price for a target quantity is found by inversion.",
      "200=\\frac{1200}{\\sqrt{p}} \\quad\\Rightarrow\\quad \\sqrt{p}=6",
      "p=6^2=36",
      "The target quantity occurs at price $36$, not $40$."),
  }),

  task(24, {
    2: "A fuel feed of $32$ produces half of the licensed output ceiling.",
    4: "Increasing fuel feed from $27$ to $54$ raises output by about $125\\%$.",
  }, {
    2: explanation("C", false,
      "Half the licensed output is $512$ tonnes, and the calibrated law $y(x)=4x^{4/3}$ must be inverted.",
      "4x^{4/3}=512 \\quad\\Rightarrow\\quad x^{4/3}=128",
      "x=128^{3/4}\\approx38.05",
      "Half the ceiling requires about $38.1$ units of feed, not $32$."),
    4: explanation("E", false,
      "The move from 27 to 54 doubles feed, so output is multiplied by $2^{4/3}$.",
      "\\frac{y(54)}{y(27)}=2^{4/3}\\approx2.5198",
      "(2.5198-1)\\times100\\%\\approx152.0\\%",
      "Output rises by about $152\\%$, not $125\\%$."),
  }),

  task(25, {
    2: "Starting with a raw reading of $125$, the two stages produce index $225$ and then return raw reading $125$.",
    3: "For a raw input of $50$, applying both stages returns a value $8\\%$ above the input.",
  }, {
    2: explanation("C", true,
      "This non-unit test checks both constants and both reciprocal exponents in the two-stage composition.",
      "f(125)=9(125)^{2/3}=9(25)=225",
      "g(225)=\\frac{225^{3/2}}{27}=\\frac{15^3}{27}=125",
      "The stages pass through $225$ and return the original $125$."),
    3: explanation("D", false,
      "The two laws are exact inverses on positive inputs, so a composed output cannot be eight percent above its input.",
      "g(f(x))=\\frac{\\left(9x^{2/3}\\right)^{3/2}}{27}=\\frac{27x}{27}=x",
      "g(f(50))=50 \\quad\\text{and}\\quad \\frac{50-50}{50}=0\\%",
      "The composed value equals $50$ exactly, rather than exceeding it."),
  }),

  task(27, {
    0: "The capacity ratio $C(64)/C(32)$ is less than $2$.",
    4: "Doubling the fleet from $32$ to $64$ machines cuts capacity per machine by less than $10\\%$.",
  }, {
    0: explanation("A", true,
      "The ratio between the two fleet sizes cancels the unknown coefficient and leaves the finite scale factor.",
      "\\frac{C(64)}{C(32)}=\\left(\\frac{64}{32}\\right)^{0.8}=2^{0.8}\\approx1.741",
      "1.741<2",
      "Capacity rises by a factor below two."),
    4: explanation("E", false,
      "Capacity per machine carries exponent $0.8-1=-0.2$, so its exact change must be calculated over the doubling.",
      "\\frac{C(64)/64}{C(32)/32}=2^{-0.2}\\approx0.87055",
      "(1-0.87055)\\times100\\%\\approx12.9\\%",
      "Capacity per machine falls by about $12.9\\%$, not by less than $10\\%$."),
  }),

  task(31, {
    1: "Revenue expressed through quantity is $R=50q^{0.5}$.",
    2: "Doubling the quantity sold raises revenue by about $41.4\\%$.",
    3: "When the curve sells $25$ units, revenue is $300$.",
  }, {
    1: explanation("B", true,
      "Revenue through quantity is obtained by multiplying quantity by inverse demand, so the exponents must be added.",
      "p(q)=50q^{-0.5}",
      "R(q)=qp(q)=q\\left(50q^{-0.5}\\right)=50q^{0.5}",
      "The revenue law is $R=50q^{0.5}$."),
    2: explanation("C", true,
      "The derived revenue law has exponent one-half, so the exact scale factor for a doubling is required.",
      "\\frac{R(2q)}{R(q)}=2^{0.5}=\\sqrt{2}\\approx1.414",
      "(1.414-1)\\times100\\%\\approx41.4\\%",
      "Revenue rises by about $41.4\\%$."),
    3: explanation("D", false,
      "Revenue must be evaluated through the inverse-demand representation rather than by reusing the original observed price.",
      "p(25)=50(25)^{-0.5}=\\frac{50}{5}=10",
      "R(25)=25p(25)=25(10)=250",
      "Revenue is $250$, not $300$."),
  }),

  task(36, {
    2: "The volume added from depth $7$ to $9$ metres is exactly $\\frac{4}{3}$ times the volume added from $5$ to $7$ metres.",
  }, {
    2: explanation("C", true,
      "The calibrated storage law is $V(d)=3d^2$, so equal depth intervals need not add equal volumes.",
      "V(9)-V(7)=3(9^2-7^2)=3(32)=96",
      "\\frac{V(9)-V(7)}{V(7)-V(5)}=\\frac{96}{3(49-25)}=\\frac{96}{72}=\\frac{4}{3}",
      "The later two-metre rise adds exactly four-thirds as much volume."),
  }),

  task(37, {
    2: "Raising speed from $72$ to $90$ km/h raises the index by exactly $56.25\\%$.",
    4: "An index reading of $320$ corresponds to a speed of $80$ km/h.",
  }, {
    2: explanation("C", true,
      "The speed ratio is $90/72=1.25$, and the square law converts it to an exact index factor.",
      "\\frac{E(90)}{E(72)}=\\left(\\frac{90}{72}\\right)^2=1.25^2=1.5625",
      "(1.5625-1)\\times100\\%=56.25\\%",
      "The index rises by exactly $56.25\\%$."),
    4: explanation("E", true,
      "The recorded change calibrates the index as $E(v)=0.05v^2$, which can be inverted for a specified reading.",
      "0.05v^2=320 \\quad\\Rightarrow\\quad v^2=6400",
      "v=\\sqrt{6400}=80",
      "The positive speed corresponding to index $320$ is $80$ km/h."),
  }),

  task(38, {
    0: "A silo with capacity $192$ cubic metres needs about $208$ square metres of steel.",
    1: "Steel use first exceeds $200$ square metres once height exceeds about $8.16$ metres.",
    2: "Increasing silo height by $50\\%$ raises steel use by $125\\%$.",
  }, {
    0: explanation("A", true,
      "The six-metre observations give $S(h)=3h^2$ and $V(h)=h^3/3$; capacity must first be inverted for height.",
      "\\frac{h^3}{3}=192 \\quad\\Rightarrow\\quad h=\\sqrt[3]{576}\\approx8.32",
      "S(h)=3h^2\\approx3(8.32)^2\\approx207.7",
      "The target-capacity silo requires about $208$ square metres of steel."),
    1: explanation("B", true,
      "The steel threshold is found from the calibrated surface law, with the strict inequality preserved.",
      "3h^2>200 \\quad\\Rightarrow\\quad h^2>\\frac{200}{3}",
      "h>\\sqrt{\\frac{200}{3}}\\approx8.165",
      "Steel use exceeds $200$ square metres beyond about $8.16$ metres."),
    2: explanation("C", true,
      "A fifty-percent height increase multiplies height by $1.5$, while steel scales with height squared.",
      "\\frac{S(1.5h)}{S(h)}=1.5^2=2.25",
      "(2.25-1)\\times100\\%=125\\%",
      "Steel use rises by exactly $125\\%$."),
  }),

  task(40, {
    2: "Illuminance is one ninth of its two-metre reading at a distance of $6$ metres.",
  }, {
    2: explanation("C", true,
      "The target is a fraction of the two-metre reading, so the coefficient cancels in a distance ratio.",
      "\\frac{I(d)}{I(2)}=\\left(\\frac{d}{2}\\right)^{-2}=\\frac{1}{9}",
      "\\left(\\frac{d}{2}\\right)^2=9 \\quad\\Rightarrow\\quad d=6",
      "At six metres the reading is exactly one ninth of the two-metre value."),
  }),

  task(43, {
    2: "The loss index reaches $1000$ at a wind speed of about $39.7$.",
    3: "At a wind speed of $64$, the loss index is $2048$.",
    4: "Increasing wind speed by $50\\%$ raises the loss index by about $83.7\\%$.",
  }, {
    2: explanation("C", true,
      "Composing the two stages gives $L(w)=4w^{1.5}$, which must be inverted for the specified loss.",
      "4w^{1.5}=1000 \\quad\\Rightarrow\\quad w^{1.5}=250",
      "w=250^{2/3}\\approx39.69",
      "The index reaches $1000$ at wind speed about $39.7$."),
    3: explanation("D", true,
      "The composed law must be evaluated with the square-root contribution retained before the cube is applied.",
      "L(64)=4(64)^{1.5}=4(64)(8)",
      "L(64)=2048",
      "The loss index is $2048$."),
    4: explanation("E", true,
      "A fifty-percent wind increase uses the composed exponent $1.5$, not either stage in isolation.",
      "\\frac{L(1.5w)}{L(w)}=1.5^{1.5}\\approx1.8371",
      "(1.8371-1)\\times100\\%\\approx83.7\\%",
      "The loss index rises by about $83.7\\%$."),
  }),

  task(50, {
    0: "Raising price by $20\\%$ cuts quantity by about $42.1\\%$.",
    2: "At a price of $2.50$, revenue is $640$.",
  }, {
    0: explanation("A", true,
      "A finite twenty-percent price rise must use the exact cubic inverse factor rather than a linear elasticity estimate.",
      "\\frac{q(1.2p)}{q(p)}=1.2^{-3}=\\frac{1}{1.728}\\approx0.57870",
      "(1-0.57870)\\times100\\%\\approx42.1\\%",
      "Quantity falls by about $42.1\\%$."),
    2: explanation("C", true,
      "The observed pair gives $A=4000$ and hence revenue $R(p)=4000p^{-2}$, which can be evaluated at the new price.",
      "500=A(2)^{-3}=\\frac{A}{8} \\quad\\Rightarrow\\quad A=4000",
      "R(2.5)=4000(2.5)^{-2}=\\frac{4000}{6.25}=640",
      "Revenue at price $2.50$ is exactly $640$."),
  }),
];
