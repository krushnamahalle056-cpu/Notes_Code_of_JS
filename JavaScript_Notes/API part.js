const URL = "https://catfact.ninja/fact";
const btn = document.querySelector("#btn");
const getp = document.querySelector("#para");



let getFacts = async ()=>{
    console.log("Getting data......");
    let responce = await fetch(URL);
    console.log(responce);  // JSON format
    let data = await responce.json();
    // console.log(data.fact);
    getp.innerText = data.fact;
};
btn.addEventListener("click",getFacts);

// const URL = "https://catfact.ninja/fact";

// let getFacts = async () => {
//     try {
//         console.log("Getting data......");

//         let response = await fetch(URL);
//         console.log(response);

//         let data = await response.json();
//         console.log(data.fact);
//     } catch (error) {
//         console.log("Error:", error);
//     }
// };

// getFacts();
