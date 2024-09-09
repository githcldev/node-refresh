const ch = require('chalk');
const ConsoleLogHelper = {
  e: function logError(msg){
    console.error(ch.red(msg))
  },
  f: function logFailure(msg){
    console.error(ch.red(msg))
  },
  i: function logInfo(msg){
    console.log(ch.blue(msg))
  },
  l: function log(msg){
    console.log(msg)
  },
  log: function log(msg){
    console.log(msg)
  },
  s: function logSuccess(msg){
    console.error(ch.green(msg))
  }
};
module.exports = ConsoleLogHelper;