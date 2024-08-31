import {
  Value,
  Point,
  BeloteCards,
  allColors,
  allValues,
  Color,
} from "./types.js";

function calculatePoints(value: Value): Point {
  switch (value) {
    case "10":
      return 10;
    case "valet":
      return 2;
    case "queen":
      return 3;
    case "king":
      return 4;
    case "as":
      return 11;
    default:
      return 0;
  }
}

function findText(value: Value): String {
  switch (value) {
    case "7":
      return "7";
    case "8":
      return "8";
    case "9":
      return "9";
    case "10":
      return "10";
    case "valet":
      return "V";
    case "queen":
      return "D";
    case "king":
      return "R";
    case "as":
      return "A";
  }
}

function findImage(color: Color): String {
  switch (color) {
    case "spades":
      return "/images/spades.svg";
    case "trefoil":
      return "/images/trefoil.svg";
    case "diamonds":
      return "/images/diamonds.svg";
    case "heart":
      return "/images/heart.svg";
  }
}

const beloteCards: BeloteCards = [];

allColors.forEach((color) => {
  allValues.forEach((value) => {
    const point = calculatePoints(value);
    const img = findImage(color);
    const text = findText(value);
    beloteCards.push({ color, value, point, img, text });
  });
});

export { beloteCards };
