let input = document.querySelector("#email");
let btn = document.querySelector("#submit");
const regEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

let iconErrorEl = document.querySelector(".icon-error");
let textErrorEl = document.querySelector(".text-error");
btn.addEventListener("click", function () {
  let email = input.value;
  if (!email || !email.match(regEmail)) {
    iconErrorEl.style.display = "block";
    textErrorEl.innerHTML = "Please provide us your valid email";
    textErrorEl.style.color = "red";
    input.style.border = "2px solid red";
    input.style.borderRight = "none";
  } else {
    iconErrorEl.style.display = "none";
    textErrorEl.innerHTML = "Thanks for subscribing - welcome aboard!";
    textErrorEl.style.color = "green";
     input.style.border = "none";
  }
});
