import React from "react";
import CountRow from "./CountRow";
import DiceSelector from "./DiceSelector";
import CountAdjustor from "./CountAdjustor";
import RollButton from "./RollButton";
import ToolBar from "./ToolBar";
import { playSound } from "../scripts";

export const diceQueue = [4, 6, 8, 10, 12, 20];

export default function InputScreen(props) {

  const [shouldRefresh, setShouldRefresh] = React.useState(false);
  var [currentSelection, setCurrentSelection] = React.useState(5);
  var [toRoll, setToRoll] = React.useState(0)
  const [diceCount, setDiceCount] = React.useState({
    4: 0,
    6: 0,
    8: 0,
    10: 0,
    12: 0,
    20: 0,
  });

  const diceRolls = {
    4: [],
    6: [],
    8: [],
    10: [],
    12: [],
    20: [],
  };

  const diceSums = {
    4: 0,
    6: 0,
    8: 0,
    10: 0,
    12: 0,
    20: 0,
  };

  const resetTemplates = () => {
    setToRoll(0);

    for (let x in diceCount) {
      diceCount[x] = 0;
    }

    for (let y in diceRolls) {
      diceRolls[y] = [];
    }

    for (let z in diceSums) {
      diceSums[z] = 0;
    }

    setShouldRefresh(!shouldRefresh);
  };


  // function animateCount(x, y) {
  //   $(`#d${y}-counter`).attr("src", `/assets/num${x}.png`);
  //   $(`#d${y}-counter`).addClass("shake");
  //   setTimeout(() => {
  //     $(`#d${y}-counter`).removeClass("shake");
  //   }, 100)
  // };

  const sumDice = (template, data) => {
    for (let key in template) {
      template[key] = data[key].reduce((partialSum, a) => partialSum + a, 0);
    }
  };

  const rollDice = (dice_val, num) => {
    const arr = [];
    for (var i = 0; i < num; i++) {
      var roll = Math.floor(Math.random() * dice_val) + 1;
      arr.push(roll);
    }
    return arr;
  };

  // function generateDivs(r, x) {
  //   let c = 0;
  //   const d = $(`<div id="generated-div${c}"><img src="/assets/val${x}.png" alt=""></div>`);
  //   $(r).append(d);
  //   d.addClass("counted");
  //   d.addClass("shake");

  // };

  // $(document).ready(() => {
  //   btnRoll.on("mouseenter", function () {
  //     $(this).attr("src", "/assets/buttonroll1.gif");
  //   }).on("mouseleave", function () {
  //     $(this).attr("src", "/assets/buttonroll1static.png");
  //   });
  //   ;

  const clickRoll = () => {
    // confirms there are results to display 
    if (toRoll > 0) {
      if (toRoll === 1) {
        playSound("single")
      } else {
        playSound("multi")
      }
    };

    // rolls dice quantities and assigns vales to result object
    for (let key in diceCount) {
      if (diceCount[key] > 0) {
        diceRolls[key] = rollDice(parseInt(key), parseInt(diceCount[key]))
      }
    };

    sumDice(diceSums, diceRolls);
    props.toggleScreen();

    // var keys = Object.keys(diceRolls);
    // let delay = 0;

    // iterates through each dice (e.g. d4,d6,d8) and animates dice results
    //   keys.forEach(key => {
    //     $(`#d${key}-counted`).empty();
    //     diceRolls[key].forEach(value => {
    //       setTimeout(() => {
    //         generateDivs(`#d${key}-counted`, value);
    //       }, delay);
    //       // resets animation delay
    //       delay += 750;
    //     });
    //   }
    // );
  };



  return (
    <div className="container" id="input-screen">
      <CountRow diceCount={diceCount} />
      <DiceSelector currentSelection={currentSelection} setCurrentSelection={setCurrentSelection} />
      <CountAdjustor currentSelection={currentSelection} diceCount={diceCount} setDiceCount={setDiceCount} diceQueue={diceQueue} toRoll={toRoll} setToRoll={setToRoll} />
      <RollButton clickRoll={clickRoll} />
      <ToolBar resetTemplates={resetTemplates} toggleScreen={props.toggleScreen} inputVisbility={props.inputVisbility} />
    </div>)
}