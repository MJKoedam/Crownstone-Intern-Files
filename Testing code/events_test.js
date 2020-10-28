const sseLib = require('crownstone-sse')
let sse = new sseLib.CrownstoneSSE();
let credentials = require('../../credentials.json');

const crownstoneEmailAddress = credentials.email;
const crownstonePassword     = credentials.password;

let eventHandler = (data) => {
    if(data.type === 'presence' && data.subType === 'enterLocation'){
        let location = data.location.name;
        console.log('user entered location: ' + location)
    }
}

async function events() {
        console.log('Logging in...')
        await sse.login( crownstoneEmailAddress , crownstonePassword )
        console.log('Connecting to event server...')
        await sse.start(eventHandler);
}
events().catch((e) => { console.log('There was a problem running this code:', e); });