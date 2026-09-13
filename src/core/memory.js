import os from "os";

// Global vars 
const Bytes_Per_KB = 1024;
const Bytes_Per_MB = Bytes_Per_KB * 1024; 
const Bytes_Per_GB = Bytes_Per_MB * 1024; 

// chnage the current memo value from bytes to GB
function bytesToGB(bytes){
    return bytes/Bytes_Per_GB;
}

// func to return the curr free memory
function getFree_Memory(){
    const curr_free_memo = os.freemem();
    return bytesToGB(curr_free_memo);
}

// func to return the curr total memory
function getTotal_memo(){
    const total_memo =  os.totalmem();    
    return Math.round(bytesToGB(total_memo));
}


export {getFree_Memory, getTotal_memo};