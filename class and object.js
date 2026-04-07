// const student = {
//     name: "Shruti Singh", 
//     marks: 90, 
//     printMarks: function (){
//         console.log("marks = ", this.marks);
//     },
// };


// // prototype (is a property of function which is used to add properties and methods to a function.)
// const employee= {
//     calcTax() {
//         console.log("tax rate is 10%");
//     },
// };

// const emp1 = {
//     salary: 50000,
//     calcTax() {
//         console.log("tax rate is 20%"); // overriding the calcTax method of employee object.
//     },
// };

// const emp2 = {
//     salary: 50000,
// };

// const emp3 = {
//     salary: 50000,
// };

// const emp4 = {
//     salary: 50000,
// };

// const emp5 = {
//     salary: 50000,
// };


// emp1.__proto__= employee; // emp1 is inheriting the properties and methods of employee object.
// emp2.__proto__= employee; // emp2 is inheriting the properties and methods of employee object.
// emp3.__proto__= employee; // emp3 is inheriting the properties and methods of employee object.
// emp4.__proto__= employee; // emp4 is inheriting the properties and methods of employee object.
// emp5.__proto__= employee; // emp5 is inheriting the properties and methods of employee object.

// class
// class car {
//     constructor(brand, milage){
//         console.log("creating new object");
//         this.brandName = brand;
//         this.milage = milage;
//     }   
//     start(){
//         console.log("starting the car");
//     }

//     stop(){
//         console.log("stopping the car");
//     }

//     setBrand(brand){
//         this.brandName = brand;
//     }
// }

// let fortuner = new car(); // creating an object of the car class.
// fortuner.setBrand("Toyota");
// console.log(fortuner);

// let swift = new car("Maruti", 20); // creating an object of the car class and passing the brand name and mileage as arguments to the constructor.
// console.log(swift);

// Inheritance
// class Parent{
//     hello(){
//         console.log("hello");
//     }
// }

// class Child extends Parent{}
// let obj = new Child();

// // super keyword
// class Persone{
//     constructor(name){
//         this.species = "Homo sapiens";
//         this.name = name;
//     }
//     eat(){
//         console.log("eating");
//     }
// }

// class Engineer extends Persone{
//     constructor(name, branch){
//         super(name); //to invoke parent class constructor
//         this.branch = branch;
//     }
//     work(){
//         super.eat();
//         console.log("solve problems, build something")
//     }
// }


// let engObj = new Engineer("Shruti", "chemical engineer");