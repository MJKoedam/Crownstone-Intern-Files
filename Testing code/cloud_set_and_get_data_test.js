let cloudLib = require("crownstone-cloud")
let cloud = new cloudLib.CrownstoneCloud();

const crownstoneEmailAddress = "username";
const crownstonePassword     = "password";

//delay function to test turnon/turnoff-function
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

//async method of getting data from cloud
async function run() {
    await cloud.login(crownstoneEmailAddress, crownstonePassword)

    //let allCsData = await cloud.crownstones();

    //console.log(allCsData[1]);
    // select one crownstone by ID
    let idFilter = '5f4f9e2c145e6e0004f613f7';
    let dataFromId = await cloud.crownstone(idFilter).data();

    console.log(dataFromId);

    let leds = cloud.crownstone('5f4f9e2c145e6e0004f613f7');
    await leds.turnOn();
    sleep(5000);
    await leds.turnOff();

    //get the id of the first crownstone
    //let testCrownStone = cloud.crownstoneById(allCsData[1]["id"]);
}
run().catch((e) => { console.log("There was a problem running the code:", e); });

