const express = require('express');
const bodyParser = require('body-parser');
const app = express();
let cloudLib = require("crownstone-cloud")
let cloud = new cloudLib.CrownstoneCloud();
const port = 3000;
let sendUserData;

app.use(bodyParser.urlencoded({ extended: true }));
app.listen(port, () => {
    console.log(`Server running on port${port}`);
});

app.post('/', (req, res) => {
    async function login() {
        console.log("Logging in...");
        await cloud.login(req.body.name, req.body.password)
        let myUserData = await cloud.me();
        let userId = await myUserData.id();
        console.log(myUserData);
        console.log(userId);
        sendUserData = userId;
        res.send('Login successfull');
    }
    console.log(sendUserData);
    login().catch((e) => { console.log("There was a problem running this example:", e);
        res.send('Login unsuccesfull!');
    });
})