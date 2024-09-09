let nodeVars = require('../../../config/nodeVariable');
let express = nodeVars.tools.express, router = express.Router();
router.get(['/', ''], (req, res) => {
    // send res to frontend with variables
    // res.render('login/login',{
    //     id: 'login',
    //     title: 'Login Page',
    //     text: '<b>Bold Text</b>',
    // });
    res.send('protected route');
});
module.exports = router;