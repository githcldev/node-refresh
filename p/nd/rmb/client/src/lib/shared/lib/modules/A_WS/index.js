'use strict';
let A_WS = {
}
A_WS.localDbInit = function localDbInit(client_cms_config, cb) {
	// 	cb(local_config, status)		// status = true for success and vice-versa
	console.log(client_cms_config)
	//	pushTblDb(dt)
	
	//	loop on required tables array given in client_cms_config
		//	check dev mode
			//	if dev then
				//	import tbls from fs
				//	pushTblDB(dt)
			//	if prod then
				// 	check avialable WS connection
					//	if not avaiable create it
				//	get tbls from ws
				//	pushTblDB(dt)
};
A_WS.send = function send(msg) {
	// package = {
	// 	module: 'index', // index | user | admin
	// 	subModule: 'header',	// header | search | menu | uservalidate | l-sidebar | r-sidebar | content | page | section | widget |
	// 	query: '',
	// 	date: {}
	// }
};
A_WS.close = function close() {
	      A_WS.connection.onclose = function () {
        // websocket is closed.
        A_WS.available = false;
        console.log("Connection is closed...");
      };
};
A_WS.open = function open() {
	if ("WebSocket" in window) {
      console.log("WebSocket is supported by your Browser!");
      // Let us open a web socket
      A_WS.connection = new WebSocket("ws://localhost:3010/");
      A_WS.connection.onopen = function () {
        // Web Socket is connected, send data using send()
        A_WS.available = true;
        A_WS.connection.send("Message to server from client " + clientMsgNumber++);
        console.log("Message is sent...");
      };
      A_WS.connection.onmessage = function (evt) {
        let received_msg = evt.data;
        console.log(received_msg);
        setTimeout(function () {
          if(A_WS.available) 
            A_WS.connection.send("Message to server from client " + clientMsgNumber++);
        }, 2000)
      };
    } else {
      // The browser doesn't support WebSocket
      console.log("WebSocket NOT supported by your Browser!");
    }
};
A_WS.available = false;
A_WS.connection = null;
module.exports = A_WS;