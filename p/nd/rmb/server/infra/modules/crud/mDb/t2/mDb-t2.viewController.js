const nodeVars = require('../../../../../config/nodeVariable');
const MdbT1ViewCtrl = require('../t1/mDb-t1.viewController')
let MdbT2ViewController = (function () {
  class MdbT2ViewController {
    static getCsvDoc(res, collecCsvPath, dbConnect,
      checkSuccessCb = null, checkFailureCb = null) {
      let [fileReadStream, fastCsvStream] = Array(2).fill(null);
      fileReadStream = nodeVars.tools.fs.createReadStream(collecCsvPath)
      fastCsvStream = nodeVars.tools.fastCsv.fromStream(fileReadStream,
        {
          "objectMode": true,
          "delimiter": ',',
          "headers": true
        })
      fastCsvStream.on('data', function (document) {
        fastCsvStream.pause();
        try {
          checkSuccessCb(document, fastCsvStream)
        } catch (err) {
          console.log(err)
          res.send("Collection reset data insertion fail")
          fastCsvStream.resume();
        }
      })
      fastCsvStream.on('finish', function () {
        // dbConnect.close().then((d) => {
        //   res.send("Success Data reset for given collection");
        // }).catch((er) => {
        //   res.send("Success Data reset for given collection");
        // })
      })
      fastCsvStream.on('error', function (err) {
        checkFailureCb(err)
      });
    }
    static fillCsvCollec(res, collecCsvPath, collecName, collecObj,
      dbConnect, checkSuccessCb = null, checkFailureCb = null) {
      this.getCsvDoc(res, collecCsvPath, dbConnect, (document, fastCsvStream) => {
        try {
          collecObj.insertOne(document).then(function (cbo) {
            fastCsvStream.resume();
          })
        } catch (err) {
          console.log(err)
          fastCsvStream.destroy().then(() => {
            res.send("Collection reset data insertion fail")
          });
        }
      }, (finishCsvStream) => {
        dbConnect.close().then(() => {
          res.send("Collection input data read error")
        })
      })
    }
    static emptyCollec(res, collecName, checkSuccessCb = null, checkFailureCb = null) {
      var query = { "_id": { $exists: true } };
      MdbT1ViewCtrl.countFoundDocuments(
        res,
        {},
        collecName,
        (count, collecObj, dbObj, dbConnect) => {
          if (count > 0) {
            dbObj.dropCollection(collecName).then((s) => {
              checkSuccessCb(collecObj, dbObj, dbConnect)
            })
          } else {
            checkSuccessCb(collecObj, dbObj, dbConnect)
          }
        })
    }
    static validateResetCollec(res, collecName) {
      var collecCsvPath = null;
      try {
        collecCsvPath = nodeVars.db[collecName].csvPath
      } catch (er) {
        res.send("Collection Name validation failed")
        return false
      }
      return collecCsvPath;
    }
  }
  return MdbT2ViewController;
})();
module.exports = MdbT2ViewController;