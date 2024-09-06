const nodeVars = require('../../../../config/nodeVariable');
let CrudCoreHelper = (function () {
  class CrudCoreHelper {
    constructor(collectionPath) {
      this.collectionPath = collectionPath;
    };
    getData() {
      return require(this.collectionPath);
    };
    create(record) {
      let data = require(this.collectionPath);
      data.push(record);
    };
    update(queries) {  // searchField, searchValue, changeField, newValue
      var records = require(this.collectionPath);
      // privateProps.get(this).fsWrite(this.collectionPath, tempRecords);
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
          //     // TODO: Loop on keys
          //     // 0 is consider as false therefore use > -1 below
          if (recordKeys.indexOf(keys[0]) > -1 && currentRecord[keys[0]] === currentQuery[keys[0]]) {
            recordsFoundIndex.push(currentRecord);
          }
        }
      }
      // return recordsFoundIndex;
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
      // return privateProps.get(this).fsWrite(this.collectionPath, records);
    }
  }
  return CrudCoreHelper;
})();

module.exports = CrudCoreHelper;