let cloudLib = require("crownstone-cloud")
let cloud = new cloudLib.CrownstoneCloud();

//credentials:
const crownstoneEmailAddress = "username";
const crownstonePassword     = "password";

//function to login to the cloud and return the userdata
async function login() {
    await cloud.login(crownstoneEmailAddress, crownstonePassword)

    let userReference = await cloud.me();
    console.log(userReference);

    let userId       = await userReference.id();
    console.log(userId);
    let userData     = await userReference.data();
    console.log(userData);
    let userLocation = await userReference.currentLocation();
    console.log(userLocation);
    console.log(userLocation.length);
    console.log("locatie: ");
    console.log(userLocation[0]);

    //GET SPHERE ID OF THE CURRENT LOCATION OF THE USER
    let sphereId = userLocation[0]['inSpheres'][0]['sphereId'];
    console.log(sphereId);

    let allCs = await cloud.sphere(sphereId).crownstones();
    for (let i = 0; i < allCs.length; i++){
        console.log("This is Crownstone " + i + " with ID: " + allCs[i].id + " and name: " + allCs[i].name);
    }
    console.log("Extra:");
    console.log(allCs[0]);

    // let myUserData = await cloud.me().data()
    // console.log(myUserData);
    //
    // let myLocationData = await cloud.me().currentLocation()
    // console.log(myLocationData);
    //
    // let location = await cloud.locations()
    // console.log(location);
}
login().catch((e) => { console.log("There was a problem running this code:", e); });