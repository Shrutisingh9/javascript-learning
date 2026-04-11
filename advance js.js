// synchronous 
// console.log("one")
// console.log("two")
// console.log("three")

// asynchronous
// console.log("namste")
// setTimeout(() =>{
//     console.log("hello");
// }, 2000)
// console.log("sasriyakal")

// callback
// synchronus
// method 1
// function sum(a, b){
//     console.log(a+b);
// }

// function calculator(a, b, sumCallback){
//     sumCallback (a, b)
// }
// calculator(1, 2, sum);
// // method 2
// calculator(1, 2, (a, b) => {
//     console.log(a+b); 
// })

// asynchronous
// const hello =()=>{
//     console.log("hello")
// }
// setTimeout(hello, 4000);

// callback hell
function getData(dataId, getNextData){
    setTimeout(()=>{
        console.log("data", dataId);
        if(getNextData){
            getNextData();
        }
        
    }, 2000);
}

getData(1,()=>{
    getData(2, () =>{
        getData(3);
    })
});

// promises