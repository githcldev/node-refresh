/**
 * TODO:
 * Db server session handling
 */
const nodeVars = require('../../../../config/nodeVariable');
let DbSessionCore = (function () {
  let privateProps = new WeakMap();
  class DbSessionCore {
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
  return DbCrudCore;
})();
module.exports = DbSessionCore;