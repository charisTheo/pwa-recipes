require('dotenv').config();
require('./../db/mongoose');

const { getServerIpAddress } = require('./../util/serverUtil');

process.env['SERVER_IP_ADDRESS'] = getServerIpAddress();
