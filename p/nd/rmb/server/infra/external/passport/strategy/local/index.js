const jwt = require('jsonwebtoken');
const LocalStrategy = require('passport-local').Strategy
const nodeVars = require('../../../../../config/nodeVariable')
const db = require('../../db/index')
const strategy = new LocalStrategy(
  {
    usernameField: 'username',
    passwordField: 'password',
    session: false,
    passReqToCallback: true
  }, 
  function(req, username, password, cb) {
    db.users.findByUsername(username, function(err, user) {
      if (err) { return cb(err); }
      if (!user) { return cb(null, false); }
      if (user.password != password) { return cb(null, false); }
      const payload = {
        sub: user.id
      };
      const signOptions = {
        // issuer:  '',    // Software organization who issues the token.
        // subject:  '',   // Intended user of the token.
        expiresIn: nodeVars.db.session.jwt.tokenExpiresIn,
        // algorithm:  ['RS512']
      }
      const token = jwt.sign(
        payload,
        nodeVars.db.session.jwt.privateKey,
        signOptions
      );
      return cb(null, token, user);
    });
  }
)
module.exports = strategy