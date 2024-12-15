const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const button = document.querySelector("#get-fact");

const getFacts = async () => {
    console.log("getting data>>>>")
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json(); // JSON format
    // console.log(data[0]);
    factPara.innerText = data[2].text;
}

button.addEventListener("click", ()=> {
    getFacts();
});

// async function add(a, b) {
//     setTimeout(() => {
//         console.log(a+b);
//     }, 3000);
// } // async function are return the promise
