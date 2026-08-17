const f = (x, d = 2) => Number(x).toLocaleString('en-US', { minimumFractionDigits: d, maximumFractionDigits: d });
const P = (label, v, d = 2) => console.log(label + ' = ' + f(v, d));

console.log('--- 91 deferred perpetuity');
P('V4 = 10000/0.06', 10000 / 0.06);
P('1.06^4', Math.pow(1.06, 4), 6);
P('PV0', (10000 / 0.06) / Math.pow(1.06, 4));
P('1.06^8', Math.pow(1.06, 8), 6);
P('PV0 defer8', (10000 / 0.06) / Math.pow(1.06, 8));
P('half of 132015.61', 132015.61 / 2);
P('ratio 1/1.06^4', 1 / Math.pow(1.06, 4), 6);

console.log('--- 92 preferred stock');
P('4.25/0.07', 4.25 / 0.07, 6);
P('4.25/0.04', 4.25 / 0.04);
P('pct rise', (106.25 - 4.25 / 0.07) / (4.25 / 0.07), 6);
P('0.8*4.25', 0.8 * 4.25);
P('3.40/0.07', 3.4 / 0.07, 6);

console.log('--- 93 park');
P('15000/0.045', 15000 / 0.045);
P('15000/0.06', 15000 / 0.06);
P('reduction pct', 83333.33 / 383333.33, 6);
P('half combined', 383333.33 / 2);

console.log('--- 94 growing perp');
P('24000/0.055', 24000 / 0.055);
P('24000/0.08', 24000 / 0.08);
P('24000/0.04', 24000 / 0.04);
P('2x436363.64', 2 * (24000 / 0.055));
P('24000/0.035', 24000 / 0.035);

console.log('--- 95 gordon');
P('D1', 3 * 1.03);
P('P', 3.09 / 0.06);
P('D0 misuse', 3 / 0.06);
P('gap', 3.09 / 0.06 - 3 / 0.06);
P('g=5 D1', 3 * 1.05);
P('g=5 P', 3.15 / 0.04);
P('double 51.50', 2 * 51.5);

console.log('--- 96 royalties');
P('deal1', 18000 / 0.1);
P('deal2', 14000 / 0.06);
P('deal2 margin', 14000 / 0.06 - 170000);
P('deal2 g=1%', 14000 / 0.09);

console.log('--- 97 continuous PV');
P('e^-0.66', Math.exp(-0.66), 6);
P('PV cont', 250000 * Math.exp(-0.66));
P('1.055^12', Math.pow(1.055, 12), 6);
P('PV ann', 250000 / Math.pow(1.055, 12));
P('gap', 250000 / Math.pow(1.055, 12) - 250000 * Math.exp(-0.66));
P('e^-0.33', Math.exp(-0.33), 6);
P('PV 6y', 250000 * Math.exp(-0.33));
P('e^-0.055', Math.exp(-0.055), 6);

console.log('--- 98 biotech');
P('e^0.5625', Math.exp(0.5625), 6);
P('cont FV', 75000 * Math.exp(0.5625));
P('1.0625^9', Math.pow(1.0625, 9), 6);
P('annuity FV', (8333.33 / 0.0625) * (Math.pow(1.0625, 9) - 1));
P('gap', 75000 * Math.exp(0.5625) - (8333.33 / 0.0625) * (Math.pow(1.0625, 9) - 1));
P('disc lump', 75000 * Math.pow(1.0625, 9));

console.log('--- 99 mixed');
P('1.08^5', Math.pow(1.08, 5), 6);
P('P ord', (4200 / 0.08) * (1 - 1 / Math.pow(1.08, 5)));
P('P due', (4200 / 0.08) * (1 - 1 / Math.pow(1.08, 5)) * 1.08);
P('F ord', (4200 / 0.08) * (Math.pow(1.08, 5) - 1));
P('F due', (4200 / 0.08) * (Math.pow(1.08, 5) - 1) * 1.08);
P('e^0.42', Math.exp(0.42), 6);
P('cont', 20000 * Math.exp(0.42));
P('perp', 3000 / 0.08);
P('2x due', 2 * 18110.94);

console.log('--- 100 family office');
P('e^0.5', Math.exp(0.5), 6);
P('comp1', 150000 * Math.exp(0.5));
P('1.06^6', Math.pow(1.06, 6), 6);
P('comp2', 80000 / Math.pow(1.06, 6));
P('1.07^12', Math.pow(1.07, 12), 6);
P('annuity factor', 1 - 1 / Math.pow(1.07, 12), 6);
P('comp3', (10000 / 0.07) * (1 - 1 / Math.pow(1.07, 12)));
P('comp4', 5000 / 0.05);
P('sum', 150000 + 80000 / Math.pow(1.06, 6) + (10000 / 0.07) * (1 - 1 / Math.pow(1.07, 12)) + 100000);

console.log('--- 101 bakery loan');
P('1.12^-6', Math.pow(1.12, -6), 6);
const a101 = (0.12 * 60000) / (1 - Math.pow(1.12, -6));
P('a', a101);
P('int1', 0.12 * 60000);
P('prin1', a101 - 7200);
P('half pay', a101 / 2);
P('bal1', 60000 - (a101 - 7200));
const b1 = 60000 - (a101 - 7200);
P('int2', 0.12 * b1);
P('prin2', a101 - 0.12 * b1);
P('bal2', b1 - (a101 - 0.12 * b1));

console.log('--- 102 car');
P('1.0075^-48', Math.pow(1.0075, -48), 6);
const a102 = (0.0075 * 24000) / (1 - Math.pow(1.0075, -48));
P('a', a102, 4);
P('total', a102 * 48);
P('interest', a102 * 48 - 24000);
P('1.09^-4', Math.pow(1.09, -4), 6);
P('ann pay', (0.09 * 24000) / (1 - Math.pow(1.09, -4)));

console.log('--- 103 restaurant');
P('1.10^-5', Math.pow(1.1, -5), 6);
const a103 = (0.1 * 45000) / (1 - Math.pow(1.1, -5));
P('a', a103, 4);
let bal = 45000;
for (let y = 1; y <= 5; y++) {
  const i = 0.1 * bal, p = a103 - i;
  bal -= p;
  console.log(' y' + y + ' int ' + f(i) + ' prin ' + f(p) + ' bal ' + f(bal));
}

console.log('--- 104 franchise');
P('1.11^-9', Math.pow(1.11, -9), 6);
const fac = 1 + (1 / 0.11) * (1 - Math.pow(1.11, -9));
P('factor', fac, 6);
P('a due', 150000 / fac);
P('1.11^-10', Math.pow(1.11, -10), 6);
const aord = (0.11 * 150000) / (1 - Math.pow(1.11, -10));
P('a ord', aord);
P('diff', aord - 150000 / fac);
P('total due', 10 * (150000 / fac));

console.log('--- 105 landscaping');
P('n threshold', (Math.log(10000) - Math.log(10000 - 0.13 * 35000)) / Math.log(1.13), 4);
P('1.13^4', Math.pow(1.13, 4), 6);
P('loan FV4', 35000 * Math.pow(1.13, 4));
P('pay FV4', (10000 / 0.13) * (Math.pow(1.13, 4) - 1));
const rem105 = 35000 * Math.pow(1.13, 4) - (10000 / 0.13) * (Math.pow(1.13, 4) - 1);
P('remainder', rem105);
P('final', rem105 * 1.13);
P('total', 40000 + rem105 * 1.13);
P('interest', 40000 + rem105 * 1.13 - 35000);

console.log('--- 106 fleet');
P('1.10^-6', Math.pow(1.1, -6), 6);
P('PVB 10%', 100000 + (100000 / 0.1) * (1 - Math.pow(1.1, -6)));
P('1.14^-6', Math.pow(1.14, -6), 6);
P('PVB 14%', 100000 + (100000 / 0.14) * (1 - Math.pow(1.14, -6)));

console.log('--- 107 quarterly');
P('year equiv', 250 * (4 + 1.5 * 0.08));
P('1.08^4', Math.pow(1.08, 4), 6);
P('F4', (1030 / 0.08) * (Math.pow(1.08, 4) - 1));
P('1.08^3', Math.pow(1.08, 3), 6);
P('F3', (1030 / 0.08) * (Math.pow(1.08, 3) - 1));
P('F4 flat', (1000 / 0.08) * (Math.pow(1.08, 4) - 1));
P('diff', (1030 / 0.08) * (Math.pow(1.08, 4) - 1) - (1000 / 0.08) * (Math.pow(1.08, 4) - 1));

console.log('--- 108 mortgage');
P('1.005^-240', Math.pow(1.005, -240), 6);
const a108 = (0.005 * 200000) / (1 - Math.pow(1.005, -240));
P('a', a108, 4);
P('1.005^-180', Math.pow(1.005, -180), 6);
const b108 = (a108 / 0.005) * (1 - Math.pow(1.005, -180));
P('B60', b108);
P('principal repaid', 200000 - b108);
P('pct', (200000 - b108) / 200000, 6);
P('paid 60', a108 * 60);
P('interest 5y', a108 * 60 - (200000 - b108));
P('lifetime paid', a108 * 240);
P('lifetime interest', a108 * 240 - 200000);

console.log('--- 109 manufacturing');
P('n threshold', (Math.log(25000) - Math.log(25000 - 0.14 * 120000)) / Math.log(1.14), 4);
P('1.14^8', Math.pow(1.14, 8), 6);
P('loan FV8', 120000 * Math.pow(1.14, 8));
P('pay FV8', (25000 / 0.14) * (Math.pow(1.14, 8) - 1));
const rem109 = 120000 * Math.pow(1.14, 8) - (25000 / 0.14) * (Math.pow(1.14, 8) - 1);
P('remainder', rem109);
P('final', rem109 * 1.14);
P('total', 8 * 25000 + rem109 * 1.14);
P('interest', 8 * 25000 + rem109 * 1.14 - 120000);
P('overstate', 225000 - (8 * 25000 + rem109 * 1.14));

console.log('--- 110 capstone');
P('1.12^-7', Math.pow(1.12, -7), 6);
const fac110 = 1 + (1 / 0.12) * (1 - Math.pow(1.12, -7));
P('factor', fac110, 6);
const a110 = 90000 / fac110;
P('a', a110);
const bal110 = 90000 - a110;
P('bal after1', bal110);
P('int2', 0.12 * bal110);
const prin2 = a110 - 0.12 * bal110;
P('prin2', prin2);
P('bal2', bal110 - prin2);
P('int3', 0.12 * (bal110 - prin2));
P('reserve equiv', 300 * (4 + 1.5 * 0.09));
P('1.09^3', Math.pow(1.09, 3), 6);
P('F3', (1240.5 / 0.09) * (Math.pow(1.09, 3) - 1));
P('3 payments', 3 * a110);

console.log('--- 111 construction');
P('1.09^-6', Math.pow(1.09, -6), 6);
P('PVII 9%', 95000 + (95000 / 0.09) * (1 - Math.pow(1.09, -6)));
P('1.09^-10', Math.pow(1.09, -10), 6);
P('PVIII 9%', 150000 + (60000 / 0.09) * (1 - Math.pow(1.09, -10)));
P('1.13^-6', Math.pow(1.13, -6), 6);
P('PVII 13%', 95000 + (95000 / 0.13) * (1 - Math.pow(1.13, -6)));
P('1.13^-10', Math.pow(1.13, -10), 6);
P('PVIII 13%', 150000 + (60000 / 0.13) * (1 - Math.pow(1.13, -10)));

console.log('--- 112 hospital');
P('1.08^-8', Math.pow(1.08, -8), 6);
P('PVII 8%', 140000 + (140000 / 0.08) * (1 - Math.pow(1.08, -8)));
P('1.08^-11', Math.pow(1.08, -11), 6);
P('PVIII 8%', 300000 + (80000 / 0.08) * (1 - Math.pow(1.08, -11)));
P('1.12^-11', Math.pow(1.12, -11), 6);
P('PVIII 12%', 300000 + (80000 / 0.12) * (1 - Math.pow(1.12, -11)));
P('1.12^-8', Math.pow(1.12, -8), 6);
P('PVII 12%', 140000 + (140000 / 0.12) * (1 - Math.pow(1.12, -8)));

console.log('--- 113 shipping');
P('1.075^-9', Math.pow(1.075, -9), 6);
P('PVII 7.5%', 340000 + (340000 / 0.075) * (1 - Math.pow(1.075, -9)));
P('PVIII 7.5%', 600000 + (250000 / 0.075) * (1 - Math.pow(1.075, -9)));
P('1.115^-9', Math.pow(1.115, -9), 6);
P('PVII 11.5%', 340000 + (340000 / 0.115) * (1 - Math.pow(1.115, -9)));
P('PVIII 11.5%', 600000 + (250000 / 0.115) * (1 - Math.pow(1.115, -9)));

console.log('--- 114-123 IRR');
const irr2 = (a0, a1, a2) => {
  const A = a2, B = a1, C = a0;
  const D = B * B - 4 * A * C;
  const s = (-B + Math.sqrt(D)) / (2 * A);
  return { D, sq: Math.sqrt(D), s, r: 1 / s - 1 };
};
const show = (n, o) => console.log(n + ': D=' + f(o.D, 0) + ' sqrt=' + f(o.sq, 3) + ' s=' + f(o.s, 5) + ' r=' + f(100 * o.r, 2) + '%');
P('114 npv15', -8000 + 9600 / 1.15);
P('114 npv25', -8000 + 9600 / 1.25);
show('115 base', irr2(-12000, 7000, 7000));
P('115 npv8', -12000 + 7000 / 1.08 + 7000 / Math.pow(1.08, 2));
P('115 npv12', -12000 + 7000 / 1.12 + 7000 / Math.pow(1.12, 2));
show('115 D a2=8000', irr2(-12000, 7000, 8000));
show('115 E double', irr2(-12000, 14000, 14000));
show('116 base', irr2(-20000, 9000, 15000));
P('116 npv10', -20000 + 9000 / 1.1 + 15000 / 1.21);
P('116 npv14', -20000 + 9000 / 1.14 + 15000 / Math.pow(1.14, 2));
show('116 D a1=18000', irr2(-20000, 18000, 15000));
P('117 npvX11', -15000 + 17250 / 1.11);
P('117 npvY11', -22000 + 24750 / 1.11);
P('117 E rY', 25000 / 22000 - 1, 6);
P('118 npv8', -45000 - 3000 / 1.08 + 28000 / Math.pow(1.08, 2) + 35000 / Math.pow(1.08, 3));
P('118 npv12', -45000 - 3000 / 1.12 + 28000 / Math.pow(1.12, 2) + 35000 / Math.pow(1.12, 3));
P('118 npv15', -45000 - 3000 / 1.15 + 28000 / Math.pow(1.15, 2) + 35000 / Math.pow(1.15, 3));
P('118 npv10', -45000 - 3000 / 1.1 + 28000 / Math.pow(1.1, 2) + 35000 / Math.pow(1.1, 3));
P('118 npv11', -45000 - 3000 / 1.11 + 28000 / Math.pow(1.11, 2) + 35000 / Math.pow(1.11, 3));
show('119 base', irr2(-34000, 16000, 24000));
P('119 npv9', -34000 + 16000 / 1.09 + 24000 / Math.pow(1.09, 2));
P('119 npv13', -34000 + 16000 / 1.13 + 24000 / Math.pow(1.13, 2));
show('119 D a2=20000', irr2(-34000, 16000, 20000));
show('119 E a0=-30000', irr2(-30000, 16000, 24000));
P('120 npv15', -40000 + 22000 / 1.15 + 27600 / Math.pow(1.15, 2));
P('120 npv10', -40000 + 22000 / 1.1 + 27600 / 1.21);
P('120 npv20', -40000 + 22000 / 1.2 + 27600 / 1.44);
show('121 base', irr2(-65000, 34000, 42000));
P('121 npv9', -65000 + 34000 / 1.09 + 42000 / Math.pow(1.09, 2));
P('121 npv12', -65000 + 34000 / 1.12 + 42000 / Math.pow(1.12, 2));
show('121 D double', irr2(-65000, 68000, 84000));
show('121 E a0=-60000', irr2(-60000, 34000, 42000));
show('122 opt2', irr2(-50000, 6000, 6000));
console.log('122 other root s=' + f((-6000 - Math.sqrt(6000 * 6000 + 4 * 6000 * 50000)) / (2 * 6000), 4));
show('123 A', irr2(-120000, 54000, 88000));
P('123 npvA13', -120000 + 54000 / 1.13 + 88000 / Math.pow(1.13, 2));
P('123 npvB13', -70000 + 81200 / 1.13);
show('123 E a1=44000', irr2(-120000, 44000, 88000));
