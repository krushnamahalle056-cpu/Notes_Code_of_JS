
// // element exis with byid 
// let heading=document.getElementById("heading");
// console.log(heading);

// // Element exis with by className
// let headings=document.getElementsByClassName("headings");
// console.dir(headings);
// console.log(headings);

// // Element exis with by tagName
// let tages=document.getElementsByTagName("p")
// console.dir(tages);
// console.log(tages);

// Quiry silector
// let query=document.querySelector("p");  // return first element 
// console.dir(query);

// let selector=document.querySelectorAll("p");   // return node list
// console.log(selector);

// let heading=document.querySelector("h2");
// console.dir(heading.innerText);
// heading.innerText=heading.innerText + " from apana college";

// let div=document.querySelector("div");
// console.dir(div.innerText);
// console.dir(div.innerHTML);
// console.dir(div.textContent);

// let threediv=document.querySelectorAll(".box");
// console.log(threediv);

// // first method for exis and adding text

// threediv[0].innerText="something is new 1";
// threediv[1].innerText="something is new 2";
// threediv[2].innerText="something is new 3";

// // second method for exis and adding text. this is for more no of repeating text

// idx=0;
// for(divs of threediv){
//     console.log(threediv[idx].innerText=`something is new ${idx}`);
//     idx++;
// }

// let para=document.querySelector("p");
// console.log(para);

// // for get value of attribute 

// let attValue=para.getAttribute("class");
// console.log(attValue);

// let nameVal=para.getAttribute("name");
// console.log(nameVal);

// // For add attrebute and value (attrebute = id,class,name)

// let set=para.setAttribute("class","getClass");
// console.log(set);

// let setName=para.setAttribute("name","getName");
// console.log(setName);

// let styleDiv=document.querySelector("div");
// console.log(styleDiv);

// create Element (tag/div/p/button)

// let newBtn=document.createElement("button");
// newBtn.innerText="Click me";
// console.log(newBtn);

// let div=document.querySelector("div");
// div.append(newBtn);

// let oldBtn=document.createElement("button");
// oldBtn.innerText="sign in";
// console.log(oldBtn);

// div.prepend(oldBtn);

// let morBtn=document.createElement("button");
// morBtn.innerText="log in";
// console.log(morBtn);

// div.before(morBtn);

// let oneBtn=document.createElement("button");
// oneBtn.innerText="log out";
// console.log(oneBtn);

// div.after(oneBtn);

// let para=document.querySelector("p");

// para.after(oneBtn);

// let newHadding=document.createElement("h1");
// newHadding.innerHTML="<i>Hello My Dear Student</i>";

// let bodyExis=document.querySelector("body");
// bodyExis.prepend(newHadding);

// for removing any element
// para.remove();

// Que:-

// let addBtn=document.createElement("button");
// addBtn.innerText="Click me";
// addBtn.style.color="white";
// addBtn.style.backgroundColor="red";

// let body=document.querySelector("body");
// body.prepend(addBtn);

// // classList.add("") is a new property for adding sevaral class in one tag
// let para=document.querySelector("p");
// para.classList.add("newClass");

// Event in js

let para=document.querySelector("p");
let par=document.createElement("p");
par.innerText="hello my name is krushna kashinath mahalle ";
para.append(par);
para.style.backgroundColor="pink";
par.onclick=()=>{
    console.log("text click");
}


