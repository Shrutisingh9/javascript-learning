// if statement
let age = 16;

if (age >= 18) {
    console.log("You can vote.");
}

if (age < 18) {
    console.log("You cannot vote.");
}


let mode = "dark";
let color;

if (mode === "dark") {
    color = "black";
}

if (mode === "light"){
    color = "white";
}

console.log(color);

// if-else statement
if (age >= 18) {
    console.log("You can vote.");
} else {
    console.log("You cannot vote.");
}

if (mode === "dark") {
    color = "black";
} else {
    color = "white";
}
console.log(color);

// odd or even
let num = 20;
if (num % 2 === 0 ){
    console.log(num, "is even.");
} else {
    console.log(num, "is odd.");

}

// else if statement

if (mode === "dark"){
    color = "black";    
}else if (mode === "teal"){
    color = "teal"; 
}else {
    color = "white";
}
console.log(color);