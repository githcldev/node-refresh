/**
 * ... Run all your shutdown process with some limited time
 */
const DbServerCore = require('../db/DbServerCore')
let ServerShutdownCore = (function () {
  class ServerShutdownCore {
    static closeDb() {
      DbServerCore.closeDbConnection();
    };
  }
  return ServerShutdownCore;
})();
module.exports = ServerShutdownCore;