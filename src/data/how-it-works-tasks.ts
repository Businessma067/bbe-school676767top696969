/**
 * Real practice tasks (verbatim from the live banks) powering the homepage
 * "How it works" animation. Regenerated from src/data/* banks.
 */
export type SimTask = {
  caseId: string;
  chapter: string;
  title: string;
  context: string;
  statements: string[];
  answerKey: boolean[];
  explanations: string[];
};

export const SIM_TASKS: Record<"economics" | "math" | "english", SimTask[]> = {
  "economics": [
    {
      "caseId": "CASE 2.1.21",
      "chapter": "Chapter 2.1",
      "title": "Electrician Boris and the Hoffmanns",
      "context": "Consider the Hoffmanns pay Boris 180 euros for kitchen wiring; that evening Boris buys groceries for his family. Evaluate the following economic assertions:",
      "statements": [
        "The Hoffmanns act as a household paying for repair; Boris acts as an entrepreneur supplying it.",
        "Electrical repair is a service because it is work performed rather than a physical item delivered.",
        "Faulty wiring created a need for a working system fulfilled through exchange of money for service.",
        "When Boris buys groceries later, he acts as a household with needs of his own.",
        "Boris's limited working hours are a scarce resource he must economise across jobs."
      ],
      "answerKey": [
        true,
        true,
        true,
        true,
        true
      ],
      "explanations": [
        "TRUE — Check the sentence against the core concept named in the stem, including every scope word.\n\nA family purchasing repair is a household; a tradesperson supplying it is an entrepreneur.\n\nThe statement is true.",
        "TRUE — Check that the comparison runs in the stated direction and attaches the feature to the correct member of the pair.\n\nRepair work is an activity performed on the property and is a service.\n\nThe statement is true.",
        "TRUE — Check the sentence against the core concept named in the stem, including every scope word.\n\nA functioning electrical system is a need met by paying for professional repair.\n\nThe statement is true.",
        "TRUE — Map the scenario onto the textbook category first, then test whether the sentence describes that category accurately.\n\nThe same person can be entrepreneur in one transaction and household in another.\n\nThe statement is true.",
        "TRUE — Check the sentence against the core concept named in the stem, including every scope word.\n\nLimited hours force prioritisation among competing repair jobs.\n\nThe statement is true."
      ]
    },
    {
      "caseId": "CASE 4.4.21",
      "chapter": "Chapter 4.4",
      "title": "Separating Ownership from Management",
      "context": "Analyze conditions under which business owners need not be the same persons as managers according to the ownership overview. Evaluate the following economic assertions:",
      "statements": [
        "Sole proprietors must appoint external directors before ownership and management may differ.",
        "Incorporated businesses allow owners and managers to be different persons through shareholders and directors.",
        "Partnerships are incorporated whenever one partner delegates routine tasks to another partner.",
        "Shareholders provide share capital to incorporated companies whose directors run operations.",
        "Unincorporated businesses typically combine ownership and management in the same persons."
      ],
      "answerKey": [
        false,
        true,
        false,
        true,
        true
      ],
      "explanations": [
        "FALSE — Check the sentence against the core concept named in the stem, including every scope word.\n\nSole proprietors manage directly; they do not use a shareholder-director split.\n\nThe statement is false. A student who matched the topic to \"Sole proprietors must appoint external directors before ownership and management may differ\" without checking the rest of the sentence would mark the statement true.",
        "TRUE — Check the sentence against the core concept named in the stem, including every scope word.\n\nIncorporated structure permits separation of owning shareholders from managing directors.\n\nThe statement is true.",
        "FALSE — Check the sentence against the core concept named in the stem, including every scope word.\n\nTask delegation among partners does not incorporate the partnership.\n\nThe statement is false. A student who matched the topic to \"Partnerships are incorporated whenever one partner delegates routine tasks to another partner\" without checking the rest of the sentence would mark the statement true.",
        "TRUE — Check the sentence against the core concept named in the stem, including every scope word.\n\nThe overview links shareholders with capital and directors with running the company.\n\nThe statement is true.",
        "TRUE — Check the sentence against the core concept named in the stem, including every scope word.\n\nOwner-manager overlap is typical of unincorporated forms.\n\nThe statement is true."
      ]
    },
    {
      "caseId": "CASE 5.3.51",
      "chapter": "Chapter 5.3",
      "title": "Orientation Starting Points in Marketing",
      "context": "Review product versus market orientation as competing starting points within the same broader marketing framework. Evaluate the following economic assertions:",
      "statements": [
        "CRM at furniture manufacturers requires deleting all personal records after each transaction to protect anonymity permanently.",
        "CRM programmes may use posted coupon mailings to reward loyal buyers with ongoing incentives among customers whose data the business retains responsibly.",
        "CRM programmes may use posted coupon mailings to sustain engagement beyond single transactions among customers whose data the business retains responsibly.",
        "CRM programmes may use posted coupon mailings to prompt additional visits through informed contact among customers whose data the business retains responsibly.",
        "CRM programmes may use posted coupon mailings to foster continuity rather than one-off sales among customers whose data the business retains responsibly."
      ],
      "answerKey": [
        false,
        true,
        true,
        true,
        true
      ],
      "explanations": [
        "FALSE — Read the quantifier. Words such as never, always, only, or all turn a generally valid idea into a claim that one counterexample rejects.\n\nCrm retains data to mail or email newsletters, coupons, and product information for repeat business.\n\nThe statement is false. A student who overlooked the word \"all\" in \"CRM at furniture manufacturers requires deleting all personal records after each transaction to protect…\" would treat the restriction as absent and mark the statement true.",
        "TRUE — Check the sentence against the core concept named in the stem, including every scope word.\n\nPosted coupon mailings within CRM can reward loyal buyers with ongoing incentives when personal data is used sensitively.\n\nThe statement is true.",
        "TRUE — Check the sentence against the core concept named in the stem, including every scope word.\n\nPosted coupon mailings within CRM can sustain engagement beyond single transactions when personal data is used sensitively.\n\nThe statement is true.",
        "TRUE — Check the sentence against the core concept named in the stem, including every scope word.\n\nPosted coupon mailings within CRM can prompt additional visits through informed contact when personal data is used sensitively.\n\nThe statement is true.",
        "TRUE — Check that the comparison runs in the stated direction and attaches the feature to the correct member of the pair.\n\nPosted coupon mailings within CRM can foster continuity rather than one-off sales when personal data is used sensitively.\n\nThe statement is true."
      ]
    },
    {
      "caseId": "CASE 5.7.51",
      "chapter": "Chapter 5.7",
      "title": "Specialisation Versus Diversification",
      "context": "Review how major product changes differ from minor relaunches when customer needs shift. Evaluate the following economic assertions:",
      "statements": [
        "A LED light bulbs product with high market share in a no-growth market is a question mark requiring maximum market-growth investment.",
        "Low introductory pricing for a new garden tools product can attract first buyers during the introduction life-cycle stage.",
        "Selling garden tools through both a company website and partner retailers combines online and indirect place channels.",
        "Seasonal sales events promoting garden tools are sales-promotion tools within the promotion element of the mix.",
        "Adding a new flavour variant within an existing pet food range is a line extension that deepens the product line."
      ],
      "answerKey": [
        false,
        true,
        true,
        true,
        true
      ],
      "explanations": [
        "FALSE — Check the sentence against the core concept named in the stem, including every scope word.\n\nHigh share in a low-growth market is a cash cow, not a question mark.\n\nThe statement is false. A student who matched the topic to \"A LED light bulbs product with high market share in a no-growth market is…\" without checking the rest of the sentence would mark the statement true.",
        "TRUE — Check the sentence against the core concept named in the stem, including every scope word.\n\nLaunch pricing for new garden tools can support introduction-stage customer acquisition.\n\nThe statement is true.",
        "TRUE — Check the sentence against the core concept named in the stem, including every scope word.\n\nWebsite plus retailer partners blend online place with indirect distribution for garden tools.\n\nThe statement is true.",
        "TRUE — Check the sentence against the core concept named in the stem, including every scope word.\n\nSeasonal events for garden tools are promotional sales-promotion activities.\n\nThe statement is true.",
        "TRUE — Check the sentence against the core concept named in the stem, including every scope word.\n\nNew variants within one pet food line illustrate line extension deepening the line.\n\nThe statement is true."
      ]
    }
  ],
  "math": [
    {
      "caseId": "MATH 4.11",
      "chapter": "Chapter 4 · 4.1",
      "title": "Ages, coins, and a tank that is not yet full",
      "context": "Evaluate each statement. Mark it TRUE or FALSE.",
      "statements": [
        "A father is $28$ years older than his son. In $8$ years the father will be twice as old as the son will be then. The son is now $20$ years old.",
        "The sum of three consecutive odd integers is $75$. The largest of them is $29$.",
        "A purse holds only $2$ EUR coins and $5$ EUR coins. There are $16$ coins in all, worth $53$ EUR. Then there are $7$ coins of $5$ EUR.",
        "Water flows into an empty tank at $15$ litres per minute. After $12$ minutes the tank is four-fifths full, so the tank's capacity is $180$ litres.",
        "If a number is increased by one-third of itself, the result is $48$. Then the original number is $40$."
      ],
      "answerKey": [
        true,
        false,
        true,
        false,
        false
      ],
      "explanations": [
        "Let the son's present age be $s$ years. The father is then $s + 28$ years old now. In $8$ years the father will be twice as old as the son will be then:\n\n$$s + 28 + 8 = 2(s + 8)$$\n\n$$s + 36 = 2s + 16$$\n\n$$36 - 16 = 2s - s$$\n\n$$s = 20$$\n\nThe son is now $20$ years old and the father is $48$. In $8$ years they will be $28$ and $56$, and\n\n$$56 = 2 \\cdot 28$$\n\nwhich matches the age relation, so the statement is True.",
        "Consecutive odd integers differ by $2$. Let the smallest be $n$:\n\n$$n + (n + 2) + (n + 4) = 75$$\n\n$$3n + 6 = 75$$\n\n$$3n = 69$$\n\n$$n = 23$$\n\nThe three integers are $23$, $25$, and $27$. The largest is $27$, not the claimed $29$. The triple $25$, $27$, $29$ sums to\n\n$$25 + 27 + 29 = 81$$\n\nwhich is not $75$, so the statement is False.",
        "Let $x$ be the number of $5$ EUR coins. Then there are $16 - x$ coins of $2$ EUR, and the total value is $53$ EUR:\n\n$$5x + 2(16 - x) = 53$$\n\n$$5x + 32 - 2x = 53$$\n\n$$3x + 32 = 53$$\n\n$$3x = 21$$\n\n$$x = 7$$\n\nThere are $7$ coins of $5$ EUR and $9$ coins of $2$ EUR:\n\n$$7 \\cdot 5 = 35$$\n\n$$9 \\cdot 2 = 18$$\n\n$$35 + 18 = 53$$\n\nwhich matches the purse, so the statement is True.",
        "Water flows at $15$ litres per minute for $12$ minutes, so the volume delivered is\n\n$$15 \\cdot 12 = 180$$\n\nlitres. That volume is four-fifths of the tank, not the whole tank. The capacity $C$ therefore satisfies\n\n$$\\frac{4}{5}C = 180$$\n\n$$C = 180 \\cdot \\frac{5}{4}$$\n\n$$C = 225$$\n\nThe tank holds $225$ litres, not the claimed $180$. Substituting capacity $180$ would make $12$ minutes fill the tank completely rather than four-fifths of it, so the statement is False.",
        "A number plus one-third of itself equals $48$. Add the coefficients, then multiply through by $3$:\n\n$$x + \\frac{x}{3} = 48$$\n\n$$\\frac{4x}{3} = 48$$\n\n$$4x = 144$$\n\n$$x = 36$$\n\nThat $36$ is the original number. The claim says $40$. Substituting that value:\n\n$$40 + \\frac{40}{3} = \\frac{160}{3}$$\n\nwhich is not $48$, so the statement is False."
      ]
    },
    {
      "caseId": "MATH 6.06",
      "chapter": "Chapter 6 · 6.1",
      "title": "Rational Inequalities — 6",
      "context": "Evaluate each statement. Mark it TRUE or FALSE.",
      "statements": [
        "The solution set of the inequality $\\dfrac{x^{2} - 49}{x + 8} \\ge 0$ is $(-8, -7] \\cup [7, \\infty)$.",
        "The solution set of the inequality $\\dfrac{4x - 8}{x + 7} < 0$ is $(-7, 2)$.",
        "The solution set of the inequality $\\dfrac{x^{2} - 4}{x + 10} \\le 0$ is $(-\\infty, -10) \\cup [-2, 2]$.",
        "The solution set of the inequality $\\dfrac{(x - 5)(x + 3)}{x + 8} \\ge 0$ is $(-8, -3] \\cup [5, \\infty)$.",
        "The solution set of the inequality $\\dfrac{x^{2} - 4}{x^{2} - 25} \\le 0$ is $(-5, -2] \\cup [2, 5)$."
      ],
      "answerKey": [
        true,
        true,
        true,
        true,
        true
      ],
      "explanations": [
        "A rational inequality is decided by the zeros of the numerator and the excluded zeros of the denominator. Start from\n\n$$\\dfrac{x^{2} - 49}{x + 8} \\ge 0$$\n\nThe critical points are the zeros of the numerator and the excluded zeros of the denominator.\n\nThe numerator vanishes when:\n\n$$(x^{2} - 49) = 0$$\n\nSo:\n\n$$x = \\pm 7$$\n\nThe denominator vanishes at:\n\n$$x = -8$$\n\n(always excluded).\n\nReading the sign chart against the inequality symbol: keep the non-negative regions, including $x = \\pm 7$ (numerator zero), but never $x = -8$:\n\n$$(-8, -7] \\cup [7, \\infty)$$\n\nReading the signs on the open intervals made by the critical points:\n\n| Interval | Sign |\n| --- | --- |\n| $(-\\infty, -8)$ | $-$ |\n| $(-8, -7)$ | $+$ |\n| $(-7, 7)$ | $-$ |\n| $(7, \\infty)$ | $+$ |\n\nA quick check: plug in $x = -7.5$: $\\dfrac{56.25−49}{0.5}$ = 14.5 $\\ge$ 0, confirming $(-8, -7]$ belongs; plug in $x = 0$: $\\dfrac{−49}{8}$ = -6.125, which is not $\\ge$ 0, confirming $(-7, 7)$ is excluded.\n\nMatching these figures to the claim, the statement is True.",
        "A rational inequality is decided by the zeros of the numerator and the excluded zeros of the denominator. Start from\n\n$$\\dfrac{4x - 8}{x + 7} < 0$$\n\nThe critical points are the zeros of the numerator and the excluded zeros of the denominator.\n\nThe numerator vanishes at:\n\n$$x = 2$$\n\nThe denominator vanishes at:\n\n$$x = -7$$\n\n(always excluded).\n\nBecause the inequality is strict ($< 0$), keep the middle region without its endpoints:\n\n$$(-7, 2)$$\n\nReading the signs on the open intervals made by the critical points:\n\n| Interval | Sign |\n| --- | --- |\n| $(-\\infty, -7)$ | $+$ |\n| $(-7, 2)$ | $-$ |\n| $(2, \\infty)$ | $+$ |\n\nA quick check: plug in $x = 0$: $\\dfrac{−8}{7}$ ≈ -1.14 < 0, confirming it belongs.\n\nSo the statement is True.",
        "A rational inequality is decided by the zeros of the numerator and the excluded zeros of the denominator. Start from\n\n$$\\dfrac{x^{2} - 4}{x + 10} \\le 0$$\n\nThe critical points are the zeros of the numerator and the excluded zeros of the denominator.\n\nThe numerator vanishes when:\n\n$$(x^{2} - 4) = 0$$\n\nSo:\n\n$$x = \\pm 2$$\n\nThe denominator vanishes at:\n\n$$x = -10$$\n\n(always excluded).\n\nReading the sign chart against the inequality symbol: keep the non-positive regions, including $x = \\pm 2$ (numerator zero), but never $x = -10$:\n\n$$(-\\infty, -10) \\cup [-2, 2]$$\n\nReading the signs on the open intervals made by the critical points:\n\n| Interval | Sign |\n| --- | --- |\n| $(-\\infty, -10)$ | $-$ |\n| $(-10, -2)$ | $+$ |\n| $(-2, 2)$ | $-$ |\n| $(2, \\infty)$ | $+$ |\n\nA quick check: plug in $x = -20$: $\\dfrac{400−4}{−10}$ = -39.6 $\\le$ 0, confirming $(-\\infty, -10)$ belongs; plug in $x = -5$: $\\dfrac{25−4}{5}$ = 4.2, which is not $\\le$ 0, confirming $(-10, -2)$ is excluded.\n\nComparing this value with the claim shows the statement is True.",
        "A rational inequality is decided by the zeros of the numerator and the excluded zeros of the denominator. Start from\n\n$$\\dfrac{(x - 5)(x + 3)}{x + 8} \\ge 0$$\n\nThe critical points are the zeros of the numerator and the excluded zeros of the denominator.\n\nNumerator zeros at $-3$, $5$.\n\nDenominator zero (always excluded) at $-8$.\n\nReading the sign chart against the inequality symbol: keep the non-negative regions, including $x = -3$ and $x = 5$ (numerator zeros), but never $x = -8$:\n\n$$(-8, -3] \\cup [5, \\infty)$$\n\nReading the signs on the open intervals made by the critical points:\n\n| Interval | Sign |\n| --- | --- |\n| $(-\\infty, -8)$ | $-$ |\n| $(-8, -3)$ | $+$ |\n| $(-3, 5)$ | $-$ |\n| $(5, \\infty)$ | $+$ |\n\nA quick check: plug in $x = 0$: (-5)$\\dfrac{3}{8}$ = -1.875, which is not $\\ge$ 0, confirming $(-3, 5)$ is excluded, as expected, so the statement is True.",
        "A rational inequality is decided by the zeros of the numerator and the excluded zeros of the denominator. Start from\n\n$$\\dfrac{x^{2} - 4}{x^{2} - 25} \\le 0$$\n\nThe critical points are the zeros of the numerator and the excluded zeros of the denominator.\n\nThe numerator vanishes when:\n\n$$(x^{2} - 4) = 0$$\n\nSo:\n\n$$x = \\pm 2$$\n\nDenominator $(x^{2} - 25) = 0$ at $x = \\pm 5$ (excluded).\n\nReading the sign chart against the inequality symbol: keep the non-positive regions, including $x = \\pm 2$ (numerator zero), but never $x = \\pm 5$:\n\n$$(-5, -2] \\cup [2, 5)$$\n\nReading the signs on the open intervals made by the critical points:\n\n| Interval | Sign |\n| --- | --- |\n| $(-\\infty, -5)$ | $+$ |\n| $(-5, -2)$ | $-$ |\n| $(-2, 2)$ | $+$ |\n| $(2, 5)$ | $-$ |\n| $(5, \\infty)$ | $+$ |\n\nA quick check: plug in $x = -3$: $\\dfrac{9−4}{9−25}$ = $\\dfrac{5}{−16}$ ≈ -0.31 $\\le$ 0, confirming $(-5, -2]$ belongs; plug in $x = 0$: $\\dfrac{−4}{−25}$ = 0.16, which is not $\\le$ 0, confirming $(-2, 2)$ is excluded, so the statement is True."
      ]
    },
    {
      "caseId": "MATH 12.15",
      "chapter": "Chapter 12 · 12.1",
      "title": "Mismatched Gifts (Derangements)",
      "context": "6 friends each bring one wrapped gift to a party. The gifts are shuffled and redistributed uniformly at random, one to each friend - every one of the 6! possible assignments is equally likely.",
      "statements": [
        "The total number of ways to redistribute the 6 gifts is 720.",
        "The probability that no friend receives their own gift is greater than 36.8%.",
        "The probability that exactly one friend receives their own gift is greater than the probability that no friend receives their own gift.",
        "The probability that exactly two friends receive their own gifts is exactly 3/16.",
        "The probability that every friend receives their own original gift (the identity assignment) is greater than 1 in 500."
      ],
      "answerKey": [
        true,
        true,
        false,
        true,
        false
      ],
      "explanations": [
        "The claim asks for the total number of ways to redistribute the $6$ gifts. This corresponds to the number of permutations of $6$ distinct items. For $n$ items, the total number of permutations is $n!$.\n\n$$n! = 6!$$\n$$6! = 6 \\times 5 \\times 4 \\times 3 \\times 2 \\times 1$$\n$$6! = 720$$\n\nThus, there are $720$ total ways to redistribute the gifts. The statement claims this number is $720$, so the statement is True.",
        "The probability that no friend receives their own gift means we are looking for the probability of $0$ matches, which is $P(0 \\text{ matches})$. The number of such arrangements is given by the derangement number $D_n$. For $n=6$, we need $D_6$. From the overview, we calculated $D_6 = 265$. The total number of ways to redistribute the gifts is $6! = 720$.\n\nThe probability is the ratio of derangements to total permutations:\n\n$$P(0 \\text{ matches}) = \\frac{D_6}{6!}$$\n$$P(0 \\text{ matches}) = \\frac{265}{720}$$\n$$P(0 \\text{ matches}) \\approx 0.3680555$$\n\nExpressed as a percentage, this is approximately $36.80555\\%$. The claim states that this probability is greater than $36.8\\%$. Since $36.80555\\% > 36.8\\%$, the statement is True.",
        "This statement compares two probabilities: the probability that exactly one friend receives their own gift, $P(1 \\text{ match})$, and the probability that no friend receives their own gift, $P(0 \\text{ matches})$.\n\nFirst, let us calculate $P(1 \\text{ match})$. The number of ways to have exactly $1$ match for $n=6$ items is given by $N_1 = \\binom{6}{1} D_{6-1} = \\binom{6}{1} D_5$. From the overview, $D_5 = 44$. The total number of arrangements is $6! = 720$.\n\n$$P(1 \\text{ match}) = \\frac{\\binom{6}{1} D_5}{6!}$$\n$$P(1 \\text{ match}) = \\frac{6 \\times 44}{720}$$\n$$P(1 \\text{ match}) = \\frac{264}{720}$$\n$$P(1 \\text{ match}) \\approx 0.3666666$$\n\nFrom statement B, the probability that no friend receives their own gift is $P(0 \\text{ matches}) = \\frac{265}{720} \\approx 0.3680555$.\n\nThe claim states that $P(1 \\text{ match})$ is greater than $P(0 \\text{ matches})$. Comparing the values, $0.3666666$ is not greater than $0.3680555$, so the statement is False.",
        "The claim asks for the probability that exactly two friends receive their own gifts, which is $P(2 \\text{ matches})$. The number of ways to have exactly $2$ matches for $n=6$ items is given by $N_2 = \\binom{6}{2} D_{6-2} = \\binom{6}{2} D_4$. From the overview, $D_4 = 9$. The total number of arrangements is $6! = 720$.\n\nFirst, we compute the binomial coefficient:\n\n$$\\binom{6}{2} = \\frac{6 \\times 5}{2 \\times 1} = 15$$\n\nNow, we calculate the probability:\n\n$$P(2 \\text{ matches}) = \\frac{\\binom{6}{2} D_4}{6!}$$\n$$P(2 \\text{ matches}) = \\frac{15 \\times 9}{720}$$\n$$P(2 \\text{ matches}) = \\frac{135}{720}$$\n\nTo simplify this fraction, we can divide both the numerator and denominator by their greatest common divisor. Both are divisible by $5$, then $3$, then $9$, or directly by $45$:\n\n$$P(2 \\text{ matches}) = \\frac{135 \\div 45}{720 \\div 45}$$\n$$P(2 \\text{ matches}) = \\frac{3}{16}$$\n\nThe claim states that this probability is exactly $\\frac{3}{16}$, so the statement is True.",
        "The claim asks for the probability that every friend receives their own original gift. This means there are exactly $6$ matches. This is a single specific arrangement where each friend receives their own gift, often called the identity permutation. The number of ways for this to happen is $N_6 = 1$. The total number of arrangements is $6! = 720$.\n\nThe probability is:\n\n$$P(6 \\text{ matches}) = \\frac{1}{6!}$$\n$$P(6 \\text{ matches}) = \\frac{1}{720}$$\n\nTo compare this with 'greater than $1$ in $500$', we convert both fractions to decimal form:\n\n$$\\frac{1}{720} \\approx 0.001388$$\n$$\\frac{1}{500} = 0.002$$\n\nThe claim states that the probability is greater than $1$ in $500$. However, $0.001388$ is not greater than $0.002$, so the statement is False."
      ]
    },
    {
      "caseId": "MATH 2.58",
      "chapter": "Chapter 2 · 2.2",
      "title": "Squared minus sign in a monomial denominator",
      "context": "Let $x$ and $y$ be nonzero real numbers. Which of the following statements is/are correct?",
      "statements": [
        "For $x\\neq 0,-1$, it holds that $\\dfrac{1}{x(x+1)}=\\dfrac{1}{x}+\\dfrac{1}{x+1}$.",
        "For $x\\neq -3,2$, it holds that $\\dfrac{x^2-4}{x+3}\\cdot\\dfrac{x^2-9}{x-2}=(x+2)(x-3)$.",
        "For $q\\neq 0$, it holds that $\\dfrac{4(3q)}{(-3q)^2}=-\\dfrac{4}{3q}$.",
        "For $x\\neq -3,2$, it holds that $\\dfrac{x^2-4}{x+3}\\cdot\\dfrac{x^2-9}{x-2}=(x+2)(x+3)$.",
        "Combining $\\dfrac{h}{k}+\\dfrac{k}{h}-2$ on $hk\\neq 0$ as $\\dfrac{(h+k)^2}{hk}$."
      ],
      "answerKey": [
        false,
        true,
        false,
        false,
        false
      ],
      "explanations": [
        "Combine the proposed right-hand side over $x(x+1)$.\n\nCombine:\n\n$$\\frac1x+\\frac1{x+1}=\\frac{x+1+x}{x(x+1)}$$\n\nCollect:\n\n$$=\\frac{2x+1}{x(x+1)}$$\n\nIts numerator is not the $1$ on the left, so the statement is False.",
        "Factor both numerators as differences of squares before multiplying:\n\n$$\\dfrac{(x-2)(x+2)}{x+3}\\cdot\\dfrac{(x-3)(x+3)}{x-2}$$\n\nThe factor $(x-2)$ cancels with the second denominator and $(x+3)$ cancels with the first denominator, leaving $(x+2)(x-3)$, which matches the printed product.\n\nSo the statement is True.",
        "Least common denominator of $(-3q)^2$ and $3q$ is the product $(-3q)^23q$:\n\n$$\\frac{\\cdots}{(-3q)^2}+\\frac{\\cdots}{3q}=\\frac{\\cdots}{(-3q)^23q}$$\n\nAdding numerators over added denominators is not an identity.\n\nThe claim’s comparison is incorrect, so the statement is False.",
        "Factor both numerators and cancel only common nonzero factors.\n\nFactor:\n\n$$\\frac{(x-2)(x+2)}{x+3}\\cdot\\frac{(x-3)(x+3)}{x-2}$$\n\nCancel:\n\n$$=(x+2)(x-3)$$\n\nThe surviving second factor is $x-3$, not $x+3$, so the statement is False.",
        "Clear to the common denominator $hk$:\n\nCombine:\n\n$$\\frac{h}{k}+\\frac{k}{h}=\\frac{h^2+k^2}{hk}$$\n\nCompare:\n\n$$\\frac{(h+k)^2}{hk}=\\frac{h^2+2hk+k^2}{hk}$$\n\nThe squared-sum numerator carries an extra $2hk$, so the statement is False."
      ]
    }
  ],
  "english": [
    {
      "caseId": "ENG T.5.08",
      "chapter": "Grammar · t.5",
      "title": "Task 8",
      "context": "Each sentence is newly constructed, using vocabulary echoing the passage. Decide if each sentence is grammatically correct.",
      "statements": [
        "\"Despite of the conditions attached, most governments accepted the aid readily.\"",
        "\"Whoever administers the fund should account for the differing needs of each recipient.\"",
        "\"The government denied having deliberately delayed its currency stabilisation measures.\"",
        "\"There is several reasons why historians continue to disagree about the plan's impact.\"",
        "\"The programme, which was authorised in 1948, aimed to accelerate European recovery.\""
      ],
      "answerKey": [
        false,
        true,
        true,
        false,
        true
      ],
      "explanations": [
        "**A) \"Despite of the conditions attached, most governments accepted the aid readily.\"**\n\nDespite never takes of. Either drop of (despite the conditions) or switch to in spite of. Despite of is a common blend of the two patterns. The noun phrase the conditions attached is fine; only the preposition pairing is wrong.\n\n**Trap:** In spite of needs of; despite stands alone before a noun phrase.\n\nRemember the short rule: despite + noun; in spite of + noun. Despite of is ungrammatical, so the line fails — \"Despite the conditions attached, most governments accepted the aid readily.\"",
        "**B) \"Whoever administers the fund should account for the differing needs of each recipient.\"**\n\nWhoever correctly heads the subject clause (whoever administers the fund), and should account is a well-formed modal predicate for that subject. The relative sense of whoever as \"the person who\" fits the advising tone. Administers is singular because whoever is treated as a singular indefinite subject.\n\nWhomever would be wrong here because the pronoun is the subject of administers, not an object. Whoever + singular verb + should account is sound, so the sentence stands.",
        "**C) \"The government denied having deliberately delayed its currency stabilisation measures.\"**\n\nAfter deny, a perfect gerund (having + past participle) reports a prior act as the content of the denial. Having deliberately delayed places the delay before the denying, which is the intended time relation. Denied delaying would also be possible, but the perfect gerund makes the earlier timing especially clear.\n\nKeep the -ing form after deny; a bare that-clause with a finite past is a different pattern. Denied having… is the right pattern for a prior act, so the wording holds.",
        "**D) \"There is several reasons why historians continue to disagree about the plan's impact.\"**\n\nExistential there agrees with the notional subject that follows. Several reasons is plural, so the verb must be are, not is. There itself is a dummy; number comes from reasons, not from there.\n\n**Trap:** There is feels default in speech even when a plural noun is coming.\n\nGlance ahead to the noun after the verb before choosing is or are. Plural reasons needs There are, so this is false — \"There are several reasons why historians continue to disagree about the plan's impact.\"",
        "**E) \"The programme, which was authorised in 1948, aimed to accelerate European recovery.\"**\n\nThe non-restrictive relative which was authorised modifies singular programme, and the main verb aimed agrees with that same singular subject. Relative and main clauses stay aligned. Commas mark the which-clause as extra information about the already-identified programme.\n\nThat was authorised would be more restrictive in feel; which with commas fits a known programme dated to 1948. Singular programme with was / aimed is consistent, so the sentence is sound."
      ]
    },
    {
      "caseId": "ENG T.3.09",
      "chapter": "Vocabulary · t.3",
      "title": "Task 9",
      "context": "Each sentence is newly written, using a word or phrase echoing the passage's actual vocabulary. Decide if the word/phrase is used correctly according to its meaning as established in the text.",
      "statements": [
        "\"The mechanism was described as self-correcting, requiring constant deliberate government intervention to function.\"",
        "\"Analysts describe Britain's 1925 return to gold as vindicated by subsequent economic difficulties.\"",
        "\"The gold discoveries eased what might otherwise have been a persistently deflationary bias in the system.\"",
        "\"The interwar arrangement was considerably more fragile than its prewar predecessor, collapsing rapidly under stress.\"",
        "\"The pound's decline was confined to a single trading session, lasting only a few hours in total.\""
      ],
      "answerKey": [
        false,
        true,
        true,
        true,
        false
      ],
      "explanations": [
        "**A) \"The mechanism was described as self-correcting, requiring constant deliberate government intervention to function.\"**\n\nIn paragraph (2), the self-correcting price-specie flow restores balance \"without any deliberate policy intervention.\" Pairing \"self-correcting\" with \"constant deliberate government intervention\" contradicts the passage sense of the term. The automatic deficit → gold outflow → price → export loop is precisely what makes intervention unnecessary in the model. Any paraphrase that reintroduces constant government action is an antonym of the text's collocation.\n\n**Trap:** Self-correcting sounds technical enough to hide an antonym paraphrase.\n\nSelf-correcting means no deliberate intervention, so the sentence's meaning is **false** against the text.",
        "**B) \"Analysts describe Britain's 1925 return to gold as vindicated by subsequent economic difficulties.\"**\n\nParagraph (5) says many historians regard Keynes's prediction as \"substantially vindicated\" by Britain's subdued growth and elevated unemployment after the overvalued 1925 return. Here \"vindicated\" keeps that confirmed-by-later-outcomes sense tied to those difficulties. The verb does not mean the policy was wise; it means later evidence supported the critical forecast. Subdued growth and elevated unemployment in the remainder of the 1920s are the passage's own confirming outcomes.\n\n**Tip:** Vindicated = later evidence bore the claim out — not \"justified as wise policy.\"\n\nThe passage-backed use of vindicated fits, so the wording is **true**.",
        "**C) \"The gold discoveries eased what might otherwise have been a persistently deflationary bias in the system.\"**\n\nParagraph (3) says the Witwatersrand-driven production surge was \"easing what might otherwise have been a persistently deflationary bias in a system reliant on a fixed physical commodity.\" The sentence restates that easing role with the same collocates. \"Eased\" / \"persistently deflationary bias\" are the passage's own pairing, not a new causal claim. The discoveries matter because a fixed gold stock would otherwise have kept money tight as economies grew.\n\nThe eased / persistently deflationary bias wording matches the passage, so the claim is **true**.",
        "**D) \"The interwar arrangement was considerably more fragile than its prewar predecessor, collapsing rapidly under stress.\"**\n\nParagraph (6) opens by saying the interwar gold exchange standard \"proved considerably more fragile than its prewar predecessor,\" and later paragraphs show that fragility under 1930s stress. \"Considerably more fragile\" is the passage's own comparison. Multi-currency reserve layering — sterling and dollars alongside gold — is the structural reason the text gives for that extra fragility. \"Collapsing rapidly under stress\" summarizes the early-1930s cascade without inventing a new date.\n\nThe fragility contrast is passage-true, so the statement is **true**.",
        "**E) \"The pound's decline was confined to a single trading session, lasting only a few hours in total.\"**\n\nParagraph (7) places the ~25% fall \"within a matter of months,\" not inside one session of a few hours. The sentence invents an ultra-short collapse the text never describes. Months is the only duration the passage attaches to that decline; hours or a single session have no support. Do not borrow \"dramatic fashion\" from the same paragraph as a license to shrink the timeline.\n\n**Trap:** Months → hours shrinks the timeline without any supporting span.\n\nThe passage times the decline in months, so the few-hours version is **false**."
      ]
    }
  ]
};
