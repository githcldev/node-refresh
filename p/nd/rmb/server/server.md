


-------------------------------------------------------------------



-------------------------------------------------------------------



-------------------------------------------------------------------



-------------------------------------------------------------------



-------------------------------------------------------------------



-------------------------------------------------------------------

"bcrypt": "^3.0.5",
    "bcrypt-nodejs": "0.0.3",

-------------------------------------------------------------------

adv will be widget

content divided into section which can further be grouped by sectionGroup

-------------------------------------------------------------------

contentMain width: 650px + 300px + 20px ( right padding )

layout:
	article: 650px
		content: 600px
	adv-at-right-content: 300px

	adv-right and adv-left: 160px

	adv-footer	970px

-------------------------------------------------------------------

color-theme
	bgColor: #fff


	headLine color and darkestBg: #333

	textLink: #E94E1B 	paleOrange
	a:visited
	VisitedTextLink color:	#f6baa7		lightOrange

-------------------------------------------------------------------

C:\e\js\NODE\EX\ECOMM\cezerin-master\cezerin-master\src\admin\client\apps
  facebook-customer-chat.js
  facebook-sdk.js
  google-analytics.js
  jivosite.js
  site-verification.js

-------------------------------------------------------------------

Limit node-build process by finding ways to skip node-gyp during "npm i"
Following is data to help this:
<!-- Below will run node-gyp C++ module build process and spend time at each incremental npm i -->
> bcrypt@0.8.7 install C:\e\NODE\EX\PLUGIN-DEMO\PASSPORT\2-reactauth-master\node_modules\bcrypt
> node-gyp rebuild

<!-- The below bcrypt do not run node-gyp c++ module build process and saves time at npm i -->
> bcrypt@1.0.3 install C:\e\NODE\EX\PLUGIN-DEMO\PASSPORT\2-mern-passport-master\node_modules\bcrypt
> node-pre-gyp install --fallback-to-build
[bcrypt] Success: "C:\e\NODE\EX\PLUGIN-DEMO\PASSPORT\2-mern-passport-master\node_modules\bcrypt\lib\binding\bcrypt_lib.node" is installed via remote

<!-- Below will run node-gyp C++ module build process and spend time at each incremental npm i -->
> bson@0.1.8 install C:\e\NODE\EX\PLUGIN-DEMO\PASSPORT\3-DWD-NodeJS-Passport-Demo-master\node_modules\bson
> (node-gyp rebuild 2> builderror.log) || (exit 0)

-------------------------------------------------------------------

learn from locomotive / loopback and other express based framework
	that how they are extending express and take down their special feature in express

-------------------------------------------------------------------

Let's grab some cms readymade functionality in!
	Now we just need to find a most glue cms / framework for our need

-------------------------------------------------------------------

Ref: NODE\EX\CMS\nodejs-express-example-master\nodejs-express-example-master
	const butter = require('buttercms')('e389441bfb10ccd3228e5adb47ccb98a8183eca7');
	// Routes
	app.get('/', renderHome)
	app.get('/blog', renderBlogHome)
	app.get('/blog/:slug', renderPost)

	app.get('/category/:slug', renderCategory)
	app.get('/author/:slug', renderAuthor)

	app.get('/rss', renderRss)
	app.get('/atom', renderAtom)
	app.get('/sitemap', renderSitemap)

	// Location Pages in Butter
	app.get('/locations/:slug', renderPage)
	
	function renderPage(req, res) {
	  var slug = req.params.slug || 1;

	  butter.content.retrieve(['location_pages[slug='+slug+']']).then(function(resp) {
		var content = resp.data.data;

		// location_pages is a collection so we access the first and only item
		var location = content.location_pages[0];

		res.render('location', {
		  location: location
		})
	  });
	}

	function renderHome(req, res) {

	  // Display list of location pages on our homepage.
	  butter.content.retrieve(['location_pages']).then(function(resp) {
		var content = resp.data.data;
		var location_pages = content.location_pages;

		butter.post.list({page_size: 4, page: 1}).then(function(postResp) {
		  var posts = postResp.data.data;
		  
		  res.render('index', {
			locations: location_pages,
			posts: posts
		  })
		});
	  });
	}

	function renderBlogHome(req, res) {
	  var page = req.params.page || 1;

	  butter.post.list({page_size: 10, page: page}).then(function(resp) {
		res.render('bloghome', {
		  posts: resp.data.data,
		  next_page: resp.data.meta.next_page,
		  previous_page: resp.data.meta.previous_page
		})
	  })
	}

	function renderPost(req, res) {
	  var slug = req.params.slug;

	  butter.post.retrieve(slug).then(function(resp) {
		res.render('post', {
		  title: resp.data.data.title,
		  post: resp.data.data,
		  published: new Date(resp.data.data.published)
		})
	  })
	}

	function renderAuthor(req, res) {
	  var slug = req.params.slug;

	  butter.author.retrieve(slug, {include: 'recent_posts'}).
		then(function(resp) {
		  res.render('author', {
			title: `${resp.data.data.first_name} ${resp.data.data.last_name}`,
			author: resp.data.data
		  })
		})
	}

	function renderCategory(req, res) {
	  var slug = req.params.slug;

	  butter.category.retrieve(slug, {include: 'recent_posts'})
		.then(function(resp) {
		  res.render('category', {
			title: resp.data.data.name,
			category: resp.data.data
		  })
		})
	}

	function renderAtom(req, res) {
	  res.set('Content-Type', 'text/xml');

	  butter.feed.retrieve('atom').then(function(resp) {
		res.send(resp.data.data)
	  })
	}

	function renderRss(req, res) {
	  res.set('Content-Type', 'text/xml');

	  butter.feed.retrieve('rss').then(function(resp) {
		res.send(resp.data.data)
	  })
	}

	function renderSitemap(req, res) {
	  res.set('Content-Type', 'text/xml');

	  butter.feed.retrieve('sitemap').then(function(resp) {
		res.send(resp.data.data)
	  })
	}

-------------------------------------------------------------------

Ref: NODE\EX\CMS\openveo-core-master\openveo-core-master
	var crypto = require('crypto');
	var shortid = require('shortid');
	var async = require('async');
	var consolidate = require('consolidate');
	var OAuthLib = require('oauth20-provider');
	var semver = require('semver');
	
-------------------------------------------------------------------

Ref: NODE\EX\CMS\taracotjs-master\taracotjs-master\modules

-------------------------------------------------------------------

Ref: node/ex/builderbook-boilerplate
const routesWithSlug = require('./routesWithSlug');
const routesWithCache = require('./routesWithCache');
const sitemapAndRobots = require('./sitemapAndRobots');
const mongoSessionStore = require('connect-mongo');
const auth = require('./google');
const stripe = require('stripe');
const sm = require('sitemap');
const LRUCache = require('lru-cache');
const passport = require('passport');
const Strategy = require('passport-google-oauth').OAuth2Strategy;
const aws = require('aws-sdk');

auth({ server, ROOT_URL });
routesWithSlug({ server, app });
routesWithCache({ server, app });
sitemapAndRobots({ server });

-------------------------------------------------------------------

Ref: NODE\EX\ECOMM\ymple-ecommerce-master\ymple-ecommerce-master	
	sails = require('sails');
	cors.js
	csrf.js

-------------------------------------------------------------------

Ref: NODE\EX\ECOMM\nodejs-ecommerce-store-master\nodejs-ecommerce-store-master	
	const engine = require('ejs-mate');
	const flash = require('express-flash');
	
	// set the view
	app.engine('ejs', engine);
	app.set('view engine', 'ejs');
	
	// make use of our passport module
	app.use(passport.initialize());
	app.use(passport.session());
	app.use((req, res, next) => {
		// assign each route the user object
		res.locals.user = req.user;
		next();
	});
	
	const mongoose = require('mongoose');
	const Schema = mongoose.Schema;
	
	const Cart = require('../models/cart');

	module.exports = (req, res, next) => {
		if (req.user) {
			let total = 0;
			Cart.findOne({owner: req.user._id}, (err, cart) => {
				if (cart) {
					for (let i = 0; i < cart.items.length; i++) {
						total += cart.items[i].quantity;
					}
					res.locals.cart = total;
				} else {
					res.locals.cart = 0;
				}
				next();
			});
		} else {
			next();
		}
	};
	
	// needed for local authentication
	const passport = require('passport');
	// needed for local login
	const LocalStrategy = require('passport-local').Strategy;
	// needed for facebook authentication
	const FacebookStrategy = require('passport-facebook').Strategy;
	
	
	// external imports
	const router = require('express').Router();
	const async = require('async');
	const faker = require('faker');
	
-------------------------------------------------------------------

Ref: NODE\EX\ECOMM\FullStackJS-master\FullStackJS-master	
	require('dotenv').load();
	var methodOverride  = require('method-override');
		
	/**
	 * Normalize a port into a number, string, or false.
	 */

	function normalizePort(val) {
		var port = parseInt(val, 10);

		if (isNaN(port)) {
			// named pipe
			return val;
		}

		if (port >= 0) {
			// port number
			return port;
		}

		return false;
	}

	var port = normalizePort(process.env.PORT || process.env.SERVER_PORT);
	var Item = mongoose.model('Items');
	require('dotenv').load();
	
	global.jwt           = require('express-jwt');
	global.auth          = jwt({secret: process.env.JWT_CERT, userProperty: 'payload'});
	var multer = require("multer");
	var gm = require("gm").subClass({ imageMagick: true });
	
-------------------------------------------------------------------

Ref: NODE\EX\ECOMM\ecommerce-master\ecommerce-master
	app.use(express.cookieParser());
	app.use(express.cookieSession({
	  secret: 'diku234243423lkklkl'
	}));
	
-------------------------------------------------------------------

Ref: NODE\EX\ECOMM\E-commerce-master\E-commerce-master	
	var MongoStore = require('connect-mongo/es5')(session);
	app.use(session({
	  resave: true,
	  saveUninitialized: true,
	  secret: secret.secretKey,
	  store: new MongoStore({ url: secret.database, autoReconnect: true})
	}));
	
-------------------------------------------------------------------

Ref: NODE\EX\ECOMM\cezerin-master\cezerin-master	
	import uaParser from 'ua-parser-js';
	import moment from 'moment';
	import { ObjectID } from 'mongodb';
	
-------------------------------------------------------------------

Ref: C:\e\js\NODE\EX\CMS\taracotjs-master\taracotjs-master\app.js	
	/*

		Taracot JS
		Content management systems written with Node.js and Express.js
		(c) 2014-2015 Michael A. Matveev
		https://taracot.org

	*/

	/* Load libraries */
	// require('snowball');
	var path = require('path'),
    crypto = require('crypto'),
    I18n = require('i18n-2'),
    app = express(),
    session = require('express-session'),
    mongoclient = require('mongodb').MongoClient,
    redis, redis_client, RedisStore, MongoStore;
	
	
	var gaikan = require('gaikan'),
    cp = require('./modules/cp/cp')(app),
    auth = require('./core/auth')(app),
    parser = require('./core/parser')(app),
    renderer = require('./core/renderer')(app),
    winston = require('winston'),
    captcha = require('./core/' + config.captcha),
    multer = require('multer'),
    bodyParser = require('body-parser'),
    mailer = require('./core/mailer')(app),
    langCookieName = config.cookie.prefix + 'lang';
	
	/* Enable trusted proxy */

	app.enable('trust proxy');

-------------------------------------------------------------------	

Ref: C:\e\js\NODE\EX\CMS\taracotjs-master\taracotjs-master
	ObjectId = require('mongodb').ObjectID,
	
	
-------------------------------------------------------------------

UPDATE SKILL SET PERIODICALLY AND GET APPROVED THE SAME FROM RM IN UR PROJECT

npm i express-session cookie-session morgan csurf connect-rid

seperateEventEmitter to control:
  db server events
  node server events
  cluster events
  other build-in events
  custom events for:
    reporting
    error handling
    process handling
  ... events

change all require with import abc from abc.js

insert query header fields validation
	also need to keep seperate collection for storing
	fields of collections used in db
	
request url, userId ( if available ), in, out , difference time stored in collection
	Date() compare operations needed for calc difference	
	
clarify promisify

global dbObj

process.end( close dbConnect )

manage site users
	access to protected pages
	access on resource

socket implementation helpful for following:
	socket based modules communication
	navigate further http request to seperate server

var compression = require('compression');
var helmet = require('helmet');
var debug = require('debug')('author');

var app = express();

app.use(helmet());
app.use(compression()); //Compress all routes

	debug('update error:' + err);
	req.sanitize('id').escape().trim();

-------------------------------------------------------------------

process.on('SIGINT', function () {
  mongoose.connection.close(function () {
    console.error('dBase connection closed due to app termination');
    return process.exit(0);
  });
});

ref: https://medium.com/@nohkachi/how-to-create-reusable-modules-in-express-4-x-by-using-events-for-loose-coupling-a63e89e44b22

-------------------------------------------------------------------

