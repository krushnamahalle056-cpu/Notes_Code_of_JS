// function NewInfo(){
//     console.log("hello");
// }
// NewInfo();

// function familyInfo(){
//     console.log("krushna kashinath mahalle ");
//     console.log("shilpa kashinath mahalle ");
//     console.log("rani kashinath mahalle ");
// }
// familyInfo();

// function table(n){
//     for(let i=n;i<=10*n;i=i+n){
//         console.log(i)
//     }
// }
// table(3);

// function adult(){
//     let age=18;
//     if(age>18){
//         console.log("Not adult");
//     }else{
//         console.log("adult");
//     }
// }
// adult();

// function rollDice1to6(){
//     let dice=Math.floor(Math.random()*6)+1;
//     console.log(dice);
// }
// rollDice1to6();
// rollDice1to6();
// rollDice1to6();
// rollDice1to6();
// rollDice1to6();
// rollDice1to6();


// function with argument

// function arg(name){
//     console.log(name);
// }
// arg("krushna");

// function manInfo(name,age){
//     console.log(`${name}'s age is ${age}`);
// }
// manInfo("krushna",18);

// function sum(a,b){
//     console.log(a+b);
// }
// sum(1,9);
// sum(57,92);
// sum(11,91);
// sum(12,39);
// sum(12,9);

// Q. For find out the average

// function avg(a,b,c){
//     console.log(a+b+c/3);
// }
// avg(3,7,9);
// avg(6,70,92);
// avg(3,17,9);
// avg(36,17,9);

// function Food (){
//     console.log("banana","apple");
// }
// Food();

// function marry(nikita,sakshi){
//     console.log(nikita,sakshi);
// }
// marry("krushna","vishal");

// Return in function 

// function sum(a,b){
//     return a+b;
// }
// console.log(sum(5,3));

// function sub(a,b){
//     return a-b;
// }
// console.log(sub(7,2));

// function sum(a,b){
//     return a+b;
// }
// console.log(sum(sum(2,5),10));

// Q.creates a function that returns the sum of numbers from 1 to n

// function getSum(n){
//     let sum=0;
//     for(let i=1; i<=n; i++){
//         sum +=i;
//     }
//     return sum;
// }
// console.log(getSum(6));

// Q Create a function that returns the concatenation of all string in array

// let str=["krushna","kashinath","mahalle"];
// function concat(str){
//     let result="";
//     for(let i=0;i<str.length;i++){
//         result +=str[i];
//     }
//     return result;
// }
// console.log(concat(str));


// Function scope

// function calSum(a,b){
//     let sum=a+b;
//     console.log(sum);  // that variable accesses only inside the Function i.e Function scope
// }
// calSum(4,7);

// // Bolck scope

// {
//     let a=34;
//     console.log(a); // that variable accesses only inside the biock  i.e  Block scope
// }

// Lexical Scope 

// function outerFunc(){
//     let x=3;
//     let y=6;
//     function inerFunc(){
//         console.log(x);
//         console.log(y);
//     }
//     inerFunc();
    
// }


// Question 

// let greet="hello";   // Global scope
// function fan(){
//     let greet="namste";    // function scope
//     console.log(greet);
//     function inerFan(){
//         console.log(greet);   //  Lexical scope
//     }
//     inerFan();
// }
// console.log(greet);
// fan();


