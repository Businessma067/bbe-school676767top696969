import { applyFile } from "./_apply_dedupe.mjs";

const patches = {
  "math-8-51": {
    tacticals: [
      "**A.** → True\n\nThe overview already recovered exponent $\\frac{3}{4}<1$. Doubling accounts multiplies the bill by $2^{\\frac{3}{4}}\\approx 1.68$, not by $2$. Each extra account adds less than the account before it. Three quarters sits below one, so the bill lags the account count.",
      "**B.** → False\n\nThe same factor $2^{\\frac{3}{4}}\\approx 1.68$ is not $2$. Doubling accounts would double the bill only if the exponent were $1$. The practice will not keep pace with the book. Linear thinking is the trap that would make this letter true.",
      "**C.** → True\n\nThe overview already lists $C(81)=2700$, which sits above $2500$. Eighty-one is $3^{4}$, so the three-quarters power is $3^{3}=27$, times $100$. That is also $800+1900$, the small engagement plus the logged rise, a check on $A$.",
      "**D.** → False\n\nThe slope $C'(n)=75n^{-\\frac{1}{4}}$ is $\\frac{75}{2}$ at sixteen accounts and $25$ at eighty-one. An extra account adds less after eighty-one than after sixteen. The leftover exponent is negative, so later accounts are cheaper to add, not dearer.",
      "**E.** → True\n\nThe overview already inverted $C=12500$ to $n=625$, which sits above $600$. One hundred and twenty-five is $5^{3}$, and raising to $\\frac{4}{3}$ gives $5^{4}=625$. A linear guess from $C(81)=2700$ would have claimed far fewer accounts.",
    ],
  },
  "math-8-52": {
    tacticals: [
      "**A.** → True\n\nDoubling distance multiplies concentration by $2^{-\\frac{3}{2}}=\\frac{1}{2\\sqrt{2}}\\approx 0.354$, which is steeper than inverse-linear's $\\frac{1}{2}$. Because $-\\frac{3}{2}<-1$, concentration falls faster than inverse-linear decay. The extra half in the exponent is the extra drop.",
      "**B.** → False\n\nConcentration per metre is $400x^{-\\frac{5}{2}}$, which is steeper near the stack than far downwind. The intensity is not the same at every range. A constant per-metre reading would have needed leftover exponent $0$.",
      "**C.** → True\n\nThe overview already lists $c(100)=0.4$, which sits below $0.5$. One hundred contributes $10^{3}=1000$ after the three-halves power, and $400/1000=0.4$. Linear decay from $c(4)=50$ would have claimed a very different hundred-metre reading.",
      "**D.** → True\n\nInverting $c=400x^{-\\frac{3}{2}}$ gives $x=(400/c)^{\\frac{2}{3}}$. A nonzero power inverts to another power: the new exponent is the reciprocal of $-\\frac{3}{2}$. Distance needed for a given concentration is still a monomial in $c$.",
      "**E.** → False\n\nThe overview already lists $c(4)=50$, which is not under $45$. Four metres contribute $2^{-3}=\\frac{1}{8}$, times $400$ is $50$. That is also $6.25+43.75$, the far reading plus the logged gap. Fifty is not under forty-five.",
    ],
  },
  "math-8-53": {
    tacticals: [
      "**A.** → True\n\nThe overview already composed $L(w)=4w^{\\frac{3}{2}}$. Surge is a square root of wind, loss cubes that surge, and $\\frac{1}{2}\\cdot 3=\\frac{3}{2}$. A product of powers of the same variable is again a power. Stopping after surge would have left exponent $\\frac{1}{2}$.",
      "**B.** → False\n\nDoubling wind multiplies loss by $2^{\\frac{3}{2}}=2\\sqrt{2}\\approx 2.83$, not by $2$. The composed exponent sits above one, so losses more than double. Linear thinking understates the second stage.",
      "**C.** → True\n\nThe overview already lists $L(64)=2048$, which sits above $2000$. Sixty-four is $8^{2}$, so the three-halves power is $8^{3}=512$, times $4$. Using $s(64)=4$ and then $32\\cdot 4^{3}=2048$ is the same two-stage check.",
      "**D.** → True\n\nThe composed exponent $\\frac{3}{2}>1$, so each extra unit of wind adds more loss than the unit before it. The doubling factor $2\\sqrt{2}>2$ is that acceleration in numbers. A proportional law would have carried exponent $1$.",
      "**E.** → False\n\nThe overview already inverted $L=1000$ to $w\\approx 39.7$, which sits below $50$. At $w=50$, $50^{\\frac{3}{2}}=250\\sqrt{2}\\approx 353.6$, already past a loss of $1000$ after times $4$. The wind that hits $1000$ is below fifty, not above it.",
    ],
  },
  "math-8-54": {
    tacticals: [
      "**A.** → True\n\nImpact is $I(v)=60\\sqrt{v}$. Doubling order size multiplies impact by $\\sqrt{2}\\approx 1.41$, not by $2$. One half sits below one, so impact grows more slowly than order size. Linear thinking would have expected lockstep.",
      "**B.** → False\n\nThe scaled charge is $vI(v)=60v^{\\frac{3}{2}}$. Doubling order size multiplies that charge by $2^{\\frac{3}{2}}\\approx 2.83$, which exceeds $2$. Impact itself lags, but multiplying by the doubled size pushes the charge past a doubling. The leftover exponent on the product is above one.",
      "**C.** → True\n\nThe overview already lists $I(0.16)=24$, which sits above $20$. Square root of $0.16$ is $0.4$, times $60$. Linear scaling from the $0.09$ ADV reading would have missed that exact square.",
      "**D.** → True\n\nThe overview already solved the break-even at $v=0.25$. Past that order the leftover $60\\sqrt{v}-30$ stays positive because $\\sqrt{v}$ keeps growing, so $60v^{\\frac{3}{2}}>30v$. Once the scaled charge overtakes the fee it stays larger.",
      "**E.** → False\n\nAt $v=0.25$ the scaled charge is $60\\cdot(\\frac{1}{4})^{\\frac{3}{2}}=7.5$, which sits below $10$. One quarter to the three-halves is $\\frac{1}{8}$. The charge has grown with order size, but not as far as the named line. This is also the exact break-even order from D, where charge equals the notional fee $7.5$, not a figure above $10$.",
    ],
  },
  "math-8-55": {
    tacticals: [
      "**A.** → True\n\nThe overview already inverted to $m=(E/10)^{\\frac{3}{2}}$. A nonzero power inverts to another power: the new exponent is the reciprocal of $\\frac{2}{3}$. Mass needed for a given daily energy is still a monomial in $E$.",
      "**B.** → True\n\nEnergy per kilogram is $10m^{-\\frac{1}{3}}$, a negative leftover power, so it falls as mass rises. A heavier animal uses more energy in total, but less energy per kilogram. That is the $r<1$ allometric story.",
      "**C.** → True\n\nThe overview already lists $E(64)=160$, which sits above $150$. Sixty-four is $4^{3}$, so the two-thirds power is $16$, times $10$. That is also $90+70$, the smaller animal plus the logged gap.",
      "**D.** → False\n\nTwo equal animals use $2E(m)$; one animal of twice the mass uses $E(2m)=2^{\\frac{2}{3}}E(m)\\approx 1.59E(m)$. Because $\\frac{2}{3}<1$, merging the two animals lowers total energy use rather than leaving it unchanged. Superlinear merging would have needed $r>1$.",
      "**E.** → True\n\nThe overview already listed $E(216)=360$, which sits under $400$. Two hundred and sixteen is $6^{3}$, so the two-thirds power is $36$, times $10$. A cube-then-linear guess would have overshot.",
    ],
  },
  "math-8-56": {
    tacticals: [
      "**A.** → True\n\nThe exponent $-\\frac{3}{2}$ is negative, so for $d_{2}>d_{1}$ the ratio $(\\frac{d_{2}}{d_{1}})^{-\\frac{3}{2}}<1$. A farther zone always supplies fewer visitors than a nearer one. No extra calibration is required: sign of the exponent is the ranking.",
      "**B.** → False\n\nAn inverse-square law would have given $4^{-2}=\\frac{1}{16}$ on a fourfold distance; the recovered exponent gives $4^{-\\frac{3}{2}}=\\frac{1}{8}$. The two scale factors do not match. Inverse-square is the wrong power, even though both fall.",
      "**C.** → True\n\nThe overview already listed $f(9)\\approx 118.5$, which sits above $100$. Nine contributes $3^{3}=27$, and $3200/27\\approx 118.5$. That reading still clears the hundred-visitor core threshold.",
      "**D.** → True\n\nThe overview already inverted the core threshold to $d\\approx 10.08$ km, which sits before $11$. At $10$ km, $10^{\\frac{3}{2}}\\approx 31.62<32$; at $11$ km, $11\\sqrt{11}\\approx 36.48>32$. Core catchment already ends before eleven kilometres.",
      "**E.** → False\n\nThe slope $f'(d)=-4800d^{-\\frac{5}{2}}$ has size $150$ at $4$ km and only about $4.69$ at $16$ km. An extra kilometre cuts more visitors near the park than far from it. Distance-decay drops are steepest at the door.",
    ],
  },
  "math-8-57": {
    tacticals: [
      "**A.** → True\n\nThe overview already recovered $r=\\frac{1}{2}$. Doubling area multiplies output by $\\sqrt{2}\\approx 1.41$, not by $2$. One half sits below one, so output grows more slowly than installed area. Linear thinking would have expected lockstep.",
      "**B.** → False\n\nThe overview already listed $y(450)\\approx 509$, which sits under $520$. Doubling the $225$ m$^{2}$ array multiplies $360$ by $\\sqrt{2}$, about $509$. A linear doubling would have claimed $720$ and overshot both the cutoff and the model.",
      "**C.** → True\n\nOutput per square metre is $24a^{-\\frac{1}{2}}$, a negative leftover power. A larger roof delivers more kilowatt-hours in total, but fewer per square metre. Falling intensity is the $r<1$ story.",
      "**D.** → True\n\nTo double the $240$ kWh output, $24\\sqrt{a}=480$ forces $a=400$. The $100$ m$^{2}$ array must quadruple, which is more than a doubling. Any $r<1$ doubling of output requires more than a doubling of area.",
      "**E.** → True\n\nThe same $a=400$ that doubles output in D delivers $y(400)=480$, which sits above $470$. Twenty squared is $400$, times $24$ is $480$. The $470$ cutoff is a near miss on that exact doubling array.",
    ],
  },
  "math-8-58": {
    tacticals: [
      "**A.** → False\n\nThe overview already recovered $b=-\\frac{1}{2}$. Doubling volume multiplies unit cost by $2^{-\\frac{1}{2}}\\approx 0.707$, not by $\\frac{1}{2}$. Quadrupling would halve the unit cost, but a single doubling does not. Inverse-linear learning is the trap.",
      "**B.** → True\n\nUnit cost $800N^{-\\frac{1}{2}}$ falls, while cumulative spend $S=800N^{\\frac{1}{2}}$ still rises. The leftover exponent on spend is positive. Cheaper cells can still mean a larger total cheque as volume grows.",
      "**C.** → True\n\nThe overview already lists $c(1600)=20$, which sits below $25$. Sixteen hundred contributes a square root of $40$, and $800/40=20$. Two further quadruplings from $c(100)=80$ are $40$ then $20$, the same inverse-square-root steps.",
      "**D.** → False\n\nQuadrupling volume multiplies spend by $4^{\\frac{1}{2}}=2$, exactly a doubling, not more than a doubling. The leftover exponent on $S$ is $\\frac{1}{2}<1$. From $S(100)=8000$ the spend at $400$ thousand cells is $16000$, twice, not more than twice.",
      "**E.** → True\n\nAt $25$ thousand cells, $c(25)=160$, which sits above $150$. Twenty-five contributes a square root of $5$, and $800/5=160$. Early on the learning curve the unit cost is still high. The $150$ cutoff is a near miss.",
    ],
  },
  "math-8-59": {
    tacticals: [
      "**A.** → True\n\nThe composed law is $S(q)=0.625q^{\\frac{3}{2}}$. Doubling discharge multiplies transport by $2^{\\frac{3}{2}}\\approx 2.83$, which exceeds $2$. The leftover exponent sits above one, so sediment more than doubles. Linear thinking understates the chain.",
      "**B.** → True\n\nThe overview already composed $S(q)=0.625q^{1.5}$. Velocity is a square root of discharge, transport cubes velocity, and $\\frac{1}{2}\\cdot 3=\\frac{3}{2}$. A product of powers of the same variable is again a power.",
      "**C.** → True\n\nThe overview already placed the $5000$ t/day limit at $q=400$, which sits above $4500$. Four hundred contributes $20^{3}=8000$ after the three-halves power, times $0.625$ is $5000$. That is the stability threshold itself.",
      "**D.** → False\n\nDoubling velocity multiplies transport by $2^{3}=8$, not by $2$. The first-stage exponent is $3$, well above one. The claim is about $S(v)$, not about $S(q)$. Mixing the two stages is the trap.",
      "**E.** → False\n\nAt discharge $64$, $v=4$ and $S=5\\cdot 64=320$, which already clears $300$. Eight squared is $64$, half of eight is the velocity $4$, then the cube of $4$ times $A=5$. Transport is not still under the line.",
    ],
  },
  "math-8-60": {
    tacticals: [
      "**A.** → True\n\nThe overview already composed $R(p)=4000p^{-2}$. Price times $p^{-3}$ demand leaves leftover exponent $-2$. A product of two powers of the same variable is again a power. Revenue is a monomial in price.",
      "**B.** → True\n\nThe leftover exponent $-2$ is negative, so $R(p)$ falls as $p$ rises. Highly elastic demand, exponent $-3$, means a price rise cuts quantity by more than enough to shrink $pq$. Raising the price always cuts revenue along this curve.",
      "**C.** → True\n\nThe overview already lists $R(2.5)=640$, which sits below $700$. Two and a half squared is $\\frac{25}{4}$, and $4000\\cdot\\frac{4}{25}=640$. Linear scaling from $R(2)=1000$ would have claimed $1250$ and missed the inverse square.",
      "**D.** → True\n\nThe overview already listed $1.1^{-3}\\approx 0.751$, a cut of about $24.9\\%$, which is more than $20\\%$. A $10\\%$ price rise is the multiplier $k=1.1$, and the exponent $-3$ acts on the whole factor. Linear percentage thinking would have claimed a $30\\%$ cut or a $10\\%$ cut, neither of which is $1.1^{-3}$.",
      "**E.** → False\n\nElastic demand is why a price rise cuts revenue here, not why it would raise it. The overview already listed $1.1^{-2}\\approx 0.826$, about a $17\\%$ revenue drop. \"Highly elastic, so raise the price\" reverses the revenue direction.",
    ],
  },
};

const r = applyFile(new URL("./51_60.json", import.meta.url), patches);
console.log(r);
