import React from "react";
import rollButton from '../assets/buttons/buttonroll1static.png'

export default function RollButton(props) {
    return (
        <div className="center">
            <img id="roll-button" src={rollButton} alt="" onClick={props.clickRoll} />
        </div>
    )
}