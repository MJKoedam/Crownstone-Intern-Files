let cloudLib = require("crownstone-cloud")
let cloud = new cloudLib.CrownstoneCloud();

//credentials:
const crownstoneEmailAddress = "martjankoedam42@gmail.com";
const crownstonePassword     = "CrownstoneIntern";

let userReference;

async function login() {
    await cloud.login(crownstoneEmailAddress, crownstonePassword)

    userReference = await cloud.me();
    console.log(userReference);
}
login().catch((e) => { console.log("There was a problem running this code:", e); });

async function myLoop() {
    setTimeout(async function() {
        let userLocation = await userReference.currentLocation();
        console.log(userLocation[0]['inSpheres'][0]);
        myLoop().catch((e) => { console.log("Something went wrong with looping!", e); });
    }, 3000)
}

myLoop().catch((e) => { console.log("Something went wrong with looping!", e); });