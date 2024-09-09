let ExternalCore = (function () {
    if (typeof ExternalCoreInstance === 'undefined') {
      var ExternalCoreInstance = null,
      nodeVars = require('../../config/nodeVariable');
    } else console.log('ExternalCoreInstance already exists')
    class ExternalCore {
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
        if (!ExternalCoreInstance) {
          this.nodeVars = null;
          this.init()
          ExternalCoreInstance = this;
        }
        return ExternalCoreInstance;
      };
    }
    return ExternalCore
  })();
  module.exports = ExternalCore;