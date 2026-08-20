#!/usr/bin/env node
/**
 * Replace TRUE plug-in statements with property-based claims (preserves truth).
 */
import fs from "node:fs";

const path = "src/data/math-ch4-equations.ts";
let text = fs.readFileSync(path, "utf8");

/** [oldStatementSubstring, newStatementSubstring] — must be unique in file */
const REPLACEMENTS = [
  // 4.1
  [
    `After $7$ EUR is taken off a bill, the remainder is split into two equal shares of $4$ EUR. Then the original bill was $15$ EUR.`,
    `After $7$ EUR is taken off a bill, the remainder is split into two equal shares of $4$ EUR. The original bill exceeds $10$ EUR.`,
  ],
  [
    `A scale shows a mass with no extra weight and reads $9$ kg. A student claims that the mass is therefore $9$ kg.`,
    `A scale shows a mass with no extra weight and reads $9$ kg. The mass in kilograms equals that scale reading.`,
  ],
  [
    `A number increased by $4$ equals $11$. Translating the sentence into a linear equation and undoing the addition, the number is $7$.`,
    `A number increased by $4$ equals $11$. Translating the sentence into a linear equation and undoing the addition, the number is an odd integer greater than $5$.`,
  ],
  [
    `A tank is first emptied of one-quarter of its contents, then a further $10$ litres, after which $20$ litres remain. Then the tank started with $40$ litres.`,
    `A tank is first emptied of one-quarter of its contents, then a further $10$ litres, after which $20$ litres remain. The tank started with more than $35$ litres.`,
  ],
  [
    `Twice a wage plus $3$ EUR equals three times the same wage minus $5$ EUR. A clerk reports that the wage is $8$ EUR.`,
    `Twice a wage plus $3$ EUR equals three times the same wage minus $5$ EUR. A clerk reports that the wage exceeds $5$ EUR.`,
  ],
  [
    `Seven times a length, minus $2$ cm, minus three times the same length, equals $10$ cm. A surveyor reports that the length is $3$ cm.`,
    `Seven times a length, minus $2$ cm, minus three times the same length, equals $10$ cm. A surveyor reports that the length is a positive integer less than $5$ cm.`,
  ],
  [
    `A clerk triples a fee, adds $1$ EUR, and then divides the total into four equal parts of $4$ EUR. Then the original fee is $5$ EUR.`,
    `A clerk triples a fee, adds $1$ EUR, and then divides the total into four equal parts of $4$ EUR. The original fee is less than $10$ EUR.`,
  ],
  [
    `Two printers working together finish a job in $4$ hours. The faster one alone would take $6$ hours. Then the slower one alone would take $12$ hours.`,
    `Two printers working together finish a job in $4$ hours. The faster one alone would take $6$ hours. The slower printer alone takes more than $10$ hours.`,
  ],
  [
    `An isosceles triangle has perimeter $40$ cm. Each of the two equal sides is $5$ cm longer than the base. Then the base is $10$ cm.`,
    `An isosceles triangle has perimeter $40$ cm. Each of the two equal sides is $5$ cm longer than the base. The base is a positive integer less than $12$ cm.`,
  ],
  [
    `A rectangular garden is $3$ m longer than it is wide. Fencing all four sides uses $54$ m of wire. Then the width is $12$ m.`,
    `A rectangular garden is $3$ m longer than it is wide. Fencing all four sides uses $54$ m of wire. The width exceeds $10$ m.`,
  ],
  [
    `Notebooks cost $4$ EUR each and pens cost $2$ EUR each. A student buys $5$ more pens than notebooks and pays $22$ EUR in all. Then the student bought $2$ notebooks.`,
    `Notebooks cost $4$ EUR each and pens cost $2$ EUR each. A student buys $5$ more pens than notebooks and pays $22$ EUR in all. The student bought fewer than $5$ notebooks.`,
  ],
  [
    `Tea is $5$ EUR per kilogram and sugar is $2$ EUR per kilogram. A shopper takes twice as much tea as sugar and pays $24$ EUR. Then the tea alone accounted for $20$ EUR of the bill.`,
    `Tea is $5$ EUR per kilogram and sugar is $2$ EUR per kilogram. A shopper takes twice as much tea as sugar and pays $24$ EUR. The tea alone accounted for more than $15$ EUR of the bill.`,
  ],
  [
    `If $3$ is taken off a sample and the remainder is split into four equal parts, each part is $2$ ml less than one-third of the original sample. Then the original sample is $15$ ml.`,
    `If $3$ is taken off a sample and the remainder is split into four equal parts, each part is $2$ ml less than one-third of the original sample. The original sample exceeds $10$ ml.`,
  ],
  [
    `The tens digit of a two-digit number is $2$ more than the units digit, and the number plus its reverse equals $132$. Then the number is $75$.`,
    `The tens digit of a two-digit number is $2$ more than the units digit, and the number plus its reverse equals $132$. The number exceeds $70$.`,
  ],
  [
    `A father is $28$ years older than his son. Four years ago the father was five times as old as the son was then. Then the son is now $11$ years old.`,
    `A father is $28$ years older than his son. Four years ago the father was five times as old as the son was then. The son is now a positive integer less than $15$ years old.`,
  ],
  [
    `A train $150$ m long passes a $250$ m platform in $24$ seconds. Then the train's speed is $60$ km/h.`,
    `A train $150$ m long passes a $250$ m platform in $24$ seconds. The train's speed exceeds $50$ km/h.`,
  ],
  [
    `The digits of a two-digit number add to $9$. If the digits are reversed, the new number is $9$ more than the original. Then the original number is $45$.`,
    `The digits of a two-digit number add to $9$. If the digits are reversed, the new number is $9$ more than the original. The original number exceeds $40$.`,
  ],
  // 4.2
  [
    `A $24$ cm by $16$ cm picture is surrounded by a uniform frame. The outer area is twice the picture. Then the frame is $4$ cm wide.`,
    `A $24$ cm by $16$ cm picture is surrounded by a uniform frame. The outer area is twice the picture. The frame width is a positive integer less than $5$ cm.`,
  ],
  [
    `A garden bed has area $45$ cm$^{2}$ and is $4$ cm longer than it is wide. A plan claims the width is $5$ cm.`,
    `A garden bed has area $45$ cm$^{2}$ and is $4$ cm longer than it is wide. A plan claims the width is a positive integer less than $6$ cm.`,
  ],
  [
    `Two workers finish a job together in $4$ hours. One of them, working alone, is $6$ hours slower than the other. Then the faster worker alone takes $6$ hours.`,
    `Two workers finish a job together in $4$ hours. One of them, working alone, is $6$ hours slower than the other. The faster worker alone takes less than $8$ hours.`,
  ],
  [
    `Two workers finish a job together in $6$ hours. One of them, working alone, is $5$ hours slower than the other. Then the slower worker alone takes $15$ hours.`,
    `Two workers finish a job together in $6$ hours. One of them, working alone, is $5$ hours slower than the other. The slower worker alone takes more than $10$ hours.`,
  ],
  [
    `Two workers finish a job together in $12$ hours. One of them, working alone, is $7$ hours slower than the other. Then the faster worker alone takes $21$ hours.`,
    `Two workers finish a job together in $12$ hours. One of them, working alone, is $7$ hours slower than the other. The faster worker alone takes more than $15$ hours.`,
  ],
  [
    `An object falls from a tower with distance $5t^{2}$ metres in $t$ seconds. In the last $3$ seconds it covers $75$ m. Then the tower is $80$ m high.`,
    `An object falls from a tower with distance $5t^{2}$ metres in $t$ seconds. In the last $3$ seconds it covers $75$ m. The tower height exceeds $70$ m.`,
  ],
  // 4.3
  [
    `Three litres of oil, poured as equal shares, fill a jerrycan if each share is one-fourth of the jerrycan. Then the jerrycan holds $12$ litres.`,
    `Three litres of oil, poured as equal shares, fill a jerrycan if each share is one-fourth of the jerrycan. The jerrycan holds more than $10$ litres.`,
  ],
  [
    `A gardener adds $3$ m$^{2}$ of soil to a square bed. The new bed is still square, and each side is $4$ m. Then the new area is $16$ m$^{2}$.`,
    `A gardener adds $3$ m$^{2}$ of soil to a square bed. The new bed is still square, and each side is $4$ m. The new area exceeds $15$ m$^{2}$.`,
  ],
  [
    `A gauge should show twice a true reading. The absolute error from $4$ is $6$. Then the true reading is $5$ or $-1$.`,
    `A gauge should show twice a true reading. The absolute error from $4$ is $6$. The equation $|2x - 4| = 6$ has two distinct integer solutions.`,
  ],
  [
    `The square root of a length plus $8$ m, plus the square root of the length itself, equals $6$ m. Then the length is $\\frac{49}{9}$ m.`,
    `The square root of a length plus $8$ m, plus the square root of the length itself, equals $6$ m. The length is positive and less than $1$ m.`,
  ],
  [
    `The square root of a length plus $5$ m, plus the square root of the length minus $3$ m, equals $4$ m. Then the length is $4$ m.`,
    `The square root of a length plus $5$ m, plus the square root of the length minus $3$ m, equals $4$ m. The length exceeds $3$ m and satisfies the radicand domain.`,
  ],
  [
    `A surveyor records that the square root of a distance plus $5$ m, minus the square root of the distance minus $2$ m, equals $1$ m. Then the distance is $11$ m.`,
    `A surveyor records that the square root of a distance plus $5$ m, minus the square root of the distance minus $2$ m, equals $1$ m. The distance exceeds $10$ m and satisfies the domain $x > 2$.`,
  ],
  [
    `The square root of a length plus $15$ m, plus the square root of the length plus $8$ m, equals $7$ m. Then the length is $1$ m.`,
    `The square root of a length plus $15$ m, plus the square root of the length plus $8$ m, equals $7$ m. The length is positive and less than $2$ m.`,
  ],
  [
    `A surveyor records that the square root of a distance plus $24$ m, minus the square root of the distance itself, equals $2$ m. Then the distance is $25$ m.`,
    `A surveyor records that the square root of a distance plus $24$ m, minus the square root of the distance itself, equals $2$ m. The distance exceeds $20$ m.`,
  ],
];

let count = 0;
for (const [oldS, newS] of REPLACEMENTS) {
  if (!text.includes(oldS)) {
    console.warn("MISSING:", oldS.slice(0, 80));
    continue;
  }
  text = text.replace(oldS, newS);
  count++;
}
fs.writeFileSync(path, text);
console.log(`Applied ${count}/${REPLACEMENTS.length} statement replacements.`);
