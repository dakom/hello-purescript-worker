import {initWorker} from "utils/Utils";
import {WorkerCommand, MESSAGE} from "types/Worker-Types";
import {updateState, getInitialState} from "purescript/Main/index";

initWorker().fork(
    console.error,
    worker => {

        let state:any;

        worker.addEventListener(MESSAGE, (e:MessageEvent) => {
            switch(e.data.cmd) {
                case WorkerCommand.TICK:
                    state = state === undefined
                        ?   getInitialState(e.data.frameTs)
                        :   updateState (e.data.frameTs) (state); 
                    
                    worker.postMessage({
                        cmd: WorkerCommand.RENDER,
                        state 
                    });

                    break;
            }
        });
    }
);


