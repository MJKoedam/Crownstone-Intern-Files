let cloudLib = require("crownstone-cloud")
let cloud = new cloudLib.CrownstoneCloud();
let credentials = require('../../credentials.json');

const crownstoneEmailAddress = credentials.email;
const crownstonePassword     = credentials.password;

let sphereId;

async function login() {
    await cloud.login(crownstoneEmailAddress, crownstonePassword)

    let userReference = await cloud.me();
    let userLocation = await userReference.currentLocation();
    if (userLocation.length > 0) {
        let spheres = await cloud.spheres();
        if (spheres.length > 0) {

            sphereId = await userLocation[0]['inSpheres'][0]['sphereId'];
            let inLocation = await userLocation[0]['inSpheres'][0]['inLocation'];
            console.log(inLocation);
            console.log(inLocation.length);
            let roomId = await inLocation['locationId'];
            let roomName = await inLocation['locationName'];
            console.log('roomId ' + roomId);
            console.log('roomName ' + roomName);
        } else {
            console.log('Unable to find sphere');
        }
    } else {
        console.log('Unable to locate user');
    }
}
login().catch((e) => { console.log("There was a problem running this code:", e); });