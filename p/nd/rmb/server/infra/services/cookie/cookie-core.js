const nodeVars = require('../../../config/nodeVariable');
var cookieParser = nodeVars.tools.cookieParser;
let CookieCore = (function () {
  class CookieCore {
    static init(app) {
      app.use(cookieParser('9876543121-cookie-secret-is-here-9876543121'));
    };
  }
  return CookieCore;
})();
module.exports = CookieCore;