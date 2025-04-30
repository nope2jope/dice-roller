export const playSound = (x) => {
  const click = new Audio('./src/assets/sounds/click-sound.wav');
  const single = new Audio('./src/assets/sounds/single-roll.mp3');
  const multi = new Audio('./src/assets/sounds/multi-roll.wav');

  switch (x) {
    case "click":
      click.play();
      break;
    case "single":
      single.play();
      break;
    case "multi":
      multi.play();
  }
};


// function animateCount(x, y) {
//   $(`#d${y}-counter`).attr("src", `/assets/num${x}.png`);
//   $(`#d${y}-counter`).addClass("shake");
//   setTimeout(() => {
//     $(`#d${y}-counter`).removeClass("shake");
//   }, 100)
// };

// // function sumDice(template, data) {
// //   var x = template;
// //   for (key in template) {
// //     x[key] = data[key].reduce((partialSum, a) => partialSum + a, 0);
// //   }
// //   console.log(x)
// // };

// function rollDice(dice_val, num) {
//   const arr = [];
//   for (var i = 0; i < num; i++) {
//     var roll = Math.floor(Math.random() * dice_val) + 1;
//     arr.push(roll);
//   }
//   return arr;
// };

// function generateDivs(r, x) {
//   let c = 0;
//   const d = $(`<div id="generated-div${c}"><img src="/assets/val${x}.png" alt=""></div>`);
//   $(r).append(d);
//   d.addClass("counted");
//   d.addClass("shake");

// };

// $(document).ready(() => {

//   const btnLeftArrow = $("#left-arrow");
//   const btnRightArrow = $("#right-arrow");
//   const btnMinus = $("#minus-button");
//   const btnPlus = $("#plus-button");
//   const btnRoll = $("#roll-button");
//   const btnX = $("#x-button");
//   const btnRefresh = $("#refresh-button");


//   btnRoll.on("mouseenter", function () {
//     $(this).attr("src", "/assets/buttonroll1.gif");
//   }).on("mouseleave", function () {
//     $(this).attr("src", "/assets/buttonroll1static.png");
//   });
//   ;

//   btnRoll.on("click", () => {
//     // confirms there are results to display 
//     if (toRoll > 0) {
//       if (toRoll === 1) {
//         playSound("single")
//       } else {
//         playSound("multi")
//       };

//       // rolls dice quantities and assigns vales to result object
//       for (let key in diceCount) {
//         if (diceCount[key] > 0) {
//           diceRolls[key] = rollDice(parseInt(key), parseInt(diceCount[key]))
//         }
//       };

//       sumDice(diceSums, diceRolls);

//       // updates screen
//       $("#input-screen").hide();
//       $("#result-screen").show();

//       var keys = Object.keys(diceRolls);
//       let delay = 0;

//       // iterates through each dice (e.g. d4,d6,d8) and animates dice results
//       keys.forEach(key => {
//         $(`#d${key}-counted`).empty();
//         diceRolls[key].forEach(value => {
//           setTimeout(() => {
//             generateDivs(`#d${key}-counted`, value);
//           }, delay);
//           // resets animation delay
//           delay += 750;
//         });
//       });
//     }
//   });

//   btnMinus.on("click", () => {
//     animateButton("minus");

//     if (diceCount[diceQueue[currentSelection]] > 0) {
//       toRoll--;
//       diceCount[diceQueue[currentSelection]]--;
//       animateCount(diceCount[diceQueue[currentSelection]], diceQueue[currentSelection])
//     }
//   });

//   btnPlus.on("click", () => {
//     animateButton("plus");
//     if (diceCount[diceQueue[currentSelection]] < 9) {
//       toRoll++;
//       diceCount[diceQueue[currentSelection]]++;
//       animateCount(diceCount[diceQueue[currentSelection]], diceQueue[currentSelection])
//     }
//   });

//   btnLeftArrow.on("click", () => {
//     playSound("click");
//     scrollLeft();
//     changeDie(diceQueue[currentSelection])
//   });

//   btnRightArrow.on("click", () => {
//     playSound("click");
//     scrollRight();
//     changeDie(diceQueue[currentSelection]);
//   });

//   btnX.on("click", () => {
//     resetTemplates();
//   });

//   btnRefresh.on("click", () => {

//     resetTemplates();
//     // update screen
//     $("#result-screen").hide();
//     $("#input-screen").show();
//   });

// });
