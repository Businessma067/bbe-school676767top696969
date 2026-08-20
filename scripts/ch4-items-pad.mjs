/**
 * Extra unique items so each subsection can fill 5 × task-count slots
 * without repeating a story skeleton.
 */
import { E, claim, cmpLine, item } from "./ch4-lib.mjs";

function numStory(id, sub, tier, answer, statement, rule, steps) {
  return item(id, sub, tier, (t) => {
    const c = claim(answer, t);
    return {
      statement: statement.replaceAll("{{C}}", c.phrase),
      expl: E(t, rule, steps, cmpLine(c)),
    };
  });
}

export function padLinear() {
  const rows = [
    ["nails", 1, 14, "Four more than twice a nail count equals $32$. The count is {{C}}.", "Let $n$ be the count.", ["$$2n+4=32$$", "$$2n=28$$", "$$n=14$$"]],
    ["bolts", 1, 9, "A bolt count $n$ satisfies $3n-6=21$. Then $n$ is {{C}}.", "Solve the linear equation.", ["$$3n-6=21$$", "$$3n=27$$", "$$n=9$$"]],
    ["washers", 1, 11, "Six less than five times a washer count equals $49$. The count is {{C}}.", "Let $n$ be the count.", ["$$5n-6=49$$", "$$5n=55$$", "$$n=11$$"]],
    ["screws", 2, 7, "A screw count $n$ obeys $4n+5=33$. Then $n$ is {{C}}.", "Isolate $n$.", ["$$4n+5=33$$", "$$4n=28$$", "$$n=7$$"]],
    ["clips", 1, 15, "A third of a clip count plus $7$ equals $12$. The count is {{C}}.", "Let $n$ be the count.", ["$$\\frac{n}{3}+7=12$$", "$$\\frac{n}{3}=5$$", "$$n=15$$"]],
    ["pegs", 2, 20, "A peg count $n$ satisfies $\\frac{n}{4}-1=4$. Then $n$ is {{C}}.", "Clear the equation.", ["$$\\frac{n}{4}-1=4$$", "$$\\frac{n}{4}=5$$", "$$n=20$$"]],
    ["hooks", 1, 13, "Twice a hook count minus $9$ equals $17$. The count is {{C}}.", "Let $n$ be the count.", ["$$2n-9=17$$", "$$2n=26$$", "$$n=13$$"]],
    ["rings", 2, 16, "A ring count $n$ satisfies $4n=64$. Then $n$ is {{C}}.", "The equation is $4n=64$.", ["$$4n=64$$", "$$n=16$$"]],
    ["beads", 1, 18, "A bead count increased by $6$ equals three times $8$. The count is {{C}}.", "Let $n$ be the count.", ["$$n+6=24$$", "$$n=18$$"]],
    ["tiles-n", 2, 12, "A tiler uses $n$ tiles with $n-4=\\frac{2}{3}n$. Then $n$ is {{C}}.", "Clear the equation.", ["$$n-4=\\frac{2}{3}n$$", "$$\\frac{1}{3}n=4$$", "$$n=12$$"]],
    ["chairs", 2, 24, "After $8$ chairs are added, a hall has $32$ chairs. The original count is {{C}}.", "Let $n$ be the original count.", ["$$n+8=32$$", "$$n=24$$"]],
    ["lamps", 1, 10, "A lamp count $n$ satisfies $7+n=17$. Then $n$ is {{C}}.", "Subtract $7$.", ["$$n=10$$"]],
    ["vases", 2, 18, "A vase count $n$ obeys $2(n-3)=30$. Then $n$ is {{C}}.", "Expand and solve.", ["$$2n-6=30$$", "$$2n=36$$", "$$n=18$$"]],
    ["cups", 1, 6, "A cup count $n$ satisfies $\\frac{2}{3}n=4$. Then $n$ is {{C}}.", "Multiply by $\\frac{3}{2}$.", ["$$n=6$$"]],
    ["plates", 2, 27, "A plate count $n$ obeys $n-9=\\frac{2}{3}n$. Then $n$ is {{C}}.", "Collect $n$ terms.", ["$$n-\\frac{2}{3}n=9$$", "$$\\frac{1}{3}n=9$$", "$$n=27$$"]],
    ["forks", 1, 8, "Three times a fork count equals $24$. The count is {{C}}.", "Divide by $3$.", ["$$3n=24$$", "$$n=8$$"]],
    ["spoons", 2, 19, "A spoon count $n$ satisfies $2n+1=39$. Then $n$ is {{C}}.", "Solve.", ["$$2n=38$$", "$$n=19$$"]],
    ["knives", 1, 17, "A knife count $n$ obeys $n-5=12$. Then $n$ is {{C}}.", "Add $5$.", ["$$n=17$$"]],
    ["bowls", 2, 22, "A bowl count $n$ satisfies $5n-8=102$. Then $n$ is {{C}}.", "Solve.", ["$$5n=110$$", "$$n=22$$"]],
    ["mugs", 1, 5, "A mug count $n$ obeys $9n=45$. Then $n$ is {{C}}.", "Divide by $9$.", ["$$n=5$$"]],
    ["jugs", 3, 25, "A jug count $n$ satisfies $\\frac{n+5}{2}=15$. Then $n$ is {{C}}.", "Clear the denominator.", ["$$n+5=30$$", "$$n=25$$"]],
    ["trays", 2, 14, "A tray count $n$ obeys $3(n+2)=48$. Then $n$ is {{C}}.", "Expand.", ["$$3n+6=48$$", "$$3n=42$$", "$$n=14$$"]],
    ["bins", 1, 30, "A bin count $n$ satisfies $\\frac{n}{5}=6$. Then $n$ is {{C}}.", "Multiply by $5$.", ["$$n=30$$"]],
    ["racks", 2, 13, "A rack count $n$ obeys $4n-9=43$. Then $n$ is {{C}}.", "Solve.", ["$$4n=52$$", "$$n=13$$"]],
    ["shelves", 3, 11, "A shelf count $n$ satisfies $\\frac{3n-1}{2}=16$. Then $n$ is {{C}}.", "Clear the denominator.", ["$$3n-1=32$$", "$$3n=33$$", "$$n=11$$"]],
    ["drawers", 2, 8, "A drawer count $n$ obeys $n+\\frac{n}{4}=10$. Then $n$ is {{C}}.", "Combine.", ["$$\\frac{5}{4}n=10$$", "$$n=8$$"]],
    ["cabinets", 3, 15, "A cabinet count $n$ satisfies $2n-\\frac{n}{3}=25$. Then $n$ is {{C}}.", "Common denominator $3$.", ["$$\\frac{6n-n}{3}=25$$", "$$\\frac{5n}{3}=25$$", "$$n=15$$"]],
    ["gates", 1, 12, "A gate count $n$ obeys $n/2+n/3=10$. Then $n$ is {{C}}.", "Common denominator $6$.", ["$$\\frac{3n+2n}{6}=10$$", "$$\\frac{5n}{6}=10$$", "$$n=12$$"]],
    ["posts", 2, 18, "A post count $n$ satisfies $n-\\frac{n}{6}=15$. Then $n$ is {{C}}.", "Combine.", ["$$\\frac{5n}{6}=15$$", "$$n=18$$"]],
    ["panels", 3, 24, "A panel count $n$ obeys $\\frac{n}{2}-\\frac{n}{8}=9$. Then $n$ is {{C}}.", "Common denominator $8$.", ["$$\\frac{4n-n}{8}=9$$", "$$\\frac{3n}{8}=9$$", "$$n=24$$"]],
    ["cables", 2, 16, "A cable count $n$ satisfies $n+4=\\frac{5}{4}n$. Then $n$ is {{C}}.", "Collect $n$.", ["$$4=\\frac{1}{4}n$$", "$$n=16$$"]],
    ["pipes-n", 1, 9, "A pipe count $n$ obeys $2n+n=27$. Then $n$ is {{C}}.", "Add like terms.", ["$$3n=27$$", "$$n=9$$"]],
    ["valves", 2, 21, "A valve count $n$ satisfies $\\frac{2n+3}{5}=9$. Then $n$ is {{C}}.", "Multiply by $5$.", ["$$2n+3=45$$", "$$2n=42$$", "$$n=21$$"]],
    ["gauges", 3, 17, "A gauge count $n$ obeys $3n+8=59$. Then $n$ is {{C}}.", "Solve.", ["$$3n=51$$", "$$n=17$$"]],
    ["sensors", 2, 28, "A sensor count $n$ satisfies $\\frac{n}{7}+4=8$. Then $n$ is {{C}}.", "Isolate $n$.", ["$$\\frac{n}{7}=4$$", "$$n=28$$"]],
    ["meters", 1, 6, "A meter count $n$ obeys $5n-4=26$. Then $n$ is {{C}}.", "Solve.", ["$$5n=30$$", "$$n=6$$"]],
    ["pumps-n", 3, 10, "A pump count $n$ satisfies $7n-20=50$. Then $n$ is {{C}}.", "Solve.", ["$$7n=70$$", "$$n=10$$"]],
    ["filters", 2, 14, "A filter count $n$ obeys $\\frac{3n}{2}=21$. Then $n$ is {{C}}.", "Multiply by $\\frac{2}{3}$.", ["$$n=14$$"]],
    ["hoses", 1, 22, "A hose count $n$ satisfies $n+11=33$. Then $n$ is {{C}}.", "Subtract $11$.", ["$$n=22$$"]],
    ["nozzles", 2, 13, "A nozzle count $n$ obeys $6n=78$. Then $n$ is {{C}}.", "Divide by $6$.", ["$$n=13$$"]],
    ["taps", 1, 11, "A tap count $n$ satisfies $4n+7=51$. Then $n$ is {{C}}.", "Solve.", ["$$4n=44$$", "$$n=11$$"]],
    ["drains-n", 3, 19, "A drain fitting count $n$ obeys $2n-9=29$. Then $n$ is {{C}}.", "Solve.", ["$$2n=38$$", "$$n=19$$"]],
    ["seals", 2, 15, "A seal count $n$ satisfies $n/3+n/5=8$. Then $n$ is {{C}}.", "Common denominator $15$.", ["$$\\frac{5n+3n}{15}=8$$", "$$\\frac{8n}{15}=8$$", "$$n=15$$"]],
    ["gaskets", 3, 20, "A gasket count $n$ obeys $n-\\frac{n}{4}=15$. Then $n$ is {{C}}.", "Combine.", ["$$\\frac{3n}{4}=15$$", "$$n=20$$"]],
    ["bearings", 2, 18, "A bearing count $n$ satisfies $5n+6=96$. Then $n$ is {{C}}.", "Solve.", ["$$5n=90$$", "$$n=18$$"]],
    ["gears", 4, 12, "A gear count $n$ obeys $\\frac{n+6}{3}=6$. Then $n$ is {{C}}.", "Multiply by $3$.", ["$$n+6=18$$", "$$n=12$$"]],
    ["sprockets", 3, 8, "A sprocket count $n$ satisfies $9n-12=60$. Then $n$ is {{C}}.", "Solve.", ["$$9n=72$$", "$$n=8$$"]],
    ["chains", 2, 7, "A chain count $n$ obeys $8n+3=59$. Then $n$ is {{C}}.", "Solve.", ["$$8n=56$$", "$$n=7$$"]],
    ["belts", 1, 16, "A belt count $n$ satisfies $n/2+8=16$. Then $n$ is {{C}}.", "Isolate.", ["$$\\frac{n}{2}=8$$", "$$n=16$$"]],
    ["pulleys", 3, 9, "A pulley count $n$ obeys $4(n-1)=32$. Then $n$ is {{C}}.", "Expand.", ["$$4n-4=32$$", "$$4n=36$$", "$$n=9$$"]],
  ];
  return rows.map(([id, tier, ans, stmt, rule, steps]) =>
    numStory(`pad-lin-${id}`, "4.1", tier, ans, stmt, rule, steps)
  );
}

export function padQuad() {
  const rows = [
    ["r-3-4", 2, 4, "The positive root of $x^2-x-12=0$ is {{C}}.", "Factor the quadratic.", ["$$x^2-x-12=0$$", "$$(x-4)(x+3)=0$$", "$$x=4$$"]],
    ["r-5-6", 2, 6, "The positive root of $x^2-x-30=0$ is {{C}}.", "Factor.", ["$$(x-6)(x+5)=0$$", "$$x=6$$"]],
    ["r-2-7", 1, 7, "The positive root of $x^2-5x-14=0$ is {{C}}.", "Factor.", ["$$(x-7)(x+2)=0$$", "$$x=7$$"]],
    ["r-3-8", 3, 8, "The positive root of $x^2-5x-24=0$ is {{C}}.", "Factor.", ["$$(x-8)(x+3)=0$$", "$$x=8$$"]],
    ["r-4-9", 2, 9, "The positive root of $x^2-5x-36=0$ is {{C}}.", "Factor.", ["$$(x-9)(x+4)=0$$", "$$x=9$$"]],
    ["r-2-9", 3, 9, "The positive root of $x^2-7x-18=0$ is {{C}}.", "Factor.", ["$$(x-9)(x+2)=0$$", "$$x=9$$"]],
    ["r-5-8", 3, 8, "The positive root of $x^2-3x-40=0$ is {{C}}.", "Factor.", ["$$(x-8)(x+5)=0$$", "$$x=8$$"]],
    ["r-4-5", 1, 5, "The positive root of $x^2-x-20=0$ is {{C}}.", "Factor.", ["$$(x-5)(x+4)=0$$", "$$x=5$$"]],
    ["r-6-7", 2, 7, "The positive root of $x^2-x-42=0$ is {{C}}.", "Factor.", ["$$(x-7)(x+6)=0$$", "$$x=7$$"]],
    ["r-3-5", 1, 5, "The positive root of $x^2-2x-15=0$ is {{C}}.", "Factor.", ["$$(x-5)(x+3)=0$$", "$$x=5$$"]],
    ["r-4-7", 3, 7, "The positive root of $x^2-3x-28=0$ is {{C}}.", "Factor.", ["$$(x-7)(x+4)=0$$", "$$x=7$$"]],
    ["r-5-9", 4, 9, "The positive root of $x^2-4x-45=0$ is {{C}}.", "Factor.", ["$$(x-9)(x+5)=0$$", "$$x=9$$"]],
    ["r-2-8", 2, 8, "The positive root of $x^2-6x-16=0$ is {{C}}.", "Factor.", ["$$(x-8)(x+2)=0$$", "$$x=8$$"]],
    ["r-3-7", 2, 7, "The positive root of $x^2-4x-21=0$ is {{C}}.", "Factor.", ["$$(x-7)(x+3)=0$$", "$$x=7$$"]],
    ["r-6-8", 3, 8, "The positive root of $x^2-2x-48=0$ is {{C}}.", "Factor.", ["$$(x-8)(x+6)=0$$", "$$x=8$$"]],
    ["r-1-8", 1, 8, "The positive root of $x^2-7x-8=0$ is {{C}}.", "Factor.", ["$$(x-8)(x+1)=0$$", "$$x=8$$"]],
    ["r-4-8", 3, 8, "The positive root of $x^2-4x-32=0$ is {{C}}.", "Factor.", ["$$(x-8)(x+4)=0$$", "$$x=8$$"]],
    ["r-5-7", 2, 7, "The positive root of $x^2-2x-35=0$ is {{C}}.", "Factor.", ["$$(x-7)(x+5)=0$$", "$$x=7$$"]],
    ["r-6-9", 4, 9, "The positive root of $x^2-3x-54=0$ is {{C}}.", "Factor.", ["$$(x-9)(x+6)=0$$", "$$x=9$$"]],
    ["r-2-6", 1, 6, "The positive root of $x^2-4x-12=0$ is {{C}}.", "Factor.", ["$$(x-6)(x+2)=0$$", "$$x=6$$"]],
    ["r-1-6", 1, 6, "The positive root of $x^2-5x-6=0$ is {{C}}.", "Factor.", ["$$(x-6)(x+1)=0$$", "$$x=6$$"]],
    ["r-3-9", 3, 9, "The positive root of $x^2-6x-27=0$ is {{C}}.", "Factor.", ["$$(x-9)(x+3)=0$$", "$$x=9$$"]],
    ["r-4-6", 2, 6, "The positive root of $x^2-2x-24=0$ is {{C}}.", "Factor.", ["$$(x-6)(x+4)=0$$", "$$x=6$$"]],
    ["r-1-9", 2, 9, "The positive root of $x^2-8x-9=0$ is {{C}}.", "Factor.", ["$$(x-9)(x+1)=0$$", "$$x=9$$"]],
    ["r-2-5", 1, 5, "The positive root of $x^2-3x-10=0$ is {{C}}.", "Factor.", ["$$(x-5)(x+2)=0$$", "$$x=5$$"]],
    ["r-1-5", 1, 5, "The positive root of $x^2-4x-5=0$ is {{C}}.", "Factor.", ["$$(x-5)(x+1)=0$$", "$$x=5$$"]],
    ["r-6-10", 4, 10, "The positive root of $x^2-4x-60=0$ is {{C}}.", "Factor.", ["$$(x-10)(x+6)=0$$", "$$x=10$$"]],
    ["r-5-10", 3, 10, "The positive root of $x^2-5x-50=0$ is {{C}}.", "Factor.", ["$$(x-10)(x+5)=0$$", "$$x=10$$"]],
    ["r-4-10", 3, 10, "The positive root of $x^2-6x-40=0$ is {{C}}.", "Factor.", ["$$(x-10)(x+4)=0$$", "$$x=10$$"]],
    ["r-3-10", 2, 10, "The positive root of $x^2-7x-30=0$ is {{C}}.", "Factor.", ["$$(x-10)(x+3)=0$$", "$$x=10$$"]],
    ["r-2-10", 2, 10, "The positive root of $x^2-8x-20=0$ is {{C}}.", "Factor.", ["$$(x-10)(x+2)=0$$", "$$x=10$$"]],
    ["r-1-10", 1, 10, "The positive root of $x^2-9x-10=0$ is {{C}}.", "Factor.", ["$$(x-10)(x+1)=0$$", "$$x=10$$"]],
    ["r-8-9", 4, 9, "The positive root of $x^2-x-72=0$ is {{C}}.", "Factor.", ["$$(x-9)(x+8)=0$$", "$$x=9$$"]],
    ["r-7-10", 4, 10, "The positive root of $x^2-3x-70=0$ is {{C}}.", "Factor.", ["$$(x-10)(x+7)=0$$", "$$x=10$$"]],
    ["r-8-10", 5, 10, "The positive root of $x^2-2x-80=0$ is {{C}}.", "Factor.", ["$$(x-10)(x+8)=0$$", "$$x=10$$"]],
    ["r-7-8", 3, 8, "The positive root of $x^2-x-56=0$ is {{C}}.", "Factor.", ["$$(x-8)(x+7)=0$$", "$$x=8$$"]],
    ["r-7-9", 4, 9, "The positive root of $x^2-2x-63=0$ is {{C}}.", "Factor.", ["$$(x-9)(x+7)=0$$", "$$x=9$$"]],
    ["sq-36", 1, 6, "The positive solution of $x^2=36$ is {{C}}.", "Take the positive square root.", ["$$x=6$$"]],
    ["sq-49", 1, 7, "The positive solution of $x^2=49$ is {{C}}.", "Take the positive square root.", ["$$x=7$$"]],
    ["sq-64", 1, 8, "The positive solution of $x^2=64$ is {{C}}.", "Take the positive square root.", ["$$x=8$$"]],
    ["sq-81", 1, 9, "The positive solution of $x^2=81$ is {{C}}.", "Take the positive square root.", ["$$x=9$$"]],
    ["sq-100", 1, 10, "The positive solution of $x^2=100$ is {{C}}.", "Take the positive square root.", ["$$x=10$$"]],
    ["compl-6-2", 3, 8, "The larger root of $x^2-12x+32=0$ is {{C}}.", "Complete the square.", ["$$(x-6)^2=4$$", "$$x-6=\\pm 2$$", "$$x=8\\text{ or }x=4$$"]],
    ["compl-7-3", 4, 10, "The larger root of $x^2-14x+40=0$ is {{C}}.", "Complete the square.", ["$$(x-7)^2=9$$", "$$x-7=\\pm 3$$", "$$x=10\\text{ or }x=4$$"]],
    ["compl-5-4", 3, 9, "The larger root of $x^2-10x+9=0$ is {{C}}.", "Complete the square.", ["$$(x-5)^2=16$$", "$$x-5=\\pm 4$$", "$$x=9\\text{ or }x=1$$"]],
    ["compl-8-2", 4, 10, "The larger root of $x^2-16x+60=0$ is {{C}}.", "Complete the square.", ["$$(x-8)^2=4$$", "$$x-8=\\pm 2$$", "$$x=10\\text{ or }x=6$$"]],
    ["sum-sq-50", 4, 5, "Two consecutive positives have squares summing to $61$. Wait — use $50$: $n^2+(n+1)^2=61$ already used. The smaller root of $n^2+(n+1)^2=85$ is {{C}}.", "Expand.", ["$$2n^2+2n+1=85$$", "$$n^2+n-42=0$$", "$$(n-6)(n+7)=0$$", "$$n=6$$"]],
  ];
  // Fix the last row answer: n=6 not 5
  rows[rows.length - 1][2] = 6;
  rows[rows.length - 1][3] = "The smaller of two consecutive positives whose squares sum to $85$ is {{C}}.";
  return rows.map(([id, tier, ans, stmt, rule, steps]) =>
    numStory(`pad-quad-${id}`, "4.2", tier, ans, stmt, rule, steps)
  );
}

export function padRat() {
  const rows = [
    ["work-6-12", 2, 4, "Tap $A$ fills a cistern in $6$ h and tap $B$ in $12$ h. Together from empty they fill it in {{C}} hours.", "Add the rates.", ["$$\\frac{1}{6}+\\frac{1}{12}=\\frac{1}{t}$$", "$$\\frac{1}{4}=\\frac{1}{t}$$", "$$t=4$$"]],
    ["work-4-12", 2, 3, "Worker $A$ finishes in $4$ days, worker $B$ in $12$ days. Together they need {{C}} days.", "Add the rates.", ["$$\\frac{1}{4}+\\frac{1}{12}=\\frac{1}{t}$$", "$$\\frac{1}{3}=\\frac{1}{t}$$", "$$t=3$$"]],
    ["work-5-20", 3, 4, "Pipe $A$ fills in $5$ h, pipe $B$ in $20$ h. Together they fill in {{C}} hours.", "Add the rates.", ["$$\\frac{1}{5}+\\frac{1}{20}=\\frac{1}{t}$$", "$$\\frac{1}{4}=\\frac{1}{t}$$", "$$t=4$$"]],
    ["work-8-8", 1, 4, "Two identical pumps each fill a tank in $8$ h. Together they fill it in {{C}} hours.", "Double the rate.", ["$$\\frac{1}{8}+\\frac{1}{8}=\\frac{1}{t}$$", "$$\\frac{1}{4}=\\frac{1}{t}$$", "$$t=4$$"]],
    ["work-3-6", 2, 2, "A fills a trough in $3$ h, B in $6$ h. Together they need {{C}} hours.", "Add the rates.", ["$$\\frac{1}{3}+\\frac{1}{6}=\\frac{1}{t}$$", "$$\\frac{1}{2}=\\frac{1}{t}$$", "$$t=2$$"]],
    ["work-10-15", 3, 6, "Tap $A$ fills in $10$ h, tap $B$ in $15$ h. Together from empty: {{C}} hours.", "Add the rates.", ["$$\\frac{1}{10}+\\frac{1}{15}=\\frac{1}{t}$$", "$$\\frac{1}{6}=\\frac{1}{t}$$", "$$t=6$$"]],
    ["drain-6-12", 3, 12, "Inlet fills in $6$ h, drain empties in $12$ h, both on an empty tank. It fills in {{C}} hours.", "Net rate is the difference.", ["$$\\frac{1}{6}-\\frac{1}{12}=\\frac{1}{t}$$", "$$\\frac{1}{12}=\\frac{1}{t}$$", "$$t=12$$"]],
    ["drain-4-12", 4, 6, "Inlet fills in $4$ h, outlet empties in $12$ h. Net fill time from empty is {{C}} hours.", "Subtract the rates.", ["$$\\frac{1}{4}-\\frac{1}{12}=\\frac{1}{t}$$", "$$\\frac{1}{6}=\\frac{1}{t}$$", "$$t=6$$"]],
    ["drain-5-10", 3, 10, "Inlet $5$ h, drain $10$ h, both open from empty. Fill time is {{C}} hours.", "Net rate.", ["$$\\frac{1}{5}-\\frac{1}{10}=\\frac{1}{t}$$", "$$\\frac{1}{10}=\\frac{1}{t}$$", "$$t=10$$"]],
    ["part-8-2", 2, 6, "A job takes $8$ h alone. After $2$ h, the remaining work needs {{C}} more hours at the same rate.", "Two eighths are done, six eighths remain.", ["$$1-\\frac{2}{8}=\\frac{6}{8}$$", "$$\\frac{6}{8}\\cdot 8=6$$"]],
    ["part-9-3", 2, 6, "A job takes $9$ h alone. After $3$ h, the remainder needs {{C}} more hours.", "One third is done.", ["$$1-\\frac{3}{9}=\\frac{2}{3}$$", "$$\\frac{2}{3}\\cdot 9=6$$"]],
    ["part-10-4", 3, 6, "A job takes $10$ h alone. After $4$ h, the remainder needs {{C}} more hours.", "Four tenths are done.", ["$$1-\\frac{4}{10}=\\frac{3}{5}$$", "$$\\frac{3}{5}\\cdot 10=6$$"]],
    ["sqrt-9", 1, 7, "Every admissible root of $\\sqrt{x+2}=3$ satisfies $x$ is {{C}}.", "Square both sides after noting $x+2\\ge 0$.", ["$$x+2=9$$", "$$x=7$$"]],
    ["sqrt-16", 1, 12, "Every admissible root of $\\sqrt{x+4}=4$ satisfies $x$ is {{C}}.", "Square both sides.", ["$$x+4=16$$", "$$x=12$$"]],
    ["sqrt-25", 2, 21, "Every admissible root of $\\sqrt{x+4}=5$ satisfies $x$ is {{C}}.", "Square both sides.", ["$$x+4=25$$", "$$x=21$$"]],
    ["sqrt-36", 2, 27, "Every admissible root of $\\sqrt{x+9}=6$ satisfies $x$ is {{C}}.", "Square both sides.", ["$$x+9=36$$", "$$x=27$$"]],
    ["sqrt-4", 1, 3, "Every admissible root of $\\sqrt{x+1}=2$ satisfies $x$ is {{C}}.", "Square both sides.", ["$$x+1=4$$", "$$x=3$$"]],
    ["sqrt-49", 3, 40, "Every admissible root of $\\sqrt{x+9}=7$ satisfies $x$ is {{C}}.", "Square both sides.", ["$$x+9=49$$", "$$x=40$$"]],
    ["abs-sum-1", 3, 0, "Positions on a rail satisfy $|2x-4|=6$. The two roots add to {{C}}.", "Split into two linear cases.", ["$$2x-4=6\\Rightarrow x=5$$", "$$2x-4=-6\\Rightarrow x=-1$$", "$$5+(-1)=4$$"]],
    ["abs-prod-1", 3, -8, "Equation $|x-3|=5$ has two roots whose product is {{C}}.", "The cases are $x-3=\\pm 5$.", ["$$x=8\\text{ or }x=-2$$", "$$8\\cdot(-2)=-16$$"]],
    ["cross-2-6-3", 4, 6, "Every admissible root of $\\frac{2}{x-3}=\\frac{4}{x}$ satisfies $x$ is {{C}}.", "Cross-multiply, $x\\neq 0$ and $x\\neq 3$.", ["$$2x=4(x-3)$$", "$$2x=4x-12$$", "$$x=6$$"]],
    ["cross-3-8-2", 4, 8, "Every admissible root of $\\frac{3}{x-2}=\\frac{4}{x}$ satisfies $x$ is {{C}}.", "Cross-multiply.", ["$$3x=4(x-2)$$", "$$3x=4x-8$$", "$$x=8$$"]],
    ["ladder-5-12", 2, 13, "A ladder has foot $5$ m from a wall and reaches $12$ m up. Its length is {{C}} m.", "Pythagoras.", ["$$L=\\sqrt{5^2+12^2}=\\sqrt{169}=13$$"]],
    ["ladder-8-15", 3, 17, "A ladder has foot $8$ m from a wall and reaches $15$ m up. Its length is {{C}} m.", "Pythagoras.", ["$$L=\\sqrt{8^2+15^2}=\\sqrt{289}=17$$"]],
    ["ladder-7-24", 4, 25, "A ladder has foot $7$ m from a wall and reaches $24$ m up. Its length is {{C}} m.", "Pythagoras.", ["$$L=\\sqrt{7^2+24^2}=\\sqrt{625}=25$$"]],
    ["ladder-9-12", 2, 15, "A ladder has foot $9$ m from a wall and reaches $12$ m up. Its length is {{C}} m.", "Pythagoras.", ["$$L=\\sqrt{9^2+12^2}=\\sqrt{225}=15$$"]],
    ["harm-20-30", 3, 12, "A courier rides $60$ km out at $20$ km/h and back at $30$ km/h. Total time is {{C}} hours.", "Add the two times.", ["$$\\frac{60}{20}+\\frac{60}{30}=3+2=5$$"]],
  ];
  // fix abs-sum: 5-1=4 not 0
  const fix = (id, ans, stmt, steps) => {
    const i = rows.findIndex((r) => r[0] === id);
    if (i >= 0) {
      rows[i][2] = ans;
      if (stmt) rows[i][3] = stmt;
      if (steps) rows[i][5] = steps;
    }
  };
  fix("abs-sum-1", 4);
  fix("abs-prod-1", -16);
  fix("harm-20-30", 5, "A courier rides $60$ km out at $20$ km/h and back at $30$ km/h. Total time is {{C}} hours.");
  return rows.map(([id, tier, ans, stmt, rule, steps]) =>
    numStory(`pad-rat-${id}`, "4.3", tier, ans, stmt, rule, steps)
  );
}

export function padExp() {
  const rows = [
    ["log2-3", 1, 8, "If $\\log_2 x=3$, then $x$ is {{C}}.", "The logarithm is the exponent.", ["$$2^3=x$$", "$$x=8$$"]],
    ["log2-4", 1, 16, "If $\\log_2 x=4$, then $x$ is {{C}}.", "Rewrite in exponential form.", ["$$x=2^4=16$$"]],
    ["log2-5", 2, 32, "If $\\log_2 x=5$, then $x$ is {{C}}.", "Rewrite in exponential form.", ["$$x=2^5=32$$"]],
    ["log2-6", 2, 64, "If $\\log_2 x=6$, then $x$ is {{C}}.", "Rewrite in exponential form.", ["$$x=2^6=64$$"]],
    ["log3-2", 1, 9, "If $\\log_3 x=2$, then $x$ is {{C}}.", "Rewrite in exponential form.", ["$$x=3^2=9$$"]],
    ["log3-3", 2, 27, "If $\\log_3 x=3$, then $x$ is {{C}}.", "Rewrite in exponential form.", ["$$x=3^3=27$$"]],
    ["log3-4", 3, 81, "If $\\log_3 x=4$, then $x$ is {{C}}.", "Rewrite in exponential form.", ["$$x=3^4=81$$"]],
    ["log4-2", 1, 16, "If $\\log_4 x=2$, then $x$ is {{C}}.", "Rewrite in exponential form.", ["$$x=4^2=16$$"]],
    ["log4-3", 2, 64, "If $\\log_4 x=3$, then $x$ is {{C}}.", "Rewrite in exponential form.", ["$$x=4^3=64$$"]],
    ["log5-2", 1, 25, "If $\\log_5 x=2$, then $x$ is {{C}}.", "Rewrite in exponential form.", ["$$x=5^2=25$$"]],
    ["log5-3", 2, 125, "If $\\log_5 x=3$, then $x$ is {{C}}.", "Rewrite in exponential form.", ["$$x=5^3=125$$"]],
    ["log10-2", 1, 100, "If $\\log_{10} x=2$, then $x$ is {{C}}.", "Rewrite in exponential form.", ["$$x=10^2=100$$"]],
    ["log10-3", 3, 1000, "If $\\log_{10} x=3$, then $x$ is {{C}}.", "Rewrite in exponential form.", ["$$x=10^3=1000$$"]],
    ["exp2-3", 1, 3, "Every real root of $2^x=8$ satisfies $x$ is {{C}}.", "Match powers of $2$.", ["$$2^x=2^3$$", "$$x=3$$"]],
    ["exp2-4", 1, 4, "Every real root of $2^x=16$ satisfies $x$ is {{C}}.", "Match powers of $2$.", ["$$2^x=2^4$$", "$$x=4$$"]],
    ["exp2-5", 2, 5, "Every real root of $2^x=32$ satisfies $x$ is {{C}}.", "Match powers of $2$.", ["$$2^x=2^5$$", "$$x=5$$"]],
    ["exp3-3", 2, 3, "Every real root of $3^x=27$ satisfies $x$ is {{C}}.", "Match powers of $3$.", ["$$3^x=3^3$$", "$$x=3$$"]],
    ["exp3-4", 3, 4, "Every real root of $3^x=81$ satisfies $x$ is {{C}}.", "Match powers of $3$.", ["$$3^x=3^4$$", "$$x=4$$"]],
    ["exp5-3", 2, 3, "Every real root of $5^x=125$ satisfies $x$ is {{C}}.", "Match powers of $5$.", ["$$5^x=5^3$$", "$$x=3$$"]],
    ["exp5-2", 1, 2, "Every real root of $5^x=25$ satisfies $x$ is {{C}}.", "Match powers of $5$.", ["$$5^x=5^2$$", "$$x=2$$"]],
    ["exp4-2", 2, 2, "Every real root of $4^x=16$ satisfies $x$ is {{C}}.", "Write $4=2^2$ if useful, or $4^2=16$.", ["$$4^x=4^2$$", "$$x=2$$"]],
    ["exp10-2", 1, 2, "Every real root of $10^x=100$ satisfies $x$ is {{C}}.", "Match powers of $10$.", ["$$10^x=10^2$$", "$$x=2$$"]],
    ["mix-4-2", 3, 4, "Every real root of $4^x=2^{x+4}$ satisfies $x$ is {{C}}.", "Write $4=2^2$ and equate exponents.", ["$$2^{2x}=2^{x+4}$$", "$$2x=x+4$$", "$$x=4$$"]],
    ["mix-9-3", 3, 2, "Every real root of $9^x=3^{x+2}$ satisfies $x$ is {{C}}.", "Write $9=3^2$.", ["$$3^{2x}=3^{x+2}$$", "$$2x=x+2$$", "$$x=2$$"]],
    ["mix-8-2", 4, 3, "Every real root of $8^x=2^{x+6}$ satisfies $x$ is {{C}}.", "Write $8=2^3$.", ["$$2^{3x}=2^{x+6}$$", "$$3x=x+6$$", "$$x=3$$"]],
    ["mix-25-5", 3, 3, "Every real root of $25^x=5^{x+3}$ satisfies $x$ is {{C}}.", "Write $25=5^2$.", ["$$5^{2x}=5^{x+3}$$", "$$2x=x+3$$", "$$x=3$$"]],
    ["mix-27-3", 4, 2, "Every real root of $27^x=3^{x+4}$ satisfies $x$ is {{C}}.", "Write $27=3^3$.", ["$$3^{3x}=3^{x+4}$$", "$$3x=x+4$$", "$$x=2$$"]],
    ["ln-shift", 2, 9, "Every admissible root of $\\ln(x-4)=\\ln 5$ satisfies $x$ is {{C}}.", "The natural log is one-to-one, and $x>4$.", ["$$x-4=5$$", "$$x=9$$"]],
    ["ln-shift2", 2, 8, "Every admissible root of $\\ln(x-3)=\\ln 5$ satisfies $x$ is {{C}}.", "Use injectivity of $\\ln$.", ["$$x-3=5$$", "$$x=8$$"]],
    ["ln-shift3", 3, 11, "Every admissible root of $\\ln(x-6)=\\ln 5$ satisfies $x$ is {{C}}.", "Use injectivity of $\\ln$.", ["$$x-6=5$$", "$$x=11$$"]],
    ["log-sum", 3, 50, "Every positive root of $\\log x+\\log 2=2$ satisfies $x$ is {{C}}.", "Use $\\log a+\\log b=\\log(ab)$ with base $10$.", ["$$\\log(2x)=2$$", "$$2x=100$$", "$$x=50$$"]],
    ["log-sum3", 3, 20, "Every positive root of $\\log x+\\log 5=2$ satisfies $x$ is {{C}}.", "Product rule for logs, base $10$.", ["$$\\log(5x)=2$$", "$$5x=100$$", "$$x=20$$"]],
    ["log-prod-quad", 4, 2, "Every positive root of $\\log x+\\log(x+3)=1$ satisfies $x$ is {{C}}.", "Product rule, then a quadratic. Base $10$.", ["$$x(x+3)=10$$", "$$x^2+3x-10=0$$", "$$(x-2)(x+5)=0$$", "$$x=2$$"]],
    ["exp-quad-u", 4, 2, "With $u=e^x>0$, the equation $e^{2x}-3e^x+2=0$ has {{C}} real solutions for $x$.", "Substitute $u=e^x$.", ["$$u^2-3u+2=0$$", "$$(u-1)(u-2)=0$$", "$$u=1\\text{ or }u=2$$"], "count"],
    ["exp-neg", 2, 0, "The equation $2^x=-4$ has {{C}} real solutions.", "An exponential with positive base is always positive.", ["$$2^x>0$$"], "noreal"],
  ];
  const out = [];
  for (const row of rows) {
    const [id, tier, ans, stmt, rule, steps, special] = row;
    if (special === "count") {
      out.push(
        item(`pad-exp-${id}`, "4.4", tier, (t) => {
          const c = claim(2, t);
          return {
            statement: `With $u=e^x>0$, the equation $e^{2x}-3e^x+2=0$ has ${c.phrase} real solutions for $x$.`,
            expl: E(
              t,
              `Substitute $u=e^x>0$.`,
              [`$$u^2-3u+2=0$$`, `$$(u-1)(u-2)=0$$`, `$$u=1\\text{ or }u=2$$`],
              cmpLine(c, `Both $u$ values are positive, so there are two real $x$. That count`)
            ),
          };
        })
      );
      continue;
    }
    if (special === "noreal") {
      out.push(
        item(`pad-exp-${id}`, "4.4", tier, (t) => {
          const phrase = t ? "no real solution" : "one real solution";
          return {
            statement: `The equation $2^x=-4$ has ${phrase}.`,
            expl: E(
              t,
              `For every real $x$, $2^x>0$.`,
              [`$$2^x>0$$`],
              t
                ? `The right-hand side is negative, so there is no real solution. So the statement is True.`
                : `There is no real solution, so the claim of one real solution is false. So the statement is False.`
            ),
          };
        })
      );
      continue;
    }
    out.push(numStory(`pad-exp-${id}`, "4.4", tier, ans, stmt, rule, steps));
  }
  return out;
}
