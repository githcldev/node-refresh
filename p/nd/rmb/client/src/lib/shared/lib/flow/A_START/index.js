"use strict";
let differenceWith = require("lodash/differenceWith");
let isEqual = require("lodash/isEqual");
let matches = require("lodash/matches");
let find = require("lodash/find");
let A_START = {};
A_START.init = async function init(cb = null) {
  console.log("A_START.init is ready with ping " + A_START.A_START_Counter++);
  let A_XHR = require("../../helpers/A_XHR/index");
  let A_SP = require("../../helpers/A_SP/index");
  let A_DBP = require("../../helpers/A_DBP/index");
  let A_DB = require("../../modules/A_DB/index");
  let new_cms_config_tbl_dt = null,
    prev_cms_config_tbl_dt = null;
  function stepError(num) {
    // emit final failure
    console.log(
      "A_START.init -> stepError " +
        num +
        "  A_START.A_START_Counter => " +
        A_START.A_START_Counter++
    );
    cb(false);
    return false;
  }
  function f5() {
    // emit final success
    console.log("A_START.init -> f5  => " + A_START.A_START_Counter++);
    cb(true);
    return true;
  }
  async function f4() {
    // initialise pulling js, css or other files from tbl and rending them at body one by one
    // Once finished we might need to verify it also
    // getting stored js, css from tbl in idb and pushing it on webpage
    console.log("A_START.init -> f4  => " + A_START.A_START_Counter++);
    // TODO cmsDistributionMode functionalty to save js / css to dbTbl
    if(cmsDistributionMode && false) {
      console.log("cmsDistributionMode => " + cmsDistributionMode)
      f5()
    } else f5()
    // cb(true)

    // checkF3();

    // stepError("f4");
  }
  async function checkF3(){
    // for test purpose only
    // check data saved in req-tbls in step 2
    console.log("A_START.init -> checkF3  => " + A_START.A_START_Counter++);
    let allTblsDt = await A_DBP.getAllTblDt()
    if(allTblsDt) {
      debugger;
    } else {
      stepError("checkF3");
      cb(false)
    }
  }
  async function f3() {
    // check if local tbl records exists
    console.log("A_START.init -> f3  => " + A_START.A_START_Counter++);
    try {
      prev_cms_config_tbl_dt = await A_DBP.getIdbTblData("config");
      async function f3A() {
        function filterLocalConfigDt(lc) {
          let i = 0,
            size = lc.length,
            na = [],
            no = {};
          for (i = 0; i < size; i++) {
            no = lc[i];
            delete no["_id"];
            na.push(no);
          }
          return na;
        }
        let clearedPrevCmsConfigTblDt = filterLocalConfigDt(
          prev_cms_config_tbl_dt
        );
        let config = [
          {
            name: "client",
            size: new_cms_config_tbl_dt.length,
            value: new_cms_config_tbl_dt,
          },
          {
            name: "local",
            size: prev_cms_config_tbl_dt.length,
            value: prev_cms_config_tbl_dt,
          },
        ];
        let diffR = differenceWith(config[0].value, config[1].value, isEqual);
        if (diffR.length > 0) {
          let vf3A = await A_DBP.syncIdbReqTbl(
            new_cms_config_tbl_dt,
            prev_cms_config_tbl_dt, diffR
          );
          if (vf3A) f4();
          else cb(false);
        } else {
          f4()
        }
      }
      async function f3B() {
        // populate all other required tbl, this is total idb reset
        // may be a new client or idb has been refreshed
        // populate config tbl
        let vf3B = await A_DBP.localDbInit(
          new_cms_config_tbl_dt,
          prev_cms_config_tbl_dt
        );
        if (vf3B) f4();
        else cb(false);
      }
      if (prev_cms_config_tbl_dt && prev_cms_config_tbl_dt.length > 0) f3A();  // 3A
      else f3B(); // 3B
    } catch (e) {
      stepError("f3: catch");
      return false;
    }
  }

  async function f2() {
    // prepare index db libs and connect with it
    console.log("A_START.init -> f2 => " + A_START.A_START_Counter++);
    let status1 = await A_SP.prepareDbLibs();
    if (status1 === false) {
      stepError("f2");
    } else {
      let status2 = await A_DB.connect();
      if (status2 === false) {
        stepError("f2");
      } else {
        // stepEight()     // test clean up local
        f3();
      }
      status2 = null;
    }
    status1 = null;
  }
  async function f1() {
    // Bring client_cms_config from server
    console.log("A_START.init -> f1 => " + A_START.A_START_Counter++);
    let opt = { url: "cms_config_tbl" };
    new_cms_config_tbl_dt = await A_XHR.getTblData(opt);
    if (new_cms_config_tbl_dt === false) {
      stepError("f1");
    } else {
      f2();
    }
    opt = null;
  }
  f1(); // start
  // f5(); // for development purpose skipping idb and start flow
  // stepFive()       // test match client_cms_config with local tbl
};
A_START.ping = function ping() {
  console.log("A_START is ready with ping  => " + A_START.A_START_Counter++);
};
A_START.A_START_Counter = 0;
module.exports = A_START;
