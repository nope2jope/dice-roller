import React from "react";
import InputScreen from "./InputScreen";
import ResultScreen from "./ResultScreen";

export default function AppWindow() {
    const [resultVisibility, setResultVisbility] = React.useState(false);
    const [inputVisibility, setInputVisibility] = React.useState(true)

    function toggleScreen() {
        setInputVisibility(!inputVisibility)
        setResultVisbility(!resultVisibility)
    }

    return <div id="app-container">
        {inputVisibility && <InputScreen toggleScreen={toggleScreen} inputVisbility={inputVisibility} />}
        {resultVisibility && <ResultScreen toggleScreen={toggleScreen} />}
    </div>

}