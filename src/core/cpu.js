import os, { type } from "os";

let CPU_Model = os.cpus()[0].model;
let CPU_SPEED = os.cpus()[0].speed;

// console.log(CPU_Model);
// console.log(CPU_SPEED);


// tracking the CPU usage 
function CPU_Usage() {
    const cpu_infos = os.cpus();
    // check if is not array or i the length of it is empty : if true no cpu exist
    if (!Array.isArray(cpu_infos) || cpu_infos.length === 0) return "Cpu Not found";

    // if that went correct
    let totatTime = 0;
    let totalIdle = 0;

    cpu_infos.forEach((core) => {
        for (const type in core.times) {
            totatTime += core.times[type];
        }
        totalIdle += core.times.idle;
    });

    return { totatTime, totalIdle };
}

export {CPU_Model, CPU_SPEED, CPU_Usage};

// const startTrack = CPU_Usage()

// setInterval(() => {
//     const endTrack = CPU_Usage();

//     // console.log(endTrack.totalIdle - startTrack.totalIdle);
//     // console.log(endTrack.totatTime - startTrack.totatTime);
//     const totalIdleDiff = endTrack.totalIdle - startTrack.totalIdle;
//     const totalTimeDiff = endTrack.totatTime - startTrack.totatTime;

//     console.log(100 - Math.floor((100 * totalIdleDiff) / totalTimeDiff)); 

// }, 1000);


// export {CPU_Model, CPU_SPEED};
