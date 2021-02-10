const sseLib = require('crownstone-sse')
let sse = new sseLib.CrownstoneSSE();
let credentials = require('../../credentials.json');

const crownstoneEmailAddress = credentials.email;
const crownstonePassword     = credentials.password;

let eventHandler = (data) => {
    if(data.type === 'presence' && data.subType === 'enterLocation'){
        let location = data.location.name;
        let user = data.user.name;
        console.log(user + ' entered location: ' + location);
        console.log(data);
    }
    if(data.type === 'presence' && data.subType === 'exitLocation'){
        let location = data.location.name;
        let user = data.user.name;
        console.log(user + ' left location: ' + location);
        console.log(data);
    }
    if(data.type === 'dataChange' && data.subType === 'stones' && data.operation === 'update') {
        console.log(data);
        console.log(data.changedItem.id);
    }
    if(data.type === 'abilityChange' && data.subType === 'dimming') {
        console.log(data.stone.id);
        console.log(data.ability.enabled);
    }
}

async function events() {
        console.log('Logging in...')
        await sse.login( crownstoneEmailAddress , crownstonePassword )
        console.log('Connecting to event server...')
        await sse.start(eventHandler);
}
events().catch((e) => { console.log('There was a problem running this code:', e); });
