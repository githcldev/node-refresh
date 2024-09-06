const { spawn } = require('child_process');
let CpSpawn = (function () {
  class CpSpawn extends spawn {
    constructor(args) {
      super(args)
    }
  }
  return CpSpawn;
})();
module.exports = CpSpawn;