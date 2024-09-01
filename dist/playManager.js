import { validationHtmlElement, cardContainer, nextCard, resultInput, } from "./htmlElements.js";
import { beloteCardsToCount, result } from "./preparation.js";
import { initLocalItems, winStreak } from "./localStorage.js";
document.addEventListener("DOMContentLoaded", () => {
    initLocalItems();
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
    resultInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            if (Number(resultInput.value) === result) {
                validationHtmlElement.classList.remove("validation-fail");
                validationHtmlElement.classList.add("validation-succes");
                validationHtmlElement.innerHTML = "succes";
                winStreak(true);
            }
            else {
                validationHtmlElement.classList.remove("validation-succes");
                validationHtmlElement.classList.add("validation-fail");
                validationHtmlElement.innerHTML = "fail: " + result;
                winStreak(false);
            }
        }
    });
});
