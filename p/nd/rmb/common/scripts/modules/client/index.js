/**
 * IndexScript comprise all client-index npm scripts
 */
const Env = require('../../../../server/infra/services/env/env-core')
const WBP = require('webpack');
var spawn = require('child_process').spawn
const _clh = require('../../../../server/infra/helpers/consoleLogHelper')
// const webpackProdC = require('../../../build-config/index-react/wp-prod-config')
// const webpackProdDevC = require('../../../build-config/index-react/wp-prod-dev-config')
const webpackDevC = 'common/build-config/index-react/wp-dev-config.js'
let IndexScript = (function () {
  class IndexScript {
    static debug() {
      _clh.l('in indexDev')
      const args = [
        '--config',
        webpackDevC
      ]
      var cmd = Env.isWindows() ? 'webpack-dev-server.cmd' : 'webpack-dev-server';
      const wdsProcess = spawn(cmd, args)
      wdsProcess.stdout.on('data', (data) => {
        _clh.i(data.toString());
      });
      wdsProcess.stderr.on('data', (data) => {
        _clh.e(data.toString());
      });
      wdsProcess.on('exit', (code) => {
        _clh.s(`Child exited with code ${code}`);
      });
    }
    static prodDebug(cb = null) {
      const webpackProdDevC = require('../../../build-config/index-react/wp-prod-dev-config')
      WBP(webpackProdDevC, function (err) {
        if (err) { // Handle errors here
          _clh.f('Fail compile index prod debug module')
        }
        _clh.s('Success compile index prod debug module')
        if (cb) cb();
      });
    }
    static rawProd(cb = null) {
      const webpackProdC = require('../../../build-config/index-react/wp-prod-config')
      WBP(webpackProdC, function (err) {
        if (err) { // Handle errors here
          _clh.f('Fail compile index prod module')
        }
        _clh.s('Success compile index prod module')
        if (cb) cb();
      });
    }
  }
  return IndexScript;
})();
module.exports = IndexScript;