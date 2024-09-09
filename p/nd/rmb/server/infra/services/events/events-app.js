let EventsApp = (function () {
  let app = null;
  class EventsApp {
    checkExpectation(req, res){
      // 417 Expectation Failed
    }
    clientError(req, res){
      //  Responsible for closing/destroying the underlying socket
      // 400 Bad Request
    }
    close(req, res){
      //  Emitted when the server closes.
    }
    connect(req, socket, head){
    }
    connection(socket){
    }
    request(req, res){
    }
    upgrade(req, socket, head){
    }
    init(app){
      app.on('checkExpectation', this.checkExpectation)
      app.on('clientError', this.clientError)
      app.on('close', this.close)
      app.on('connect', this.connect)
      app.on('connection', this.connection)
      app.on('request', this.request)
      app.on('upgrade', this.upgrade)
    }
    constructor(app) {
      this.init(app)
    };
  }
  return EventsApp;
})();
module.exports = EventsApp;