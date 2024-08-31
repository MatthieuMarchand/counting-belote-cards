import { beloteCards } from "./beloteCards.js";
import { allColors } from "./types.js";
const numberOfCards = (Math.floor(Math.random() * (7 - 4 + 1)) + 4) * 4;
beloteCards.sort(() => Math.random() - 0.5);
const beloteCardsToCount = beloteCards.slice(0, numberOfCards);
const atoutText = document.getElementById("atout-text");
const atout = allColors[Math.floor(Math.random() * allColors.length)];
atoutText.innerHTML = `<img src="/images/${atout}.svg" />` + atout;
beloteCardsToCount.forEach((beloteCard) => {
    if (beloteCard.color === atout) {
        if (beloteCard.value === "9") {
            beloteCard.point = 14;
            return;
        }
        if (beloteCard.value === "valet") {
            beloteCard.point = 20;
            return;
        }
    }
});
let result = 0;
beloteCardsToCount.forEach((beloteCard) => {
    result = result + beloteCard.point;
});
document.addEventListener("DOMContentLoaded", () => {
    const cardContainer = document.getElementById("card-container");
    const nextCard = document.getElementById("next-card");
    beloteCardsToCount.forEach((beloteCard) => {
        const newDiv = document.createElement("div");
        newDiv.innerHTML = `
    <div class="card">
      <div class="symbol">
        <span class="value">${beloteCard.text}</span>
        <img src="${beloteCard.img}" />
      </div>
      <div class="symbol reverse-symbol">
        <span class="value">${beloteCard.text}</span>
        <img src="${beloteCard.img}" />
      </div>
    </div>
  `;
        cardContainer.appendChild(newDiv);
    });
    nextCard.addEventListener("click", () => {
        if (cardContainer.childNodes.length === 0) {
            console.log("plus de cartes");
        }
        else {
            cardContainer.lastElementChild.remove();
        }
    });
});
const resultInput = document.getElementById("result-input");
resultInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        if (Number(resultInput.value) === result) {
            resultInput.style.backgroundColor = "green";
        }
        else {
            resultInput.style.backgroundColor = "red";
        }
    }
});
