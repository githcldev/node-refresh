var CpCoreHelper = require('./cp-core-helper')
let CpCore = (function () {
  class CpCore {
    init(type, args) {
      switch(type){
        case 'fork':
          CpCoreHelper.fork(args);
          break;
        case 'execFile':
          CpCoreHelper.execFile(args);
          break;
        case 'spawn':
          CpCoreHelper.spawn(args)
          break;
        case 'exec':
          CpCoreHelper.exec(args)
          break;
        default:
          return false;
          break;
      }
    }
    constructor(type, args) {
      // init(type, args)
      this.init(type, args)
    };
  }
  return CpCore;
})();
module.exports = CpCore;