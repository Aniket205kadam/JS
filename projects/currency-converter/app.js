const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@";

const dropdown = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select"); 
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

window.addEventListener("load", () => {
    updateExchangeRate();
});

for (let select of dropdown) {
    for (currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if(select.name === "from" && currCode === "USD") {
            newOption.selected = "selected";
        }
        else if(select.name == "to" && currCode === "INR") {
            newOption.selected = "selected";
        }
        select.appendChild(newOption);
    }
    select.addEventListener("change", (event) => {
        updateFlag(event.target);
    });
}

function updateFlag(element) {
    let currCode = element.value;
    let countryCode = countryList[currCode]; // INR => IN
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    element.parentElement.querySelector('img').src = newSrc;
}

async function updateExchangeRate() {
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if (amtVal === "" || amtVal < 1) {
        amtVal = 1;
        amount.value = "1";
    }
    const URL = `${BASE_URL}${new Date().toISOString().split('T')[0]}/v1/currencies/${fromCurr.value.toLowerCase()}.json`;
    const reponse = await fetch(URL);
    const data = await reponse.json();
    const rate = data[`${fromCurr.value.toLowerCase()}`][`${toCurr.value.toLowerCase()}`]
    const finalAmount = amtVal * rate;
    msg.innerText = `${amtVal}${fromCurr.value} = ${finalAmount.toFixed(2)}${toCurr.value}`;
}

btn.addEventListener("click", (event) => {
    event.preventDefault();
    updateExchangeRate();
})