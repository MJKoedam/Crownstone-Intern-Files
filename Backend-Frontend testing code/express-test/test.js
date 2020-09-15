const express = require('express');
const bodyParser = require('body-parser');
const app = express();
let cloudLib = require("crownstone-cloud")
let cloud = new cloudLib.CrownstoneCloud();

app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;

app.listen(port, () => {
    console.log(`Server running on port${port}`);
});

    let sendUserData;
app.post('/test', (req, res) => {
    async function login() {
        console.log("Logging in...");
        await cloud.login(req.body.name, req.body.password)
        let myUserData = await cloud.me();
        let userId       = await myUserData.id();
        console.log(myUserData);
        sendUserData = userId;
    }
    login().catch((e) => { console.log("There was a problem running this example:", e); });
    console.log(sendUserData);
    res.send('UserId: ' + sendUserData);
})
