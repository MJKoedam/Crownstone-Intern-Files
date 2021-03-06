let cloudLib = require("crownstone-cloud")
let cloud = new cloudLib.CrownstoneCloud();
let credentials = require('../../credentials.json');

const crownstoneEmailAddress = credentials.email;
const crownstonePassword     = credentials.password;

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
    await cloud.login(crownstoneEmailAddress, crownstonePassword);

    let myUserData = await cloud.me().currentLocation();
    console.log(myUserData);

    //let allCsData = await cloud.crownstones();

    //console.log(allCsData[1]);
    // select one crownstone by ID
    let idFilter = '5faab3de63c8620004b6307b';
    let dataFromId = await cloud.crownstone(idFilter).data();

    console.log(dataFromId);

    let switchState = await cloud.crownstone(idFilter).currentSwitchState();

    console.log(switchState);



    let leds = cloud.crownstone('5faaaf2263c8620004b62f48');
    await leds.turnOn();
    sleep(5000);
    await leds.turnOff();

    //get the id of the first crownstone
    //let testCrownStone = cloud.crownstoneById(allCsData[1]["id"]);
}
run().catch((e) => { console.log("There was a problem running the code:", e); });

