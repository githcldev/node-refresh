const EventsApp = require('./events-app')
const EventsCore = require('./events-core')
const ServerShutdownCore = require('../serverShutdown/serverShutdown-core')
var appEmitter = null
let NodeEventsCore = (function () {
  class NodeEventsCore {
    static registerProcessEvents() {
      process.on('uncaughtException', (err) => {
        console.log('Error catch at node-events-core')
        console.error('whoops! There was an uncaught error', err);
        // do a graceful shutdown,
        // close the database connection etc.
        // process.exit(1);
      });
      process.on('unhandledRejection', function (reason, promise) {
        console.error('Error catch at node-events-core')
        console.error('Unhandled rejection', { reason: reason, promise: promise })
      });
      // process.on('SIGTERM', ServerShutdownCore.closeDb());
      // process.on('SIGINT', ServerShutdownCore.closeDb());
    }
    static registerErrorEvents() {
    }
    static registerDbEvents() {
    }
    static registerClusterEvents() {
    }
    static getAppEmitter() {
      return appEmitter;
    }
    static registerAppEvents(app) {
      new EventsApp(app)
      appEmitter = new EventsCore()
    }
    static init(app) {
      this.registerProcessEvents();
      this.registerAppEvents(app);
      this.registerErrorEvents();
      this.registerDbEvents();
      this.registerClusterEvents();
    };
  }
  return NodeEventsCore;
})();
module.exports = NodeEventsCore;