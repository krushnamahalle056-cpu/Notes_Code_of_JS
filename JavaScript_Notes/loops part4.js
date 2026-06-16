 /* let n = prompt("enter your number");
n = parseInt(n);
for (let i = n; i <= n * 10; i = i + n) {
    console.log(i);
} 

// nested for loops

for(let i=10; i<=13;i++){
    console.log(i);
    for(let n=1; n<=3; n++){
        console.log(n);
    }
} */

// while loops
    
// let i=1;
// while(i<=5){
//     console.log(i);
//     i++
// }

// favorate movie game

// const favMovie="avtar";
// let guess=prompt("enter my favorate movie");

// while(guess != favMovie){
//     if(guess=="quite"){
//         console.log("you quite the game ");
//         break;  // break is important otherwise game are nonstop plays
//     }
//     guess=prompt("wrong answer! plese try again");
// }

// if(guess==favMovie){
//     console.log("congrats! You guess the currect movie");
// }

// Loops with arrays

// let fruits=["apple","mango","banana","orang","litch"];
// fruits.push("pineapple");
// for(let i=0; i<fruits.length; i++){
//     console.log(i,fruits[i]);
// }

let arr=[["krushna","kashinath","mahalle","shilpa"],["kashish","nikita","shreya","trupti"]];
for(let i=0;i<arr.length;i++){
   console.log(`names #${i+1}`)
    for(let j=0;j<arr[i].length;j++){
        console.log(arr[i][j]);
    }
}


let marks=[["krushna", 90 ],["shilpa", 99],["rani",99.99]];
for(let i=0;i<marks.length;i++){
    console.log(`info of student #${i+1}`);
    for(let j=0;j<marks[i].length;j++){
        console.log(marks[i][j])
    }
}