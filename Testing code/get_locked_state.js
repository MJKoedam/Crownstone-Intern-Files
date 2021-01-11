let cloudLib = require("crownstone-cloud")
let cloud = new cloudLib.CrownstoneCloud();
let credentials = require('../../credentials.json');

const crownstoneEmailAddress = credentials.email;
const crownstonePassword     = credentials.password;

//function to login to the cloud and return the userdata
async function login() {
    await cloud.login(crownstoneEmailAddress, crownstonePassword)
    let idFilter = '5faaaf2263c8620004b62f48';
    let dataFromId = await cloud.crownstone(idFilter).data();
    console.log(dataFromId);
    console.log(dataFromId.locked);
    console.log(dataFromId.currentSwitchState);
    console.log(dataFromId.currentSwitchStateId);
}
login().catch((e) => { console.log("There was a problem running this code:", e); });