/**
 * TODO:
 * DbTransaction Helper
 */
const DbServerCore = require('../DbServerCore')
let DbCrudHelper = (function () {
  let init = async function init(){
/**
 *  TODO:
 *  1. connect server
 *  2. connect db
 *  3. store db object for further transaction
 *  4. get db user credentials
 *  5. create session for user
 *  6. store session object for further transaction
 */    
    var dbServerCore = new DbServerCore()
    return new Promise(function(resolve, reject){
      resolve(dbServerCore.getDb())
    })
  }
  class DbCrudHelper {
    static init(){
      return init();
    }
    static getDb(){
      var dbServerCore = new DbServerCore()
      var dbObject = dbServerCore.getDb()
      return dbObject
    }
    /**
     * create(), update(), delete(), drop()
     */
  }
  return DbCrudHelper;
})();
module.exports = DbCrudHelper;