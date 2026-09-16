import { statfs } from 'fs/promises';
import path from 'path';


// Global vars 
const Bytes_Per_KB = 1024;
const Bytes_Per_MB = Bytes_Per_KB * 1024; 
const Bytes_Per_GB = Bytes_Per_MB * 1024; 

// from bytes to GB
function bytesToGB(bytes){
    return bytes/Bytes_Per_GB;
}

// func to get ur disck space 
async function getDiskSpace(pathToCheck) {
  try {
    const stats = await statfs(pathToCheck);
    
    return {
        totalSpace: bytesToGB(stats.blocks * stats.bsize).toFixed(2), // total space
        freeSpace: bytesToGB(stats.bfree * stats.bsize).toFixed(2), // free space
        usedSpace: (bytesToGB(stats.blocks * stats.bsize) - bytesToGB(stats.bfree * stats.bsize)).toFixed(2) // used space 
    };

  } catch (err) {
    console.error("Erreur lors de la lecture du disque :", err);
  }
}


const diskSpace = await getDiskSpace("/");

export {diskSpace};
