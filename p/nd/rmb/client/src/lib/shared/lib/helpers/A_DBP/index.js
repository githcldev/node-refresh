"use strict";
let differenceWith = require("lodash/differenceWith");
let isEqual = require("lodash/isEqual");
let matches = require("lodash/matches");
let find = require("lodash/find");
let A_DB = require("../../modules/A_DB/index");
let A_XHR = require("../../helpers/A_XHR/index");
let A_DBP = {};
//	add client data
A_DBP.getAllTblDt = async function getAllTblDt(){
  return A_DB.getAllTblsData()
}
A_DBP.fetchServerTblData = function fetchServerTblData(req_tbl) {
  console.log(
    "A_DBP.fetchServerTblData is ready with ping " + A_DBP.A_DBP_COUNTER++
  );
  // get data for
  // TODO: A_WS tbl data fetch implementation for cmsDistributionMode
  // if (cmsDistributionMode === true) {
  // get dt from A_WS
  // } else {
  let opt = {
    url: req_tbl,
  };
  return A_XHR.getTblData(opt);
  // }
};
A_DBP.getIdbTblData = async function getIdbTblData(req_tbl) {
  console.log("A_DBP.getIdbTblData is ready with ping " + A_DBP.A_DBP_COUNTER++);
  let tbDt = await A_DB.getTblDt(req_tbl)
  return tbDt;
};
A_DBP.saveIdbData = function saveData(tbl_name, data) {
  console.log("A_DBP.saveIdbData is ready with ping " + A_DBP.A_DBP_COUNTER++);
  // save data to table
  return new Promise(function (resolve, reject) {
    let col = A_DB.getCollection(tbl_name);
    col
      .insert(data)
      .then(() => {
        // col.find().forEach(doc => {
        // 	console.log('c - record: ', doc)
        // });
        resolve(true);
      })
      .catch((error) => {
        console.error(error);
        reject(false);
      });
  });
};
A_DBP.saveNewIdbTblDt = async function saveNewIdbTblDt(tblName, new_tbl_dt){
  let operation = 1, updateIdbTblRes = null;
  try{
    let truncateIdbConfigTbl = await A_DB.truncate(tblName);
    if(truncateIdbConfigTbl){
      operation = 2;
      updateIdbTblRes = await A_DBP.saveIdbData(tblName, new_tbl_dt);
      if(updateIdbTblRes) return true;
      else return false;
    } else {
      return false
    }
  } catch (e) {
    if(operation === 1) {
      updateIdbTblRes = await A_DBP.saveIdbData(tblName, new_tbl_dt);
      if(updateIdbTblRes) return true;
      else return false;
    }
    return updateIdbTblRes
    // debugger;
    // return false;
  }
}
A_DBP.resetTblData = async function resetTblData(tblName) {
  console.log("A_DBP.resetTblData is ready with ping " + A_DBP.A_DBP_COUNTER++);
  // TODO: get data from source and save it locally
  console.log("Reset Tbl data request for " + tblName);
  try {
    let fetchTblDt = await A_DBP.fetchServerTblData(tblName);
    if (fetchTblDt) {
      let saveTblDt = await A_DBP.saveNewIdbTblDt(tblName, fetchTblDt);
      if (saveTblDt) return true;
      else return false;
    } else return false;
  } catch (e) {
    return false;
  }
};
A_DBP.tblsUpdatelooper = async function tblsUpdatelooper(tblArray) {
  console.log(
    "A_DBP.tblsUpdatelooper is ready with ping " + A_DBP.A_DBP_COUNTER++
  );
  let i = 0,
    status = null;
  let reqTblLength = tblArray.length;
  for (i = 0; i < reqTblLength; i++) {
    console.log("No data found for " + tblArray[i].name + " in idb");
    let resetTblData = await A_DBP.resetTblData(tblArray[i].name);
    if (resetTblData) {
      console.log("New data refresh for tbl name " + tblArray[i].name);
    } else {
      return false;
      break;
    }
    if (i + 1 === reqTblLength) return true;
  }
};
A_DBP.localDbInit = async function localDbInit(new_cms_config_tbl_dt) {
  console.log("A_DBP.localDbInit is ready with ping " + A_DBP.A_DBP_COUNTER++);
  try {
    // 1 - get required tables record from new_cms_config_tbl_dt
    let newReqTblSet = A_DBP.getReqTblKeyRecord(new_cms_config_tbl_dt);
    // 2 - loop over each required table
    newReqTblSet = (window._.isString(newReqTblSet.value)) ? JSON.parse(newReqTblSet.value) : newReqTblSet.value;
    if (_.isLength(newReqTblSet.length) && newReqTblSet.length > 0) {
      // 3 - Fetch each required tbl from server and push in db
      let resetTblPeriod = await A_DBP.tblsUpdatelooper(newReqTblSet);
      if (resetTblPeriod) {
        // 4 - Once loop finish, then save cms_config_tbl_data in config tbl
        let updateIdbConfigTbl = await A_DBP.updateIdbConfigTbl(new_cms_config_tbl_dt);
        if (updateIdbConfigTbl) return true;
        else return false;
      }
      else return false;
    } else {
      return true;
    }
  } catch {
    return false;
  }
};
A_DBP.resetAllReqTbls = async function resetAllReqTbls(
  newReqTblSet,
  prevReqTblSet
) {
  async function loopTwoArrayOverEachOther() {
    function findTblWithDiffVersion() {
      const reverseListA = [...newReqTblSet].reverse(); //Copy since reverse is an in-place operation
      return prevReqTblSet.map((b) => {
        return reverseListA.find((a) => a.name === b.name && a.version !== b.version)
      });
    }
    const tblsToReset = (newReqTblSet.length === prevReqTblSet.length) ? findTblWithDiffVersion() : newReqTblSet;
    if (_.isLength(tblsToReset.length) && tblsToReset.length > 0) {
      let resetTblPeriod = await A_DBP.tblsUpdatelooper(tblsToReset);
      if (resetTblPeriod) return true;
      else return false;
    } else {
      return true;
    }
    console.log(C);
    debugger;
  }
  newReqTblSet = (window._.isString(newReqTblSet)) ? JSON.parse(newReqTblSet) : newReqTblSet;
  prevReqTblSet = (window._.isString(prevReqTblSet)) ? JSON.parse(prevReqTblSet) : prevReqTblSet;
  if (window._.isArray(newReqTblSet) && window._.isArray(prevReqTblSet)) {
    let loopReset = await loopTwoArrayOverEachOther();
    if(loopReset) return true
    else return false;
  } else {
    return false;
  }
};
A_DBP.getReqTblKeyRecord = function getReqTblKeyRecord(tArray) {
  let reqKey = { key: "required-tables" };
  let newReqTblSet = find(tArray, function (n) {
    if (matches(reqKey)(n)) {
      return n;
    }
  });
  if (newReqTblSet.key === "required-tables") {
    return newReqTblSet;
  } else return false;
};
A_DBP.updateIdbConfigTbl = async function updateIdbConfigTbl(
  new_cms_config_tbl_dt
) {
  // truncate old data, then save new data
  let truncateIdbConfigTbl = await A_DB.truncate('config'), updateIdbConfigTbl = null;
  if(truncateIdbConfigTbl) updateIdbConfigTbl = await A_DBP.saveIdbData(
    "config",
    new_cms_config_tbl_dt
  );
  else return false;
  if (updateIdbConfigTbl) {
    return true;
  } else return false;
};
A_DBP.syncIdbReqTbl = async function syncIdbReqTbl(
  new_cms_config_tbl_dt,
  prev_cms_config_tbl_dt,
  diffR
) {
  return new Promise(async function (resolve, reject) {
    async function finallySaveNewCmsConfigTblDt() {
      let updateIdbConfigTbl = await A_DBP.updateIdbConfigTbl(new_cms_config_tbl_dt);
      if (updateIdbConfigTbl) resolve(true);
      else reject(false);
    }
    console.log("A_DBP.syncIdbReqTbl => " + A_DBP.A_DBP_COUNTER++);
    let newReqTblSet = null;
    if (newReqTblSet = A_DBP.getReqTblKeyRecord(diffR)) {
      let prevReqTblSet = null;
      if (prevReqTblSet = A_DBP.getReqTblKeyRecord(prev_cms_config_tbl_dt)) {
        let reset = await A_DBP.resetAllReqTbls(newReqTblSet.value, prevReqTblSet.value);
        if (reset) {
          // update idb config with new_cms_config_tbl_dt
          finallySaveNewCmsConfigTblDt();
        } else reject(false);
      } else finallySaveNewCmsConfigTblDt();
    } else {
      finallySaveNewCmsConfigTblDt();
    }
  });
};
A_DBP.cleanAllIdbTbls = async function cleanAllIdbTbls() {
    // clean up local db
    console.log("A_DBP.cleanAllIdbTbls => " + A_DBP.A_DBP_COUNTER++);
    let cols = A_DB.getAllTbls();
    if (typeof cols === "undefined" || cols.length === 0) {
      return false;
    }
    let i = 0,
      colsLen = cols.length,
      status = false,
      remainTbls = [];
    for (i = 0; i < colsLen; i++) {
      status = await A_DB.truncate(cols[i]);
      if (!status) {
        remainTbls.push(cols[i]);
      }
      if (colsLen === i + 1) {
        if (remainTbls.length > 0)
          console.log(
            "Tbls unable to truncate are => " + JSON.stringify(remainTbls)
          );
        return true;
      }
    }
  }
A_DBP.ping = function ping() {
  console.log("A_DBP.ping is ready with ping " + A_DBP.A_DBP_COUNTER++);
};
A_DBP.A_DBP_COUNTER = 0;
module.exports = A_DBP;
