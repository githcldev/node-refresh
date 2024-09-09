/**
 * Module Depedency and Injection
 */
// console.log(process.env)
const nodeVars = require('./nodeVariable')
const AppRoutines = require('./app-routines')
//=============================================================================
/**
 * App Instance
 */
let app = nodeVars.tools.express();
//=============================================================================
/**
 * Environment Setup
 */
AppRoutines.setEnv(app)
//=============================================================================
/**
 * Module Variables
 */
AppRoutines.setExpressAppLocals(app)
//=============================================================================
/**
 * App Configuration and Settings
 */
AppRoutines.setExpressAppGlobals(app)
//=============================================================================
/**
 * Middleware stack
 */
AppRoutines.initSession(app)
AppRoutines.serveStatic(app)
AppRoutines.initThirdParty(app)
//=============================================================================
/**
 * Routes
 */
AppRoutines.addRoutes(app)
//=============================================================================
/**
 * Event Handler
 */
AppRoutines.addNodeEvents(app)
app.use(function (req, res, next) {
    // res.on('finish', function () {
    //     console.log('The response has been sent');
    // });
    next();
});
AppRoutines.customEvents(app)
//=============================================================================
/**
 * Custom Error Handler
 */
app.listen(app.get('port'), () => {
    nodeVars.tools.browserSync({
        open: false, port: app.get('port') + 1,
        proxy: 'localhost:' + app.get('port'), ui: false
    });
    app.emit('serverLive', 'anyArgs')
});
//=============================================================================
/**
 * Export App Module
 */
module.exports = app;