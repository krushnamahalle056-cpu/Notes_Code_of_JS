// const employ={
//     name:"krushna mahalle",
//     salary:50000,
//     calTax(){
//         console.log("your tax is 10%");
//     },
// };

// const ramarav={
//     salary:400000,
// };

// ramarav.__proto__ = employ;


// class toyotacar{
//     star(){
//         console.log("start");
//     }
//     stop(){
//         console.log("stop");
//     }
//     setBrand(brand){
//         this.brandName=brand;
//     }
// };

// let fortunar=new toyotacar;
// fortunar.setBrand("fortunar");
// let lexuc=new toyotacar;
// lexuc.setBrand("lexuc");

const students={
    studentName(){
        console.log("ajay gupta");
    },
    totalMarks:100,
    age:18,
};

const mayur={
    fatherName:"dont know",
    marks:75,
};

mayur.__proto__ = students;

class marvel{
    animation(){
        console.log("animation is most important in marvel movies");
    }
    acters(movie){
        console.log("stak","caption","thor","hulk");
        this.movie=movie;
    }

};

let ironMan= new marvel;
ironMan.acters("caption america");



class cars{
    ruls(){
        console.log("speed= Modret");
        console.log("follow all ruls");
    }
};


let vehical=new cars;

class acounts{
    primary(){
        console.log("these are the first account in the would");
    }
    secondary(){
        console.log("this is the second account");
    }
}

let person=new acounts;

let argument= "kashish";
if(argument="kashish"){
    console.log("mrunali dharmik");
}else{
    console.log("nikita dharmik");
}