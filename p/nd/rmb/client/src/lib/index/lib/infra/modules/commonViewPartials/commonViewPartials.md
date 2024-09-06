
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

As view partial populator is last in sequence of page load operations
Once footer data is loaded webSocket should be closed
  to help server resource performance and efficiency.

-------------------------------------------------

View partials should be loaded according to their order in view
  such as header, sidebar, cms_widgets, footer

Step 1: check that which view partials are available at indexedDb
Step 3: if found match them with version given by server in clientConfigTbl
Step 4: if indexDb data version is less then we need to update it.
  Step 4A: data update procedure
    - have seperate 
Step 5: When data is at right version. We will populate viewPartial

-------------------------------------------------

commonViewPartial purpose will be to populate various view_partials
  headerMenu // u can store list in indexedDb for first time
    Then the same can be used everytime till it expires
    Flag to represent headerMenu content refreshTime at server end will be passed
      through client_config api
  sideBars // u can store list in indexedDb for first time
    Then the samcan be used e everytime till it expires
    Flag to represent sideBar content refreshTime at server end will be passed
      through client_config api
  cms_widgets // u can store list in indexedDb for first time
    Then the same can be used everytime till it expires
    Flag to represent cms_widget refreshTime at server end will be passed
      through client_config api
  footer_menu // u can store list in indexedDb for first time
    Then the same can be used everytime till it expires
    Flag to represent footer_menu refreshTime at server end will be passed
      through client_config api