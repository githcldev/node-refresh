


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

// limit searchKey idb storage to some limit
// Example if you store upto 1000 keys, Then remove 500 keys after reaching to 1000. Remove older keys with id, sort you data on date. have a date field in idb

-------------------------------------------------

-   storing js in idb with their version number
-   Getting version numbers of script in config table
-   Matching with available script versions in idb
-   If any outdated script found, then update it

-------------------------------------------------

config_tbl keys
  header_log_version
  header_menu_version
  header_search_with_version
  footer_menu_version

-------------------------------------------------

re-prioritize flow as backend is not ready
  - client_config_tbl loader and parser
  - overlay loading
  - indexed_db (local crud class only as remote data depends on webSocket)
  - web socket class
  - view_partial populator ( this is highly dependent on webSocket )
  - local storage    
  - google-analytics
  - ads

-------------------------------------------------

  Entity relationship diagram for indexed_db

-------------------------------------------------

Includes ( arranged according to completion priority )

-------------------------------------------------

Named as CMS_SHARED_MODULES aka _csm


-------------------------------------------------

C_SM    //    CMS SharedModules
