// create a string
// let str = "Shruti"; 
// console.log(str);

// // string length
// console.log(str.length)

// // String indices
// console.log(str[0]); 

// Template Literals
let sentence = `This is a template literal`;
console.log(typeof sentence);

let obj ={
    item : "pen", 
    price : 10
};

console.log("the cost of", obj.item , "is" , obj.price, "rupees.");

console.log(`the cost of ${obj.item} is ${obj.price} rupees.`);

// expression in template literals
let a = 10;
let b = 20;
console.log(`the sum of ${a} and ${b} is ${a+b}.`);

// Escape characters
console.log("Shruti\nSingh"); //next line

console.log("Shruti \t Singh"); //tab space