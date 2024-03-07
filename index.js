//characters
let b = 'extravaganza';
let removechar = b.substring(8,0);
console.log({removechar});
//string
 const food = "The quick fox jumped over the lazy dog";
const addString = food.slice(0,4) + "eat" + food.slice(4);
console.log({addString});
//string
 const story = "The quick brown fox jumps over the lazy dog";
console.log((story.match(/the/g)).length);
console.log((story.match(/brown/g)).length);

const str1= "The pupils  are reading in the libray";
const substr1= 'are';
console.log(str1.includes(substr1));

const str2=" The child was sitting on the table  before it felt";
const substr2  ='sitting';
console.log(str2.includes(substr2));


//uppercase
 let upper = "wonderful";
let uppercase = upper.toUpperCase();
console.log({uppercase});
//lowercase
let lower = "amazing";
let Lowercase = lower.toLowerCase();
console.log({Lowercase});
