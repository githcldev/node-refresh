let express = require('express');
let router = express.Router();
router.get(['/cms_config_tbl', '/menu', '/featuredpage', '/searchKeys'], async function (req, res) {
  res.redirect('/indexR/json-data' + req.url + '.json');
})
module.exports = router;