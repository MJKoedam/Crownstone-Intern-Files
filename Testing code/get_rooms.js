let cloudLib = require("crownstone-cloud")
let cloud = new cloudLib.CrownstoneCloud();
let credentials = require('../../credentials.json');

const crownstoneEmailAddress = credentials.email;
const crownstonePassword     = credentials.password;

async function login() {
    await cloud.login(crownstoneEmailAddress, crownstonePassword)
    let rooms = await cloud.sphere("5f9991dfb723ac00049c2792").locations();
    console.log(rooms.length);
    console.log(rooms);
}
login().catch((e) => { console.log("There was a problem running this code:", e); });