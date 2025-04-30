import React from "react";
import leftArrow from '../assets/buttons/buttonleftarrow.png';
import rightArrow from '../assets/buttons/buttonrightarrow.png';
import { playSound } from "../scripts";

const n = import.meta.glob('../assets/dice-names/*.{svg,png}', { eager: true })

export default function DiceSelector(props) {
        const names = Object.values(n);

        const scrollLeft = React.useCallback(() => {
                playSound("click");
                (props.currentSelection === 0 ? props.setCurrentSelection(5) : props.setCurrentSelection(props.currentSelection - 1))
        }, [playSound, props.currentSelection]);

        const scrollRight = React.useCallback(() => {
                playSound("click");
                (props.currentSelection === 5 ? props.setCurrentSelection(0) : props.setCurrentSelection(props.currentSelection + 1))
        }, [playSound, props.currentSelection]);

        return (
                <div className="center selection-row">
                        <img id="left-arrow" onClick={scrollLeft} src={leftArrow} alt="" />
                        <img id="dice-name" src={names[props.currentSelection].default} alt="" />
                        <img id="right-arrow" onClick={scrollRight} src={rightArrow} alt="" />
                </div>
        )
}