const nodeVars = require('../../../../../config/nodeVariable');
const router = nodeVars.tools.express.Router()
const msVCtrl = require('./mysql-t1.vCtrl')
// test db collec command
router.get(['/ch/:collecName'], (req, res) => {
  msVCtrl.checkCollec(res, req.params.collecName);
});
// test db create collec command
router.get(['/cr/:collecName'], (req, res) => {
  msVCtrl.createCollec(res, req.params.collecName);
});
module.exports = router; // export your module