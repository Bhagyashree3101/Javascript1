const name = "Javascript";
let repoCount = 20;

// new way to write  string in this form
console.log(`Repo name is ${name} and repo count is ${repoCount}`);

// another way to declare string syntax
const gameName = new String('Marie-version');
console.log(gameName);
console.log(gameName[1]);                   // gives character of that index
console.log(gameName.length);               // gives the length of whole string
console.log(gameName.charAt(3));          // gives the character at index
console.log(gameName.indexOf('r'));      // gives index of the character
console.log(gameName.toUpperCase());     // convert string into upper case

let newString = gameName.substring(0,4);
console.log(newString);


let newString1 = gameName.slice(0,5);
console.log(newString1);

let newString2 = gameName.slice(-12,6);
console.log(newString2);


let newString3 = "  Javascript  ";
console.log(newString3);
console.log(newString3.trim());


const url = "https://google.com/google%20web";
console.log(url);
console.log(url.replace('%20','-'));

console.log(gameName.split('-'));


