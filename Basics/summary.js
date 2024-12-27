// Primitive Datatypes
// Types : string, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;     // Number
const isLoggedIn = true;  //Boolean
let outsideTemp = null;  //null
let userEmail;  //undefined
let bigNumber = 645379576262n; //BigInt
const id = Symbol('123');   //Symbol

console.log(typeof isLoggedIn);
console.log(typeof score);
console.log(typeof outsideTemp);
console.log(typeof bigNumber);
console.log(typeof id);


// Reference Datatypes
// Types : Arrays, Object, Functions

const subject = ["Java", "Python", "HTML", "Javascript"];    //Array
console.log(subject);


let myObj = {
    name : "shree",
    age : 21           //Object
}
console.log(myObj);

const myFunction = function(){
    console.log("hello Javascript");
}
console.log(myFunction);