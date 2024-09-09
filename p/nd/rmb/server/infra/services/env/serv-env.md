else if(cmdFlagValue.indexOf('ld') === 0){
  let webpackMiddleware = require('webpack-dev-middleware');
  let webpack = require('webpack');
  let webpackConfig = require('../../../../common/build-config/login/webpack.dev');
  app.use(webpackMiddleware(webpack(webpackConfig), {}));
} else if(cmdFlagValue.indexOf('ad') === 0){
  let webpackMiddleware = require('webpack-dev-middleware');
  let webpack = require('webpack');
  let index_webpackConfig = require('../../../../common/build-config/index-react/wp-dev-config');
  app.use(webpackMiddleware(webpack(index_webpackConfig), {}));
  let login_webpackConfig = require('../../../../common/build-config/login/webpack.dev');
  app.use(webpackMiddleware(webpack(login_webpackConfig), {}));
}

isWindows ?