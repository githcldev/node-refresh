


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

start.init
DONE =>   1.  STEP ONE : Bring client_cms_config_tbl from server
      out: new_cms_config_tbl_dt
DONE =>   2.  STEP TWO : Prepare index db libs and connect with it
DONE =>   3.  Check if any prev_cms_config_tbl_dt exists
  3A. If YES, Match prev_cms_config_tbl_dt and new_cms_config_tbl_dt
    // this is A_DBP.syncIdbReqTbl()
    If any req_tbl_dt in prev do not match with dt in new
      Then, update that specific tbl
  3B. // this is A_DBP.localDbInit()
    If NO, Store new_cms_config_tbl_dt in config tbl
      Loop all required tbl
        Fetch them from server and save it in idb
later =>     4.  After 3, we will work on getting stored js, css from db and pushing it on webpage
  5.  It is final done event

-------------------------------------------------

lets' have a local json file till the time backend is not ready

list of keys need to be in config_table
  - public_key : {
    value: '',
    version: '',
    modified_date: ''
  }

-------------------------------------------------

clientConfig is about configuration which will be initially send to client
  There are many which can be covered in clientConfig such as
  - when does a tble stored in indexDb need to be refreshed with new data
    from socket api
  - it will store all common configuration required at client side
  - it will also variable names

-------------------------------------------------

setTimeout(function(){
	fetch(`../${reddit}.json`)
		.then(response => response.json())
		.then(json => {
		  listener(json)
		})
}, 2000)

-------------------------------------------------

A_START	//	App Starter
/**
 * Comment
 *  will load client_config_tbl
	  match its modified_to what stored in local
	  and decide what to update from where
	  It will open xhr_request for getting client_config_tbl
 * @class
 * @param {string=} message The message.
 */
