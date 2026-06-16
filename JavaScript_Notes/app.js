/*console.log("hello world");
let a = 3;
let b = 6;
//console.log("prise is :",a+b,"Rupees");
console.log(`prise is : ${a+b} Rupees`);

// Conditional statement

console.log("before if statement");
let age1 = "23";
if (age1 <= 18) {
    console.log("you can drive");
}
console.log("After if statement");

let color = "green";
if (color == "red") {
    console.log("stop");
}
if (color == "yellow") {
    console.log("slow drive");
}
if (color == "green") {
    console.log("you go");
}

let age2 = "27";
if (age2 < 19) {
    console.log("permition granded for drive the car");
} else if (age2 < 20) {
    console.log("your age is 30");
} else {
    console.log("you are a man");
}

// Practice Q

let size = 'R';
if (size === 'XL') {
    console.log(`prise is Rs ${250}`);
} else if (size === 'X') {
    console.log(`prise is Rs ${200}`);
} else if (size === 'L') {
    console.log(`prise is RS ${100}`);
} else if (size === 'S') {
    console.log(`prise is Rs ${50}`);
} else {
    console.log("this are the T-Shert prise");
}

// nested if-else

let marks = 91;
if (marks >= 60) {
    console.log("pass");
    if (marks >= 90) {
        console.log("grade O");
    } else {
        console.log("grade A");
    }

} else {
    console.log("Bater luck next time");
}

// Practice Que

let str = 'apple';
if (str[0] === 'a' && str.length > 3) {
    console.log("good string");
} else {
    console.log("it is not a good string");
}*/

// Switch statement

let color = "green";

switch (color) {
    case "red":
        console.log("stop");
        break;
    case "yellow":
        console.log("slow drive");
        break;
    case "green":
        console.log("go");
        break;
    default:
        console.log("light is broken");
}


let day = "5";

switch (day) {
    case "1":
        console.log("monday");
        break;
    case "2":
        console.log("tusday");
        break;
    case "3":
        console.log("wensday");
        break;
    case "4":
        console.log("thesday");
        break;
    case "5":
        console.log("friday");
        break;
    case "6":
        console.log("satrday");
        break;
    case "7":
        console.log("sunday");
        break;
    default:
        console.log("blanck");
}

/*  alert("this is an alert tag");

console.log("this is a simple tag");

console.error("this is an arrer tag"); 

console.warn("this is an warning");   */

//  promt("emter your name");

/*  let firstName = prompt("enter your name");
console.log(firstName); */

/* let firstName = prompt("enter your first name");
let lastName = prompt("enter your lastName");
console.log("Wellcome", firstName, lastName, "!"); */

let firstName = prompt("enter your first name");
let lastName = prompt("enter your lastName");
let msg = "welcome " + firstName + "" + lastName + "!";
alert(msg);