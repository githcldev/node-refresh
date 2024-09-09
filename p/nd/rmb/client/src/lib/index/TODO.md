


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



-------------------------------------------------

TODO
  =>  Open iframe with given key
  =>  Test login / logout routes, protected routes functionality
  =>  Put some basic widgets of minimum 2 types
  =>  Advance into user authentication
  =>  Side advertisements
  =>  Google analytics

  =>  start home page ssr using ng

-------------------------------------------------

whatwg-fetch
  <script src="https://cdn.jsdelivr.net/npm/whatwg-fetch@3.0.0/dist/fetch.umd.min.js"></script>

classnames
  <script src="https://cdnjs.cloudflare.com/ajax/libs/classnames/2.2.6/index.min.js" integrity="sha256-F62ndp/nGwAANIGnIBg5zfQcb3cRpzGwVAWlH3pZzpk=" crossorigin="anonymous"></script>

-------------------------------------------------

// A_START.init() should be passed to seperate web worker
  // if web-worker feature available with browser

-------------------------------------------------

- toastr / growl / dialog success / failure / message dialog    // client specific
  
-------------------------------------------------
    
<script type="text/javascript">
  var clientMsgNumber = 1;
  var socketOpen = false;
  function WebSocketTest() {
    if ("WebSocket" in window) {
      console.log("WebSocket is supported by your Browser!");
      // Let us open a web socket
      var ws = new WebSocket("ws://localhost:3010/");
      ws.onopen = function () {
        // Web Socket is connected, send data using send()
        socketOpen = true;
        ws.send("Message to server from client " + clientMsgNumber++);
        console.log("Message is sent...");
      };
      ws.onmessage = function (evt) {
        var received_msg = evt.data;
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
</script>

-------------------------------------------------

ASC // and this can be put to sharedModule

app signalling channel

-------------------------------------------------

'@babel/polyfill', 'lodash', 'react-router', 'js-cookie', 'redux-saga/effects', 'isomorphic-fetch', 'core-js/library/fn/global', 'core-js/es6'? 'core-js/fn/array/flat-map', 'core-js/fn/array/includes', 'core-js/fn/string/pad-end', 'core-js/fn/string/pad-start', 'core-js/fn/string/trim-end'? 'core-js/fn/object/get-own-property-descriptors', 'core-js/fn/string/trim-start', 'core-js/fn/object/values', 'core-js/fn/symbol/async-iterator'? 'core-js/fn/object/entries', 'core-js/fn/promise/finally', 'core-js/web', 'regenerator-runtime/runtime', '@babel/runtime/helpers/esm/inheritsLoose'? 'create-react-context', 'prop-types', 'tiny-warning', 'history', 'tiny-invariant', 'path-to-regexp', 'react-is', '@babel/runtime/helpers/esm/extends', '@babel/runtime/helpers/esm/objectWithoutPropertiesLoose', 'hoist-non-react-statics', '@redux-saga/is', 'whatwg-fetch', '@redux-saga/core/effects', 'isarray', 'util', 'fbjs/lib/warning', 'gud', '@redux-saga/symbols', '@redux-saga/delay-p', 'value-equal', 'resolve-pathname', 'inherits'

-------------------------------------------------

?? 'react-dom' will be served by https://unpkg.com/react-dom@16.8.6/umd/react-dom.production.min.js
?? 'react' will be served by https://unpkg.com/react@16.8.6/umd/react.production.min.js
?? 'react-redux' will be served by https://unpkg.com/react-redux@6.0.1/dist/react-redux.min.js
?? 'redux' will be served by https://unpkg.com/redux@4.0.1/dist/redux.min.js
?? 'react-router-dom' will be served by https://unpkg.com/react-router-dom@5.0.0/umd/react-router-dom.min.js
?? 'redux-saga' will be served by https://unpkg.com/redux-saga@1.0.2/dist/redux-saga.min.js

'@babel/polyfill' couldn't be found, please add it to https://github.com/mastilver/module-to-cdn/blob/master/modules.json
? 'lodash' couldn't be found, please add it to https://github.com/mastilver/module-to-cdn/blob/master/modules.json
? 'react-router' couldn't be found, please add it to https://github.com/mastilver/module-to-cdn/blob/master/modules.json
? 'js-cookie' couldn't be found, please add it to https://github.com/mastilver/module-to-cdn/blob/master/modules.json
? 'redux-saga/effects' couldn't be found, please add it to https://github.com/mastilver/module-to-cdn/blob/master/modules.json
? 'isomorphic-fetch' couldn't be found, please add it to https://github.com/mastilver/module-to-cdn/blob/master/modules.json
? 'core-js/library/fn/global' couldn't be found, please add it to https://github.com/mastilver/module-to-cdn/blob/master/modules.json
? 'core-js/es6' couldn't be found, please add it to https://github.com/mastilver/module-to-cdn/blob/master/modules.json
? 'core-js/fn/array/flat-map' couldn't be found, please add it to https://github.com/mastilver/module-to-cdn/blob/master/modules.json
? 'core-js/fn/array/includes' couldn't be found, please add it to https://github.com/mastilver/module-to-cdn/blob/master/modules.json
? 'core-js/fn/string/pad-end' couldn't be found, please add it to https://github.com/mastilver/module-to-cdn/blob/master/modules.json
? 'core-js/fn/string/pad-start' couldn't be found, please add it to https://github.com/mastilver/module-to-cdn/blob/master/modules.json
? 'core-js/fn/string/trim-end' couldn't be found, please add it to https://github.com/mastilver/module-to-cdn/blob/master/modules.json
? 'core-js/fn/object/get-own-property-descriptors' couldn't be found, please add it to https://github.com/mastilver/module-to-cdn/blob/master/modules.json
? 'core-js/fn/string/trim-start' couldn't be found, please add it to https://github.com/mastilver/module-to-cdn/blob/master/modules.json
? 'core-js/fn/object/values' couldn't be found, please add it to https://github.com/mastilver/module-to-cdn/blob/master/modules.json
? 'core-js/fn/symbol/async-iterator' couldn't be found, please add it to https://github.com/mastilver/module-to-cdn/blob/master/modules.json
? 'core-js/fn/object/entries' couldn't be found, please add it to https://github.com/mastilver/module-to-cdn/blob/master/modules.json
? 'core-js/fn/promise/finally' couldn't be found, please add it to https://github.com/mastilver/module-to-cdn/blob/master/modules.json
? 'core-js/web' couldn't be found, please add it to https://github.com/mastilver/module-to-cdn/blob/master/modules.json
? 'regenerator-runtime/runtime' couldn't be found, please add it to https://github.com/mastilver/module-to-cdn/blob/master/modules.json
? '@babel/runtime/helpers/esm/inheritsLoose' couldn't be found, please add it to https://github.com/mastilver/module-to-cdn/blob/master/modules.json
? 'create-react-context' couldn't be found, please add it to https://github.com/mastilver/module-to-cdn/blob/master/modules.json
? 'prop-types' couldn't be found, please add it to https://github.com/mastilver/module-to-cdn/blob/master/modules.json
? 'tiny-warning' couldn't be found, please add it to https://github.com/mastilver/module-to-cdn/blob/master/modules.json
? 'history' couldn't be found, please add it to https://github.com/mastilver/module-to-cdn/blob/master/modules.json
? 'tiny-invariant' couldn't be found, please add it to https://github.com/mastilver/module-to-cdn/blob/master/modules.json
? 'path-to-regexp' couldn't be found, please add it to https://github.com/mastilver/module-to-cdn/blob/master/modules.json
? 'react-is' couldn't be found, please add it to https://github.com/mastilver/module-to-cdn/blob/master/modules.json
? '@babel/runtime/helpers/esm/extends' couldn't be found, please add it to https://github.com/mastilver/module-to-cdn/blob/master/modules.json
? '@babel/runtime/helpers/esm/objectWithoutPropertiesLoose' couldn't be found, please add it to https://github.com/mastilver/module-to-cdn/blob/master/modules.json
? 'hoist-non-react-statics' couldn't be found, please add it to https://github.com/mastilver/module-to-cdn/blob/master/modules.json
? '@redux-saga/is' couldn't be found, please add it to https://github.com/mastilver/module-to-cdn/blob/master/modules.json
? 'whatwg-fetch' couldn't be found, please add it to https://github.com/mastilver/module-to-cdn/blob/master/modules.json
? '@redux-saga/core/effects' couldn't be found, please add it to https://github.com/mastilver/module-to-cdn/blob/master/modules.json
? 'isarray' couldn't be found, please add it to https://github.com/mastilver/module-to-cdn/blob/master/modules.json
? 'util' couldn't be found, please add it to https://github.com/mastilver/module-to-cdn/blob/master/modules.json
? 'fbjs/lib/warning' couldn't be found, please add it to https://github.com/mastilver/module-to-cdn/blob/master/modules.json
? 'gud' couldn't be found, please add it to https://github.com/mastilver/module-to-cdn/blob/master/modules.json
? '@redux-saga/symbols' couldn't be found, please add it to https://github.com/mastilver/module-to-cdn/blob/master/modules.json
? '@redux-saga/delay-p' couldn't be found, please add it to https://github.com/mastilver/module-to-cdn/blob/master/modules.json
? 'value-equal' couldn't be found, please add it to https://github.com/mastilver/module-to-cdn/blob/master/modules.json
? 'resolve-pathname' couldn't be found, please add it to https://github.com/mastilver/module-to-cdn/blob/master/modules.json
? 'inherits' couldn't be found, please add it to https://github.com/mastilver/module-to-cdn/blob/master/modules.json

-------------------------------------------------

css-hot-loader js-cookie

-------------------------------------------------
Remains: 
	=>  Common header / footer / ads / google-analytics module
  =>  Common user authentication module
    // user should remain on site for more time
    // less form size helpful for mobile device
    // less page size give space for ads