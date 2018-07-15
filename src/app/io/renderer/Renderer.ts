import {State, Tick} from "types/State";
import {maybe} from "utils/Utils";

const div = document.getElementById("app");

export const render = (state:State) => 
    div.innerHTML = 
        maybe<Tick>
            (() => `Start time: ${state.startTime}`)
            (tick => 
                `<div>
                    <div>${tick.elapsedTime} seconds passed</div>
                    <div>${tick.deltaTime} delta ms</div>
                </div>`)
            (state.tick);


