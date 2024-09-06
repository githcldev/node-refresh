


-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------

3A. If YES, Match prev_cms_config_tbl_dt and new_cms_config_tbl_dt
  // this is A_DBP.syncIdbReqTbl()
  If any req_tbl_dt in prev do not match with dt in new
    Then, update that specific tbl
  Finally store new_cms_config_tbl_dt in config

-------------------------------------------------

3B. // this is A_DBP.localDbInit()
  Loop all required tbl
      Fetch them from server and save it in idb
  Finally store new_cms_config_tbl_dt in config

-------------------------------------------------

console.log("A_DBP.init is ready with ping " + this.A_DBP_COUNTER++)
  //  add client data structure such as table for after getting data from ws
      //  menu
      //  page
      //  search ex_vendors details
      //  sample_posts
      //  sample_user_menu
      //  sample_user_image
      //  sample_user
      //  client_settings
  let tables = ["cms_menu", "cms_page"]
  //  add client data
  function getData(req_tbl, cb) { // get data for table

  }
  function saveData(tbl_name, data, cb) { // save data to table

  }
  for(key in tables) {
    console.log(key)
  }
  //  Remove A_DBP from head

-------------------------------------------------

//  cb(local_config, status)    // status = true for success and vice-versa
  console.log(client_cms_config)
  //  pushTblDb(dt)
  //  loop on required tables array given in client_cms_config
    //  check dev mode
      //  if dev then
        //  import tbls from fs
        //  pushTblDB(dt)
      //  if prod then
        //  check avialable WS connection
          //  if not avaiable create it
        //  get tbls from ws
        //  pushTblDB(dt)

-------------------------------------------------

storing different language content in table is different issue
	indexeddbshim-UnicodeIdentifiers.min.js

-------------------------------------------------

npm
npm install indexeddbshim
Browser set-up
Add the following scripts to your page:

<script src="node_modules/@babel/polyfill/dist/polyfill.min.js"></script>
<script src="dist/indexeddbshim.min.js"></script>
If you need full Unicode compliance (handling special non-alphanumeric identifiers in store and index names), use the following instead:

<script src="node_modules/@babel/polyfill/dist/polyfill.min.js"></script>
<script src="dist/indexeddbshim-UnicodeIdentifiers.min.js"></script>

-------------------------------------------------

https://github.com/axemclion/IndexedDBShim

-------------------------------------------------

IndexedDBShim works on Windows Phone via a Cordova/PhoneGap plug-in. There are two plugins available: cordova-plugin-indexedDB and cordova-plugin-indexeddb-async. Both plug-ins rely on a WebSQL-to-SQLite adapter, but there are differences in their implementations. Try them both and see which one works best for your app.

Building

-------------------------------------------------

(function () {
    // This works on all browsers, and only uses IndexedDBShim as a final fallback
    let indexedDB = window.indexedDB || window.mozIndexedDB || // eslint-disable-line no-var
        window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;

    // This code will use the native IndexedDB, if it exists, or the shim otherwise
    indexedDB.open('MyDatabase', 1);
})();

-------------------------------------------------

Compatibility as of 5-2019
	IndexedDB 2.0 - CR 	85.96%
		Improvements to Indexed DB, including getAll(), renaming stores and indexes, and binary keys.
	IndexedDB - REC 	96.17%
		Method of storing data client-side, allows indexed database queries.

-------------------------------------------------

//  add A_DBP to head
//  call A_DBP.init(cms_config_tbl) to 
  //  store cms_config_tbl
  //  add client data structure such as table for
    //  menu
    //  page
    //  search ex_vendors details
    //  posts
    //  image
    //  user
    //  client_settings
  //  add client data
  //  return data related to requested page
//  Remove A_DBP from head

-------------------------------------------------

This module flows:
  A_DBP.init  // it is different from A_DB because this script will be loaded to head only if
    at case when don't found any cms_config tbl in indexDB
      or in case when we get hit by new client
      or in case when user have forcefully delete all website content from browser cache
      or for test purpose also.
    we need to populate new table data_structure and data into database
    It uses A_WS if needed in production mode
    or could call upon local file to populate indexedDb for new clients

-------------------------------------------------

A_DBP		// 	App Indexed DataBase Populator

/**
 * Comment
 *
 * @class
 * @param {string=} message The message.
 */