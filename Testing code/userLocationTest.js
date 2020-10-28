let cloudLib = require("crownstone-cloud")
let cloud = new cloudLib.CrownstoneCloud();
let credentials = require('../../credentials.json');

const crownstoneEmailAddress = credentials.email;
const crownstonePassword     = credentials.password;

let userReference;

async function login() {
    await cloud.login(crownstoneEmailAddress, crownstonePassword)

    userReference = await cloud.me();
    console.log(userReference);
    let userLocation = await userReference.currentLocation();
    console.log('userlocation: ' + userLocation.length);
    console.log(userLocation);
    console.log(userLocation[0]['inSpheres'][0]);
}
login().catch((e) => { console.log("There was a problem running this code:", e); });

async function myLoop() {
    setTimeout(async function() {
        let userLocation = await userReference.currentLocation();
        console.log('userlocation: ' + userLocation.length);
        console.log(userLocation[0]['inSpheres'][0]);
        myLoop().catch((e) => { console.log("Something went wrong with looping!", e); });
    }, 3000)
}

//myLoop().catch((e) => { console.log("Something went wrong with looping!", e); });