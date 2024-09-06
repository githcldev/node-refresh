const nodeVars = require('../../../config/nodeVariable');
let ExpressAppLocals = (function () {
  class ExpressAppLocals {
    static init(app){
      app.locals.siteTitle = "r1-node page title";
      app.locals.userData = { "loggedIn": true, "name": "user one" };
    }
  }
  return ExpressAppLocals;
})();
module.exports = ExpressAppLocals;