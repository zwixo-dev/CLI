import os, { type } from "os";

let CPU_Model = os.cpus()[0].model;
let CPU_SPEED = os.cpus()[0].speed;

// tracking the CPU usage 
function CPU_Usage() {
    const cpu_infos = os.cpus();
    // check if is not array or i the length of it is empty : if true no cpu exist
    if (!Array.isArray(cpu_infos) || cpu_infos.length === 0) return "Cpu Not found";

    // if that went correct
    let totalTime = 0;
    let totalIdle = 0;

    cpu_infos.forEach((core) => {
        for (const type in core.times) {
            totalTime += core.times[type];
        }
        totalIdle += core.times.idle;
    });

    return { totalTime, totalIdle };
}

export {CPU_Model, CPU_SPEED, CPU_Usage};

// const startTrack = CPU_Usage()

// setInterval(() => {
//     const endTrack = CPU_Usage();

//     // console.log(endTrack.totalIdle - startTrack.totalIdle);
//     // console.log(endTrack.totalTime - startTrack.totalTime);
//     const totalIdleDiff = endTrack.totalIdle - startTrack.totalIdle;
//     const totalTimeDiff = endTrack.totalTime - startTrack.totalTime;

//     console.log(100 - Math.floor((100 * totalIdleDiff) / totalTimeDiff)); 

// }, 1000);


// export {CPU_Model, CPU_SPEED};
