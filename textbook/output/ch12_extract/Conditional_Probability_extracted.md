# Conditional Probability — extracted curriculum content

- Total pages: 48
- Total questions: 40
- Format: five TRUE/FALSE statements per question
- Explicit difficulties: 3/5–5/5; Question 35 is marked “5/5 (Expert)”
- Main skills: marginal, joint, conditional and complementary probabilities; comparing conditional rates; combining categories; exact-boundary inequalities; two-way tables; dice outcome spaces; probability trees and Bayes’ rule.

## Core instruction and notation

These questions generally use raw counts rather than prior updating. Organize the data into a table, then choose the denominator according to the conditioning event:

\[
P(A)=\frac{\text{count in }A}{\text{grand total}}
\]

\[
P(A\cap B)=\frac{\text{count in both }A\text{ and }B}{\text{grand total}}
\]

\[
P(B\mid A)=\frac{\text{count in both }A\text{ and }B}{\text{count in }A}
\]

\[
P(A\mid B)=\frac{\text{count in both }A\text{ and }B}{\text{count in }B}
\]

Generally,

\[
P(A\mid B)\ne P(B\mid A).
\]

For complementary outcomes,

\[
P(A^c)=1-P(A).
\]

For equally likely outcomes,

\[
P(A\mid B)=\frac{|A\cap B|}{|B|}.
\]

Strict wording matters: equality does not satisfy “greater than” or “more than,” while “at least” means \(\ge\).

---

## Questions 1–5

### Question 1 — Difficulty: 3/5

An electronics store tracks warranty claims by product category. Of 800 laptops sold, 60 generated a warranty claim. Of 500 tablets sold, 55 generated a warranty claim. One sold product is selected at random.

A. \(P(\text{the product generated a warranty claim})\) is greater than 8%.  
B. \(P(\text{a warranty claim}\mid\text{tablet})\) is greater than \(P(\text{a warranty claim}\mid\text{laptop})\).  
C. \(P(\text{laptop}\mid\text{warranty claim})\) is greater than 55%.  
D. \(P(\text{tablet}\mid\text{warranty claim})=1-P(\text{laptop}\mid\text{warranty claim})\).  
E. \(P(\text{no warranty claim})\) is less than 90%.

Worked answer:

\[
N=800+500=1300,\qquad C=60+55=115.
\]

- A TRUE: \(\frac{115}{1300}\approx8.846\%>8\%\).
- B TRUE: \(\frac{55}{500}=11\%>\frac{60}{800}=7.5\%\).
- C FALSE: \(\frac{60}{115}\approx52.174\%\not>55\%\).
- D TRUE: laptop and tablet are complementary given a claim.
- E FALSE: \(1-\frac{115}{1300}\approx91.154\%\not<90\%\).

### Question 2 — Difficulty: 3/5

A coffee shop tracks oat-milk add-ons by drink size. Of 1,400 small drinks sold this month, 210 had oat milk added. Of 900 large drinks sold, 270 had oat milk added. One sold drink is selected at random.

A. \(P(\text{oat milk})>20\%\).  
B. \(P(\text{oat milk}\mid\text{large})>P(\text{oat milk}\mid\text{small})\).  
C. \(P(\text{large}\mid\text{oat milk})>50\%\).  
D. \(P(\text{small}\mid\text{oat milk})=1-P(\text{large}\mid\text{oat milk})\).  
E. \(P(\text{no oat milk})>75\%\).

Worked answer:

\[
N=2300,\qquad O=480.
\]

- A TRUE: \(\frac{480}{2300}\approx20.870\%\).
- B TRUE: \(\frac{270}{900}=30\%>\frac{210}{1400}=15\%\).
- C TRUE: \(\frac{270}{480}=56.25\%\).
- D TRUE by the complement rule.
- E TRUE: \(1-20.870\%\approx79.130\%\).

### Question 3 — Difficulty: 3/5

A delivery service tracks on-time performance by package type. Of 2,200 Standard packages shipped, 1,980 arrived on time. Of 800 Express packages shipped, 760 arrived on time. One shipped package is selected at random.

A. \(P(\text{late})>9\%\).  
B. \(P(\text{late}\mid\text{Express})>P(\text{late}\mid\text{Standard})\).  
C. \(P(\text{Express}\mid\text{late})>20\%\).  
D. \(P(\text{Standard}\mid\text{late})<P(\text{Express}\mid\text{late})\).  
E. \(P(\text{on time})>90\%\).

Worked answer:

\[
L_S=220,\quad L_E=40,\quad N=3000,\quad L=260.
\]

- A FALSE: \(\frac{260}{3000}\approx8.667\%\).
- B FALSE: \(\frac{40}{800}=5\%<\frac{220}{2200}=10\%\).
- C FALSE: \(\frac{40}{260}\approx15.385\%\).
- D FALSE: \(\frac{220}{260}\approx84.615\%>\frac{40}{260}\).
- E TRUE: \(1-8.667\%\approx91.333\%\).

### Question 4 — Difficulty: 3/5

An amusement park tracks wait times by ride category. Of 3,500 recorded rides on Thrill rides, 980 had a wait longer than 45 minutes. Of 4,500 recorded rides on Family rides, 630 had a wait longer than 45 minutes. One recorded ride is selected at random.

A. \(P(\text{long wait})>18\%\).  
B. \(P(\text{long wait}\mid\text{Thrill})\) is exactly double \(P(\text{long wait}\mid\text{Family})\).  
C. \(P(\text{Thrill}\mid\text{long wait})>55\%\).  
D. \(P(\text{Family}\mid\text{long wait})=1-P(\text{Thrill}\mid\text{long wait})\).  
E. \(P(\text{no long wait})>85\%\).

Worked answer:

\[
N=8000,\qquad L=1610.
\]

- A TRUE: \(\frac{1610}{8000}=20.125\%\).
- B TRUE: \(\frac{980}{3500}=28\%=2\left(\frac{630}{4500}\right)\).
- C TRUE: \(\frac{980}{1610}\approx60.870\%\).
- D TRUE by complementarity.
- E FALSE: \(1-20.125\%=79.875\%\).

### Question 5 — Difficulty: 4/5; three categories

A call center tracks first-call resolution by call reason. Of 1,200 Billing calls, 900 were resolved on the first call. Of 1,800 Technical calls, 990 were resolved on the first call. Of 1,000 General calls, 850 were resolved on the first call. One call is selected at random.

A. \(P(\text{not resolved})>35\%\).  
B. \(P(\text{Technical}\mid\text{not resolved})>70\%\).  
C. \(P(\text{not resolved}\mid\text{Billing})>P(\text{not resolved}\mid\text{General})\).  
D. \(P(\text{Billing}\mid\text{not resolved})<P(\text{General}\mid\text{not resolved})\).  
E. \(P(\text{resolved})=1-P(\text{not resolved})\).

Worked answer:

\[
U_B=300,\quad U_T=810,\quad U_G=150,\quad N=4000,\quad U=1260.
\]

- A FALSE: \(\frac{1260}{4000}=31.5\%\).
- B FALSE: \(\frac{810}{1260}\approx64.286\%\).
- C TRUE: \(\frac{300}{1200}=25\%>\frac{150}{1000}=15\%\).
- D FALSE: \(\frac{300}{1260}\approx23.810\%>\frac{150}{1260}\approx11.905\%\).
- E TRUE by the complement rule.

---

## Questions 6–10

### Question 6 — Difficulty: 3/5

A movie theater tracks concession purchases by showtime. Of 2,600 matinee tickets sold, 520 buyers also purchased a concession item. Of 4,200 evening tickets sold, 1,260 buyers also purchased a concession item. One ticket holder is selected at random.

Statements:  
A \(P(\text{concession})>25\%\); B \(P(\text{concession}\mid\text{evening})>P(\text{concession}\mid\text{matinee})\); C \(P(\text{evening}\mid\text{concession})>65\%\); D \(P(\text{matinee}\mid\text{concession})=1-P(\text{evening}\mid\text{concession})\); E \(P(\text{no concession})>78\%\).

\[
N=6800,\quad C=1780.
\]

Answers: A TRUE, \(\frac{1780}{6800}\approx26.176\%\); B TRUE, \(30\%>20\%\); C TRUE, \(\frac{1260}{1780}\approx70.787\%\); D TRUE by complementarity; E FALSE, \(73.824\%\not>78\%\).

### Question 7 — Difficulty: 3/5

A car rental agency tracks late returns by vehicle class. Of 3,000 Economy rentals, 180 were returned late. Of 1,200 Luxury rentals, 156 were returned late. One rental is selected at random.

Statements:  
A \(P(\text{late})>8.5\%\); B \(P(\text{late}\mid\text{Luxury})\) is more than double \(P(\text{late}\mid\text{Economy})\); C \(P(\text{Luxury}\mid\text{late})>50\%\); D \(P(\text{Economy}\mid\text{late})<P(\text{Luxury}\mid\text{late})\); E \(P(\text{on time})>90\%\).

\[
N=4200,\quad L=336.
\]

Answers: A FALSE, \(8\%\); B TRUE, \(13\%/6\%\approx2.167>2\); C FALSE, \(\frac{156}{336}\approx46.429\%\); D FALSE, \(53.571\%>46.429\%\); E TRUE, \(92\%\).

### Question 8 — Difficulty: 3/5

A bookstore tracks returns by purchase channel. Of 5,000 online purchases, 450 were later returned. Of 3,500 in-store purchases, 175 were later returned. One purchase is selected at random.

Statements: A \(P(\text{return})>7\%\); B \(P(\text{return}\mid\text{online})>P(\text{return}\mid\text{in-store})\); C \(P(\text{online}\mid\text{return})>70\%\); D \(P(\text{in-store}\mid\text{return})=1-P(\text{online}\mid\text{return})\); E \(P(\text{not returned})>90\%\).

Answers: A TRUE, \(\frac{625}{8500}\approx7.353\%\); B TRUE, \(9\%>5\%\); C TRUE, \(\frac{450}{625}=72\%\); D TRUE; E TRUE, \(92.647\%\).

### Question 9 — Difficulty: 3/5

A gym tracks no-shows by class type. Of 2,400 booked Yoga classes, 360 resulted in a no-show. Of 1,600 booked Spin classes, 480 resulted in a no-show. One booking is selected at random.

Statements: A \(P(\text{no-show})>22\%\); B \(P(\text{no-show}\mid\text{Yoga})>P(\text{no-show}\mid\text{Spin})\); C \(P(\text{Yoga}\mid\text{no-show})>45\%\); D \(P(\text{Spin}\mid\text{no-show})<P(\text{Yoga}\mid\text{no-show})\); E \(P(\text{attended})>78\%\).

Answers: A FALSE, \(\frac{840}{4000}=21\%\); B FALSE, \(15\%<30\%\); C FALSE, \(\frac{360}{840}\approx42.857\%\); D FALSE, \(57.143\%>42.857\%\); E TRUE, \(79\%\).

### Question 10 — Difficulty: 4/5; three categories

A pizza restaurant tracks order errors by order method. Of 1,500 Phone orders, 105 had an error. Of 3,000 App orders, 90 had an error. Of 1,000 In-person orders, 110 had an error. One order is selected at random.

Statements: A \(P(\text{error})>5\%\); B \(P(\text{error}\mid\text{In-person})>P(\text{error}\mid\text{Phone})\); C \(P(\text{App}\mid\text{error})>35\%\); D \(P(\text{Phone}\mid\text{error})>P(\text{App}\mid\text{error})\); E \(P(\text{no error})>96\%\).

Answers: A TRUE, \(\frac{305}{5500}\approx5.545\%\); B TRUE, \(11\%>7\%\); C FALSE, \(\frac{90}{305}\approx29.508\%\); D TRUE, \(\frac{105}{305}\approx34.426\%>29.508\%\); E FALSE, \(94.455\%\).

---

## Questions 11–15

### Question 11 — Difficulty: 3/5

A grocery store tracks scanning errors by checkout method. Of 4,000 self-checkout transactions, 320 had a scanning error. Of 6,000 cashier-assisted transactions, 180 had a scanning error. One transaction is selected at random.

Statements: A \(P(\text{error})>4\%\); B \(P(\text{error}\mid\text{self})>P(\text{error}\mid\text{cashier})\); C \(P(\text{self}\mid\text{error})>60\%\); D \(P(\text{cashier}\mid\text{error})=1-P(\text{self}\mid\text{error})\); E \(P(\text{no error})>96\%\).

Answers: A TRUE, \(5\%\); B TRUE, \(8\%>3\%\); C TRUE, \(64\%\); D TRUE; E FALSE, \(95\%\).

### Question 12 — Difficulty: 3/5

A hotel tracks cancellations by booking channel. Of 7,000 bookings made online, 560 were later cancelled. Of 3,000 bookings made through a travel agent, 450 were later cancelled. One booking is selected at random.

Statements: A \(P(\text{cancelled})>10.5\%\); B \(P(\text{cancelled}\mid\text{agent})>P(\text{cancelled}\mid\text{online})\); C \(P(\text{online}\mid\text{cancelled})>60\%\); D \(P(\text{agent}\mid\text{cancelled})<P(\text{online}\mid\text{cancelled})\); E \(P(\text{not cancelled})>90\%\).

Answers: A FALSE, \(10.1\%\); B TRUE, \(15\%>8\%\); C FALSE, \(\frac{560}{1010}\approx55.446\%\); D TRUE, \(44.554\%<55.446\%\); E FALSE, \(89.9\%\).

### Question 13 — Difficulty: 3/5

An auto repair shop tracks customer complaints by service type. Of 5,000 Routine service jobs, 100 generated a complaint. Of 2,000 Major repair jobs, 180 generated a complaint. One completed job is selected at random.

Statements: A \(P(\text{complaint})>3.5\%\); B \(P(\text{complaint}\mid\text{Major})>P(\text{complaint}\mid\text{Routine})\); C \(P(\text{Major}\mid\text{complaint})>60\%\); D \(P(\text{Routine}\mid\text{complaint})=1-P(\text{Major}\mid\text{complaint})\); E \(P(\text{no complaint})>95\%\).

Answers: A TRUE, \(4\%\); B TRUE, \(9\%>2\%\); C TRUE, \(\frac{180}{280}\approx64.286\%\); D TRUE; E TRUE, \(96\%\).

### Question 14 — Difficulty: 3/5

A concert venue tracks no-shows by ticket type. Of 8,000 General Admission tickets sold, 1,200 were no-shows. Of 2,000 VIP tickets sold, 100 were no-shows. One ticket is selected at random.

Statements: A \(P(\text{no-show})>14\%\); B \(P(\text{no-show}\mid\text{VIP})>P(\text{no-show}\mid\text{GA})\); C \(P(\text{VIP}\mid\text{no-show})>10\%\); D \(P(\text{GA}\mid\text{no-show})<P(\text{VIP}\mid\text{no-show})\); E \(P(\text{attends})>88\%\).

Answers: all FALSE: A \(13\%\); B \(5\%<15\%\); C \(\frac{100}{1300}\approx7.692\%\); D \(92.308\%\not<7.692\%\); E \(87\%\).

### Question 15 — Difficulty: 4/5; three categories

A streaming service tracks first-year cancellations by subscription plan. Of 6,000 Basic subscribers, 1,200 cancelled within a year. Of 9,000 Standard subscribers, 1,350 cancelled within a year. Of 3,000 Premium subscribers, 270 cancelled within a year. One subscriber is selected at random.

Statements: A \(P(\text{cancel})>15\%\); B \(P(\text{cancel}\mid\text{Premium})>P(\text{cancel}\mid\text{Standard})\); C \(P(\text{Standard}\mid\text{cancel})>45\%\); D \(P(\text{Basic}\mid\text{cancel})>P(\text{Premium}\mid\text{cancel})\); E \(P(\text{does not cancel})>85\%\).

Answers: A TRUE, \(\frac{2820}{18000}\approx15.667\%\); B FALSE, \(9\%<15\%\); C TRUE, \(\frac{1350}{2820}\approx47.872\%\); D TRUE, \(42.553\%>9.574\%\); E FALSE, \(84.333\%\).

---

## Questions 16–20

### Question 16 — Difficulty: 5/5

Software sessions: 12,500 iOS with 375 bug reports; 17,500 Android with 875 bug reports.

Statements: A \(P(\text{bug})>4.2\%\); B \(P(\text{bug}\mid\text{Android})>1.6P(\text{bug}\mid\text{iOS})\); C \(P(\text{iOS}\mid\text{bug})>30\%\); D \(P(\text{Android}\mid\text{bug})-P(\text{iOS}\mid\text{bug})>38\) percentage points; E \(P(\text{no bug})>96\%\).

Answers: A FALSE, \(\frac{1250}{30000}\approx4.167\%\); B TRUE, \(\frac{5\%}{3\%}\approx1.667\); C FALSE, exactly \(30\%\); D TRUE, \(70\%-30\%=40\) points; E FALSE, \(95.833\%\).

### Question 17 — Difficulty: 4/5

Hospital pharmacy: 9,600 day-shift orders with 144 errors; 3,200 night-shift orders with 96 errors.

Statements: A \(P(\text{error})>1.8\%\); B night error rate is more than \(1.9\) times day rate; C \(P(\text{day}\mid\text{error})>58\%\); D \(P(\text{night}\mid\text{error})<41\%\); E \(P(\text{no error})>98\%\).

Answers: all TRUE:

\[
\frac{240}{12800}=1.875\%,\quad
\frac{3\%}{1.5\%}=2,\quad
\frac{144}{240}=60\%,\quad
\frac{96}{240}=40\%,\quad
1-1.875\%=98.125\%.
\]

### Question 18 — Difficulty: 5/5; three categories

Airline baggage: Domestic \(40{,}000/800\) mishandled; International \(15{,}000/450\); Connecting \(5{,}000/250\).

Statements: A \(P(\text{mishandled})>2.4\%\); B connecting rate is more than \(2.5\) times domestic rate; C \(P(\text{international or connecting}\mid\text{mishandled})>45\%\); D \(P(\text{domestic}\mid\text{mishandled})<50\%\); E \(P(\text{correctly handled})>97\%\).

Answers: A TRUE, \(2.5\%\); B FALSE, \(\frac{5\%}{2\%}=2.5\) exactly; C TRUE, \(\frac{450+250}{1500}\approx46.667\%\); D FALSE, \(\frac{800}{1500}\approx53.333\%\); E TRUE, \(97.5\%\).

### Question 19 — Difficulty: 4/5

History: 2,400 theses, 216 late. Engineering: 3,600 theses, 108 late.

Statements: A \(P(\text{late})>5.3\%\); B History late rate is more than three times Engineering rate; C \(P(\text{History}\mid\text{late})>65\%\); D \(P(\text{Engineering}\mid\text{late})>35\%\); E \(P(\text{on time})>94.5\%\).

Answers: A TRUE, \(5.4\%\); B FALSE, \(9\%/3\%=3\) exactly; C TRUE, \(\frac{216}{324}\approx66.667\%\); D FALSE, \(33.333\%\); E TRUE, \(94.6\%\).

### Question 20 — Difficulty: 5/5; three categories

Manufacturing: Morning \(10{,}000/250\) defective; Afternoon \(8{,}000/320\); Night \(6{,}000/180\).

Statements: A \(P(\text{defective})>3.2\%\); B Afternoon rate is more than \(1.7\) times Morning rate; C \(P(\text{Afternoon}\mid\text{defective})>43\%\); D \(P(\text{Morning}\mid\text{defective})>P(\text{Afternoon}\mid\text{defective})\); E \(P(\text{not defective})>96.8\%\).

Answers: A FALSE, \(3.125\%\); B FALSE, \(4\%/2.5\%=1.6\); C FALSE, \(\frac{320}{750}\approx42.667\%\); D FALSE, \(33.333\%<42.667\%\); E TRUE, \(96.875\%\).

---

## Questions 21–25

### Question 21 — Difficulty: 4/5

Ground shipments: 25,000, with 375 lost. Air: 15,000, with 105 lost.

Statements: A \(P(\text{lost})>1.1\%\); B \(P(\text{lost}\mid\text{Ground})>1.4\%\); C \(P(\text{Ground}\mid\text{lost})>80\%\); D \(P(\text{Air}\mid\text{lost})<20\%\); E \(P(\text{not lost})>98.9\%\).

Answers: A TRUE, \(1.2\%\); B TRUE, \(1.5\%\); C FALSE, \(78.125\%\); D FALSE, \(21.875\%\); E FALSE, \(98.8\%\).

### Question 22 — Difficulty: 3/5

A certification board compared pass rates between two exam formats offered last year. Of the 4,500 candidates who took the exam online, 810 failed. Of the 7,500 candidates who took the exam in person, 600 failed. One exam record is pulled at random from the combined pool.

A. \(P(\text{the candidate failed})\) is greater than \(11.5\%\).
B. \(P(\text{a candidate fails, given they took the exam online})\) is greater than \(17\%\).
C. \(P(\text{a failing candidate took the exam online})\) is greater than \(57\%\).
D. \(P(\text{a failing candidate took the exam in person})\) is greater than \(40\%\).
E. \(P(\text{the candidate passed})\) is greater than \(87\%\).

All TRUE:

\[
11.75\%,\quad18\%,\quad
\frac{810}{1410}\approx57.447\%,\quad
\frac{600}{1410}\approx42.553\%,\quad88.25\%.
\]

### Question 23 — Difficulty: 5/5; three categories

Inspections: Franchise \(18{,}000/540\) violations; Corporate \(9{,}000/180\); Kiosk \(3{,}000/210\).

Statements: A overall violation \(>3\%\); B kiosk violation \(>6.5\%\); C Franchise given violation \(>60\%\); D Corporate or Kiosk given violation \(>40\%\); E no violation \(>97\%\).

Answers: A TRUE, \(3.1\%\); B TRUE, \(7\%\); C FALSE, \(\frac{540}{930}\approx58.065\%\); D TRUE, \(\frac{180+210}{930}\approx41.935\%\); E FALSE, \(96.9\%\).

### Question 24 — Difficulty: 4/5

Calls: 60,000 on 4G with 900 dropped; 40,000 on 5G with 200 dropped.

Statements: A overall dropped \(>1.05\%\); B dropped given 4G \(>1.6\%\); C 4G given dropped \(>82\%\); D 5G given dropped \(>20\%\); E not dropped \(>99\%\).

Answers: A TRUE, \(1.1\%\); B FALSE, \(1.5\%\); C FALSE, \(81.818\%\); D FALSE, \(18.182\%\); E FALSE, \(98.9\%\).

### Question 25 — Difficulty: 5/5; three categories

Purchases: In-store \(20{,}000/800\) returns; Online \(15{,}000/1{,}050\); Marketplace \(5{,}000/550\).

Statements: A overall return \(>5.9\%\); B Marketplace return rate \(>10.5\%\); C In-store given return \(>35\%\); D Online or Marketplace given return \(>65\%\); E not returned \(>94.5\%\).

Answers: A TRUE, \(6\%\); B TRUE, \(11\%\); C FALSE, \(33.333\%\); D TRUE, \(\frac{1050+550}{2400}=66.667\%\); E FALSE, \(94\%\).

---

## Questions 26–30

### Question 26 — Difficulty: 4/5

Insurance claims: Auto \(30{,}000/450\) denied; Home \(20{,}000/260\).

Statements: A denied exceeds \(1.5\%\); B denied given Auto is under \(1.4\%\); C Auto given denied is at least \(65\%\); D Home given denied is above \(38\%\); E not denied \(>98.5\%\).

Answers: A FALSE, \(1.42\%\); B FALSE, \(1.5\%\); C FALSE, \(63.380\%\); D FALSE, \(36.620\%\); E TRUE, \(98.58\%\).

### Question 27 — Difficulty: 3/5

A software team reviewed a backlog of bug reports filed under two priority levels. Of the 2,000 bugs filed as Critical, 1,700 were confirmed as valid defects. Of the 8,000 bugs filed as Standard priority, 6,000 were confirmed as valid. One bug report is pulled at random from the combined backlog.

A. \(P(\text{the bug report is confirmed valid})\) exceeds \(75\%\).
B. \(P(\text{a bug is confirmed valid, given it was filed as Critical})\) is at least \(80\%\).
C. \(P(\text{a valid bug was filed as Standard priority})\) is above \(75\%\).
D. \(P(\text{a valid bug was filed as Critical priority})\) is under \(25\%\).
E. \(P(\text{the bug report turns out to be invalid})\) is below \(25\%\).

All TRUE:

\[
77\%,\quad85\%,\quad
\frac{6000}{7700}\approx77.922\%,\quad
\frac{1700}{7700}\approx22.078\%,\quad23\%.
\]

### Question 28 — Difficulty: 5/5; three categories

Applications: Domestic \(12{,}000/1{,}800\) rejected; International \(6{,}000/1{,}200\); Transfer \(2{,}000/100\).

Statements: A rejected \(>15\%\); B rejected given International \(>22\%\); C Domestic given rejected at least \(55\%\); D International or Transfer given rejected \(>45\%\); E accepted \(>84\%\).

Answers: A TRUE, \(15.5\%\); B FALSE, \(20\%\); C TRUE, \(58.065\%\); D FALSE, \(41.935\%\); E TRUE, \(84.5\%\).

### Question 29 — Difficulty: 4/5

Flights: Domestic \(50{,}000/3{,}500\) delayed; International \(10{,}000/900\).

Statements: A delayed above \(7.5\%\); B delayed given Domestic exceeds \(6.5\%\); C Domestic given delayed at least \(82\%\); D International given delayed \(>18\%\); E on time at least \(93\%\).

Answers: A FALSE, \(7.333\%\); B TRUE, \(7\%\); C FALSE, \(79.545\%\); D TRUE, \(20.455\%\); E FALSE, \(92.667\%\).

### Question 30 — Difficulty: 5/5; three categories

Production: Plant A \(25{,}000/375\) recalled; B \(15{,}000/375\); C \(10{,}000/450\).

Statements: A recalled exceeds \(2.3\%\); B recalled given C above \(4\%\); C A given recalled at least \(33\%\); D B or C given recalled \(>65\%\); E not recalled exceeds \(97\%\).

Answers: A TRUE, \(2.4\%\); B TRUE, \(4.5\%\); C FALSE, \(31.25\%\); D TRUE, \(31.25\%+37.5\%=68.75\%\); E TRUE, \(97.6\%\).

---

## Questions 31–35

### Question 31 — Difficulty: 4/5

Two fair six-sided dice are rolled once. Consider probabilities conditional on whether the sum is even or odd.

A. \(P(\text{same number}\mid\text{even sum})=\frac13\).  
B. \(P(\text{sum}\ge8\mid\text{even sum})=50\%\).  
C. \(P(\text{at least one 6}\mid\text{even sum})>28\%\).  
D. \(P(\text{even sum})=P(\text{odd sum})\).  
E. \(P(\text{sum}\ge8\mid\text{even})>P(\text{sum}\ge8\mid\text{odd})\).

Worked answer:

- A TRUE: \(6\) doubles among \(18\) even-sum outcomes, so \(\frac6{18}=\frac13\).
- B TRUE: even sums \(8,10,12\) have \(5+3+1=9\) outcomes; \(\frac9{18}=50\%\).
- C FALSE: \((6,6),(6,2),(2,6),(6,4),(4,6)\), so \(\frac5{18}\approx27.778\%\).
- D TRUE: each parity has \(18\) of \(36\) outcomes.
- E TRUE: even condition gives \(\frac9{18}=50\%\); odd sums \(9,11\) give \(\frac6{18}=33.333\%\).

### Question 32 — Difficulty: 4/5

Two fair six-sided dice are rolled once. Consider probabilities conditional on whether their product is odd or even.

A. \(P(\text{same number}\mid\text{odd product})=\frac13\).  
B. \(P(\text{even sum}\mid\text{odd product})=100\%\).  
C. \(P(\text{at least one 5}\mid\text{even product})>25\%\).  
D. \(P(\text{even product})=3P(\text{odd product})\).  
E. \(P(\text{odd sum}\mid\text{even product})>P(\text{odd sum}\mid\text{odd product})\).

Answers:

- A TRUE: \(3\) odd doubles among \(3\times3=9\) odd-product outcomes.
- B TRUE: odd \(+\) odd \(=\) even.
- C FALSE: six qualifying outcomes among \(27\), so \(\frac6{27}\approx22.222\%\).
- D TRUE:

\[
P(\text{odd product})=\left(\frac36\right)^2=\frac14,\qquad
P(\text{even product})=1-\frac14=\frac34.
\]

- E TRUE: \(\frac{18}{27}\approx66.667\%>0\%\).

### Question 33 — Difficulty: 4/5

Two fair six-sided dice are rolled once. Consider probabilities conditional on the sum being at least 9 or at most 4.

A. \(P(\text{same number}\mid\text{sum}\ge9)=\frac15\).  
B. \(P(\text{even sum}\mid\text{sum}\ge9)=40\%\).  
C. \(P(\text{at least one 6}\mid\text{sum}\ge9)>75\%\).  
D. \(P(\text{sum}\ge9)>P(\text{sum}\le4)\).  
E. \(P(\text{odd sum}\mid\text{sum}\ge9)>P(\text{odd sum}\mid\text{sum}\le4)\).

Answers:

- A TRUE: \(2\) doubles among \(10\) outcomes, \(\frac2{10}=\frac15\).
- B TRUE: sums \(10,12\) contribute \(4\) outcomes, \(\frac4{10}=40\%\).
- C FALSE: \(7\) of \(10\), hence \(70\%\).
- D TRUE: \(\frac{10}{36}>\frac6{36}\).
- E TRUE: \(\frac6{10}=60\%>\frac26\approx33.333\%\).

### Question 34 — Difficulty: 4/5

Two-way diagnostic-test data:

- Disease and positive: 18
- Disease and negative: 2
- No disease and positive: 15
- No disease and negative: 165
- Total: 200

A. \(P(\text{disease})<12\%\).  
B. \(P(\text{positive}\mid\text{disease})>85\%\).  
C. \(P(\text{disease}\mid\text{positive})>60\%\).  
D. \(P(\text{negative}\mid\text{no disease})>90\%\).  
E. \(P(\text{positive})=P(\text{disease}\cap\text{positive})+P(\text{no disease}\cap\text{positive})\).

Answers:

- A TRUE: \(\frac{20}{200}=10\%\).
- B TRUE: \(\frac{18}{20}=90\%\) sensitivity.
- C FALSE: \(\frac{18}{33}\approx54.545\%\); sensitivity is not positive predictive value.
- D TRUE: \(\frac{165}{180}\approx91.667\%\) specificity.
- E TRUE by the law of total probability:

\[
P(+)=P(D\cap+)+P(D^c\cap+).
\]

### Question 35 — Difficulty: 5/5 (Expert)

Factory tree values:

\[
P(M_1)=0.5,\quad P(M_2)=0.3,\quad P(M_3)=0.2,
\]

\[
P(D\mid M_1)=0.02,\quad P(D\mid M_2)=0.05,\quad P(D\mid M_3)=0.10,
\]

\[
P(\text{Detected}\mid D)=0.85,\qquad
P(\text{Detected}\mid D^c)=0.02.
\]

A. \(P(\text{Detected})>6\%\).  
B. \(P(M_1\cap\text{Not Detected})>48\%\).  
C. \(P(M_3\mid\text{Detected})>35\%\).  
D. \(P(D\mid\text{Detected})<65\%\).  
E. \(P(M_3\mid D)>2P(M_1\mid D)\).

Worked answer:

\[
P(D)=0.5(0.02)+0.3(0.05)+0.2(0.10)=0.045.
\]

\[
P(\text{Detected})=0.045(0.85)+0.955(0.02)=0.05735.
\]

- A FALSE: \(5.735\%<6\%\).
- B TRUE:

\[
P(M_1\cap\text{Not Detected})
=0.5(0.02)(0.15)+0.5(0.98)(0.98)
=0.4817.
\]

- C TRUE:

\[
P(M_3\cap\text{Detected})
=0.2[0.10(0.85)+0.90(0.02)]
=0.0206,
\]

\[
P(M_3\mid\text{Detected})
=\frac{0.0206}{0.05735}
\approx35.920\%.
\]

- D FALSE:

\[
P(D\mid\text{Detected})
=\frac{0.045(0.85)}{0.05735}
\approx66.696\%.
\]

- E FALSE:

\[
P(M_1\mid D)=\frac{0.5(0.02)}{0.045}\approx22.222\%,
\]

\[
P(M_3\mid D)=\frac{0.2(0.10)}{0.045}\approx44.444\%.
\]

The ratio is exactly \(2\), not more than \(2\).

---

## Questions 36–40

### Question 36 — Difficulty: 4/5

Urban branches: 14,000 applications, 980 rejected. Rural branches: 6,000, 900 rejected.

Statements: A overall rejected \(>9\%\); B Rural rejection rate \(>14\%\); C Urban given rejected \(>50\%\); D Rural given rejected \(>48\%\); E approved \(>91\%\).

Answers: A TRUE, \(9.4\%\); B TRUE, \(15\%\); C TRUE, \(\frac{980}{1880}\approx52.128\%\); D FALSE, \(47.872\%\); E FALSE, \(90.6\%\).

### Question 37 — Difficulty: 3/5

Basic members: 12,000, with 1,800 cancellations. Premium: 8,000, with 480 cancellations.

Statements: A overall cancellation \(>11\%\); B Basic cancellation \(>14\%\); C Basic given cancellation \(>80\%\); D Premium given cancellation \(>22\%\); E retained \(>88\%\).

Answers: A TRUE, \(11.4\%\); B TRUE, \(15\%\); C FALSE, \(\frac{1800}{2280}\approx78.947\%\); D FALSE, \(21.053\%\); E TRUE, \(88.6\%\).

### Question 38 — Difficulty: 5/5; three categories

Trips: Express \(20{,}000/400\) late; Local \(15{,}000/750\); Shuttle \(5{,}000/450\).

Statements: A overall late \(>3.9\%\); B Shuttle late \(>8.5\%\); C Local given late \(>45\%\); D Express or Shuttle given late \(>50\%\); E on time \(>96\%\).

Answers: A TRUE, \(4\%\); B TRUE, \(9\%\); C TRUE, \(\frac{750}{1600}=46.875\%\); D TRUE, \(\frac{400+450}{1600}=53.125\%\); E FALSE because \(96\%\) equals, but does not exceed, \(96\%\).

### Question 39 — Difficulty: 4/5

An online marketplace reviewed a quarter of transactions split across two payment methods. Of 30,000 transactions paid by credit card, 450 resulted in a chargeback. Of 20,000 transactions paid by digital wallet, 100 resulted in a chargeback. One transaction is pulled at random from the quarter's records.

A. \(P(\text{the transaction resulted in a chargeback})\) is greater than \(1.05\%\).
B. \(P(\text{a chargeback occurs, given payment was by credit card})\) is greater than \(1.4\%\).
C. \(P(\text{a chargeback transaction was paid by credit card})\) is greater than \(80\%\).
D. \(P(\text{a chargeback transaction was paid by digital wallet})\) is greater than \(17\%\).
E. \(P(\text{the transaction had no chargeback})\) is greater than \(98.8\%\).

All TRUE:

\[
\frac{550}{50000}=1.1\%,\quad
\frac{450}{30000}=1.5\%,\quad
\frac{450}{550}\approx81.818\%,\quad
\frac{100}{550}\approx18.182\%,\quad
98.9\%.
\]

### Question 40 — Difficulty: 5/5; three categories

Readmissions: ICU \(4{,}000/640\); General Ward \(12{,}000/960\); Outpatient \(8{,}000/240\).

Statements: A overall readmitted \(>8\%\); B ICU readmission \(>17\%\); C General Ward given readmission \(>53\%\); D ICU or Outpatient given readmission \(>49\%\); E not readmitted \(>92\%\).

Answers:

- A FALSE: \(\frac{1840}{24000}\approx7.667\%\).
- B FALSE: \(\frac{640}{4000}=16\%\).
- C FALSE: \(\frac{960}{1840}\approx52.174\%\).
- D FALSE: \(\frac{640+240}{1840}\approx47.826\%\).
- E TRUE: \(1-7.667\%\approx92.333\%\).

## Teaching notes to retain

- State the denominator before dividing.
- A high within-category rate does not necessarily mean that category contributes the largest raw count; both rate and volume matter.
- In three-category problems, a pairwise comparison may not require the third category, although all categories are needed for the grand total.
- For combined categories sharing a denominator:

\[
P(A\text{ or }B\mid C)
=\frac{|A\cap C|+|B\cap C|}{|C|},
\]

provided \(A\) and \(B\) are disjoint.
- Do not round before testing close thresholds.
- Exact equality fails strict inequalities:

\[
x>c\quad\text{is false when }x=c.
\]

- “At least” means \(\ge\), while “more than,” “above,” and “exceeds” mean \(>\).
- Complement thresholds can create equality traps, such as \(P(A)=4\%\Rightarrow P(A^c)=96\%\).
- For diagnostic testing, distinguish sensitivity \(P(+\mid D)\), specificity \(P(-\mid D^c)\), and positive predictive value \(P(D\mid+)\).