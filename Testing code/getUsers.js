let cloudLib = require("crownstone-cloud")
let cloud = new cloudLib.CrownstoneCloud();
let credentials = require('../../credentials.json');

const crownstoneEmailAddress = credentials.email;
const crownstonePassword     = credentials.password;

let sphereId;

async function login(){
    await cloud.login(crownstoneEmailAddress, crownstonePassword)

    let userReference = await cloud.me();
    let userLocation = await userReference.currentLocation();
    sphereId = await userLocation[0]['inSpheres'][0]['sphereId'];
    let sphere = await cloud.sphere(sphereId);
    let users = await sphere.users();
    console.log(users);
    //console.log(users);
    console.log('members:');
    console.log(users.members.length);
    console.log(users.members);
    console.log('admins:');
    console.log(users.admins.length);
    console.log(users.admins);
    console.log('guests:');
    console.log(users.guests.length);
    console.log(users.guests);
}
login().catch((e) => { console.log("There was a problem running this code:", e); });