const nodeVars = require('../../../../config/nodeVariable');
const mysqlx = require('@mysql/xdevapi');
let DbConnectionCoreHelper = (function () {
  if (typeof DbConnectionCoreHelperInstance === 'undefined') {
    var DbConnectionCoreHelperInstance = null, dbClient = null;
  } else console.log('DbConnectionCoreHelperInstance already exists')
  class DbConnectionCoreHelper {
    close() {
      if (dbClient) {
        dbClient.close()
        dbClient = null
      }
    }
    getDbObject(cb) {
      if (dbClient) {
        dbClient.getSession().then(session => {
          cb(session.getSchema(nodeVars.db.config.ms.dbName))
        })
      }
    }
    getDbConnect(cb) {
      if (dbClient) {
        dbClient.getSession().then(session => {
          cb(session)
        })
      }
    }
    getClient() {
      return dbClient
    }
    setClient(client) {
      dbClient = Object.create(client)
    }
    init(url, pollingOptions, cb) {
      this.setClient(mysqlx.getClient(url, pollingOptions))
    }
    constructor(url = null, pollingOptions = null, cb = null) {
      if (!DbConnectionCoreHelperInstance) {
        this.init(url, pollingOptions, cb)
        DbConnectionCoreHelperInstance = this;
      }
      return DbConnectionCoreHelperInstance;
    };
  }
  return DbConnectionCoreHelper
})();
module.exports = DbConnectionCoreHelper;