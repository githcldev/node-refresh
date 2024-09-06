const { exec } = require('child_process');
let CpExec = (function () {
  class CpExec extends exec {
    constructor(args) {
      super(args)
    };
  }
  return CpExec;
})();
module.exports = CpExec;