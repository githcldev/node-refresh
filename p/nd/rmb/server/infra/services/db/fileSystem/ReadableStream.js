/**
 * Object Duplex class for file updates
 */
const nodeVars = require('../../../../config/nodeVariable');
let ReadableStream = (function () {
  class ReadableStream extends nodeVars.tools.readableStream {
    constructor(source, options) {
      super(options);
      this.data = require(source);
      this.recordFound = false;
      this.curIndex = 0;
    }
    // _read will be called when the stream wants to pull more data in
    // the advisory size argument is ignored in this case.
    _read() {
      if (this.curIndex === this.data.length)
        return this.push(null);
      var data = this.data[this.curIndex++];
      this.push(data);
      return data;
    }
  }
  return ReadableStream;
})();
module.exports = ReadableStream;