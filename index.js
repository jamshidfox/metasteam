/** @format */
const toggle = document.getElementById("toggleDark");
const body = document.querySelector("body");

toggle.addEventListener("click", () => {
  if (toggle.innerHTML == "dark") {
    //Body
    body.style.backgroundColor = dark.backgroundColor;
    body.style.transition = dark.transition;
    toggle.innerHTML = "light";
    //***************
  } else {
    //Body
    body.style.backgroundColor = light.backgroundColor;
    body.style.transition = light.transition;
    toggle.innerHTML = "dark";
    //***************
  }
});
