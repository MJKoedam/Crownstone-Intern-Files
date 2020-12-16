let cloudLib = require("crownstone-cloud")
let cloud = new cloudLib.CrownstoneCloud();
let credentials = require('../../../credentials.json');

const crownstoneEmailAddress = credentials.email;
const crownstonePassword     = credentials.password;

async function run() {
    await cloud.login(crownstoneEmailAddress, crownstonePassword);
    let keysInSphere = await cloud.sphere('5faaaef363c8620004b62f2a').keys();
    keysInSphere.sphereKeys.forEach(function (sphereKey) {
        console.log(sphereKey);
    });
}
run().catch((e) => { console.log("There was a problem running the code:", e); });
