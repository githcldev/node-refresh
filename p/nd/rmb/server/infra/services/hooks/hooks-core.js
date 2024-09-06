const nodeVars = require('../../../config/nodeVariable');
let HooksCore = (function () {
  let privateProps = new WeakMap();
  class HooksCore {
    constructor(collectionPath) {
      this.collectionPath = collectionPath;
      privateProps.set(this, {
        fsWrite: async function fsWrite(filePath, data) {
          var content = await readFilePlug(filePath, 'utf-8');
          return content;
        }
      }); // this is private
    };
    getData() {
      return nodeVars.tools.fs.createReadStream(this.collectionPath);
    };
  }
  return HooksCore;
})();
module.exports = HooksCore;