/**
 * TODO:
 * Db server user session handling
 * Initial point for dbUser validation
 */
const nodeVars = require('../../../../config/nodeVariable');
const DbCrudHelper = require('./DbCrudHelper')
let DbCrudCore = (function () {
  class DbCrudCore {
    constructor() {
      return this;
    };
    getDb(){
      return DbCrudHelper.getDb();
    }
  }
  return DbCrudCore;
})();
module.exports = DbCrudCore;