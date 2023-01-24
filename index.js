/** @format */
const toggle = document.getElementById("whiteLabel");
const body = document.querySelector("body");

toggle.addEventListener("click", () => {
  if (toggle.id == "whiteLabel") {
    //Body
    body.style.backgroundColor = dark.backgroundColor;
    body.style.transition = dark.transition;
    toggle.id = "darkLabel";
    //***************
  } else {
    //Body
    body.style.backgroundColor = light.backgroundColor;
    body.style.transition = light.transition;
    toggle.id = "whiteLabel";
    //***************
  }
});
