const plus = document.querySelector("#plus");
const counter = document.querySelector("#counter");
plus.addEventListener("click", (e) => {
const counterValue = counter.textContent 
const counterInt = parseInt(counterValue, 10) + 1;
counter.textContent = counterInt;
})