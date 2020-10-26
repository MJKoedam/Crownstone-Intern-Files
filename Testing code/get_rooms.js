let cloudLib = require("crownstone-cloud")
let cloud = new cloudLib.CrownstoneCloud();

const crownstoneEmailAddress = "username";
const crownstonePassword     = "password";

async function login() {
    await cloud.login(crownstoneEmailAddress, crownstonePassword)
    let rooms = await cloud.sphere("5f872c0fdaa88e0004e8eb2a").locations();
    console.log(rooms);
}
login().catch((e) => { console.log("There was a problem running this code:", e); });