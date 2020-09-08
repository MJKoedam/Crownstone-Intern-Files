let cloudLib = require("crownstone-cloud")
let cloud = new cloudLib.CrownstoneCloud();

const crownstoneEmailAddress = "martjankoedam42@gmail.com";
const crownstonePassword     = "CrownstoneInter";

async function run() {
    await cloud.login(crownstoneEmailAddress, crownstonePassword)

    let myUserData = await cloud.me().data()
    console.log(myUserData);

}
run().catch((e) => { console.log("There was a problem running the code:", e); });