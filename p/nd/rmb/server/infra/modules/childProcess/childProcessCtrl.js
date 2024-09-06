const { spawn, execFile } = require('child_process');
var ChildProcessCtrl = (function () {
  const nodeVars = require('../../../config/nodeVariable');
  var cP = require( "../../services/childProcess/cp-core")
  function initialiseChildProcessCtrl() {
  }
  class ChildProcessCtrl {
    static spawn(res) {
      var child = new cP("spawn", "pwd");
      child.on('data', function (code, signal) {
        console.log(code, signal)
        res.send(code.toString())
      });
      child.on('exit', function (code, signal) {
        console.log(code, signal)
        res.send(code.toString())
        res.end()
      });
      child.on('disconnect', function (code, signal) {
        console.log(code, signal)
        res.send(code.toString())
      });
      child.on('error', function (code, signal) {
        console.log(code, signal)
        res.send(code.toString())
      });
      child.on('message', function (code, signal) {
        console.log(code, signal)
        res.send(code.toString())
      });
    };
    static exec(res) {
      res.send('exec')
    };
    static execFile(res) {
      const child = execFile('node', ['--version'], (error, stdout, stderr) => {
          if (error) {
              res.send('stderr ' + stderr.toString());
              throw error;
          }
          res.send('stdout ' + stdout.toString());
      });
    };
  }
  return ChildProcessCtrl;
})();
module.exports = ChildProcessCtrl;