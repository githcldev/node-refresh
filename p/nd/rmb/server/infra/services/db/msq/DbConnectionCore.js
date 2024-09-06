const nodeVars = require('../../../../config/nodeVariable');
var DbConnectionCoreHelper = require('./DbConnectionCoreHelper')
let DbConnectionCore = (function () {
  var dbObject = null, dbConnect = null;
  class DbConnectionCore {
    static closeDbConnection() {
      if (dbConnect) {
        dbConnect.close()
        dbObject = null;
        dbConnect = null;
      }
    }
    static getDbObject(cb) {
      return new DbConnectionCoreHelper(null).getDbObject(cb)
    }
    static setDbObject(dbObj) {
      dbObject = dbObj;
    }
    static getDbConnect(req = null) {
      return new DbConnectionCoreHelper(null).getDbConnect()
    }
    static setDbConnect(dbConn, app) {
      dbConnec = dbConn;
    }
    static async connect() {
      var url = null, pollingOptions = null;
      url = {
        host: nodeVars.db.config.ms.host,
        port: nodeVars.db.config.ms.port,
        user: nodeVars.db.config.ms.user,
        password: nodeVars.db.config.ms.pass
      }
      pollingOptions = {
        pooling: {
          enabled: nodeVars.db.config.ms.pooling,
          maxSize: nodeVars.db.config.ms.poolMaxSize
        }
      }
      new DbConnectionCoreHelper(url, pollingOptions)
    }
  }
  return DbConnectionCore;
})();
module.exports = DbConnectionCore;