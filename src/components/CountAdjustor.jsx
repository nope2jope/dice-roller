import React from "react";
import minusButton from '../assets/buttons/buttonminus2.png';
import minusButtonPressed from '../assets/buttons/buttonminus2_pressed.png';
import plusButton from '../assets/buttons/buttonplus2.png';
import plusButtonPressed from '../assets/buttons/buttonplus2_pressed.png';
import { playSound } from "../scripts";
const s = import.meta.glob('../assets/dice-sprites/*.{png,svg}', { eager: true });

export default function CountAdjustor(props) {
    const sprites = Object.values(s);
    const [currentMinusButton, setMinusButton] = React.useState(minusButton);
    const [currentPlusButton, setPlusButton] = React.useState(plusButton)

    const animateButton = React.useCallback((x) => {
        if (x === "plus") {
            setPlusButton(plusButtonPressed);
            setTimeout(() => {
                setPlusButton(plusButton)
            }, 100);
        } else if (x === "minus") {
            setMinusButton(minusButtonPressed);
            setTimeout(() => {
                setMinusButton(minusButton)
            }, 100);
        }
    }, [plusButton, minusButton, plusButtonPressed, minusButtonPressed, setTimeout]);

    const clickMinus = React.useCallback(() => {
        playSound("click");
        if (props.diceCount[props.diceQueue[props.currentSelection]] > 0) {
            props.setToRoll(props.toRoll - 1)
            props.setDiceCount(prevValue => ({
                ...prevValue,
                [props.diceQueue[props.currentSelection]]: prevValue[props.diceQueue[props.currentSelection]] - 1
            }));
        }
    });

    const clickPlus = React.useCallback(() => {
        playSound("click");
        if (props.diceCount[props.diceQueue[props.currentSelection]] < 9) {
            props.setToRoll(props.toRoll + 1)
            props.setDiceCount(prevValue => ({
                ...prevValue,
                [props.diceQueue[props.currentSelection]]: prevValue[props.diceQueue[props.currentSelection]] + 1
            }));
        }
    });

    return (
        <div className="center display-row">
            <img id="minus-button" src={currentMinusButton} onClick={() => {
                clickMinus();
                animateButton("minus");
            }} alt="" />
            <img id="dice-choice" src={sprites[props.currentSelection].default} alt="" />
            <img id="plus-button" src={currentPlusButton} onClick={() => {
                clickPlus();
                animateButton("plus");
            }} alt="" />
        </div>
    )
}