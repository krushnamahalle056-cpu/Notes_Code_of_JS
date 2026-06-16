// Array

let student = ["krushna", "sarthak", "vishal"];

// Createing array

let names = ["krushna", 39, 93.93];

// Arry method

let cars = ["maroti", "bmw", "toyora"];
console.log(cars);

/*
cars
(3) ['maroti', 'bmw', 'toyora']
cars.push("laxry");
4
cars
(4) ['maroti', 'bmw', 'toyora', 'laxry']
cars.pop();
'laxry'
cars
(3) ['maroti', 'bmw', 'toyora']
cars.unshift("suzuki");
4
cars
(4) ['suzuki', 'maroti', 'bmw', 'toyora']
cars.shift();
'suzuki'
cars
(3) ['maroti', 'bmw', 'toyora']
let folowrs=["nikita","sarthak","shreya"];
undefined
folowrs
(3) ['nikita', 'sarthak', 'shreya']
let blocked=(folowrs.shift());
undefined
blocked
'nikita'
folowrs
(2) ['sarthak', 'shreya']
let month=["january","july","march","ougest"];
undefined
month
(4) ['january', 'july', 'march', 'ougest']
month.shift();
'january'
month.shiftJ()

month
(3) ['july', 'march', 'ougest']
month.shift()
'july'
month
(2) ['march', 'ougest']
month.unshift("june");
3
month
(3) ['june', 'march', 'ougest']
month.unshift("july");
4
month
(4) ['july', 'june', 'march', 'ougest']
month[3].unshift("august");

month
(4) ['july', 'june', 'march', 'ougest']
month.pop()
'ougest'
month
(3) ['july', 'june', 'march']
month.push("augush");
4
month
(4) ['july', 'june', 'march', 'augush']
month.pop();
'augush'
month
(3) ['july', 'june', 'march']
month.push("august");
4
month
(4) ['july', 'june', 'march', 'august']

*/

// favorate movie game

const favMovie="avtar";
let guess=prompt("enter my favorate movie");

while(guess != favMovie){
    if(guess=="quite"){
        console.log("you quite the game ");
        break;  // break is important otherwise game are nonstop plays
    }
    guess=prompt("wrong answer! plese try again");
}

if(guess==favMovie){
    console.log("congrats! You guess the currect movie");
}