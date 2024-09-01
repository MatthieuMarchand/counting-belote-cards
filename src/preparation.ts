import { beloteCards } from "./beloteCards.js";
import { atoutText } from "./htmlElements.js";
import { BeloteCard, BeloteCards, Color, allColors } from "./types.js";

function createAtout() {
  const atout: Color = allColors[Math.floor(Math.random() * allColors.length)];

  atoutText.innerHTML = `<img src="/images/${atout}.svg" />` + atout;

  return atout;
}

function createCardsToCount(beloteCards: BeloteCards, atout: Color) {
  beloteCards.sort(() => Math.random() - 0.5);

  const numberOfCards: number =
    (Math.floor(Math.random() * (7 - 4 + 1)) + 4) * 4;
  const beloteCardsToCount: BeloteCards = beloteCards.slice(0, numberOfCards);

  beloteCardsToCount.forEach((beloteCard: BeloteCard) => {
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

function createResult(beloteCardsToCount: BeloteCards) {
  let result: number = 0;

  beloteCardsToCount.forEach((beloteCard: BeloteCard) => {
    result = result + beloteCard.point;
  });

  console.log("résultat: " + result);

  return result;
}

export const atout = createAtout();
export const beloteCardsToCount = createCardsToCount(beloteCards, atout);
export const result = createResult(beloteCardsToCount);
