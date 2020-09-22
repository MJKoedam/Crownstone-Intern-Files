let cloudLib = require("crownstone-cloud")
let cloud = new cloudLib.CrownstoneCloud();

const crownstoneEmailAddress = "martjankoedam42@gmail.com";
const crownstonePassword     = "CrownstoneIntern";

async function login() {
    cloud.setAccessToken("pDrGCZcRGu1CLA9hu8gj0MVpBFAiTUoORSoWtU81AbAnC30FrhY0bPXgPBTE5ltD");
    //await cloud.login(crownstoneEmailAddress, crownstonePassword)

    let userReference = await cloud.me().data();
    console.log(userReference);
    // console.log(userReference.rest.tokenStore.accessToken);
    //
    // cloud.setAccessToken(userReference.rest.tokenStore.accessToken);
    //
    // console.log(await cloud.me().data());
}
login().catch((e) => { console.log("There was a problem running this code:", e); });