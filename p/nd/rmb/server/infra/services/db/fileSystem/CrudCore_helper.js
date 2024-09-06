/**
 * This crudCore helper gives helper methods for crud
 * to reduce its complexity
 */
const nodeVars = require('../../../../config/nodeVariable');
var objectDuplex = require('./ObjectDuplex');
var ReadableStream = require('./ReadableStream');
var WriteableStream = require('./WriteableStream');
let CrudCoreHelper = (function () {
  class CrudCoreHelper {
    writeStream(filePath){
      var ws = new WriteableStream();
      ws._write('test', 'utf-8', function(){
        console.log('_write');
      });
      ws.on('error',function(er){
        console.log('ws error')
        console.log(er)
      })
      ws.on('finish',function(){
        console.log('ws finish')
      })
      ws.on('drain',function(){
        console.log('ws drain')
      })
    }
    updateReadStream1(filePath, queries, update = false) {
      var rs = new ReadableStream(filePath, { objectMode: true });
      function next(){
        var document = this._read();
        if (this.recordFound === false && 
          document[queries.searchField] === Number(queries.searchValue)) {
          this.recordFound = true;
          if(!update) {
            this.data = document;
            rs.emit('close', this.data);
            rs.destroy("Record found");
          } else {
            rs.emit('match', document);
          }              
        } else {
          rs.emit('unmatch', document);
        }
      }
      rs.on('next', function(){
        next().bind(this);
      })
      rs.on('readable', function (document) {
        next().bind(this);
      });
      rs.on('end', function(){
        rs.destroy();
      })
      return rs;
    }
    readStream3(filePath, queries, update = false) {
      var rs = new ReadableStream(filePath, { objectMode: true });
      rs.on('readable', function (document) {
        while (document = this._read()) {
          if (this.recordFound === false && 
            document[queries.searchField] === Number(queries.searchValue)) {
            this.recordFound = true;
            if(!update) {
              this.data = document;
              rs.emit('close', this.data);
              rs.destroy("Record found");
            } else {
              rs.emit('match', document);
            }              
          } else {
            rs.emit('unmatch', document);
          }
        }
      });
      rs.on('end', function(){
        rs.destroy();
      })
      return rs;
    }
    readStream2(filePath, queries) {
      var rs = new ReadableStream(filePath, { objectMode: true });
      rs.on('data', function (document) {
        if (document[queries.searchField] === Number(queries.searchValue)) {
          this.recordFound = true;
          this.data = document;
          rs.destroy("Record found");
        }
      });
      rs.on('error', function (err) {
        if (!this.recordFound) {
          console.log("Error while file read stream => " + err);
          return -1;
        }
      })
      return rs;
    }
    readStream1(filePath, queries) {
      var rs = new ReadableStream(filePath, { objectMode: true });
      rs.on('data', function (document) {
        if (document[queries.searchField] === queries.searchValue) {
          this.recordFound = true;
          this.data = document;
          rs.destroy("Record found");
        }
      });
      rs.on('error', function (err) {
        if (!this.recordFound) {
          console.log("Error while file read stream => " + err);
          return -1;
        }
      })
      return rs;
    }
  }
  return CrudCoreHelper;
})();
module.exports = CrudCoreHelper;