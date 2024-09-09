/**
 * TODO:
 * Db server configuration handling
 */
const nodeVars = require('../../../config/nodeVariable');
const MongoDbConnectionCore = require('./mongoDb/DbConnectionCore')
const MysqlDbConnectionCore = require('./msq/DbConnectionCore')
const ErrorsCore = require('../errors/errors-core')
let DbServerCoreHelper = (function () {
  if(typeof DbServerCoreHelperInstance === 'undefined'){
    var DbServerCoreHelperInstance = null;
  } else console.log('DbServerCoreHelperInstance already exists')
  class DbServerCoreHelper {
    close(){
      if(nodeVars.modules.crudDb.currentDbSystem === 'mysql'){
        MysqlDbConnectionCore.closeDbConnection()
      } else if(nodeVars.modules.crudDb.currentDbSystem === 'mongo'){
        MongoDbConnectionCore.closeDbConnection()
      }
    }
    getDb(cb = null){
      if(nodeVars.modules.crudDb.currentDbSystem === 'mysql'){
        return MysqlDbConnectionCore.getDbObject(cb)
      } else if(nodeVars.modules.crudDb.currentDbSystem === 'mongo'){
        MongoDbConnectionCore.getDbObject()
      }
    }
    init(cb = null){
      if(nodeVars.modules.crudDb.currentDbSystem === 'mysql'){
        MysqlDbConnectionCore.connect()
      } else if(nodeVars.modules.crudDb.currentDbSystem === 'mongo'){
        MongoDbConnectionCore.connect().then(function(dbConnect){
            MongoDbConnectionCore.setDbConnect(dbConnect)
            MongoDbConnectionCore.setDbObject(dbConnect.db(nodeVars.modules.crudDb.name))
        }, function(err){
          console.error(err);
        })
      }
    }
    constructor() {
      if (!DbServerCoreHelperInstance) DbServerCoreHelperInstance = this;
      return DbServerCoreHelperInstance;
    };
  }
  return DbServerCoreHelper
})();
module.exports = DbServerCoreHelper;