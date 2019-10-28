require('./config/config');

const path = require('path');
const express = require('express');
const session = require('cookie-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const { webPush } = require('./util/webPush');
const routes = require('./routes/routes'); 

const app = express();
const PORT = process.env.PORT || 3000;

const publicDir = path.join(__dirname + `/public`);

app.use(bodyParser.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(express.static(publicDir));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "charistheo.io");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Headers", "Origin, Accept, Content-Type");
    next();
});
app.use(session({
    name: 'session',
    secret: process.env.COOKIE_SECRET
}))

routes(app);

app.listen(PORT, () => {
    console.log(`Started on port http://${process.env.SERVER_IP_ADDRESS}:${PORT}`);
});

module.exports = { app };