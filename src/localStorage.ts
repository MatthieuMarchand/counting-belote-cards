import {
  bestWinStreakHtmlElement,
  winStreakHtmlElement,
} from "./htmlElements.js";

const ITEM_WIN_STREAK = "winStreak";
const ITEM_BEST_WIN_STREAK = "bestWinStreak";

function setWinStreak(newWinStreak: number) {
  localStorage.setItem(ITEM_WIN_STREAK, String(newWinStreak));
  winStreakHtmlElement.innerHTML = String(newWinStreak);
}

function setBestWinStreak(newWinStreak: number) {
  localStorage.setItem(ITEM_BEST_WIN_STREAK, String(newWinStreak));
  bestWinStreakHtmlElement.innerHTML = String(newWinStreak);
}

export function initLocalItems() {
  if (localStorage.getItem(ITEM_WIN_STREAK) === null) {
    setWinStreak(0);
  } else {
    setWinStreak(Number(localStorage.getItem(ITEM_WIN_STREAK)));
  }

  if (localStorage.getItem(ITEM_BEST_WIN_STREAK) === null) {
    setBestWinStreak(0);
  } else {
    setBestWinStreak(Number(localStorage.getItem(ITEM_BEST_WIN_STREAK)));
  }
}

export function winStreak(win: boolean) {
  if (win === true) {
    const newWinStreak: number =
      Number(localStorage.getItem(ITEM_WIN_STREAK)) + 1;

    setWinStreak(newWinStreak);

    if (newWinStreak > Number(localStorage.getItem(ITEM_BEST_WIN_STREAK))) {
      setBestWinStreak(newWinStreak);
    }
  } else {
    setWinStreak(0);
  }
}
