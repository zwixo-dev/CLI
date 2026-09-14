import NetworkSpeed from "network-speed";

const testNetworkSpeed = new NetworkSpeed();


async function getNetworkDownloadSpeed() {
    const baseUrl = 'https://eu.httpbin.org/stream-bytes/500000';
    const fileSizeInBytes = 500000;
    const speed = await testNetworkSpeed.checkDownloadSpeed(baseUrl, fileSizeInBytes);
    console.log(speed);
}


async function getNetworkUploadSpeed() {
    try {
        const options = {
            hostname: 'www.google.com',
            port: 80,
            path: '/catchers/544b09b4599c1d0200000289',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const fileSizeInBytes = 2000000;
        const speed = await testNetworkSpeed.checkUploadSpeed(options, fileSizeInBytes);
        
        if (!speed) return "Something went wrong run the cmd agian.."
        // else 
        return speed;
    } catch (error) {
        return console.log("Something went wrong run the cmd agian..");
    }

}

export {getNetworkUploadSpeed}

// setInterval(async() => {
//     const speed_test = await getNetworkUploadSpeed();
//     console.log(speed_test);
// }, 1000);


