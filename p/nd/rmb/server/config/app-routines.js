var Express = require('express')
const nodeVars = require('./nodeVariable')
const EnvCore = require('../infra/services/env/env-core')
const NodeEventsCore = require('../infra/services/events/node-events-core')
const RoutingCore = require('../infra/services/routing/routing-core')
const ExpressAppGlobalsCore = require('../infra/services/expressAppGlobals/expressAppGlobals-core')
const ExpressAppLocalsCore = require('../infra/services/expressAppLocals/expressAppLocals-core')
const SocketCore = require('../infra/services/socket')
const DbServerCore = require('../infra/services/db/DbServerCore')
const DbSessionCore = require('../infra/services/session/session-core')
const ExPassportCore = require('../infra/external/passport/ex-passport-core')
let AppRoutines = (function () {
  class AppRoutines {
    static initThirdParty(app){
      // Initialize Passport and restore authentication state, if any, from the session.
      SocketCore.init(app);
        // delay socket prepare after Db gets init
        // we should get some event from db after is complete its init
      app.use(ExPassportCore.initialize());
      app.use(ExPassportCore.session());
    }
    static serveStatic(app){
      app.use(Express.static(nodeVars.common.rootPath + nodeVars.common.viewPath));
    }
    static customEvents(app) {
      app.on('serverLive', (ev) => {
        if(nodeVars.db.config.enable) 
          DbServerCore.prepareServerStart()
      })
    }
    static addNodeEvents(app){
      NodeEventsCore.init(app)
    }
    static initSession(app){
      DbSessionCore.init(app)
    }
    static addRoutes(app) {
      RoutingCore.init(app)
    }
    static setExpressAppLocals(app) {
      ExpressAppLocalsCore.init(app)
    }
    static setExpressAppGlobals(app) {
      ExpressAppGlobalsCore.init(app)
    }
    static setEnv(app) {
      EnvCore.init(app)
    }
  }
  return AppRoutines;
})();
module.exports = AppRoutines;