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
// function getData(dataId, getNextData){
//     setTimeout(()=>{
//         console.log("data", dataId);
//         if(getNextData){
//             getNextData();
//         }
        
//     }, 2000);
// }

// getData(1,()=>{
//     getData(2, () =>{
//         getData(3);
//     })
// });

// promises
// let promise = new Promise((resolve, reject) =>{
//     console.log("i am promise");
//     resolve(1234)
// });

// function getData(dataId, getNextData){
//     return new Promise ((resolve, reject) =>{
//          setTimeout(()=>{
//         // console.log("data", dataId);
//         // resolve("success")
//         // reject("error")
//         if(getNextData){
//             getNextData();
//         }
        
//     }, 5000);
// });
// }
// let result = getData(123)

// .then() and .catch()
// const getPromise = () =>{
//     return new Promise((resolve, reject) =>{
//     console.log("I am promise");
//     // resolve("Sucess")
//     // reject("Error")
// });
// };

// let promise = getPromise();
// promise.then((res)=>{
//     console.log("Promise fulfilled", res)
// });

// promise.catch((err)=>{
//     console.log("Rejected", err)
// });

// promise chain
// function asyncFunc1(){
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             console.log("data 1");
//             resolve("Success");
//         }, 3000);
//     });
// }

// function asyncFunc2(){
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             console.log("data 2");
//             resolve("Success");
//         }, 3000);
//     });
// }

// console.log("fetching data 1....")
// asyncFunc1().then((res) =>{
//     console.log("fetching data 2....")
//     asyncFunc2().then((res) =>{});
// });


function getData(dataId, getNextData){
    return new Promise ((resolve, reject) =>{
         setTimeout(()=>{
        console.log("data", dataId);
        resolve("success")
        // reject("error")
        if(getNextData){
            getNextData();
        }
        
    }, 2000);
});
}

getData(1)
    .then((res) =>{
        return getData(2);
    })
    .then((res) =>{
        return getData(3); 
    })
    .then ((res) =>{
        console.log(res);
    });