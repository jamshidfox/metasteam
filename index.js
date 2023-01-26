/** @format */
const toggle = document.getElementById("darkLabel");
const card = document.getElementsByClassName("card")[0];
const cardThemeTexts = document.querySelectorAll(".theme-text");
const loginSteamInput = document.getElementsByClassName("login-steam");
const dropdownValue = document.getElementById("lang-change");
const dropdownLang = document.getElementById("hide-show");
const faderInput = document.getElementById("fader");
const faderLabel = document.getElementsByClassName("fader-label");
const commisionLabel = document.getElementById("commision-price");
const popup = document.getElementById("popup");
const infoIcon = document.getElementById("info");
const body = document.querySelector("body");

//functionality
const firstCard = document.getElementsByClassName("card-section-1")[0];
const secondCard = document.getElementsByClassName("card-section-2")[0];
const thirdCard = document.getElementsByClassName("card-section-3")[0];
const fourthCard = document.getElementsByClassName("card-section-4")[0];
const confirmationButton = document.getElementsByClassName("card-button");
const backToFirstBtn = document.getElementsByClassName("btn")[0];
const backToFirstCardButton = document.getElementById("card-back");
const topUp = document.getElementById("top-up");

toggle.addEventListener("click", () => {
  if (toggle.id == "whiteLabel") {
    //Body
    body.style.backgroundColor = dark.backgroundColor;
    toggle.id = "darkLabel";
    //***************

    //Section
    card.style.background = dark.section.card.backgroundColor;
    backToFirstBtn.style.border = "1px solid white";
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
    toggle.id = "whiteLabel";
    //***************

    //Section

    card.style.background = light.section.card.backgroundColor;
    backToFirstBtn.style.border = "1px solid black";

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
  setTimeout(() => {
    thirdCard.style.opacity = 0;
    thirdCard.style.display = "none";
    fourthCard.style.display = "flex";
    fourthCard.style.opacity = 1;
  }, 1000);
});
backToFirstCardButton.addEventListener("click", () => {
  fourthCard.style.opacity = 0;
  fourthCard.style.display = "none";
  firstCard.style.display = "flex";
  firstCard.style.opacity = 1;
});
dropdownValue.addEventListener("click", () => {
  if (dropdownValue.innerHTML == "Русский") {
    dropdownValue.innerHTML = "English";
  } else {
    dropdownValue.innerHTML = "Русский";
  }
});

faderInput.addEventListener("change", (e) => {
  const result = e.target.value;
  const commision = +result + 20;
  for (let x of faderLabel) {
    x.innerHTML = result + "£";
  }
  commisionLabel.innerHTML = commision + "£";
});

infoIcon.addEventListener("click", () => {
  const styleDiv = popup.style;
  console.log(styleDiv.display);
  if (styleDiv.display == "none" || styleDiv.display == "") {
    styleDiv.display = "flex";
    styleDiv.opacity = 1;
  } else {
    styleDiv.display = "none";
    styleDiv.opacity = "0";
  }
});
