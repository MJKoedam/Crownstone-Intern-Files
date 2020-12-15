let cloudLib = require("crownstone-cloud")
let cloud = new cloudLib.CrownstoneCloud();
let credentials = require('../../../credentials.json');

const crownstoneEmailAddress = credentials.email;
const crownstonePassword     = credentials.password;

async function run() {
    await cloud.login(crownstoneEmailAddress, crownstonePassword);
    let stoneId = "5faaaf2263c8620004b62f48"
    let crownstoneData = await cloud.crownstone(stoneId).data();
    console.log('Mac address: ' + crownstoneData.address);
}
run().catch((e) => { console.log("There was a problem running the code:", e); });
