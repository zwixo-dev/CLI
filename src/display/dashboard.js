import { CPU_Model, CPU_SPEED, CPU_Usage } from "../core/cpu.js";
import { getFree_Memory, getTotal_memo } from "../core/memory.js";
import { getNetworkUploadSpeed } from "../core/network.js";

// ---- function for cpu tracking ----
const startTrack = CPU_Usage();
function cpuTracking() {
  const endTrack = CPU_Usage();

  // calculating the diff
  const totalIdleDiff = endTrack.totalIdle - startTrack.totalIdle;
  const totalTimeDiff = endTrack.totatTime - startTrack.totatTime;

  return 100 - Math.floor((100 * totalIdleDiff) / totalTimeDiff);
}

setInterval(async() => {
    // wait until i get the network data :)
    const networkSpeedTest = await getNetworkUploadSpeed();
    
    // process.stdout.write("\x1b[5A\x1b[0G");
    process.stdout.write("\x1b[H");

    process.stdout.write(`\x1b[KCPU Model: ${CPU_Model}\n`);
    process.stdout.write(`\x1b[KCPU Speed: ${CPU_SPEED} MHz\n`);
    process.stdout.write(`\x1b[KCPU Usage: ${cpuTracking()}%\n`);
    process.stdout.write(`\x1b[KRAM : ${getTotal_memo()}/${getFree_Memory().toFixed(4)} GB\n`);

    // network infos
    if(networkSpeedTest && Object.keys(networkSpeedTest).length === 3){
        process.stdout.write(`\x1b[KNetwork : ${networkSpeedTest.bps}bps | ${networkSpeedTest.kbps}kbps | ${networkSpeedTest.kbps}mbps\n`);
    }else{
        process.stdout.write(`\x1b[KNetwork : loading...!\n`);
    }
}, 1000);