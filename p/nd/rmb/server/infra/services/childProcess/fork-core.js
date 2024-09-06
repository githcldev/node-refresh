const { fork } = require('child_process');
let CpFork = (function () {
  class CpFork extends fork {
    constructor(args) {
      super(args)
    };
  }
  return CpFork;
})();
module.exports = CpFork;