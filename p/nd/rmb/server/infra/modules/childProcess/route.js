var express = require('express');
var router = express.Router();
var childProcessCtrl = require('./childProcessCtrl');
router.get('/spawn', async function (req, res) {
  childProcessCtrl.spawn(res)
})
router.get('/exec', (req, res) => {
  childProcessCtrl.exec(res)
})
router.get('/execFile', (req, res) => {
  childProcessCtrl.execFile(res)
})
router.get('/fork', (req, res) => {
  childProcessCtrl.execFile(res)
})
module.exports = router;