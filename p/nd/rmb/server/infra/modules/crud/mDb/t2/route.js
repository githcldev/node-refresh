const nodeVars = require('../../../../../config/nodeVariable');
const router = nodeVars.tools.express.Router()
const MdbT2ViewCtrl = require('./mDb-t2.viewController')
// fill collec with csv data
router.get(['/r/:collec'], (req, res) => {
  var collecCsvPath = MdbT2ViewCtrl.validateResetCollec(res, req.params.collec)
  if (collecCsvPath) {
    MdbT2ViewCtrl.emptyCollec(res, req.params.collec,
      (collecObj, dbObj, dbConnect) => {
        dbObj = null;
        MdbT2ViewCtrl.fillCsvCollec(res, collecCsvPath,
          req.params.collec, collecObj, dbConnect, () => {
          })
      })
  }
});
module.exports = router; // export your module