/** @format */
const toggle = document.getElementById("darkLabel");
const metaText = document.getElementsByClassName("meta-text");
const languageChanger = document.getElementsByClassName("animate");
const body = document.querySelector("body");
console.log(languageChanger);
toggle.addEventListener("click", () => {
  if (toggle.id == "whiteLabel") {
    //Body
    body.style.backgroundColor = dark.backgroundColor;
    body.style.transition = dark.transition;
    toggle.id = "darkLabel";
    //***************

    //Navbar
    metaText[0].style.color = dark.navbar.color;
    languageChanger[0].style.color = dark.navbar.color;
    languageChanger[1].style.color = dark.navbar.color;
    languageChanger[2].style.color = dark.navbar.color;
    //****************
  } else {
    //Body
    body.style.backgroundColor = light.backgroundColor;
    body.style.transition = light.transition;
    toggle.id = "whiteLabel";
    //***************

    //Navbar
    metaText[0].style.color = light.navbar.color;
    languageChanger[0].style.color = light.navbar.color;
    languageChanger[1].style.color = light.navbar.color;
    languageChanger[2].style.color = light.navbar.color;
    //****************
  }
});
