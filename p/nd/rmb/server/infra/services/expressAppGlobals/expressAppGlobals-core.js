const nodeVars = require('../../../config/nodeVariable');
let ExpressAppGlobal = (function () {
  class ExpressAppGlobal {
    static init(app) {
      app.set('port', process.env.PORT || 3010);
      app.set('view engine', nodeVars.common.viewEngine);
    }
  }
  return ExpressAppGlobal;
})();
module.exports = ExpressAppGlobal;