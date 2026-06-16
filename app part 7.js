
// // 'this' keyword in js

// const student={
//     name:"krushna",
//     age: 18,
//     eng: 98,
//     math: 99,
//     phy: 90,

//     marksAvg(){
//         let avg=(this.eng+this.math+this.phy)/3;
//         console.log(`${this.name} your average marks = ${avg}`);
//     }
// }

// Try & Catch topic 

// console.log("hello");
// console.log("hello");
// console.log("hello");
// try{
//     console.log(a);
// }catch(arr){
//     console.log("this is an arrer of a is not define");
//     console.log(arr);
// }
// console.log("hello2");
// console.log("hello2");
// console.log("hello2");


// // Arrow Function

// function student(a,b){   // Normal function 
//     console.log(a+b);
// };
// student(2,5);

// const add=(a,b)=>{         // arrow function 
//     console.log(a+b);
// }
// add(34,88);

// // setTimeout property

// setTimeout(()=>{
//     console.log("krushna");
// },10000);
   
// // setInterval property

// let id=setInterval((func),2000);
// function func(){
//     console.log("I love you MOM");
// };

// Array Method
// 1. forEach 
// let arr=[1,2,3,4,5];
// arr.forEach((el)=>{
//     console.log(el);
// });

// let student=[
//     {
//         name:"krushna",
//         age:19,
//         marks:99.21
//     },
//     {
//         name:"sarthak",
//         age:18,
//         marks:99.18
//     },
//     {
//         name:"vishal",
//         age:21,
//         marks:100
//     }
// ];

// student.forEach((student)=>{
//     console.log(student.marks)
// });

// // 2. Map = apply changes and stored in new arrays

// let num=[2,3,4,5];

// let double=num.map((num)=>{
//     return num*num;
// });
// console.log(double);

// let student2=[
//     {
//         name:"krushna",
//         age:19,
//         marks:99.21
//     },
//     {
//         name:"sarthak",
//         age:18,
//         marks:99.18
//     },
//     {
//         name:"vishal",
//         age:21,
//         marks:100
//     }
// ];

// let gpa=student.map((el)=>{
//     return el.marks/10;
// });
// console.log(gpa)

//  ***** AMAN SIR *****


// let time=prompt("Hey enter any time");
// if(time>5 && time<12){
//     console.log("Good Morning");
// }
// else if(time>12 && time<18){
//     console.log("Good Afternoon");
    
// }else if(time>18 && time<21){
//     console.log("Good Evening");
// }else{
//     console.log("Good Night");
// }

let studentName=prompt("enter any studentName");

switch(studentName){
    case 'vishal':console.log("vishal your girlfriend name is shreya");
    break;
    case 'sarthk':console.log("Sarthk your girlfriend name is Aishvarya");
    break;
    case 'aishvrya':console.log("Aishwrya your boyfriend name is Sarthk");
    break;
    case 'shreya':console.log("Shreya your boyfriend name is Vishal");
    break;
    case 'kashish':console.log("Kashish your boufriend name is Shri");
    break;
    case 'krushna':console.log("you dont have any girlfriend");
    break;
    default:console.log("your option only is vishal ,shreaya ,aishwarya, kashish,sarthk,krushna. plese enter currect option");
}