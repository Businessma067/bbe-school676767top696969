# DEMO MATH 8.H01

ak=[True, True, False, True, False]

current_lens=[341, 323, 329, 274, 483]

## title
Courier tariff — affine day/night word problem

## context
A courier charges a daytime base fee of EUR 12 plus EUR 0.8 per kilometre. Night runs use the same kilometre rate but add a flat night surcharge of EUR 5. Let $d>0$ be the distance in kilometres. Decide whether each claim is true or false.

## statement A
The daytime bill for distance $d$ is exactly $12+0.8d$ euros.

## current A
**A.** → True

Daytime tariff has a fixed base of EUR $12$ and a per-kilometre rate of EUR $0.8$. For distance $d$ the kilometre charge is $0.8d$, so

$$
C_{\mathrm{day}}(d)=12+0.8d
$$

Spot-check at $d=10$:

$$
C_{\mathrm{day}}(10)=12+8=20
$$

which matches $12+0.8\cdot 10$. The claimed daytime formula is exact.

So the statement is True.

## statement B
If the same distance were run at night, the night bill would be exactly EUR 5 more than the daytime bill for every $d>0$.

## current B
**B.** → True

Night runs keep the same kilometre rate and add a flat surcharge of EUR $5$:

$$
C_{\mathrm{night}}(d)=C_{\mathrm{day}}(d)+5
$$

$$
C_{\mathrm{night}}(d)=12+0.8d+5=17+0.8d
$$

for every $d>0$. The night bill is therefore exactly EUR $5$ more than the day bill at the same distance.

So the statement is True.

## statement C
There is a distance $d^{*}$ at which a daytime run and a night run would cost the same; solving $12+0.8d=12+0.8d+5$ finds it.

## current C
**C.** → False

Set the daytime and night bills equal:

$$
12+0.8d=12+0.8d+5
$$

Subtract $12+0.8d$ from both sides:

$$
0=5
$$

The identity $0=5$ is absurd, so no real break-even distance $d^{*}$ exists. Parallel affine tariffs with a fixed positive gap never meet, so no break-even distance exists.

So the statement is False.

## statement D
If the firm waived the EUR 12 base on daytime runs only (charging pure $0.8d$), then for a $20$ km daytime job the client would save exactly EUR 12 compared with the original daytime tariff.

## current D
**D.** → True

Original daytime bill at $d=20$:

$$
12+0.8\cdot 20=12+16=28
$$

After waiving the EUR $12$ base, only the kilometre charge $16$ remains. The saving versus the original daytime tariff is

$$
28-16=12
$$

exactly the waived base fee.

So the statement is True.

## statement E
If distance doubled from $10$ km to $20$ km on a daytime run, the bill would also double, because both the base and the kilometre charge scale linearly with $d$.

## current E
**E.** → False

Evaluate the daytime bill at the two distances:

$$
C_{\mathrm{day}}(10)=12+0.8\cdot 10=12+8=20
$$

$$
C_{\mathrm{day}}(20)=12+0.8\cdot 20=12+16=28
$$

$$
\frac{28}{20}=1.4\neq 2
$$

Doubling distance multiplies the bill by $1.4$, not by $2$. The kilometre part scales ($8\to 16$), but the fixed base of $12$ does not. Homogeneity would require $C_{\mathrm{day}}(2d)=2\,C_{\mathrm{day}}(d)$; at $d=10$ that would need $28=40$, which fails.

So the statement is False.