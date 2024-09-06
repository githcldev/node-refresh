MdbT1ViewController
// app.use('/db/t1', require(nodeVars.modules.crudDb.mdb.routePathT1));

static checkCollec(res, collecName, checkSuccessCb = null, checkFailureCb = null) 
  ...
  try{
    if(checkSuccessCb){
      checkSuccessCb(collecObj, dbObj, dbConnect)
    } else {
      dbConnect.close()
      res.send('success check collection')
    }
  } catch (collecError) {
    console.log(collecError.message)
    res.send('error check collection')
  }


static checkDbName(res, checkSuccessCb = null, checkFailureCb = null)
  ...
  try {
    dbObj = dbConnect.db(nodeVars.modules.crudDb.name)
  } catch (dbNameError) {
    res.send('error db Name check')
  }
  if (checkSuccessCb) {
    checkSuccessCb(dbObj, dbConnect)
  } else {
    dbConnect.close()
    res.send('success db Name check')
  }


static checkDbConnect(res, connectSuccessCb = null, connectFailureCb = null) {
  initDbConection().then((dbConnect) => {
    // console.log(this)
    if (connectSuccessCb) {
      connectSuccessCb(dbConnect)
    } else {
      dbConnect.close()
      res.send('success db connetion check')
    }
  }, function (dbConnectError) {
    console.lob(dbConnectError.message)
    res.send('error in db connetion check')
  });
};


static countFoundDocuments(res, query, collecName, checkSuccessCb = null, checkFailureCb = null) {
  this.checkCollec(res, collecName, (collecObj, dbObj, dbConnect) => {
    try {
      collecObj.countDocuments(query, function(err, count){
        if(checkSuccessCb){
          checkSuccessCb(count, collecObj, dbObj, dbConnect)
        } else {
          dbConnect.close()
          res.send('success find in collection')
        }
      })
    } catch (collecError) {
      console.log(collecError.message)
      res.send('error find in collection')
    }
  });
};


static find(res, query, collecName, checkSuccessCb = null, checkFailureCb = null) {
  this.checkCollec(res, collecName, (collecObj, dbObj, dbConnect) => {
    try {
      collecObj.find(query).toArray(function(err, results){
        if(checkSuccessCb){
          checkSuccessCb(results, collecObj, dbObj, dbConnect)
        } else {
          dbConnect.close()
          res.send('success find in collection')
        }
      })
    } catch (collecError) {
      console.log(collecError.message)
      res.send('error find in collection')
    }
  });
};


static listCollec(res, checkSuccessCb = null, checkFailureCb = null) {
  this.checkDbName(res, (dbObj, dbConnect) => {
    try {
      dbObj.listCollections().toArray().then(function(lc) {
        if(checkSuccessCb){
          checkSuccessCb(lc, dbObj, dbConnect)
        } else {
          dbConnect.close()
          res.send('success listCollec')
        }
      })
    } catch (collecError) {
      console.log(collecError.message)
      res.send('error listCollec')
    }
  });
};