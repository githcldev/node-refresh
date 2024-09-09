'use strict';
let CSM = {
  constructor: (configurations) => {
    this.configurations = configurations;
    this.message = configurations.message
  }
}
CSM.toString = function toString() {
  return 'CSM' + (this.message ? ': ' + this.message : '');
};
CSM.consoleHello = function consoleHello() {
  console.log('hello from CSM')
};
CSM.alertHello = function alertHello() {
  alert('hello');
};
CSM.__CSM__ = true;
module.exports = CSM;