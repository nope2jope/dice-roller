var diceQueue = [4, 6, 8, 10, 12, 20];
var toRoll = 0;
var currentSelection = 5;

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

function resetTemplates() {
  for (x in diceCount) {
    diceCount[x] = 0;
  }

  for (y in diceRolls) {
    diceRolls[y] = [];
  }

  for (z in diceSums) {
    diceSums[z] = 0;
  }
  $("#d4-counter").attr("src", `/assets/num0.png`);
  $("#d6-counter").attr("src", `/assets/num0.png`);
  $("#d8-counter").attr("src", `/assets/num0.png`);
  $("#d10-counter").attr("src", `/assets/num0.png`);
  $("#d12-counter").attr("src", `/assets/num0.png`);
  $("#d20-counter").attr("src", `/assets/num0.png`);

}

function scrollLeft() {
  if (currentSelection === 0) {
    currentSelection = 5;
  } else {
    currentSelection--;
  }
}

function scrollRight() {
  if (currentSelection === 5) {
    currentSelection = 0;
  } else {
    currentSelection++;
  }
}

function rollDice(dice_val, num) {
  const arr = [];
  for (var i = 0; i < num; i++) {
    var roll = Math.floor(Math.random() * dice_val) + 1;
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
    for (key in diceCount) {
      if (diceCount[key] > 0) {
        diceRolls[key] = rollDice(parseInt(key), parseInt(diceCount[key]))
      }
    };
    console.log(diceRolls);
  resetTemplates()  });

  btnMinus.on("click", () => {
    console.log(diceCount[diceQueue[currentSelection]])
    if (diceCount[diceQueue[currentSelection]] > 0) {
      diceCount[diceQueue[currentSelection]]--;
      $(`#d${diceQueue[currentSelection]}-counter`).attr("src", `/assets/num${diceCount[diceQueue[currentSelection]]}.png`);
    }
  });

  btnPlus.on("click", () => {
    console.log(diceCount[diceQueue[currentSelection]])
    if (diceCount[diceQueue[currentSelection]] < 9) {
      diceCount[diceQueue[currentSelection]]++;
      $(`#d${diceQueue[currentSelection]}-counter`).attr("src", `/assets/num${diceCount[diceQueue[currentSelection]]}.png`);
    };
  })

  btnLeftArrow.on("click", () => {
    scrollLeft();
    $("#dice-name").attr("src", `/assets/name${diceQueue[currentSelection]}.png`)
    $("#dice-choice").attr("src", `/assets/d${diceQueue[currentSelection]}sprite.png`);
  })

  btnRightArrow.on("click", () => {
    scrollRight();
    $("#dice-name").attr("src", `/assets/name${diceQueue[currentSelection]}.png`)
    $("#dice-choice").attr("src", `/assets/d${diceQueue[currentSelection]}sprite.png`);
  });
});

