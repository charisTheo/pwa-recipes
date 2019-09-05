module.exports.getServerIpAddress = function() {
    var os = require('os');
    var ifaces = os.networkInterfaces();
    var serverIpAddress;
  
    Object.keys(ifaces).forEach(function (ifname) {
        ifaces[ifname].forEach(function (iface) {
          if ('IPv4' !== iface.family || iface.internal !== false) {
            // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
            return;
          }
      
          serverIpAddress = iface.address;
        });
    });
  
    return serverIpAddress;
}