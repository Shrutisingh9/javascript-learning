// let marks = [85, 90, 78, 92, 88];
// console.log(marks);

// // Array length
// console.log(marks.length); // Output: 5

// // Accessing elements
// console.log(marks[0]); // Output: 85
// console.log(marks[2]); // Output: 78    

// // Modifying elements
// marks[1] = 95;
// console.log(marks); // Output: [85, 95, 78, 92, 88]

// let heroes = ["Ironman", "Captain America", "Thor", "Hulk", "Black Widow", "Spiderman", "Doctor Strange", "Black Panther", "Captain Marvel", "Ant-Man","Wolverine", "Deadpool", "Flash", "Green Lantern", "Aquaman","groot", "Rocket", "Drax", "Gamora", "Star-Lord"];

// // printing all elements using for loops
// for (let i = 0; i < heroes.length; i++) {
//     console.log(heroes[i]);
// }

// // for of loop
// for (let el of heroes){
//     console.log(el);
// }

// for (let hero of heroes){
//     console.log(hero.toUpperCase());
// }

// // array methods
// let foodItems = ["Pizza", "Burger", "Pasta", "Sushi", "Tacos"];
// // push() add to end
// foodItems.push("Momo", "Macaroni");

// console.log(foodItems);

// // pop() remove from end
// foodItems.pop();
// console.log(foodItems);

// // tosting() convert array to string
// console.log(foodItems.toString())

// // concat() joins multiple arrays and return a new array
// let marvelHeroes = ["Ironman", "Captain America", "Thor", "Spiderman" ];
// let dcHeroes = ["Batman", "Superman", "wonder Woman", "Aquaman"];
// let indianHeroes = ["Shaktiman", "krish", "G.one"]

// let herores = marvelHeroes.concat(dcHeroes, indianHeroes);

// console.log(herores);

// // unshift() add to start
// marvelHeroes.unshift("Hulk", "Doctor Strange");
// console.log(marvelHeroes);

// // shift() remove from start
// marvelHeroes.shift();
// console.log(marvelHeroes);

// // slice(start, end) return a piece of array
// console.log(marvelHeroes.slice(1, 3));

// splice(start, deleteCount, item1, item2, ...) add/remove items to/from array and return the removed items
// let arr = [1, 2, 3, 4, 5, 6, 7];

// arr.splice(2,2, 101, 102)
// console.log(arr); // Output: [1, 2, 101, 102, 5, 6, 7]

// forEach() method executes a provided function once for each array element
// let arr = [1, ,2 ,3, 4, 5];
// arr.forEach(function printval(val){ 
//     console.log(val);
// })

// arrow func
// arr.forEach((val) => {
//     console.log(val);
// });

// let city = ["Delhi", "Mumbai", "Bangalore", "Chennai", "Kolkata"];
// city.forEach((val, index, city) =>{
//     console.log(val.toUpperCase(), index, city);
// })

// map() method creates a new array populated with the results of calling a provided function on every element in the calling array
// let nums = [1, 2, 3, 4, 5];
// let newArr =nums.map((val) =>{
//     return val;
// });

// console.log(newArr);