const diceQueue = [4, 6, 8, 10, 12, 20];

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

var toRoll = 0;

var currentSelection = 5;

function resetTemplates() {
  toRoll = 0;

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

function generateDivs(r, x) {
  const d = $(`<div><img src="/assets/val${x}.png" alt=""></div>`);
  $(r).append(d);
  d.addClass("counted");
  d.addClass("shake");

}

document.addEventListener("DOMContentLoaded", () => {

  const btnLeftArrow = $("#left-arrow");
  const btnRightArrow = $("#right-arrow");
  const btnMinus = $("#minus-button");
  const btnPlus = $("#plus-button");
  const btnRoll = $("#roll-button");
  const btnX = $("#x-button");
  const btnRefresh = $("#refresh-button");

  btnRoll.on("click", () => {
    // checks to see if no dice present to roll
    if (toRoll > 0) {
      if (toRoll === 1) {
        // play audio
        var audio = new Audio('/assets/sounds/single-roll.mp3');
        audio.play();
      } else {
        // play audio
        var audio = new Audio('/assets/sounds/multi-roll.wav');
        audio.play()
      };

      for (let key in diceCount) {
        if (diceCount[key] > 0) {
          diceRolls[key] = rollDice(parseInt(key), parseInt(diceCount[key]))
        }
      };
      $("#input-screen").hide();
      $("#result-screen").show();

      const keys = Object.keys(diceRolls);
      let delay = 0;

      // iterates through each dice (4,6,8) and animates rolled dice value
      keys.forEach(key => {
        $(`#d${key}-counted`).empty();
        diceRolls[key].forEach(value => {
          setTimeout(() => {
            generateDivs(`#d${key}-counted`, value);
          }, delay);
          // resets animation delay
          delay += 750;
        });
      });
    }
  });

  btnMinus.on("click", () => {
    // play audio
    var audio = new Audio('/assets/sounds/click-sound.wav');
    audio.play();
    // animate button shake
    $("#minus-button").attr("src", `/assets/buttonminus_pressed.png`);
    // decrement quality
    if (diceCount[diceQueue[currentSelection]] > 0) {
      toRoll--;
      $(`#d${diceQueue[currentSelection]}-counter`).addClass("shake")
      diceCount[diceQueue[currentSelection]]--;
      $(`#d${diceQueue[currentSelection]}-counter`).attr("src", `/assets/num${diceCount[diceQueue[currentSelection]]}.png`);
    };
    setTimeout(() => {
      $("#minus-button").attr("src", `/assets/buttonminus.png`);
      $(`#d${diceQueue[currentSelection]}-counter`).removeClass("shake");
    }, 100)
  });

  btnPlus.on("click", () => {
    // play audio
    var audio = new Audio('/assets/sounds/click-sound.wav');
    audio.play();
    // animate button shake 
    $("#plus-button").attr("src", `/assets/buttonplus_pressed.png`);;
    // increment quantity
    if (diceCount[diceQueue[currentSelection]] < 9) {
      toRoll++;
      $(`#d${diceQueue[currentSelection]}-counter`).addClass("shake")
      diceCount[diceQueue[currentSelection]]++;
      $(`#d${diceQueue[currentSelection]}-counter`).attr("src", `/assets/num${diceCount[diceQueue[currentSelection]]}.png`);
    };
    setTimeout(() => {
      $("#plus-button").attr("src", `/assets/buttonplus.png`);
      $(`#d${diceQueue[currentSelection]}-counter`).removeClass("shake");
    }, 100)
  });

  btnLeftArrow.on("click", () => {
    // play audio
    var audio = new Audio('/assets/sounds/click-sound.wav');
    audio.play();
    scrollLeft();
    $("#dice-name").attr("src", `/assets/name${diceQueue[currentSelection]}.png`)
    $("#dice-choice").attr("src", `/assets/d${diceQueue[currentSelection]}sprite.png`);
  })

  btnRightArrow.on("click", () => {
    // play audio
    var audio = new Audio('/assets/sounds/click-sound.wav');
    audio.play();
    scrollRight();
    $("#dice-name").attr("src", `/assets/name${diceQueue[currentSelection]}.png`)
    $("#dice-choice").attr("src", `/assets/d${diceQueue[currentSelection]}sprite.png`);
  });

  btnX.on("click", () => {
    resetTemplates();
  });

  btnRefresh.on("click", () => {
    resetTemplates();
    $("#result-screen").hide();
    $("#input-screen").show();
  });

});
