const nodeVars = require('../../../../config/nodeVariable');
var dbObject = null, dbConnect = null;
let DbConnectionCore = (function () {
  class DbConnectionCore {
    static closeDbConnection(){
      if(dbConnect){
        dbConnect.close()
        dbObject = null;
        dbConnect = null;
      }
    }
    static getDbObject() {
      if(dbObject) return dbObject;
      else return null;
    }
    static setDbObject(dbObj) {
      if(!dbObject) return dbObject = dbObj;
      else return null;
    }
    static getDbConnect() {
      if(dbConnect) return dbConnect;
      else return null;
    }
    static setDbConnect(dbConnec){
      dbConnect = dbConnec;
      // NodeEventsCore.getAppEmitter().emit('db', 'ready')
    }
    static connect() {
      var cl = nodeVars.tools.mongoDb.MongoClient
      var url = "mongodb://";
      url += nodeVars.modules.crudDb.user;
      url += ":";
      url += nodeVars.modules.crudDb.pwd;
      url += "@";
      url += nodeVars.modules.crudDb.host;
      url += ":";
      url += nodeVars.modules.crudDb.port;
      url += "/";
      url += nodeVars.modules.crudDb.name;
      try {
        return cl.connect(url, { useNewUrlParser: true })
      //   cl.connect(url, { useNewUrlParser: true }, (er, c) => {
      //     if(er) console.log(er)
      //     else console.log(c)
      //   })
      } catch(clError) {
        console.log('Db connection error')
      }
    }
  }
  return DbConnectionCore;
})();
module.exports = DbConnectionCore;