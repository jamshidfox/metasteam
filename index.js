/** @format */
// import { dark, white } from "./constants/theme";
const toggle = document.getElementById("toggleDark");
const body = document.querySelector("body");

toggle.addEventListener("click", () => {
  if (toggle.innerHTML == "dark") {
    body.style.backgroundColor = "black";
    body.style.transition = "0.7s";
    toggle.innerHTML = "light";
  } else {
    body.style.backgroundColor = "white";
    body.style.transition = "0.7s";
    toggle.innerHTML = "dark";
  }
});
