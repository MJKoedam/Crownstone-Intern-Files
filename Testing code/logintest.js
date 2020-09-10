//cloud instance - require
let cloudLib = require("crownstone-cloud")
let cloud = new cloudLib.CrownstoneCloud();

//cloud instance - import
// import {CrownstoneCloud} from 'crownstone-cloud';
// const cloud = new CrownstoneCloud();

//credentials:
const crownstoneEmailAddress = "username";
const crownstonePassword     = "password";

//function to login to the cloud and return the userdata
async function login() {
    await cloud.login(crownstoneEmailAddress, crownstonePassword)
    let myUserData = await cloud.me().data()
    console.log(myUserData);
}
login().catch((e) => { console.log("There was a problem running this example:", e); });