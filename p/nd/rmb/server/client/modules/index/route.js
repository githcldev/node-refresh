let nodeVars = require('../../../config/nodeVariable');
let express = nodeVars.tools.express, router = express.Router();
let redirect = false;
router.get(['', '/', '/index'], (req, res) => {
    // res.clearCookie('name', { path: '/admin' });
    if(!redirect) res.clearCookie('reqPage');
    res.render('indexR/index', {
        id: 'index',
        title: 'Index Page',
        text: '<b>Bold Text</b>'
    });
});
router.get(['/index/:page'], (req, res, next) => {
    res.cookie('reqPage', req.params.page, nodeVars.modules.index.routeCookieOptions)
    redirect = true;
    res.redirect('/index');
});
module.exports = router; // export your module