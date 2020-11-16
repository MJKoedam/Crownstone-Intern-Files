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

    // for (let i = 0; i < presentPeople.length; i++) {
    //     console.log(presentPeople.every(testfunction));
    // }

    console.log(checkIfEqual(presentPeople, "5f4cbb44bfeb1e0004229a8c"));

}
login().catch((e) => { console.log("There was a problem running this code:", e); });

function testfunction(userId) {
    console.log('het userid:');
    console.log(userId.userId);
    return true;
}

function checkIfEqual(array, checkValue) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i].userId);
        console.log(checkValue);
        if (array[i].userId === checkValue) {
            console.log('testing.. with checkvalue: ' + checkValue);
            console.log(array);
            console.log('splicing..');
            array.splice(i, 1);
            console.log(array);
            console.log('splicing..');
            array.splice(i, 1);
            console.log(array);
            return true;
        }
    }
    return false;
}

function checkuserid(userId) {
    console.log('userId:');
    console.log(userId.userId);
    console.log('is ' + userId.userId + ' the same as 5fad28a978609200046f23ca ?');
    return userId.userId === "5fad28a978609200046f23ca";
}