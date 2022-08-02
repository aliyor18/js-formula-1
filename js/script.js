var intro = "Xush kelibsiz!";
var hero = "Formula-1 da qatnashishga tayormisiz?";
var text = "Siz Formula-1 da qatnasha olasiz!";
var text2 = "Faqat son kiriting!";
var text3 = "Uzr siz hali yoshsiz!";


var elBody = document.querySelector("body");
var elInner = document.querySelector(".hero__inner");
var elTitle = document.querySelector(".hero__title");
var elForm = document.querySelector(".hero__form");
var elInput = document.querySelector(".hero__input");
var elButton = document.querySelector(".hero__button");
var elBtn = document.querySelector(".hero__btn");
var elP = document.createElement("span");



elBody.appendChild(elInner);
elInner.appendChild(elTitle);
elInner.appendChild(elForm);
elForm.appendChild(elInput);
elForm.appendChild(elButton);
elForm.appendChild(elBtn);
elForm.appendChild(elP);



var alertIntro = alert(intro);
var alertHero = confirm(hero);


elForm.addEventListener("submit", function(evt) {
  evt.preventDefault();

if (elInput.value >= 16) {
  console.log(text);
  elP.textContent = text;
} else if (isNaN(elInput.value)) {
  console.log(text2);
  elP.textContent = text2;
} else {
  console.log(text3);
  elP.textContent = text3;
}
})