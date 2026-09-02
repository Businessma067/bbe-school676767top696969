import fs from "node:fs";
import path from "node:path";

function patchLetters(file, id, letters) {
  const fp = path.join("textbook/output/_rev", file);
  const arr = JSON.parse(fs.readFileSync(fp, "utf8"));
  const t = arr.find((x) => x.id === id);
  if (!t) throw new Error(id);
  t.tactical_explanations = letters;
  fs.writeFileSync(fp, JSON.stringify(arr, null, 2) + "\n");
  console.log("gold letters", id, letters.map((e) => e.split(/\s+/).length).join("/"));
}

patchLetters("ch5/01_10.json", "math-5-1", [
  `**A) The North depot currently holds 360 crates.**  (true)

The statement is a claim about today's North holding, not about the equalized holdings after the transfer. North is the depot that would send crates in the note's $50$-crate move, so it has to be the larger of the two; if the labels were swapped, North would be the smaller pile.

The overview already recovered $x = 360$ as that larger holding, by adding the total $x+y=620$ to the difference $x-y=100$. This letter does not rebuild that pair. It only asks whether the recovered North count is the number in the claim.

**1.** North is the side that shrinks in the equalizing transfer, so the recovered $360$ is attached to North, not to South.

**2.** A solver who treated the equalized $310$ as today's North count, or who split $620$ in half from the start, would land on $310$ and miss the claim. Halving the total is what happens *after* the transfer, not before it.

The recovered North holding is $360$, so the statement is True.`,

  `**B) The South depot currently holds 240 crates.**  (false)

South is the leftover after North's recovered $360$ is taken out of the conserved $620$. The overview already found $y = 260$. The claim writes $240$, which is $20$ crates short of that leftover.

**1.** The figure $240$ is a typical misread of the equalizing story: start from the common $310$ and subtract $70$, or treat the $50$-crate move as if it were already today's gap. Neither of those routes is the difference equation $x-y=100$.

**2.** Because a transfer of $50$ takes $50$ off one side and adds $50$ to the other, today's gap has to be $100$, not $50$ and not $70$. South is then $260$, not $240$.

**3.** The opposite verdict would need the total or the transfer note to change. With $620$ crates and a $50$-crate equalizing move, South cannot be $240$.

The claimed $240$ sits $20$ below the recovered $260$, so the statement is False.`,

  `**C) If 30 crates were moved from South to North instead, North would then hold 390 crates.**  (true)

This letter is not the overview's equalizing transfer. The note moved $50$ crates from North to South. The claim reverses the direction and uses a different amount, $30$, from South to North. North therefore *gains* crates.

The overview already has today's North holding $x = 360$. The extra arithmetic is only the reverse move:

**1.** Start from the recovered North count.

**2.** Add the $30$ crates that arrive from South:

$$360 + 30 = 390$$

**3.** A solver who subtracted $30$ anyway, copying the overview's $x-50$ habit, would land on $330$ and miss the claim. The sign of the move is the whole content of this letter: South is the sender, North is the receiver.

**4.** After the reverse move South would be $260-30=230$, and the two depots would be further apart, not equal. The claim does not ask for that South figure; it only asks for North's new holding, which is $390$.

The recovered North count plus the reverse transfer is $390$, so the statement is True.`,

  `**D) The difference between the two depots today is 120 crates.**  (false)

Today's gap is already equation $(2)$ in the overview: $x-y=100$. The recovered counts $360$ and $260$ are $100$ apart, not $120$.

**1.** The trap is reading the note's $50$ transferred crates as the current difference, or adding $50$ onto $70$ to manufacture $120$. A transfer of $50$ closes a gap of $100$, because it takes $50$ off one side and adds $50$ to the other. The gap shrinks by twice the amount moved.

**2.** If today's difference really were $120$, the equalizing move would have to be $60$ crates, not $50$. The stem's $50$-crate note is what forces $x-y=100$.

**3.** Another wrong route is to compare North to the equalized $310$ and double that $50$-crate drop into a $120$ by mixing in an extra $20$. None of those combinations is the recovered gap.

The claim's $120$ is larger than the recovered $100$, so the statement is False.`,

  `**E) Moving 50 crates from North to South would leave both depots holding 310 crates each.**  (true)

This is the equalizing transfer that the overview already checked: North $360-50=310$ and South $260+50=310$. The letter is not a second solve. It asks what the transfer *means*.

A transfer does not create or destroy crates, so if the two holdings become equal, each must be half of the conserved $620$. That is why $310$ appears on both sides. Half the total is a consistency check on the translation, not a new unknown.

**1.** If the recovered North count had been anything other than $360$, the $50$-crate move would not have landed on half of $620$. The match to $310$ on both sides is how we know the two equations were translated correctly.

**2.** A solver who moved $50$ from South to North instead would get $410$ and $210$, which are not equal. Direction matters. The claim uses the note's actual direction, North to South.

Both sides of the equalizing transfer are $310$, so the statement is True.`,
]);

patchLetters("ch1/01_10.json", "math-1-1", [
  `**A.** → True

Intersection is the stricter of the two combining operations: a number has to clear both lists, not just one. The overview already scanned $A$ against $B$ and left $\\{3,4,5\\}$. This letter is reading that overlap, not rebuilding the scan.

**1.** $1$ and $2$ sit in $A$ but miss $B$, so they cannot survive an intersection. $6$ and $7$ sit in $B$ but miss $A$, so they cannot survive either. The three numbers that sit in both are $3$, $4$, and $5$.

**2.** A solver who instead ran a union would keep $1$ and $2$ as well and land on $\\{1,2,3,4,5,6,7\\}$, a completely different set. The claim is naming the overlap, not the combined list.

**3.** Order of writing does not matter in a set, so $\\{5,4,3\\}$ would still be the same intersection. The claimed roster is exactly that overlap.

The recovered intersection is $\\{3,4,5\\}$, so the statement is True.`,

  `**B.** → False

A union is forced to contain every member of each input. The overview already assembled $A\\cup C=\\{1,2,3,4,5,6,7,8,9\\}$. The claimed set stops at $8$ and quietly drops $9$, even though $9\\in C$.

**1.** $C$ itself is $\\{5,6,7,8,9\\}$. A union can never be smaller than either input, so any version of $A\\cup C$ that ends at $8$ has thrown a real element away.

**2.** The dropped $9$ is not a rounding of a boundary. It is a member of $C$. Nearness to $8$ is not a licence to delete it.

**3.** A solver who copied $A$'s upper end $5$ and then added $C$ only up to $8$ is treating the union as a closed interval written by hand rather than a membership test. Sets here are lists, not intervals.

The claimed roster is one element too small, so the statement is False.`,

  `**C.** → True

The triple intersection is a second filter on the pair already recovered. The overview has $A\\cap B=\\{3,4,5\\}$. Of that trio, only $5$ also sits in $C$: $3$ and $4$ sit below $C$'s range.

Chaining two intersections is the same as intersecting all three sets at once. Either route leaves the same lone survivor $\\{5\\}$.

**1.** The trap is keeping $3$ or $4$ because they "look close" to $C$'s starting point $5$. Close is not membership. $C$ begins at $5$.

**2.** Another trap is to intersect $A$ with $C$ first and forget to pass through $B$. $A\\cap C=\\{5\\}$ happens to agree here, but that is luck of these three lists, not a reason to skip $B$.

The recovered triple intersection is $\\{5\\}$, so the statement is True.`,

  `**D.** → False

Difference $A\\setminus C$ deletes a member of $A$ only when that member also sits in $C$. The overview already found $A\\setminus C=\\{1,2,3,4\\}$. The claim also drops $4$, but $4\\in A$ and $4\\notin C$, so the difference rule has no licence to delete it.

**1.** Only $5$ is shared between $A$ and $C$. That is the one number that leaves $A$. $1,2,3,4$ all stay.

**2.** Nearness to $C$'s $5$ is not membership. The claimed $\\{1,2,3\\}$ is simply one element too small, the same kind of off-by-one that broke the union in B, now on the other operation.

**3.** A solver who confused difference with intersection would have kept only $\\{5\\}$. A solver who confused it with $C\\setminus A$ would have kept $\\{6,7,8,9\\}$. Neither is this claim; this claim is $A$ minus $C$ with $4$ wrongly deleted.

The recovered difference is $\\{1,2,3,4\\}$, so the statement is False.`,

  `**E.** → False

Disjointness is a claim about the intersection being empty, not about the two lists looking different at the ends. $B$ leans low and $C$ leans high, which is why a glance suggests they miss each other, but the overview's scan already found $B\\cap C=\\{5,6,7\\}$.

**1.** Three shared numbers are three too many. Disjointness fails as soon as one shared number appears. Here there are three.

**2.** The visual impression that the ranges point in different directions is exactly the trap. These are finite lists, not opposite rays on the line. $5,6,7$ sit in both.

**3.** If the claim had been about $A$ and a set starting at $10$, disjointness could have held. Against $C=\\{5,6,7,8,9\\}$, $B$ is not disjoint.

The recovered overlap is nonempty, so the statement is False.`,
]);

patchLetters("ch8/01_10.json", "math-8-1", [
  `**A.** → True

This is a level question at side $2$ cm, not a scale question. The overview already evaluated $M(2)=40$ from $5\\cdot 2^{3}=5\\cdot 8$. This letter only asks whether that table entry is the number in the claim.

The mass is five times the cube of the side, not five times the side itself. A rushed solver who computed $5\\cdot 2^{2}=20$, treating the block as an area, would miss the cubic packing.

**1.** The exponent $3$ acts on $s$, never on the density $5$. Cubing the side first, then multiplying, is the order in identity $(1)$.

**2.** Side $2$ is one of the four standard sides already cubed in Part 3. The $2$ cm entry is $40$ grams.

The recovered mass at $2$ cm is $40$, so the statement is True.`,

  `**B.** → False

The same table lists $M(3)=135$, not $125$. The figure $125$ is $5^{3}$: someone cubed the density coefficient and ignored the side.

**1.** The exponent acts on $s$, never on the $5$. Swapping those two would have needed a rule of the form $s\\cdot 5^{3}$, which is not the resin model.

**2.** Three centimetres cubed is $27$, times density $5$ is $135$. The claim's $125$ is $10$ grams light, and that $10$ is exactly the gap between $5^{3}$ and $5\\cdot 3^{3}$.

**3.** Letter A already used the same rule at a different side. The false figure here is a different mistake: cubing the wrong number, not using the wrong exponent.

The recovered mass at $3$ cm is $135$, so the statement is False.`,

  `**C.** → True

This is a scale question, not a level. The coefficient $5$ cancels in the ratio, which is identity $(2)$ in the overview:

the doubling factor is $k^{3}$ with $k=2$, so $2^{3}=8$.

**1.** "Twice the side, twice the mass" would be exponent $1$. "Twice the side, four times the mass" would be the area story, exponent $2$. A cube of widths is eight copies of the original block.

**2.** Density never enters a scale question. Whether the resin were $5$ or $50$ grams per cubic centimetre, doubling the side would still multiply mass by $8$.

**3.** The overview already recorded that doubling factor in Part 3. This letter is reading the scale identity against a doubling claim, not rebuilding the mass table.

Doubling multiplies mass by $8$, so the statement is True.`,

  `**D.** → True

At side $1$ every power is $1$, so the mass equals the coefficient. The overview's table already reads $M(1)=5$. That is a quick check on the printed $5$, not a new cube.

**1.** A solver who still cubed $5$ would land on $125$ and confuse this letter with B. The unit side is where coefficient and mass coincide.

**2.** Side $1$ cm is the smallest of the four standard sides in Part 3. It is also the one entry a density-first reader is most likely to overwrite by cubing $5$.

The recovered mass at $1$ cm is $5$, so the statement is True.`,

  `**E.** → False

Four centimetres sit in the table as $M(4)=320$, not $240$. Nothing in $5s^{3}$ produces $240$: that figure is closer to $5\\cdot 48$, as if a square and a cube had been mixed.

**1.** A fourfold width is sixty-four copies of the unit cube, times density $5$. The overview already carries $4^{3}=64$ and $M(4)=320$.

**2.** The false $240$ is not a nearby rounding of $320$. It is a different product. Mixing $4^{2}\\cdot 15$ or $5\\cdot 4\\cdot 12$ can manufacture numbers in that neighbourhood; the cube rule does not.

**3.** Compared with letter B, the error here is not cubing the coefficient. It is inventing a mass that the table never listed.

The recovered mass at $4$ cm is $320$, so the statement is False.`,
]);

patchLetters("ch11/01_10.json", "math-11-1", [
  `**A) The monthly periodic interest rate is 0.60%.**  (true)

A nominal quote with monthly compounding is spread evenly over the twelve interest dates. That is step 1 of the overview: $i_m = 0.60\\%$. This letter is reading that split, not compounding it yet.

**1.** The trap is treating $7.20\\%$ itself as the monthly rate, or dividing by $365$ as if the bank credited daily. Neither of those matches how a nominal annual rate with $n = 12$ is defined.

**2.** Another wrong split is $7.20/10 = 0.72$, as if there were ten months. Twelve interest dates, not ten, not $365$.

**3.** The monthly rate is an input to every later letter. Getting $0.60\\%$ right is what lets the effective rate and the year-end balance come out as they do in Parts 3.2 and 3.3.

The recovered monthly rate is $0.60\\%$, so the statement is True.`,

  `**B) The effective annual rate is approximately 7.44%.**  (true)

The effective rate is the single yearly yield that reproduces those twelve monthly credits. The overview already compounded $(1.006)^{12}$ to about $7.44\\%$. Someone who reported the nominal $7.20\\%$ as if it were already effective would understate the yield by the extra interest-on-interest that monthly crediting produces.

**1.** The $7.44\\%$ figure is that extra, not a second independent formula. It is $(1.006)^{12}-1$, already computed in Part 3.

**2.** Rounding $0.074424$ to $7.44\\%$ is the approximation the claim uses. It is not $7.40\\%$ and not $7.2\\%$.

**3.** If compounding had been annual, the effective rate would have stayed $7.20\\%$. Monthly crediting is what lifts it to $7.44\\%$. That comparison is letter D; this letter only asks for the monthly effective rate itself.

The recovered effective rate is about $7.44\\%$, so the statement is True.`,

  `**C) A \\$6,000 deposit left for exactly one year would grow to \\$6,446.54.**  (true)

Once the growth factor $1.074424$ is in hand, the year-end balance is the principal times that factor, which is the overview's $FV \\approx 6{,}446.54$. This letter is reading that product, not rebuilding $(1.006)^{12}$.

**1.** A solver who multiplied $\\$6,000$ by $1.072$ instead, using the nominal rate as if it compounded once, would get $\\$6,432$ and miss the extra $\\$14.54$ that the twelve intra-year credits produce.

**2.** The extra $\\$14.54$ is exactly the gap between monthly and annual compounding on this principal. Letter D asks which schedule is stronger; this letter asks for the monthly schedule's dollar balance.

**3.** The claim's cents, $54$, match the overview's rounding of $6,000 \\times 1.074424$. A table-lookup that stopped at $6,446$ without cents would still be the same dollar, but the printed claim includes the cents.

The recovered year-end balance is $\\$6{,}446.54$, so the statement is True.`,

  `**D) If the bank instead compounded the same nominal rate annually, the effective annual rate would be higher than under monthly compounding.**  (false)

With the nominal rate held fixed, fewer compounding dates can only lower the effective yield. Annual compounding collapses to the nominal quote itself, $R_{\\mathrm{ann}} = 7.20\\%$, which the overview already set below the monthly $7.44\\%$.

**1.** The claim has the comparison backwards: more frequent compounding at a fixed nominal rate is the stronger schedule, not the weaker one.

**2.** The ranking $7.20\\% < 7.44\\%$ is already in Part 3. This letter is the meaning of that ranking, not a new conversion. Annual compounding is $n=1$, so $R=r$.

**3.** The opposite verdict would need the *effective* rate held fixed while frequency fell, which is a different quoting convention. The stem holds the *nominal* rate fixed.

Annual compounding is weaker here, so the statement is False.`,

  `**E) The effective annual rate exceeds the nominal rate by more than 1.00 percentage point.**  (false)

The overview's gap is $7.44\\% - 7.20\\% = 0.24$ percentage points. That sits well short of a full point.

**1.** At a modest single-digit nominal rate the exponential and its linear approximation stay close. A $1.00$-point premium would need either a much higher quote or a much longer horizon, neither of which applies to one year at $7.20\\%$.

**2.** The trap is reading $7.44$ against $6.44$, or treating $0.74$ as if it were already more than one point. The comparison the claim asks for is effective minus nominal, $0.24$.

**3.** Letter B recovered the $7.44\\%$. Letter D ranked it against annual compounding. This letter only asks how far $7.44$ sits above $7.20$. The distance is a quarter-point, not more than one.

The recovered gap is $0.24$ points, so the statement is False.`,
]);
