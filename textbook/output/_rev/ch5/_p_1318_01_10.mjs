import { applyFile } from "./_apply_1318.mjs";

const patches = {
  "math-5-2": {
    overview: `Notebooks and pens keep the same unit prices on both invoices this month.

Let $x$ be the price of one notebook and $y$ the price of one pen. The two printed totals give

$$40x+25y=185$$

$$15x+60y=160.50$$`,
    bodies: [
      `The two invoices share the same unit prices. With $x$ the notebook price and $y$ the pen price:

$$40x+25y=185$$

$$15x+60y=160.50$$

Divide the second row by $15$:

$$x+4y=10.70$$

$$x=10.70-4y$$

Substitute into the first invoice:

$$40(10.70-4y)+25y=185$$

$$428-160y+25y=185$$

$$-135y=-243$$

$$y=1.80$$

Then

$$x=10.70-4(1.80)=10.70-7.20=3.50$$

The recovered notebook price is $\\$3.50$, so the statement is True.`,
      `Notebooks and pens are billed at fixed unit prices $x$ and $y$. The invoices are

$$40x+25y=185$$

$$15x+60y=160.50$$

Multiply the second by $\\frac{8}{3}$ so the notebook coefficients match:

$$40x+160y=428$$

Subtract the first invoice:

$$135y=243$$

$$y=1.80$$

The claim is $\\$2.10$, which sits $\\$0.30$ above $1.80$, so the statement is False.`,
      `Invoice #101 is already printed at $\\$185.00$ for $40$ notebooks and $25$ pens. That row is the first observation:

$$40x+25y=185$$

The claimed total is the printed total, so the statement is True.`,
      `The $10$-and-$10$ mix is on neither invoice, so the unit prices have to be recovered first. From the two bills,

$$40x+25y=185$$

$$15x+60y=160.50$$

dividing the second by $15$ gives $x=10.70-4y$. Substituting into the first:

$$40(10.70-4y)+25y=185$$

$$y=1.80,\\qquad x=3.50$$

Costing ten of each:

$$10(3.50)+10(1.80)=35+18=53$$

That mix is $\\$53.00$, so the statement is True.`,
      `Invoice #102 printed $\\$160.50$ for $15$ notebooks and $60$ pens. Recovering the same prices from both invoices,

$$15x+60y=160.50$$

and $x=3.50$, $y=1.80$ rebuilds that row:

$$15(3.50)+60(1.80)=52.50+108=160.50$$

The claim's $\\$172.50$ is $\\$12$ too high, so the statement is False.`,
    ],
  },

  "math-5-3": {
    overview: `Adult and child tickets keep the same prices across both Saturday sessions.

Let $a$ be the adult price and $c$ the child price. The two logged revenues give

$$90a+150c=2130$$

$$160a+40c=2200$$`,
    bodies: [
      `The two sessions share the same ticket prices. With $a$ adult and $c$ child:

$$90a+150c=2130$$

$$160a+40c=2200$$

Divide the evening row by $40$:

$$4a+c=55$$

$$c=55-4a$$

Substitute into the matinee:

$$90a+150(55-4a)=2130$$

$$90a+8250-600a=2130$$

$$-510a=-6120$$

$$a=12$$

The recovered adult price is $\\$12.00$, so the statement is True.`,
      `Adult and child tickets are $a$ and $c$ throughout the day. The evening session divides cleanly:

$$160a+40c=2200$$

$$4a+c=55$$

The matinee is $90a+150c=2130$. Putting $c=55-4a$ into that row yields $a=12$, and then

$$c=55-4(12)=55-48=7$$

The recovered child price is $\\$7.00$, so the statement is True.`,
      `The box-office already logged the matinee at $\\$2{,}130$. Rebuilding that mix at the recovered prices $a=12$ and $c=7$:

$$90(12)+150(7)=1080+1050=2130$$

The claimed $\\$2{,}050$ sits $\\$80$ below the logged figure, so the statement is False.`,
      `The evening session was logged at $\\$2{,}200$. From the evening equation divided by $40$,

$$4a+c=55$$

the pair $a=12$, $c=7$ rebuilds the printed revenue:

$$160(12)+40(7)=1920+280=2200$$

The claimed $\\$2{,}300$ is $\\$100$ too high, so the statement is False.`,
      `A $50$-and-$50$ split matches neither logged session, so the prices must be recovered first. The evening row $160a+40c=2200$ divides to $c=55-4a$. The matinee then forces $a=12$ and $c=7$. Costing fifty of each:

$$50(12)+50(7)=600+350=950$$

That is $\\$950$, not $\\$1{,}000$, so the statement is False.`,
    ],
  },

  "math-5-4": {
    overview: `Each receipt adds a flat $\\$8$ delivery fee on top of the food. Sandwiches and wraps keep fixed unit prices.

Let $x$ be the sandwich price and $y$ the wrap price. Peeling the fee off both charged totals leaves the food system

$$6x+4y=62$$

$$3x+9y=66$$`,
    bodies: [
      `The $\\$8$ delivery fee is not part of either food price, so both receipts must be peeled first:

$$6x+4y=70-8=62$$

$$3x+9y=74-8=66$$

Double the second food equation:

$$6x+18y=132$$

Subtract the first:

$$14y=70$$

$$y=5$$

Then $3x+9(5)=66$ gives $3x=21$, so $x=7$. The recovered sandwich price is $\\$7.00$, so the statement is True.`,
      `After removing the flat $\\$8$ fee, the food equations are

$$6x+4y=62$$

$$3x+9y=66$$

Doubling the second and subtracting the first isolates wraps:

$$14y=70$$

$$y=5$$

The recovered wrap price is $\\$5.00$, so the statement is True.`,
      `Receipt A was charged $\\$70$ including the flat $\\$8$ fee. The food subtotal is the charged total minus that fee:

$$70-8=62$$

Rebuilding the food mix at $x=7$ and $y=5$ confirms the same figure:

$$6(7)+4(5)=42+20=62$$

so the statement is True.`,
      `Receipt B is printed at $\\$74$, fee included. That is the charged total in the stem, so the statement is True.`,
      `A pickup order carries no delivery fee, so only the food prices matter. Peeling $\\$8$ off both receipts gives $6x+4y=62$ and $3x+9y=66$, which recover $x=7$ and $y=5$. Five of each then costs

$$5(7)+5(5)=35+25=60$$

That is $\\$60$ with no fee added, so the statement is True.`,
    ],
  },

  "math-5-5": {
    overview: `The $\\$10{,}000$ is split between a $4\\%$ account and a $7\\%$ account, and the two accounts together earn $\\$520$ of simple interest.

Let $x$ be the amount in Account A and $y$ the amount in Account B. The conserved principal and the interest total give

$$x+y=10000$$

$$0.04x+0.07y=520$$`,
    bodies: [
      `The split and the interest total are

$$x+y=10000$$

$$0.04x+0.07y=520$$

Substitute $x=10000-y$ into the interest equation:

$$0.04(10000-y)+0.07y=520$$

$$400+0.03y=520$$

$$0.03y=120$$

$$y=4000$$

Then $x=10000-4000=6000$. The claim's $\\$6{,}500$ overshoots the recovered principal, so the statement is False.`,
      `With $x$ in the $4\\%$ account and $y$ in the $7\\%$ account,

$$x+y=10000$$

$$0.04x+0.07y=520$$

the interest gap isolates $y$:

$$0.03y=120$$

$$y=4000$$

The claim is $\\$4{,}500$. Even the claimed pair fails the total, since $6500+4500=11000$, so the statement is False.`,
      `From $x+y=10000$ and $0.04x+0.07y=520$, the principals are $x=6000$ and $y=4000$. Account A's interest is then

$$0.04\\times 6000=240$$

That is $\\$240$, not the claimed $\\$260$, so the statement is False.`,
      `The same principals $x=6000$ and $y=4000$ give Account B's interest as

$$0.07\\times 4000=280$$

The claim is $\\$210$. The two interest figures also add to the year's $\\$520$, since $240+280=520$, so the statement is False.`,
      `This letter does not need the split. Account B pays $7\\%$ simple interest on whatever principal it holds, so parking the whole $\\$10{,}000$ there earns

$$0.07\\times 10000=700$$

so the statement is True.`,
    ],
  },

  "math-5-6": {
    overview: `Premium chairs are priced exactly $\\$45$ above Standard chairs. A shipment of $18$ Standard and $12$ Premium chairs is valued at $\\$9{,}660$.

Let $x$ be the Standard price and $y$ the Premium price. The catalogue gap and the shipment value give

$$y=x+45$$

$$18x+12y=9660$$`,
    bodies: [
      `Premium sits $\\$45$ above Standard, and the shipment totals $\\$9{,}660$:

$$y=x+45$$

$$18x+12y=9660$$

Substitute the gap into the shipment:

$$18x+12(x+45)=9660$$

$$30x+540=9660$$

$$30x=9120$$

$$x=304$$

The recovered Standard price is $\\$304.00$, so the statement is True.`,
      `The catalogue rule is $y=x+45$, and the shipment is $18x+12y=9660$. Substituting gives $x=304$, so

$$y=304+45=349$$

The claim is $\\$354$, five dollars above $349$, so the statement is False.`,
      `From $y=x+45$ and $18x+12y=9660$, the Premium price is $y=349$. The twelve Premium chairs in the shipment are then worth

$$12(349)=4188$$

so the statement is True.`,
      `The catalogue already prices Premium exactly $\\$45$ above Standard:

$$y=x+45$$

Checking the recovered pair $x=304$ and $y=349$ gives the same gap:

$$349-304=45$$

so the statement is True.`,
      `The $5$-and-$5$ mix is not the shipment, so the unit prices must be recovered first. Substituting $y=x+45$ into $18x+12y=9660$ yields $x=304$ and $y=349$. Five of each then costs

$$5(304)+5(349)=1520+1745=3265$$

Since $3265>3000$, the statement is True.`,
    ],
  },

  "math-5-7": {
    overview: `Each quoted bill is a fixed monthly fee plus a constant charge per extra minute.

Let $f$ be the fee and $r$ the extra-minute rate. The two example bills give

$$f+40r=29$$

$$f+120r=53$$`,
    bodies: [
      `The two billed customers differ only in extra minutes:

$$f+40r=29$$

$$f+120r=53$$

Subtract:

$$80r=24$$

$$r=0.30$$

Then $f+40(0.30)=29$ gives $f=17$. The recovered fee is $\\$17.00$, so the statement is True.`,
      `The $\\$24$ gap between the two bills is $80$ extra minutes' worth of the rate:

$$(f+120r)-(f+40r)=53-29$$

$$80r=24$$

$$r=0.30$$

The advertised extra-minute rate is $\\$0.30$ per minute, so the statement is True.`,
      `From $f+40r=29$ and $f+120r=53$, the pair is $f=17$ and $r=0.30$. A month with $200$ extra minutes is then

$$17+200(0.30)=17+60=77$$

The bill is $\\$77$, not $\\$80$, so the statement is False.`,
      `A month with no extra minutes still costs the recovered fee. From the two bills, $f=17$, so

$$17+0(0.30)=17$$

The customer would still owe $\\$17$, not $\\$0$, so the statement is False.`,
      `The recovered rate is $r=0.30$. Double the rival's $0.20$ would be

$$2\\times 0.20=0.40$$

Since $0.30<0.40$, ByteMobile's rate is not more than double the rival's, so the statement is False.`,
    ],
  },

  "math-5-8": {
    overview: `The division built $130$ ovens and logged $795$ assembly hours. Standard ovens take $4$ hours each and Deluxe ovens take $9$.

Let $s$ be the number of Standard ovens and $d$ the number of Deluxe ovens. The count and the hours give

$$s+d=130$$

$$4s+9d=795$$

The material-cost column is not needed to recover $s$ and $d$.`,
    bodies: [
      `The week's count and hours are

$$s+d=130$$

$$4s+9d=795$$

Substitute $s=130-d$ into the hours equation:

$$4(130-d)+9d=795$$

$$520+5d=795$$

$$5d=275$$

$$d=55$$

Then $s=130-55=75$. The recovered Standard count is $75$, so the statement is True.`,
      `From $s+d=130$ and $4s+9d=795$, eliminating $s$ gives $5d=275$, so $d=55$. The claim is $45$ Deluxe ovens, ten short of $55$, so the statement is False.`,
      `The recovered Standard count is $s=75$, and each Standard oven takes $4$ hours:

$$4\\times 75=300$$

Standard ovens accounted for $300$ hours, so the statement is True.`,
      `Each Deluxe oven takes $9$ hours, and $d=55$:

$$9\\times 55=495$$

Deluxe ovens accounted for $495$ hours, five short of the claimed $500$, so the statement is False.`,
      `This is where the material-cost column matters. Standard ovens cost $\\$120$ each, and $s=75$:

$$75\\times 120=9000$$

The Standard material total is $\\$9{,}000$, so the statement is True.`,
    ],
  },

  "math-5-9": {
    overview: `Net sales, not gross, are the value of items sold at listed prices. Sofas and armchairs keep company-wide unit prices.

Let $x$ be the sofa price and $y$ the armchair price. Subtracting each branch's returns leaves

$$14x+22y=9300$$

$$20x+10y=9000$$`,
    bodies: [
      `Riverside's net is $9760-460=9300$ and Hillcrest's net is $9300-300=9000$:

$$14x+22y=9300$$

$$20x+10y=9000$$

Divide Hillcrest by $10$:

$$2x+y=900$$

$$y=900-2x$$

Substitute into Riverside:

$$14x+22(900-2x)=9300$$

$$14x+19800-44x=9300$$

$$-30x=-10500$$

$$x=350$$

The recovered sofa price is $\\$350.00$, so the statement is True.`,
      `After peeling returns, Hillcrest divides to $2x+y=900$. Riverside then forces $x=350$, so

$$y=900-2(350)=900-700=200$$

The recovered armchair price is $\\$200.00$, so the statement is True.`,
      `Riverside's net sales are gross minus returns:

$$9760-460=9300$$

Rebuilding Riverside at $x=350$ and $y=200$ confirms the same net:

$$14(350)+22(200)=4900+4400=9300$$

so the statement is True.`,
      `Hillcrest's printed gross is already $\\$9{,}300$. Net sales sit $\\$300$ below that, and the $20$ sofas and $10$ armchairs account for the net:

$$20(350)+10(200)=7000+2000=9000$$

$$9000+300=9300$$

so the statement is True.`,
      `Net sales are gross minus returns. If Riverside's returns are zero, the two figures coincide:

$$9760-0=9760$$

Both would read $\\$9{,}760$, so the statement is True.`,
    ],
  },

  "math-5-10": {
    overview: `PrintFast charges a setup fee plus a constant per-page rate. QuickCopy instead charges a flat $\\$60$ for any order up to $350$ pages.

Let $f$ be PrintFast's setup fee and $r$ the per-page rate. The two PrintFast invoices give

$$f+120r=33$$

$$f+300r=69$$`,
    bodies: [
      `The two PrintFast orders differ only in page count:

$$f+120r=33$$

$$f+300r=69$$

Subtract:

$$180r=36$$

$$r=0.20$$

Then $f+120(0.20)=33$ gives $f=9$. The recovered setup fee is $\\$9$, not $\\$12$, so the statement is False.`,
      `Subtracting the two invoices isolates the page rate:

$$(f+300r)-(f+120r)=69-33$$

$$180r=36$$

$$r=0.20$$

The claim is $\\$0.25$ per page, five cents above $0.20$, so the statement is False.`,
      `From $f+120r=33$ and $f+300r=69$, the pair is $f=9$ and $r=0.20$. A $250$-page order at PrintFast is then

$$9+250(0.20)=9+50=59$$

That is $\\$59$, not $\\$60$, so the statement is False.`,
      `QuickCopy charges a flat $\\$60$ up to $350$ pages. PrintFast's recovered rule $f=9$, $r=0.20$ prices $350$ pages at

$$9+350(0.20)=9+70=79$$

Since $79>60$, PrintFast is more expensive at that length, not cheaper, so the statement is False.`,
      `The two invoices cover different page counts, so subtracting them isolates a unique rate: the coefficient $300-120=180$ is not zero. That forces a unique pair $(f,r)=(9,0.20)$. Had both orders covered the same number of pages, the fee would cancel and leave $r$ undetermined, so the statement is True.`,
    ],
  },
};

const n = applyFile("01_10.json", patches);
console.log("patched", n);
