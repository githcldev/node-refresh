


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

//	Assets manager

-------------------------------------------------

if(cmsDistributionMode === false) opt.url

-------------------------------------------------

1-	A_ER		// app error list

2-	A_SH		// app shared helper common place to
		xhr_request promise

3-	A_SP.init // will populate html with cached scripts at A_I_DB
		// will populate html with given url input and return callback on success object integration
	  @input if any indexed resource need to update forced use A_WS
	  for ex-libraries and for app_js

4-	A_START   // will load client_config_tbl
	  match its modified_to what stored in local / indexed
	  and decide what to update from where
	  It will open xhr_request for getting client_config_tbl

5-	A_DB is our custom wrapper over lib, it is kind of adapter / interface only
		https://unpkg.com/zangodb@1.0.7/dist/zangodb.min.js

6-	A_DBP.init  // it is different from A_DB because this script will be loaded to head only if
		we need to populate new table data_structure and data into database
		It uses A_WS if needed in production mode
		or could call upon local file to populate indexedDb for new clients

7-	A_WS	// web socket

8-	A_VP.renderView
		A_VPP.get('page')

9-	A_UTIL
		// input validator
		// validate user

10-	A_USER		// stored all data related to user
		// in future can also be used for storing machine_learning data
		// where the stored data can help determining interest of logged in user

11-	A_PAGE

12-	A_PAGE

-------------------------------------------------

- A_START // load client_config_tbl and match with indexed version of table
- script_populator ( this is highly dependent on webSocket )
- db_populator ( this is highly dependent on webSocket )
- indexed_db (local crud class only as remote data depends on webSocket)
- web socket class
- view_partial populator ( this is highly dependent on webSocket )
- inputValidator
