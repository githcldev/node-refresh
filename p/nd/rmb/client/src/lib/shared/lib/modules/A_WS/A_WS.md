
-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------

let clientMsgNumber = 1;
  let socketOpen = false;
  function WebSocketTest() {
    if ("WebSocket" in window) {
      console.log("WebSocket is supported by your Browser!");
      // Let us open a web socket
      let ws = new WebSocket("ws://localhost:3010/");
      ws.onopen = function () {
        // Web Socket is connected, send data using send()
        socketOpen = true;
        ws.send("Message to server from client " + clientMsgNumber++);
        console.log("Message is sent...");
      };
      ws.onmessage = function (evt) {
        let received_msg = evt.data;
        console.log(received_msg);
        setTimeout(function () {
          if(socketOpen) 
            ws.send("Message to server from client " + clientMsgNumber++);
        }, 2000)
      };
      ws.onclose = function () {
        // websocket is closed.
        socketOpen = false;
        console.log("Connection is closed...");
      };
    } else {
      // The browser doesn't support WebSocket
      console.log("WebSocket NOT supported by your Browser!");
    }
  }
  setTimeout(function () {
    WebSocketTest()
  }, 1000)

-------------------------------------------------

webSocket will be used after achieving socket settings through clientConfig api
  - it will be further used to get any new data requirements
  - It should be instantiated / initialised only on requirement basic
  - We should try to cover most of requirement from indexDb module iteself on priority

-------------------------------------------------

A_WS	//	App WebSocket

/**
 * Comment
 *
 * @class
 * @param {string=} message The message.
 */