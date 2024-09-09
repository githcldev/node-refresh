/**
 * TODO:
 * Db server user handling and
 * it should be seperate from dbUserAuth handling
 */
const nodeVars = require('../../../../config/nodeVariable');
let DbUserCore = (function () {
  let privateProps = new WeakMap();
  class DbUserCore {
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
module.exports = DbUserCore;