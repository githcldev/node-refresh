'use strict';
let defaults = {
};
defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};
defaults.message = "CSM default message"
module.exports = defaults;
// Allow use of default import syntax in TypeScript
module.exports.default = defaults;