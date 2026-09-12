import os from "os"



// 1kb = 1024 byte
// 1mb = 1024 kb
// 1G  = 1024 mb


// Global vars 
const Bytes_Per_KB = 1024;
const Bytes_Per_MB = Bytes_Per_KB * 1024; 
const Bytes_Per_GB = Bytes_Per_MB * 1024; 


function bytesToGB(bytes){
    return bytes/Bytes_Per_GB;
}


function checkCPU_info(CPU_INFO){
    if(Array.isArray(CPU_INFO)){
        return [CPU_INFO[0].model, CPU_INFO[0].speed, machineType]; // cpu model and speed
    }else{
        console.log("Cpu Not found !")
    }
}

function CPU_Usage(CPU_INFO){
        /*  user <number> The number of milliseconds the CPU has spent in user mode.
        nice <number> The number of milliseconds the CPU has spent in nice mode.
        sys <number> The number of milliseconds the CPU has spent in sys mode.
        idle <number> The number of milliseconds the CPU has spent in idle mode.
        irq <number> The number of milliseconds the CPU has spent in irq mode. */

    let user = 0;
    let nice = 0;
    let sys = 0;
    let idle = 0;
    let irq = 0;

    for (const key in CPU_INFO) {
        // console.log(CPU_INFO[key].times);
        // console.log(CPU_INFO[key].times.user);
        // console.log(CPU_INFO[key].times.nice);
        // console.log(CPU_INFO[key].times.sys);
        // console.log(CPU_INFO[key].times.idle);
        // console.log(CPU_INFO[key].times.irq);
        user += CPU_INFO[key].times.user;
        nice += CPU_INFO[key].times.nice;
        sys  += CPU_INFO[key].times.sys;
        idle += CPU_INFO[key].times.idle;
        irq  += CPU_INFO[key].times.irq;
    }

    let total = user + nice + sys + idle + irq
    return {total, idle};

}


const totalMemory = os.totalmem();
const free_memory = os.freemem();
const osType = os.type();
const cpuType = os.cpus();
const machineType = os.machine();



// console.log(bytesToGB(totalMemory), "GB");
// console.log(bytesToGB(free_memory), "GB");
// console.log("osType : ",osType);
// console.log(cpuType);
// console.log(checkCPU_info(cpuType));



// setInterval(() => { 
//     console.log(CPU_Usage(cpuType));    
// }, 1000);

