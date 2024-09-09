/**
 * ...
 */
const nodeVars = require('../../config/nodeVariable');
let ClassName = (function () {
  let privateProps = new WeakMap();
  class ClassName {
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
  return ClassName;
})();
module.exports = ClassName;