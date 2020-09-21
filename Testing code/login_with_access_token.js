let cloudLib = require("crownstone-cloud")
let cloud = new cloudLib.CrownstoneCloud();

const crownstoneEmailAddress = "username";
const crownstonePassword     = "password";

async function login() {
    await cloud.login(crownstoneEmailAddress, crownstonePassword)

    let userReference = await cloud.me();
    console.log(userReference);
    console.log(userReference.rest.tokenStore.accessToken);
}
login().catch((e) => { console.log("There was a problem running this code:", e); });