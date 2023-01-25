/** @format */
const toggle = document.getElementById("darkLabel");
const card = document.getElementsByClassName("card")[0];
const cardThemeTexts = document.querySelectorAll(".theme-text");
const loginSteamInput = document.getElementsByClassName("login-steam");
const body = document.querySelector("body");

//functionality
const firstCard = document.getElementsByClassName("card-section-1")[0];
const secondCard = document.getElementsByClassName("card-section-2")[0];
const thirdCard = document.getElementsByClassName("card-section-3")[0];
const fourthCard = document.getElementsByClassName("card-section-4")[0];
const confirmationButton = document.getElementsByClassName("card-button");
const topUp = document.getElementById("top-up");

console.log(cardThemeTexts);
toggle.addEventListener("click", () => {
  if (toggle.id == "whiteLabel") {
    //Body
    body.style.backgroundColor = dark.backgroundColor;
    body.style.transition = dark.transition;
    toggle.id = "darkLabel";
    //***************

    //Section
    card.style.background = dark.section.card.backgroundColor;
    for (let input of loginSteamInput) {
      input.style.background = dark.section.card.input;
    }
    for (let text of cardThemeTexts) {
      text.style.color = dark.section.color;
    }
    //****************
  } else {
    //Body
    body.style.backgroundColor = light.backgroundColor;
    body.style.transition = light.transition;
    toggle.id = "whiteLabel";
    //***************

    //Section

    card.style.background = light.section.card.backgroundColor;
    for (let input of loginSteamInput) {
      input.style.background = light.section.card.input;
    }
    for (let text of cardThemeTexts) {
      text.style.color = light.section.color;
    }
    //****************
  }
});

//Functionality
topUp.addEventListener("click", () => {
  firstCard.style.opacity = 0;
  firstCard.style.display = "none";
  secondCard.style.display = "flex";
  secondCard.style.opacity = 1;
  setTimeout(() => {
    secondCard.style.opacity = 0;
    secondCard.style.display = "none";
    thirdCard.style.display = "flex";
    thirdCard.style.opacity = 1;
  }, 3000);
});
confirmationButton[0].addEventListener("click", () => {
  thirdCard.style.display = "none";

  setTimeout(() => {
    fourthCard.style.display = "flex";
  }, 1000);
});
