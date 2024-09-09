let PathCoreHelper = (function () {
  if (typeof PathCoreHelperInstance === 'undefined') {
    var PathCoreHelperInstance = null,
    nodeVars = require('../../config/nodeVariable');
  } else console.log('PathCoreHelperInstance already exists')
  class PathCoreHelper {
    getNodeVar(nodeVar = null){
      if(nodeVar !== null){
        let partials = nodeVar.split('.');
        let partialLength = partials.length;
        let value = null;
        if(partialLength < 1) {
          value = this.nodeVars[nodeVars]
        } else {
          value = this.nodeVars;
          for(let i = 0; i < partialLength; i++) {
            value = value[partials[i]]
          }
        }
        console.log(value)
        return value;
      }
    }
    init(){
      this.nodeVars = nodeVars
      nodeVars = null;
    }
    constructor() {
      if (!PathCoreHelperInstance) {
        this.nodeVars = null;
        this.init()
        PathCoreHelperInstance = this;
      }
      return PathCoreHelperInstance;
    };
  }
  return PathCoreHelper
})();
module.exports = PathCoreHelper;