const nodeVars = require('../../../../../config/nodeVariable');
const DbServerCoreHelper = require('../../../../services/db/DbServerCoreHelper')
let MdbT1ViewController = (function () {
  class MdbT1ViewController {
    static createCollec(res, collecName = "sampletable", checkSuccessCb = null, checkFailureCb = null) {
      new DbServerCoreHelper().getDb(dbObject => {
        dbObject.createCollection(collecName) 
          .then(collecObj => {
            console.log(collecObj)
            if (checkSuccessCb) {
              checkSuccessCb(collecObj, dbObject)
            } else {
              res.send('success check collection')
            }
          })
          .catch(er => {
            res.send(er.message)
          })
      })
    };
    static checkCollec(res, collecName = "sampleTable", checkSuccessCb = null, checkFailureCb = null) {
      new DbServerCoreHelper().getDb(dbObject => {
        dbObject.getCollections()
          .then(collections => {
            let collectionsLength = collections.length, found = false;
            for(let i = 0; i < collectionsLength; i++){
              if(collections[i].getName() === collecName){
                found = true;
                res.send('success collection check and found')
                break;
              }
            }
            if (!found) {
              res.send('Success collection checked and not found')
            }
          })
          .catch(er => {
            console.log(er)
            res.send('failed collection check')
          })
      })
    };
  }
  return MdbT1ViewController;
})();
module.exports = MdbT1ViewController;