// // synchronous programing 

// console.log("Krushna mahalle");
// console.log("Sarthk tayde");
// console.log("vishal Mahalle"); 
// console.log("shreya rokade");
// console.log("Aishwarya Wagh");
// console.log("Kashish");

// // Asynchronous programing 

// console.log("Krushna mahalle");
// console.log("Sarthk tayde");

// setTimeout(()=>{
//     console.log("vishal Mahalle"); 
// },6000);

// console.log("shreya rokade");
// console.log("Aishwarya Wagh");
// console.log("Kashish");

// // Callbacks

// function sum(a,b){
//     console.log(a+b);
// }

// function calculator(a,b,callbacks){
//     callbacks(a,b);
// }

// calculator(2,3,sum);

// // second option
// calculator(2,4,(a,b)=>{
//    console.log(a+b);
// });


// const firseCall = ()=>{
//     console.log("Namaste");
// };

// setTimeout(firseCall, 4000);


// // Callback Hell

// function getData(dataId,getNextdata){
//    setTimeout(()=>{
//     console.log(dataId);
//     if(getNextdata){
//         getNextdata();
//     }
//    },5000)
// }

// //   getData(1,getData(2,getData(3,getData(4))))   //this is wrong use function

// getData( 1 , ()=>{
//     getData(2,()=>{
//         getData(3,()=>{
//             getData(4,()=>{               // this is Callback Hell OR Nested callback
//                 getData(5)
//             });
//         });
//     });
// });

// Promises "Normally we are not create the promises another person or system create the promises
//  we are only handel the promises "

// let promise = new Promise((resolve,reject)=>{
//     console.log("I am Promise");
//     resolve("sucess");
// });


// function getData(dataId,getNextdata){
//     return promise = new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//         console.log(dataId);
//         resolve("succes");
//         if(getNextdata){
//             getNextdata();
//         }
//     },5000)

//     })
   
// }
// let getValue = getData(4384);
// console.log(getValue);

// Promises handling Or Use

// const getPromis=()=>{
//     return new Promise((resolve,reject)=>{
//         //console.log("I am Promise") 
//         // resolve("sucess");
//         reject("Network error")
//     });
// };

// let promise = getPromis();
// promise.then((res)=>{
//     console.log("Promise fullfiled " , res);
// });

// promise.catch((rej)=>{
//     console.log("Promise Rejected ", rej);
// })


// Promises Chain 

// function asyncFunction1(){
//    return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//             console.log("Data 1");
//             resolve("success");
//         },4000);
//    });
// };

// function asyncFunction2(){
//    return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//             console.log("Data 2");
//             resolve("success");
//         },4000);
//    });
// };


// let p1 = asyncFunction1();
// console.log("Featching data 1 ....");
// p1.then((res)=>{
//     console.log("Data Status: ",res);
//     console.log("Featching data 2 ....");
//     let p2 = asyncFunction2();
//     p2.then((res)=>{
//         console.log("Data Status: ",res);
//     });

// });

// Same promise chain code in simple way

// function asyncFunction1(){
//    return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//             console.log("Data 1");
//             resolve("success");
//         },4000);
//    });
// };

// function asyncFunction2(){
//    return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//             console.log("Data 2");
//             resolve("success");
//         },4000);
//    });
// };


// asyncFunction1().then((res)=>{
//     asyncFunction2().then((res)=>{})
// })




// // Promises Chain

// function getData(dataId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log(dataId);
//             resolve("success");
//         },5000);
//     });
   
// }

// // Promises Chain call code


// console.log("getting data 1 .... ");

// getData(1)
// .then(() => {
//     console.log("Fetching data 2 ...");                     // This is actual Promise chain code
//     return getData(2);
// })
// .then(() => {
//     console.log("Fetching data 3 ...");
//     return getData(3);
// })
// .then(() => {
//     console.log("Fetching data 4 ...");
//     return getData(4);
// }).then(()=>{});


//  wrong method to wright the promise chain code

// console.log("getting data 1 .... ");
// getData(233).then((res)=>{
//     console.log("Fecthing data 2 ... ");
//     getData(342).then((res)=>{
//         console.log("Feacthing data 3 ... ");               // This is not actual Promise chain code
//         getData(387).then((res)=>{
//             console.log("Featching data 4 ... ");
//             getData(878676).then((res)=>{})
//         });
//     });
// });



// Callback Hell

// getData( 1 , ()=>{
//     getData(2,()=>{
//         getData(3,()=>{
//             getData(4,()=>{               // this is Callback Hell OR Nested callback
//                 getData(5)
//             });
//         });
//     });
// });


// Async and Await

// function api(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Weather data");
//             resolve(200);
//         },4000);
//     });
// };

// async function getWeatherData(){
//     await api();
//     await api();
// }


// function getData(dataId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Data :",dataId);
//             resolve("success");
//         },5000);
//     });
   
// };


// async function getDataId(){
//     console.log("Getting data 1 ....");
//     await getData(1);
//     console.log("Getting data 2 ....");
//     await getData(2);                                  // es function ke liye normaly hame call karna padta hai 
//     console.log("Getting data 3 ....");
//     await getData(3);
//     console.log("Getting data 4 ....");
//     await getData(4);
// };



// (async function(){
//     console.log("Getting data 1 ....");
//     await getData(1);
//     console.log("Getting data 2 ....");
//     await getData(2);                                   //  this is IIFE method to call a function
//     console.log("Getting data 3 ....");                  // IIFE means directly execute the function without calling but 1 time
//     await getData(3);
//     console.log("Getting data 4 ....");
//     await getData(4);
// })();