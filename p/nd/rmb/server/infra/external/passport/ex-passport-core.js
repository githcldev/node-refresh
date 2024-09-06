const passport = require('passport')
const jwt = require('jsonwebtoken');
const nodeVars = require('../../../config/nodeVariable')
const LocalStrategy = require('./strategy/local')
const db = require('./db/index')
passport.serializeUser(function(token, cb) {
  cb(null, token);
});
passport.deserializeUser(function(token, cb) {
  jwt.verify(token, nodeVars.db.session.jwt.privateKey, (tokenVerifyError, decoded) => {
    if (tokenVerifyError) {  // token decode fail or tokenVerifyError
      var {name, message} = tokenVerifyError;
      var package = { errName: name, errMessage: message };
      return cb(null, package);  // redirect here to your choice
    }
    const id = decoded.sub;
    // check if a user exists
    return db.users.findById(id, function (err, user) {
      if (err) { return cb(err); }
      cb(null, user);
    });
  });  
});
passport.validate = function(req, res, next){
  if (typeof req.user.errName !== 'undefined' || typeof req.user === 'undefined') {
    res.redirect('/t/s');
  } else if (req.user) {
    next()
  }
}
// ==== Register Strategies ====
passport.use(LocalStrategy)
module.exports = passport
