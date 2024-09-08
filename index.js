var diceQueue = [4, 6, 8, 10, 12, 20];
var toRoll = 0;

const diceCount = {
  4: 0,
  6: 0,
  8: 0,
  10: 0,
  12: 0,
  20: 0,
}

const diceRolls = {
  4: [],
  6: [],
  8: [],
  10: [],
  12: [],
  20: [],
}

const diceSums = {
  4: 0,
  6: 0,
  8: 0,
  10: 0,
  12: 0,
  20: 0,
}

function rollDice(dice, step) {
  const arr = [];
  for (var i = 0; i < step; i++) {
    var roll = Math.floor(Math.random() * dice) + 1;
    arr.push(roll);
  }
  return arr;
}

window.addEventListener("DOMContentLoaded", () => {

  const btnLeftArrow = $("#left-arrow");
  const btnRightArrow = $("#right-arrow");
  const btnMinus = $("#minus-button");
  const btnPlus = $("#plus-button");
  const btnRoll = $("#roll-button");

  btnRoll.on("click", () => {
    console.log("click!")
  });

  btnMinus.on("click", () => {
    if (toRoll > 0) {
      toRoll--;
    }
  });

  btnPlus.on("click", () => {
    toRoll++;
  })

  btnLeftArrow.on("click", () => {

  })

  btnRightArrow.on("click", () => {
    toRoll++;
  });
});

