let express = require('express');
let router = express.Router();
let nodeVars = require('../../../../config/nodeVariable');
router.get('/publicApi/user', (req, res) => {
    res.json({
        one: "one"
    });
});
module.exports = router;