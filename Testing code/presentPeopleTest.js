let cloudLib = require("crownstone-cloud")
let cloud = new cloudLib.CrownstoneCloud();
let credentials = require('../../credentials.json');

const crownstoneEmailAddress = credentials.email;
const crownstonePassword     = credentials.password;

async function login() {
    await cloud.login(crownstoneEmailAddress, crownstonePassword)

    let userReference = await cloud.me();
    let userLocation = await userReference.currentLocation();
    let sphereId = await userLocation[0]['inSpheres'][0]['sphereId'];
    let sphere = await cloud.sphere(sphereId);
    console.log(sphere);

    let presentPeople = await sphere.presentPeople();
    console.log(presentPeople);
}
login().catch((e) => { console.log("There was a problem running this code:", e); });