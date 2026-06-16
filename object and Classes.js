
// // Constructor topic

// class fortuner{
//     constructor(brand , average){
//         console.log("creating an object ");
//         this.brand = brand;
//         this.average = average;
//     }

//     start(){
//         console.log("start");
//     }

//     stop(){
//         console.log("Stop");
//     }
// }

// let splender = new fortuner("splender", 70);
// console.log(splender);

// let lenux = new fortuner("lenux", 12);
// console.log(lenux);


// // Inheritance topic 

// class parent{
//     hello(){
//         console.log("Namste");
//     }

// }

// class child extends parent{
//     name(){
//         console.log("Child Name is Krushna");
//     }
// }

// let p = new parent();
// console.log(p);
// p.hello();

// let c = new child();
// console.log(c);
// c.hello();
// c.name();


// // super Keyword 

// class Person {
//     constructor(name) {
//         this.species = "Homo Sapiens";
//         this.name = name;
//     }

//     shower() {
//         console.log("I give a shower");
//     }

//     eat() {
//         console.log("I eat food");
//     }

//     sleep() {
//         console.log("I am sleeping now");
//     }
// }

// class Engineer extends Person {
//     constructor(branch) {
//         super("Krushna");
//         this.branch = branch;
//     }

//     work() {
//         super.eat();
//         console.log("Problem solving");
//     }
// }

// let EngObj = new Engineer("Electronics and Telecommunication");

// // Properties ko print karo
// console.log("Name:", EngObj.name);
// console.log("Species:", EngObj.species);
// console.log("Branch:", EngObj.branch);

// // Methods call karo
// EngObj.shower();
// EngObj.eat();
// EngObj.sleep();
// EngObj.work();



// Q. you are creating a website for your college. Create a class with User with 2 properties,name and email. 
//    It valso has a method called ViewData() that allows user to view website data
// let Data="view website data";
// class User{
//     constructor(name,email){
//         this.name=name;
//         this.email=email;
//     }
    
//     ViewData(){
//         console.log(Data);
//     }
// }

// // For view and enter the data

// let student1= new User("krushna","krushnamahalle098@gmail.com");
// console.log("student1 name: ",student1.name);
// console.log("student1 email: ",student1.email);
// student1.ViewData();

// let student2= new User("Sarthak", "sarthaktayde08@gamil.com");
// console.log("student2 name: ",student2.name);
// console.log("student2 email: ",student2.email);
// student2.ViewData();

// let teacher = new User("Advika Giakwad", "advikagawande98@gmail.com");
// console.log("teacher name: ",teacher.name);
// console.log("teacher email: ",teacher.email);
// teacher.ViewData();


// // Q. Create a new class called Admine which inherits from User. 
// //   Add a new method called editData to Admit that allows to edit websit data

// class Admine extends User{
//     constructor(name,email){
//         super(name,email);

//     }
//     editData(){
//         console.log("edit whebsite data");
//     }
// }

// let Admin1= new Admine("Vishal", "vishalmahalle33@gmail.com");
// console.log("Admne Name : ", Admin1.name);
// console.log("Admine Emil : ", Admin1.email);
// Admin1.editData();


