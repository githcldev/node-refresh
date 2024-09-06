let nodeVars = require('../../../config/nodeVariable');
let express = nodeVars.tools.express, router = express.Router();
router.get(['', '/'], (req, res) => {
    // send res to frontend with variables
    res.render('user/user', {
        id: 'user',
        title: 'Login Page',
        text: '<b>Bold Text</b>',
    });
    // res.send('user server route');
});
module.exports = router;