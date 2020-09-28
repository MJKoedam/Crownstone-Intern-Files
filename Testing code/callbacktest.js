let cloudLib = require("crownstone-cloud")
let cloud = new cloudLib.CrownstoneCloud();

//credentials:
const crownstoneEmailAddress = "username";
const crownstonePassword     = "password";

async function login(callback) {
    await cloud.login(crownstoneEmailAddress, crownstonePassword)

    let userReference = await cloud.me();
    console.log("reference: " + userReference);
    callback();
}
function goShopping(callback){
    console.log("console 1");
    callback();
}

//goShopping(function(){console.log("Very done");});
login(function(){console.log("Very done");}).catch((e) => { console.log("There was a problem running this code:", e); });
console.log("testting...");