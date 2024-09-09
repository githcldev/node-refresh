/**
 * Handle all environment relation
 * queries for anything, settings, etc.
 * browser / node env queries
 */
const nodeVars = require('../../../config/nodeVariable');
const _c = require('../../../../common/scripts/constant')
const _ = require('lodash')
let EnvCore = (function () {
  class EnvCore {
    static isMac(){
      return process.platform == "darwin"
    }
    static isLinux(){
      return process.platform == "linux"
    }
    static isWindows() {
      return process.platform == "win32" || process.platform == "win64";
    };
    static init(app) {
      global._ = _
      if(_.get(process.env, _c.f, '').indexOf('id') === 0) {
        let webpackMiddleware = require('webpack-dev-middleware');
        const webpackHotMiddleware = require('webpack-hot-middleware')
        const webpackHotServerMiddleware = require('webpack-hot-server-middleware');
        let webpack = require('webpack');
        let webpackConfig = require('../../../../common/build-config/index-react/wp-n-dev-config');
        app.set('views', nodeVars.common.rootPath + nodeVars.common.viewPath);
        app.use(webpackMiddleware(webpack(webpackConfig), {}));
        app.use(webpackHotMiddleware(webpack(webpackConfig), {}));
        // app.use(webpackHotServerMiddleware(webpack(webpackConfig), {}));
      } else {
        app.set('views', nodeVars.common.rootPath + nodeVars.common.viewPath);
      }
    }
  }
  return EnvCore;
})();
module.exports = EnvCore;