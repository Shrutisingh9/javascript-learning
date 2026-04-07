// Get user to input a number using prompt("Enter a number:"). Check if the number is multiple of 5 or not.

// let num = prompt("Enter a number:");
// if (num % 5 === 0){
//     console.log(num , "is a multiple of 5.");
// } else {
//     console.log(num , "is not a multiple of 5.");

// }

// Write a code which can give grades to students according to their scores: 90-100, A  70-89, B  60-69, C  50-59, D  0-49, F

// let score = prompt("Enter your score:");
// if (score >= 90 && score <=100){
//     console.log("Your grade is A.");    
// } else if (score >= 70 && score <=89){
//     console.log("Your grade is B.");
// } else if (score >= 60 && score <=69){
//     console.log("Your grade is C.");
// } else if (score >= 50 && score <=59){
//     console.log("Your grade is D.");
// } else if (score >= 0 && score <=49){
//     console.log("Your grade is F.");
// } else {
//     console.log("Invalid score. Please enter a score between 0 and 100.");
// }

// loops

// print all even numbers from 0 to 100
// for (i = 0; i<=100; i++){
//     if (i % 2 ===0){
//         console.log(i);

//     }
   
// }


// create a game where you start with any random game numbers ask the user to keep guessing the game number until the user enters correct value.
// let gameNum = 25;
// let userNum = prompt("Guess the game number:");
// while (userNum != gameNum){
//     userNum = prompt("You entered wrong number.Guess the game number:");
// }
// console.log("Congratulations! You guessed the correct number.");

// Strings
// Promt th user to enter their full name. Generate a username for them based on the input. Start username with @, followed bt their full nume and ending with the fullname length. For example, if the user enters "Shruti Singh", the generated username should be "@ShrutiSingh12".

// let fullName= prompt("enter your Full Name with out any spaces: ");
// let username = "@" + fullName + fullName.length;
// console.log("Your generated username is: " + username);

// Arrays
// For a given array with marks of students ->[85, 97, 44, 37, 76, 60] Find the average marks of the entire class.

// let marks = [85, 97, 44, 37, 76, 60];

// let sum = 0;

// for (let mark of marks){
//     sum += mark;
// }
// console.log(sum);

// let avg = sum / marks.length;
// console. log(`The average marks of the class is: ${avg}.`);

// For a given array with prices of 5 items -> [250, 645, 300, 900, 50] all items have an offer of 10% OFF on them.Change the array to store final price after applying offer.

// let prices = [250, 645, 300, 900, 50];

// method 1 using for loop
// for (let i = 0; i < prices.length; i++) {
//     let ofer = prices[i] / 10; // Calculate 10% of the price
//     prices[i] -= ofer; // Update the price after applying the offer
// }

// console.log("Final prices after applying 10% discount:");
// console.log(prices);

// // method 2 using for of loop
// let i  =0 ;
// for (let val of prices){
//     console.log(`Value at index ${i}: ${val}`);
//     let offer = val/10; 
//     prices[i] = prices[i] - offer;
//     console.log(`value after offer = ${prices[i]}`);
//     i++;
// }

// Create an array to store companies -> "Bloomberg", "Microsoft", "Uber","Google", "IBM", "Netflix"
// a. Remove the first company from the array
// b. Remove Uber & Add Ola in its place
// c. Add "Amazon" at the end

// let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// console.log(companies);
// // a. Remove the first company from the array
// companies.shift();
// // b. Remove Uber & Add Ola in its place
// companies.splice(2, 1, "Ola");
// // c. Add "Amazon" at the end
// companies.push("Amazon");

// console.log(companies);


// Functions
// Create a fucntion using the "function" keyword that takes a string as an argument and returns the number of vowels in the string.

// function countVowels(str){
//     let count = 0;
//     let vowels = "AEIOUaeiou";
//     for (const char of str){
//         if (vowels.includes(char)){
//             count++;
//         }
//     }
//     console.log(count);
// }

// countVowels("Shruti Singh");

// // using arrow fucntion 
// const countVow = (str) =>{
//     let count = 0;
//     let vowels = "AEIOUaeiou";
//     for (const char of str){
//         if (vowels.includes(char)){
//             count++;
//         }
//     }
//     console.log(count);
// }

// countVow("Shruti Singh");

// For a given array of numbers, print the square of each value using the forEach loop.

// let num = [23, 34, 56, 67, 79, 36];
// num.forEach ((num) =>{
//     console.log(num * num);
// });

// We are given array of marks of student.Filter out the marks of students that scored 90+.
// let marks = [85, 97, 44, 37, 76, 60, 92, 88, 95, 91];
// let highMarks = marks.filter( (marks) =>{
//     return marks > 90;
// })
// console.log(highMarks);

// Ṭake a number n as input from user.Create an array of numbers from 1 to n. Use the reduce to calculate sum of all numbers in the array. use the reduce method to calculate product of all numbers in the array.

// let n = prompt("Enter a number: ");
// let arr = [];

// for (let i = 1; i <= n; i++) {
//     arr[i-1] = i ;
// }

// console.log(arr);

// // calculate sum  using reduce

// let sum = arr.reduce((acc, cur) =>{
//     return acc + cur
// });

// console.log("sum = ",sum);

// // calculate product using reduce
// let product = arr.reduce ((acc, cur) =>{
//     return acc*cur
// });

// console.log("product = ",product);

// DOM
// Create a H2 heading element with text - "Hello JavaScript". Append "from Apna College Students" to this text using JS.

// let h2 = document.querySelector("h2");
// console.dir(h2);
// h2.innerText= h2.innerText + " from Apna College"
// console.log(h2.innerText);

// Create 3 divswith common class name - "box". Access them & add some unique test to each of them.

// let divs = document.querySelectorAll(".box");
// console.log(divs);
// let idx = 1;
// for (div of divs){
//     div.innerText = `new unique values ${idx}`;
//     idx++;
// }

//  divs[0].innerText = "This is the first box.";
//  divs[1].innerText = "This is the second box.";
//  divs[2].innerText = "This is the third box.";

// Create a new Button element. Give it a text "Click Me", background color of red and text color of white.  Insert the button as the first element inside the body tag.

// let newBtn = document.createElement("button");
// newBtn.innerText = "Click Me";
// newBtn.style.backgroundColor = " red";
// newBtn.style.color = "White";

// console.log(newBtn);

// document.querySelector("body").prepend(newBtn);

// Create a <p> tag in html, give it a class and some styling. Now create a new class in css and try to append this class to the <p> element. use ClassList property to solve this problem.

// let para = document.querySelector("p");
// console.log(para);
// para.classList.add("newClass");

// events
// create a toggle button that changes the screen to darkmode whwn clicked and lisght mode when clicked again.

// let toggleBtn = document.querySelector("#toggleBtn");
// let curMode = "light";

// toggleBtn.addEventListener("click", () =>{
//     console.log("you are tryingto change mode");
//     if(curMode === "light"){
//         curMode = "dark";
//         document.body.style.backgroundColor = "black";
//     } else {
//         curMode = "light";
//         document.body.style.backgroundColor = "white";
//     }
//     console.log("current mode is: ", curMode);
// });

// classes and objects
// You are creating a website for your college., Create a class User with 2 properties, name and email. it also has a method class viewData() that allows user to view website data.
// let DATA = "Secret information about the website. Only authorized users can view this data.";
// class User{
//     constructor(name, email){
//         this.name = name;
//         this.email = email;
//     }
//     viewData(){
//         console.log("data = ", DATA);
//     }
// }

// let student1 = new User("Shruti Singh", "shruti@email.com"); 
// let student2 = new User("John Doe", "john@email.com"); 

// let teacher1 = new User("Dean", "dean@email.com");

// Create a new class called Admin which inherits from User, Add a new method called editData to Admin that allows it to edit website data.

// class Admin extends User{
//     constructor(name, email){
//         super(name, email); 
//     }
//     editData(){
//         DATA ="new data edited by admin.";
//     }
// }

// let admin1 = new Admin("admin", "admin@college.com");