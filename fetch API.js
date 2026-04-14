const URL = "https://catfact.ninja/fact";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");


// async await
const getFacts = async () => {
  console.log("getting data...");
  let response = await fetch(URL);   // ✅ correct name
  console.log(response);
  let data = await response.json();
  factPara.innerText = data.fact;
};


// promise chainning
// function getFacts(){
//     fetch(URL)
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//         factPara.innerText = data.fact;
//     });
// }

btn.addEventListener("click", getFacts)