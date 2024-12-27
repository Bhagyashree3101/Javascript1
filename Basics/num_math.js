const score = 400;
console.log(score); //Normal Number Declaration

const balance = new Number(100);
console.log(balance);

console.log(balance.toString());

console.log(balance.toString().length);

console.log(balance.toFixed(2));

let Hundreds = 1000000;
console.log(Hundreds.toLocaleString());
console.log(Hundreds.toLocaleString('en-IN'));


// +++++++++++++++++++ Maths +++++++++++++++++++++++++

console.log(Math.abs(-19));

console.log(Math.round(5.4));

console.log(Math.min(4,6,3,8,2));
console.log(Math.max(9,7,4,1,3));

console.log(Math.random());

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max - min + 1)) + min);

