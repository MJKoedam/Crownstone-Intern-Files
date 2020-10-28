let cloudLib = require("crownstone-cloud")
let cloud = new cloudLib.CrownstoneCloud();
let credentials = require('../../credentials.json');

const crownstoneEmailAddress = credentials.email;
const crownstonePassword     = credentials.password;

async function run() {
    await cloud.login(crownstoneEmailAddress, crownstonePassword);

    let allSpheres = await cloud.spheres();
    for(let i = 0; i < allSpheres.length; i++){
        let sphereId = allSpheres[i].id;
        let allCs = await cloud.sphere(sphereId).crownstones();
        for (let j = 0; j < allCs.length; j++){
            console.log("This is Crownstone " + j + " in Sphere " + i + " with ID: " + allCs[j].id + " and name: " + allCs[j].name);
            // turn specific light on:
            // if(allCs[j].name == "CrownstoneLamp"){
            //     await cloud.crownstone(allCs[j].id).turnOn();}
        }
    }
}
run().catch((e) => { console.log("There was a problem running the code:", e); });

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}