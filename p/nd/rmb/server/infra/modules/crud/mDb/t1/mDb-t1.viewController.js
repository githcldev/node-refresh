const nodeVars = require('../../../../../config/nodeVariable');
const DbCrudCore = require('../../../../services/db/mongoDb/DbCrudCore')
let MdbT1ViewController = (function () {
  class MdbT1ViewController {
    static checkCollec(res, collecName, checkSuccessCb = null, checkFailureCb = null) {
      var collecObj = null, dbObject = null;
      try {
        dbObject = new DbCrudCore().getDb()
        collecObj = dbObject.collection(collecName)
        if (checkSuccessCb) {
          checkSuccessCb(collecObj, dbObject)
        } else {
          res.send('success check collection')
        }
      } catch (collecError) {
        console.log(collecError.message)
        res.send('error check collection')
      }
    };
    static countFoundDocuments(res, query, collecName, checkSuccessCb = null, checkFailureCb = null) {
      this.checkCollec(res, collecName, (collecObj, dbObj) => {
        try {
          collecObj.countDocuments(query).then(function (count) {
            if (checkSuccessCb) {
              checkSuccessCb(count, collecObj, dbObj)
            } else {
              res.send('success find in collection')
            }
          })
        } catch (collecError) {
          console.log(collecError.message)
          res.send('error find in collection')
        }
      });
    };
    static find(res, query, collecName, checkSuccessCb = null, checkFailureCb = null) {
      this.checkCollec(res, collecName, (collecObj, dbObj) => {
        try {
          collecObj.find(query).toArray(function (err, results) {
            if (checkSuccessCb) {
              checkSuccessCb(results, collecObj, dbObj)
            } else {
              res.send('success find in collection')
            }
          })
        } catch (collecError) {
          console.log(collecError.message)
          res.send('error find in collection')
        }
      });
    };
    static listCollec(res, checkSuccessCb = null, checkFailureCb = null) {
      try {
        var dcc = new DbCrudCore()
        var dbObj = dcc.getDb()
        dbObj.listCollections().toArray()
          .then(function (lc) {
            if (checkSuccessCb) {
              checkSuccessCb(lc, dbObj)
            } else {
              res.send('success listCollec')
            }
          })
      } catch (collecError) {
        console.log(collecError.message)
        res.send('error listCollec')
      }
    };
  }
  return MdbT1ViewController;
})();
module.exports = MdbT1ViewController;