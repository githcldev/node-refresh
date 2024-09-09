const nodeVars = require('../../../../../config/nodeVariable');
const router = nodeVars.tools.express.Router()
const ViewController = require('./mDb-t1.viewController')
// test db collec command
router.get(['/c/:collecName'], (req, res) => {
  ViewController.checkCollec(res, req.params.collecName);
});
// test count found documents command
router.get(['/cd/:collecName'], (req, res) => {
  var query = {}
  ViewController.countFoundDocuments(res, query, req.params.collecName,
    (count) => {
      res.send(count.toString());  // number type
    });
});
// test find documents command
router.get(['/f/:collecName'], (req, res) => {
  var query = {}
  ViewController.find(res, query, req.params.collecName,
    (documents) => {
      res.json(documents);
    });
});
// test list collec command
router.get(['/lc'], (req, res) => {
  // for single collection we can pass name in query obj
  ViewController.listCollec(res,
    (lc, dbObj, dbConnect) => {
      lc.forEach(function(document) {
        res.send(document.name);  // number type
      });
    });
});
module.exports = router; // export your module