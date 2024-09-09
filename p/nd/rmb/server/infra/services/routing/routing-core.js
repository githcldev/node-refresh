let RoutingCore = (function () {
  class RoutingCore {
    // add seo routes
    addSeoRoutes(app) {
      // app.use('*', function (req, res, next) {
      //   res.redirect('/error/418');
      //   next();
      // });
    }
    // add Static File Routes
    addStaticFileRoutes(app) {
      app.use(['/indexR/sf', '/sf'], require("../../modules/staticFiles/route"))
      // app.use('/indexR/*.chunk.js', function (req, res, next) {
      //   var baseUrl = req.baseUrl;
      //   var fileName = baseUrl.substring(baseUrl.lastIndexOf('/'), baseUrl.length);
      //   res.redirect('/indexR/_' + fileName + '.gz');
      // })
    }
    // protected routes
    addProtectedRoutes() {
    }
    // add public api routes
    addPublicApiRoutes(app) {
      
    }
    // protected dev routes
    addProtectedDevRoutes(app) {
      app.use('/p', require("../../../client/modules/protected/route"));
      app.use('/cp', require("../../modules/childProcess/route"));
      app.use('/t', require("../../modules/test/route"));
      app.use('/db/ms/t1', require("../../modules/crud/mDb/t1/route"));
    }
    // un-protected routes
    addPublicRoutes(app) {
      app.use('/user', require("../../../client/modules/user/route"));
      app.use('/error', require("../../modules/errorPages/route"));
      app.use(['', '/', '/index', '/index/*'], require("../../../client/modules/index/route"));
      app.use('*', function (req, res, next) {
        res.redirect('/error/418');
        next();
      });
    }
    static init(app) {
      // add seo routes
      this.prototype.addSeoRoutes(app)
      // add static file routes
      this.prototype.addStaticFileRoutes(app)
      // add public api routes
      this.prototype.addPublicApiRoutes(app)
      // protected routes
      this.prototype.addProtectedRoutes()
      // add protected develpment routes
      this.prototype.addProtectedDevRoutes(app)
      // add public routes
      this.prototype.addPublicRoutes(app)
      // app.use(Router)
    }
  }
  return RoutingCore;
})();
module.exports = RoutingCore;