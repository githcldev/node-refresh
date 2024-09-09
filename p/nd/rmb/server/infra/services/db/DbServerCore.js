const nodeVars = require('../../../config/nodeVariable');
const MongoDbConnectionCore = require('./mongoDb/DbConnectionCore')
const MysqlDbConnectionCore = require('./msq/DbConnectionCore')
const ErrorsCore = require('../errors/errors-core')
const DbServerCoreHelper  = require('./DbServerCoreHelper')
let DbServerCore = (function () {
  class DbServerCore {
    connect(system = null) {
      switch(system) {
        case 'mysql':
          return MysqlDbConnectionCore.connect(nodeVars.modules.crudDb.currentDbSystem)
          break;
        case 'mongo':
          return MongoDbConnectionCore.connect(nodeVars.modules.crudDb.currentDbSystem)
          break;
        default:
          return MongoDbConnectionCore.connectMongo(nodeVars.modules.crudDb.currentDbSystem)    
          break;
      }
    }
    static closeDbConnection(){
      new DbServerCoreHelper().close()
    }
    static prepareServerStart() {
      new DbServerCoreHelper().init()
    }
  }
  return DbServerCore
})();
module.exports = DbServerCore;