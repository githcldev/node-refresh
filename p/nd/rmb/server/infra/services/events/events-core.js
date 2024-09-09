const nodeVars = require('../../../config/nodeVariable');
const EventEmitter = require('events')
let EventsCore = (function () {
  let privateProps = new WeakMap();
  class EventsCore extends EventEmitter {
    registerGlobalErrorHandler(){
    }
    constructor() {
      super()
      privateProps.set(this, {
        registerGlobalErrorHandler: async function registerGlobalErrorHandler() {
        }
      }); // this is private
    };
  }
  return EventsCore;
})();
module.exports = EventsCore;