let cloudLib = require("crownstone-cloud")
let cloud = new cloudLib.CrownstoneCloud();
let credentials = require('../../credentials.json');

const crownstoneEmailAddress = credentials.email;
const crownstonePassword     = credentials.password;

async function run() {
    console.log('login');
    await cloud.login(crownstoneEmailAddress, crownstonePassword);

    // let userReference = await cloud.me();
    // console.log(userReference);
    // let userLocation = await userReference.currentLocation();
    // console.log(userLocation);
    console.log('await 1');
    let testing = await cloud.me();
    console.log('await 2');
    let testing2 = await testing.currentLocation();
    console.log('currentLocation: ' + testing2.length);
    let t1 = await testing2[0];
    console.log(t1);
    //let t2 = await t1['inSpheres'];
    //console.log(t2);

    let devices = await cloud.sphere('5faaaef363c8620004b62f2a').crownstones();
    console.log("DEVICE:");

    for (let i = 0; i < devices.length; i++) {
        console.log(devices[i].name);
        console.log(devices[i].abilities[0].enabled);
    }

    //
    // let spheres = await cloud.spheres();
    // console.log('spheres: ' + spheres.length);

}
run().catch((e) => { console.log("There was a problem running the code:", e); });
