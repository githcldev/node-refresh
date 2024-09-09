'use strict';
import CSM from './lib/core/CSM';
// import defaults from './defaults';
// import A_SC from './lib/modules/A_SC';
function createInstance(defaultConfig) {
  return new CSM(defaultConfig)
}
// Create the default instance to be exported
// let _csm = createInstance(defaults)
let _csm = {}
// Expose Modules
_csm.core = CSM;
// Allow use of default import syntax in TypeScript
if(typeof module !== 'undefined') {
  if(typeof module.exports !== 'undefined') {
    module.exports = _csm;
    // module.exports.default = _csm;
  }
}
// module.exports = _csm;
export default _csm
