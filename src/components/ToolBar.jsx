import React from "react";
import buttonX from "../assets/buttons/buttonX.png"
import buttonQ from "../assets/buttons/buttonQ.png"
import { playSound } from "../scripts";

export default function ToolBar(props) {

    return (
        <div className="center options-row">
            <img id="q-button" src={buttonQ} alt="" onClick={() => {
                playSound("click");
            }} />
            <img id="x-button" src={buttonX} alt="" onClick={() => {
                (props.inputVisbility ? props.resetTemplates() : props.toggleScreen());
                playSound("click");
            }
            } />
        </div>
    )
}