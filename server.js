require('./config/config');

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const { webPush } = require('./util/webPush');
const routes = require('./routes/routes'); 

const app = express();
const PORT = process.env.PORT || 3000;
const publicDir = path.join(__dirname + '/public');

app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(publicDir));

routes(app);

app.listen(PORT, () => {
    console.log(`Started on port http://${process.env.SERVER_IP_ADDRESS}:${PORT}`);
});

module.exports = { app };