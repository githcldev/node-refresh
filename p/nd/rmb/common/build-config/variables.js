const projectRoot = require('path').resolve(__dirname, "../../");
const cmdArgs = require('yargs').argv;
const EVENT = process.env.npm_lifecycle_event || '';
module.exports = {
  hasProcessFlag: function hasProcessFlag(flag) {
    return process.argv.join('').indexOf(flag) > -1;
  },
  hasNpmFlag: function hasNpmFlag(flag) {
    return EVENT.includes(flag);
  },
  isWebpackDevServer: function isWebpackDevServer() {
    return process.argv[1] && !! (/webpack-dev-server/.exec(process.argv[1]));
  },
  webpackEntry: projectRoot + "/server/node/config/express-server.js",
  gWebpack: {
    core: require('webpack'),
    htmlTemplate: '/index.html',
    config: {
      common: projectRoot + "/common/build-config/0-jit/wp-common-config.js",
      development: projectRoot + "/common/build-config/0-jit/dev-config.js",
      production: projectRoot + "/common/build-config/0-jit/prod-config.js",
    },
    modules: {
      core: {
        moduleConfig: projectRoot + "/common/modules/",
        config: projectRoot + "/common/modules/user/wp-config",
        tsConfig: projectRoot + "/common/modules/tsconfig.json",
        polyfills: "polyfills.ts",
        vendor: "vendor.ts",
      },
      user: {
        entry: (typeof cmdArgs.env !== 'undefined' && cmdArgs.env.production) ? projectRoot + "/client/src/lib/presentation/" + "user/index-0-jit.ts" : projectRoot + "/client/src/lib/presentation/" + "user/index.ts",
        wpConfig: projectRoot + "/common/modules/user/wp-config",
        ejsTemplate: "user/index.ejs",
      },
      index: {
        entry: (typeof cmdArgs.env !== 'undefined' && cmdArgs.env.production) ? projectRoot + "/client/src/lib/presentation/" + "index/index-0-jit.ts" : projectRoot + "/client/src/lib/presentation/" + "index/index.ts",
        wpConfig: projectRoot + "/common/modules/index/wp-config",
        ejsTemplate: "index/index.ejs",
      }
    },
    plugins: {
      closure: require('closure-webpack-plugin'),
      compression: require("compression-webpack-plugin"),
      contextReplace: require("webpack/lib/ContextReplacementPlugin"),
      copy: require('copy-webpack-plugin'),
      dashboard: require('webpack-dashboard/plugin'),
      define: require('webpack/lib/DefinePlugin'),
      extractText: require('extract-text-webpack-plugin'),
      hashedModule: require('webpack/lib/HashedModuleIdsPlugin'),
      html: require('html-webpack-plugin'),
      loaderOpt: require('webpack/lib/LoaderOptionsPlugin'),
      miniCssExtract: require("mini-css-extract-plugin"),
      normalModuleReplace: require('webpack/lib/NormalModuleReplacementPlugin'),
      optimizeCSSAssets: require("optimize-css-assets-webpack-plugin"),
      optimizeJs: require('optimize-js-plugin'),
      provide: require('webpack/lib/ProvidePlugin'),
      scriptExtHtml: require('script-ext-html-webpack-plugin'),
      uglifyJs: require("uglifyjs-webpack-plugin"),
    },
    loader: {
      autoPreFixer: require('autoprefixer'),
      awesomeTs: require('awesome-typescript-loader'),
      cssnano: require('cssnano'),
      precss: require('precss'),
      pxtorem: require('postcss-pxtorem'),
      svgFragments: require('postcss-svg-fragments'),
    },
    tools: {
      webMerge: require('webpack-merge'),
      ng: require('@ngtools/webpack'),
    }
  },
  server: {
    root: projectRoot + "/server",
    static: projectRoot + "/server/static",
  },
  client: {
    core: projectRoot + "/client",
    src: projectRoot + "/client/src",
    modules: projectRoot + "/client/src/lib/presentation/",
  },
  dist: {
    core: projectRoot + "/dist",
    client: projectRoot + "/dist/client",
    dev: projectRoot + "/dist/client/dev/0-jit",
    devJit: projectRoot + "/dist/client/dev/0-jit",
    cache: projectRoot + "/dist/client/cache",
    cacheAot1: projectRoot + "/dist/client/cache/1-aot",
    cacheAot2: projectRoot + "/dist/client/cache/2-aot",
    cacheAot3: projectRoot + "/dist/client/cache/3-aot",
    cacheAot4: projectRoot + "/dist/client/cache/4-aot",
    prod: projectRoot + "/dist/client/prod",
    prodJit: projectRoot + "/dist/client/prod/0-jit",
    prodAot1: projectRoot + "/dist/client/prod/1-aot",
    prodAot2: projectRoot + "/dist/client/prod/2-aot",
    prodAot3: projectRoot + "/dist/client/prod/3-aot",
    prodAot4: projectRoot + "/dist/client/prod/4-aot",
  },
  projectRoot: projectRoot,
  root: projectRoot,
  common: projectRoot + "/common",
  nm: projectRoot + "/node_modules/",
  cmdFlags: cmdArgs
}