/**
 * This fs crud uses stream events
 */
const nodeVars = require('../../../../config/nodeVariable');
var CrudCoreHelper = require('./CrudCore_helper');
let CrudCore = (function () {
  let privateProps = new WeakMap();
  class CrudCore {
    constructor(collectionPath) {
      this.crudCoreHelper = new CrudCoreHelper();
      this.collectionPath = collectionPath;
      privateProps.set(this, {
        fsWrite: async function fsWrite(filePath, data) {
          const writeFilePlug = nodeVars.tools.promisify(nodeVars.tools.fs.writeFile);
          const readFilePlug = nodeVars.tools.promisify(nodeVars.tools.fs.readFile);
          await writeFilePlug(filePath, JSON.stringify(data, null, 2));
          var content = await readFilePlug(filePath, 'utf-8');
          return content;
        },
        fsReadStream: function fsReamStream(filePath) {
          return nodeVars.tools.fs.createReadStream(filePath, 'utf-8');
        },
        fsWriteStream: function fsWriteStream(filePath) {
          return nodeVars.tools.fs.createWriteStream(filePath);
        },
      }); // this is private
    };
    getData() {
      return nodeVars.tools.fs.createReadStream(this.collectionPath);
    };
    resetData(newData) {
      return privateProps.get(this).fsWrite(this.collectionPath, newData);
    };
    fsWriteStream(){
      return privateProps.get(this).fsWriteStream('C:/f/test.txt');
    }
    write(){
      this.crudCoreHelper.writeStream();
    }
    create(record) {
      let data = require(this.collectionPath);
      data.push(record);
      return privateProps.get(this).fsWrite(this.collectionPath, data);
    };
    // update 2 use read(readable)/write stream in objectMode
    update2(queries) {  // searchField, searchValue, changeField, newValue
      var rs = this.crudCoreHelper.readStream3(this.collectionPath, queries[0], true);
      var ws = privateProps.get(this).fsWriteStream('C:/f/test.txt');
      rs.on('match', function(dt){
        console.log(dt)
      })
      rs.on('unmatch', function(dt){
        console.log(dt)
      })
    };
    /* update 1 using fs read/write stream */
    update(queries) {  // searchField, searchValue, changeField, newValue
      var records = require(this.collectionPath);
      var recordsCounter = 0, recordKeys = [],
        currentRecord = {}, recordsSize = records.length,
        queriesCounter = 0, queriesSize = queries.length,
        currentQuery = {};
      for (recordsCounter = 0; recordsCounter < recordsSize; ++recordsCounter) {
        currentRecord = records[recordsCounter];
        recordKeys = Object.keys(currentRecord);
        for (queriesCounter = 0; queriesCounter < queriesSize; ++queriesCounter) {
          currentQuery = queries[queriesCounter];
          // 0 is consider as false therefore use > -1 below
          if (recordKeys.indexOf(currentQuery.searchField) > -1 &&
            recordKeys.indexOf(currentQuery.changeField) > -1 &&
            currentRecord[currentQuery.searchField] === currentQuery.searchValue) {
            // final update to records
            records[recordsCounter][currentQuery.changeField] = currentQuery.newValue;
          }
        }
      }
      return privateProps.get(this).fsWrite(this.collectionPath, records);
    };
    read3(queries) {
      return this.crudCoreHelper.readStream3(this.collectionPath, queries);
    };
    read2(queries) {
      return this.crudCoreHelper.readStream2(this.collectionPath, queries);
    };
    read1(queries) {
      return this.crudCoreHelper.readStream1(this.collectionPath, queries);
    };
    read(queries) {
      var records = require(this.collectionPath);
      var recordsFoundIndex = [], recordsCounter = 0, recordKeys = [],
        currentRecord = {}, recordsSize = records.length,
        queriesCounter = 0, queriesSize = queries.length,
        currentQuery = {}, keys = [];
      for (recordsCounter = 0; recordsCounter < recordsSize; ++recordsCounter) {
        currentRecord = records[recordsCounter];
        recordKeys = Object.keys(currentRecord);
        for (queriesCounter = 0; queriesCounter < queriesSize; ++queriesCounter) {
          currentQuery = queries[queriesCounter];
          keys = Object.keys(currentQuery);
          // TODO: Loop on keys
          // 0 is consider as false therefore use > -1 below
          if (recordKeys.indexOf(keys[0]) > -1 && currentRecord[keys[0]] === currentQuery[keys[0]]) {
            recordsFoundIndex.push(currentRecord);
          }
        }
      }
      return recordsFoundIndex;
    };
    delete(queries) {
      var records = require(this.collectionPath);
      var recordsFoundIndex = [], recordsFoundIndexCounter = 0, recordsFoundIndexSize = 0,
        recordsCounter = 0, recordsSize = records.length, recordKeys = [],
        currentRecord = {},
        queriesCounter = 0, queriesSize = queries.length, currentQuery = {},
        keys = [];
      for (recordsCounter = 0; recordsCounter < recordsSize; ++recordsCounter) {
        currentRecord = records[recordsCounter];
        recordKeys = Object.keys(currentRecord);
        for (queriesCounter = 0; queriesCounter < queriesSize; ++queriesCounter) {
          currentQuery = queries[queriesCounter];
          keys = Object.keys(currentQuery);
          // TODO: Loop on keys
          // 0 is consider as false therefore use > -1 below
          if (recordKeys.indexOf(keys[0]) > -1 && currentRecord[keys[0]] === currentQuery[keys[0]]) {
            recordsFoundIndex.push(recordsCounter);
          }
        }
      }
      recordsFoundIndexSize = recordsFoundIndex.length;
      recordsFoundIndex.reverse();
      for (recordsFoundIndexCounter = 0; recordsFoundIndexCounter < recordsFoundIndexSize; ++recordsFoundIndexCounter) {
        records.splice(recordsFoundIndex[recordsFoundIndexCounter], 1)
      }
      return privateProps.get(this).fsWrite(this.collectionPath, records);
    }
  }
  return CrudCore;
})();

module.exports = CrudCore;