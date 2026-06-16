// Practice Question 

// Q.1  create a nested array to show the following  tic-fac-toi game 

// let game = [
//     ["X", null, "O"],
//     [null, "X", null],
//     ["O", null, "X"]
// ];
// console.log(game);

// let family=[["sagar","raksha"],["rajesh","shivani"],["sakshi","lavu"],["rani","shilpa","krushna"]];
// console.log(family);

// Q for inter first three digit

// for(let a=2; a<=20; a=a+2){
//     console.log(a);
// }


// Q enter last three digit

// let arr=[7,9,0,-2];
// let n=3;
// let ans=console.log(arr.slice(1));

// Q chack the string is blank or not

// let str=prompt("enter the string ");
// if(str.length==0){
//     console.log("string is blank");
// }
// else{
//     console.log("string is not blank");
// }

// Q for chack the caector is in uppercase

// let char=prompt("inter the charector in uppercase");
// if(char==char.toUpperCase()){
//     console.log("charector is in uppercase");
// }else{
//     console.log("char is not in uppercase")
// }

// Q chack index in lovercase

// let str="KaShInTh";
// let idx=0;
// if(str[idx]==str[idx].toLowerCase()){
//     console.log("charector is in lowercase");
// }else{
//     console.log("charector is not in lowercase");
// }

// Q write a string with space and without space

// let str=prompt("enter the string ");
// console.log(`orignal string ${str}`);
// console.log(`string without space ${str.trim()}`);


// Q chack the element exist in array or not 

let arr=["krushns",23,234,"a",22,334,444,];
let item=22;
if(arr.indexOf(item)!=-1){
    console.log("element exist in array");
}
else{
    console.log("element not exist in array");
}