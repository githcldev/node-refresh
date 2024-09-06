// const nodeVars = require('../../../config/nodeVariable');
var session = require('express-session')
let SessionCore = (function () {
  let privateProps = new WeakMap();
  class SessionCore {
    static init(app) {
      app.use(session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: true,
        cookie: { maxAge: 60000 }
      }));
    };
    static db(){
    }
  }
  return SessionCore;
})();
module.exports = SessionCore;