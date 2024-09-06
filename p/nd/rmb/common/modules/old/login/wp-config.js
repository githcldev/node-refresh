let pathHelp = require('../../build-config/variables');
module.exports = {
  entry: {
    'login_polyfills': pathHelp.gWebpack.modules.core.moduleConfig + pathHelp.gWebpack.modules.core.polyfills,
    'login_main': pathHelp.gWebpack.modules.login.entry,
  },
  plugins: [],
  optimization: {
    splitChunks: {
      cacheGroups: {
        login_polyfills: {
          name: 'login_polyfills',
        },
        login_main: {
          name: 'login_main',
          chunks: 'all',
          test(module, chunks) {
            module => /node_modules/.test(module.resource)
          }
        }
      }
    }
  },
  serve: {
    open: {
      path: 'login.html' // The url path on the server to open.
    },
  }
}
if (typeof pathHelp.cmdFlags.env !== 'undefined' && pathHelp.cmdFlags.env.production) {
  module.exports.plugins.push(
    new pathHelp.gWebpack.plugins.html({
      filename: 'login.ejs',
      template: '!!raw-loader!' + pathHelp.client.modules + pathHelp.gWebpack.modules.login.ejsTemplate,
      chunks: ['login_polyfills', 'login_main'],
    })
  );
  module.exports.plugins.push(
    new pathHelp.gWebpack.plugins.html({
      template: pathHelp.client.src + pathHelp.gWebpack.htmlTemplate,
      filename: 'login.html',
      chunks: ['login_polyfills', 'login_main'],
    })
  );
} else {
  module.exports.plugins.push(
    new pathHelp.gWebpack.plugins.html({
      template: pathHelp.client.src + pathHelp.gWebpack.htmlTemplate,
      filename: 'login.html',
      chunks: ['login_polyfills', 'login_main'],
    })
  );
}