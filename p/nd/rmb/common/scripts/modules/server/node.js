/**
 * NodeScript comprise all server-express npm scripts
 */
// const nodeVars = require('../../../config/nodeVariable');
const _clh = require('../../../../server/infra/helpers/consoleLogHelper')
const Env = require('../../../../server/infra/services/env/env-core')
const spawn = require('child_process').spawn;
let NodeScript = (function () {
  class NodeScript {
    static debug() {
      _clh.l('in nodeDev')
      const args = [
        '--nolazy',
        '--inspect-brk=3010',
        '--inspect',
        'server/config/express-server.js',
        '--config',
        'server/config/nodemon.json'
      ]
      var cmd = Env.isWindows() ? 'nodemon.cmd' : 'nodemon';
      const nodemonProcess = spawn(cmd, args)
      nodemonProcess.stdout.on('data', (data) => {
        console.log(data.toString());
      });
      nodemonProcess.stderr.on('data', (data) => {
        console.log(data.toString());
      });
      nodemonProcess.on('exit', (code) => {
        console.log(`Child exited with code ${code}`);
      });
    }
    static start() {
      _clh.l('in nodeStart')
      const args = [
        'server/config/express-server.js'
      ]
      var cmd = Env.isWindows() ? 'node.cmd' : 'node';
      const nodeProcess = spawn(cmd, args)
      nodeProcess.stdout.on('data', (data) => {
        console.log(data.toString());
      });
      nodeProcess.stderr.on('data', (data) => {
        console.log(data.toString());
      });
      nodeProcess.on('exit', (code) => {
        console.log(`Child exited with code ${code}`);
      });
    }
  }
  return NodeScript;
})();
module.exports = NodeScript;