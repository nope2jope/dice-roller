import React from "react";
import { diceQueue } from "./InputScreen.jsx"
const headers = import.meta.glob('../assets/count-headers/*.{png,jpg,jpeg,svg}', { eager: true });
const n = import.meta.glob('../assets/numerals/*.{png,jpg,jpeg,svg}', { eager: true })

export default function CountRow(props) {
    const numerals = {}

    for (let i = 0; i < 10; i++) {
        numerals[i] = Object.values(n)[i].default;
    }

    const headersRow = Object.values(headers).map((header, index) => (
        <div key={index} className="column">
            <img onClick={() => console.log(props.diceCount)} className="d-count center" src={header.default} />
            <img className="d-increment" src={numerals[props.diceCount[diceQueue[index]]]} />
        </div>
    ));


    return (
        <div className="count-row center">
            {headersRow}
        </div>
    )
}
