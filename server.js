require('./config/config');

const https = require('https');
const express = require('express');
const bodyParser = require('body-parser');

const { webPush } = require('./util/webPush');
const routes = require('./routes/routes'); 

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

routes(app);

app.listen(PORT, () => {
    console.log(`Started on port http://${process.env.SERVER_IP_ADDRESS}:${PORT}`);
});

module.exports = { app };