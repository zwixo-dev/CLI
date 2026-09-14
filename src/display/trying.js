import {getFree_Memory, getTotal_memo} from '../core/memory.js';
// import {CPU_Model, CPU_SPEED} from "../core/cpu.js"
import {getNetworkUploadSpeed} from "../core/network.js";

// console.log(CPU_Model);
// console.log(CPU_SPEED, "MHz");
console.log("current free memory :",getFree_Memory());
console.log("you total memory is : ",getTotal_memo());





setInterval(async() => {
    const speed_test = await getNetworkUploadSpeed();
    console.log(speed_test);
}, 1000);


