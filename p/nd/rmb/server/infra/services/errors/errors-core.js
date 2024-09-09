/**
 * ...
 */
const nodeVars = require('../../../config/nodeVariable');
let ErrorsCore = (function () {
  class ErrorsCore {
    static e(err) {
      console.log(err)
    };
  }
  return ErrorsCore;
})();
module.exports = ErrorsCore;