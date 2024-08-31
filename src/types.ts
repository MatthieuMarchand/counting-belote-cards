export type Color = "spades" | "trefoil" | "diamonds" | "heart";
export const allColors: Color[] = ["spades", "trefoil", "diamonds", "heart"];

export type Value = "7" | "8" | "9" | "10" | "valet" | "queen" | "king" | "as";
export const allValues: Value[] = [
  "7",
  "8",
  "9",
  "10",
  "valet",
  "queen",
  "king",
  "as",
];

export type Point = 0 | 2 | 3 | 4 | 10 | 11 | 14 | 20;

export type BeloteCard = {
  color: Color;
  value: Value;
  point: Point;
  img: String;
  text: String;
};

export type BeloteCards = BeloteCard[];
