import MyWorker = require('worker-loader!./Worker');
import { getCompileFlags, loadWorker} from "utils/Utils";
import {WorkerCommand, MESSAGE} from "types/Worker-Types";
import {render} from "renderer/Renderer";

const {buildMode, buildVersion, isProduction} = getCompileFlags();
console.log(`%c Purescript Hello World ${buildVersion} (productionMode: ${isProduction})`, 'color: #4286f4; font-size: large; font-family: "Comic Sans MS", cursive, sans-serif');

/*
 * Everything here is generic boilerplate... the details are in the imports
 */

const worker:Worker = new (MyWorker as any)();


loadWorker(worker)
    .fork(
        console.error,
        (worker) => {
            let readyForUpdate = true; 

            worker.addEventListener(MESSAGE, (e:MessageEvent) => {
                switch(e.data.cmd) {
                    case WorkerCommand.RENDER: 
                        render(e.data.state);
                        readyForUpdate = true;
                }
            });

            const tick = (frameTs:number) => {
                if(readyForUpdate) {
                    readyForUpdate = false;
                    worker.postMessage({
                        cmd: WorkerCommand.TICK, 
                        frameTs
                    });
                }

                requestAnimationFrame(tick);
            }

            requestAnimationFrame(tick);
        }
    );



