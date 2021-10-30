const number1 = document.querySelector("#number-one");
const number2 = document.querySelector("#number-two");
const addBtn = document.querySelector("#add");
const subBtn = document.querySelector("#sub");
const multiBtn = document.querySelector("#multi");
const divideBtn = document.querySelector("#divide");

const output = document.querySelector("#result");

addBtn.addEventListener("click", function () {
  output.innerText = Number(number1.value) + Number(number2.value);
});
subBtn.addEventListener("click", function () {
  output.innerText = Number(number1.value) - Number(number2.value);
});
multiBtn.addEventListener("click", function () {
  output.innerText = Number(number1.value) * Number(number2.value);
});
divideBtn.addEventListener("click", function () {
  output.innerText = (Number(number1.value) / Number(number2.value)).toFixed(2);
});
