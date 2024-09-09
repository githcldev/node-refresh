var forkCore = require('./fork-core')
var execCore = require('./exec-core')
var spawnCore = require('./spawn-core')
let CpCoreHelper = (function () {
  class CpCoreHelper {
    static exec(){
    }
    static execFile(){
    }
    static fork(){
    }
    static spawn(args){
      return new spawnCore(args)
    }
  }
  return CpCoreHelper;
})();
module.exports = CpCoreHelper;