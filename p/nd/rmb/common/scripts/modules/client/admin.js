/**
 * AdminScript comprise all client-index npm scripts
 */
const Env = require('../../../../server/infra/services/env/env-core')
const WBP = require('webpack');
var spawn = require('child_process').spawn
const _clh = require('../../../../server/infra/helpers/consoleLogHelper')
const webpackProdC = require('../../../build-config/admin/wp-prod-config')
const webpackDevC = 'common/build-config/admin/wp-dev-config.js'
let AdminScript = (function () {
  class AdminScript {
    static debug() {
      _clh.l('in admin dev')
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
    static rawProd(cb = null) {
      WBP(webpackProdC, function (err) {
        if (err) { // Handle errors here
          _clh.f('Fail compile admin module')
        }
        _clh.s('Success compile admin module')
        if (cb) cb();
      });
    }
  }
  return AdminScript;
})();
module.exports = AdminScript;