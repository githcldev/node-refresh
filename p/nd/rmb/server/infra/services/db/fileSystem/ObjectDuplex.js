/**
 * Object Duplex class for file updates
 */
const nodeVars = require('../../../../config/nodeVariable');
let ObjectDuplex = (function () {
  class ObjectDuplex extends nodeVars.tools.duplex {
    constructor(source, options) {
      super(options);
      this[kSource] = source;
    }
    _write(chunk, encoding, callback) {
      // The underlying source only deals with strings
      if (Buffer.isBuffer(chunk))
        chunk = chunk.toString();
      this[kSource].writeSomeData(chunk);
      callback();
    }
    _read(size) {
      this[kSource].fetchSomeData(size, (data, encoding) => {
        this.push(Buffer.from(data, encoding));
      });
    }
  }
  return ObjectDuplex;
})();
module.exports = ObjectDuplex;