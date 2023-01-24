/** @format */
const toggle = document.getElementById("darkLabel");
const metaText = document.getElementsByClassName("meta-text");
const languageChanger = document.getElementsByClassName("animate");
const leftContainer = document.getElementsByClassName("left-container");
const H5 = document.getElementById("h5");
const telegramIcon = document.getElementById("telegram-icon");
const instagramIcon = document.getElementById("instagram-icon");
const facebookIcon = document.getElementById("facebook-icon");
const body = document.querySelector("body");

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

    //Section
    leftContainer[0].style.color = dark.section.color;
    H5.style.color = dark.section.h5color;
    telegramIcon.style.color = dark.section.iconColors;
    instagramIcon.style.color = dark.section.iconColors;
    facebookIcon.style.color = dark.section.iconColors;
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

    //Section
    leftContainer[0].style.color = light.section.color;
    H5.style.color = light.section.h5color;
    telegramIcon.style.color = light.section.iconColors;
    instagramIcon.style.color = light.section.iconColors;
    facebookIcon.style.color = light.section.iconColors;
    //****************
  }
});
