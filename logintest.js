let cloudLib = require("crownstone-cloud")
let cloud = new cloudLib.CrownstoneCloud();

const crownstoneEmailAddress = "martjankoedam42@gmail.com";
const crownstonePassword     = "CrownstoneIntern";

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

    //getting userdata from the cloud
    let myUserData = await cloud.me().data()
    console.log(myUserData);

    //getting crownstonedata from the cloud
    let allCsData = await cloud.crownstones().data();
    console.log(allCsData);

    //get the id of the first crownstone
    let testCrownStone = cloud.crownstoneById(allCsData[0]["id"]);

    //turn crownstone on and off
    await testCrownStone.turnOn();
    sleep(2000);
    await testCrownStone.turnOff();
}
run().catch((e) => { console.log("There was a problem running this example:", e); });

