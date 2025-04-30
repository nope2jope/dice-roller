import React from "react";
import ToolBar from "./ToolBar"
import c4 from "../assets/count-headers/count04.png"
import c6 from "../assets/count-headers/count06.png"
import c8 from "../assets/count-headers/count08.png"
import c10 from "../assets/count-headers/count10.png"
import c12 from "../assets/count-headers/count12.png"
import c20 from "../assets/count-headers/count20.png"

const headers = import.meta.glob('../assets/count-headers/*.{png,jpg,jpeg,svg}', { eager: true });

export default function ResultScreen(props) {
    return (
        <div className="container" id="result-screen">
            <div id="counted-four" className="d-counted-sng">
            <img src={c4} alt="" />
            <div className="d-single" id="d4-counted">
            </div>
        </div>
        
        <div id="counted-six" className="d-counted-sng">
            <img src={c6} alt="" />
            <div className="d-single" id="d6-counted">
            </div>
        </div>
        <div id="counted-eight" className="d-counted-sng">
            <img src={c8} alt="" />
            <div className="d-single" id="d8-counted">
            </div>
        </div>
        <div id="counted-ten" className="d-counted-dbl">
            <img src={c10} alt=" /" />
            <div className="d-double" id="d10-counted">
            </div>
        </div>
        <div id="counted-twelve" className="d-counted-dbl">
            <img src={c12} alt="" />
            <div className="d-double" id="d12-counted">
            </div>
        </div>
        <div id="counted-twenty" className="d-counted-dbl">
            <img src={c20} alt="" />
            <div className="d-double" id="d20-counted">

            </div>
        </div>

            <ToolBar toggleScreen={props.toggleScreen} />
        </div>
    )
}