/**
 * UserScript comprise all client-user npm scripts
 */
const Env = require('../../../../server/infra/services/env/env-core')
const WBP = require('webpack');
var spawn = require('child_process').spawn
const _clh = require('../../../../server/infra/helpers/consoleLogHelper')
const webpackProdC = require('../../../build-config/user/webpack.prod')
const webpackDevC = 'common/build-config/user/webpack.dev.js'
let UserScript = (function () {
  class UserScript {
    static debug() {
      _clh.l('in userDev')
      const args = [
        '--config',
        webpackDevC,
        '--mode',
        'development',
        '--progress',
        '--profile',
        '--trace-deprecation'
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
      var inConfi = webpackProdC();
      // _clh.i(JSON.stringify(webpackProdC()))
      WBP(inConfi, function (err) {
        if (err) { // Handle errors here
          _clh.f('Fail compile user module')
        }
        _clh.s('Success compile user module')
        if (cb) cb();
      });
    }
  }
  return UserScript;
})();
module.exports = UserScript;