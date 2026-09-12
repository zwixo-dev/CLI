import { time } from "console";
import os, { type } from "os";

let CPU_Model = null;
let CPU_SPEED = null;

// tracking the CPU usage 
function CPU_Usage(){
    const cpu_infos = os.cpus();
    // check if is not array or i the length of it is empty : if true no cpu exist
    if(!Array.isArray(cpu_infos) || cpu_infos.length === 0) return "Cpu Not found";


    // if that went correct
    let totatTime = 0;
    cpu_infos.forEach((core) => {
        for (const type in  core.times){
            totatTime += core.times[type];
        }
    });

    return totatTime;
}



