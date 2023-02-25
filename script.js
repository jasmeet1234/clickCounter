const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const text = document.querySelector(".text");
let number = 0;
button1.addEventListener("click", (e) => {
  number++;
  text.textContent = number;
});
button2.addEventListener("click", (e) => {
  number = 0;
  text.textContent = number;
});
