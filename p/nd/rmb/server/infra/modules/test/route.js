let express = require('express');
let router = express.Router();
const ExPassportCore = require('../../external/passport/ex-passport-core')
router.get('/i', ExPassportCore.authenticate('local', { failureRedirect: '/t' }), async function (req, res) {
  res.send(`<h1> login    /t/i </h1>`);
})
router.get('/o', async function (req, res) {
  if (req.user) {
		req.session.destroy()
		res.clearCookie('connect.sid') // clean up!
    res.send(`<h1> logout   /t/o </h1>`);
	} else {
		res.send({ msg: 'no user to log out!' })
	}
})
router.get('/p', ExPassportCore.validate,  async function (req, res) {
  // res.send(`<h1> protected  /t/p </h1>`);
  if (req.user) {
		return res.json({ user: req.user })
	} else {
		return res.json({ user: null })
	}
})
router.get('/s', async function (req, res) {
  if(req.query.username && req.query.password) {
    res.send(`<h1> ${req.query.username}   /t/s   ${req.query.password}</h1>`);
  } else {
    res.send(`<h1> sign-up   /t/s </h1>`);
  }
})
router.get('/p2', async function (req, res) {
  res.send(`<h1> protected 2    /t/p2 </h1>`);
})
router.get('/4', async function (req, res) {
  res.send(`<h1> /t/4 </h1>`);
})
router.get('/3', async function (req, res) {
  res.send(`<h1> /t/3 </h1>`);
})
router.get('/2', async function (req, res) {
  setTimeout(function(){
    res.send(`<h1> /t/2 </h1>`);
  }, 5000);
})
router.get('/1', async function (req, res) {
  res.send(`<h1> /t/1 </h1>`);
})
router.get('/0', (req, res) => {
  res.send(`<h1> /t/0 </h1>`);
})
router.get(['', '/'], (req, res) => {
  res.send(`<h1> /t   /t/ </h1>`);
})
module.exports = router;