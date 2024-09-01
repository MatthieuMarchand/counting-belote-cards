import { beloteCards } from "./beloteCards.js";
import { atoutText } from "./htmlElements.js";
import { allColors } from "./types.js";
function createAtout() {
    const atout = allColors[Math.floor(Math.random() * allColors.length)];
    atoutText.innerHTML = `<img src="/images/${atout}.svg" />` + atout;
    return atout;
}
function createCardsToCount(beloteCards, atout) {
    beloteCards.sort(() => Math.random() - 0.5);
    const numberOfCards = (Math.floor(Math.random() * (7 - 4 + 1)) + 4) * 4;
    const beloteCardsToCount = beloteCards.slice(0, numberOfCards);
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
    return beloteCardsToCount;
}
function createResult(beloteCardsToCount) {
    let result = 0;
    beloteCardsToCount.forEach((beloteCard) => {
        result = result + beloteCard.point;
    });
    console.log("résultat: " + result);
    return result;
}
export const atout = createAtout();
export const beloteCardsToCount = createCardsToCount(beloteCards, atout);
export const result = createResult(beloteCardsToCount);
