let SocketCore = (function () {
  let privateProps = new WeakMap();
  class SocketCore {
    static init(app) {
      var expressWs = require('express-ws')(app);
      var serverMsgNumber = 1;
      app.ws('/', function(ws, req) {
        ws.on('message', function(msg) {
          console.log(msg);
          setTimeout(function() {
            if(ws.OPEN === 1) ws.send("Message from server to client " + serverMsgNumber++);
          }, 2000)
        });
      });
    };
    static db(){
    }
  }
  return SocketCore;
})();
module.exports = SocketCore;