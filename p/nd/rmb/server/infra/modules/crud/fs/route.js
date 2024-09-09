let express = require('express'), router = express.Router();
var ViewController = require('./ViewController');
router.get([''], (req, res) => {
  ViewController.getData().pipe(res);
});
router.get(['/create'], (req, res) => {
  let record = { "f3": "4" };
  ViewController.createRecord(record).then(c => {
    res.json(JSON.parse(c));
  });
});
// read 3 using readStream for readable in objectMode
router.get(['/read3/:field/:value'], (req, res) => {
  let findWhere = {
    searchField: req.params.field,
    searchValue: req.params.value
  };
  console.log('working on finding record');
  var rs = ViewController.read3(findWhere)
  rs.on('close', function(dt){
    res.json(this.data);
  })
  rs.on('error', function(err) {
    if(!this.recordFound){
      console.log("Error while file read stream => "+ err);
      res.redirect('/error/418');
    }
  });
});
// read 2 using readStream for data in objectMode
router.get(['/read2/:field/:value'], (req, res) => {
  let findWhere = {
    searchField: req.params.field,
    searchValue: req.params.value
  };
  console.log('working on finding record');
  ViewController.read2(findWhere).on('end', function () {
    if (this.recordFound) {
      res.json(this.data)
    } else {
      res.redirect('/error/418');
    }
  });
});
// read 1 using plain require to read data and then sort
router.get(['/read/:field/:value'], (req, res) => {
  let findWhere = [{ [req.params.field]: req.params.value }];
  res.json(ViewController.read(findWhere));
});
router.get(['/delete/:field/:value'], (req, res) => {
  let findWhere = [{ [req.params.field]: req.params.value }];
  ViewController.delete(findWhere).then(c => {
    res.json(JSON.parse(c));
  });
});
// update 3 use read(readable)/write transform stream in objectMode

// update 2 use read(readable)/write stream in objectMode
router.get(['/update2/:searchField/:searchValue/:changeField/:newValue'], (req, res) => {
  let argsArray = [{
    searchField: req.params.searchField,
    searchValue: req.params.searchValue,
    changeField: req.params.changeField,
    newValue: req.params.newValue
  }];
  ViewController.update2(argsArray);
  // .then(c => {
  //        res.json(JSON.parse(c));
  // });
  res.send('working on duplex stream implementation, transform is just syntax sugar over duplex');
});
router.get(['/write'], (req, res) => {
  ViewController.write();
  res.send('working on writing temp file with temp data');
});
router.get(['/update/:searchField/:searchValue/:changeField/:newValue'], (req, res) => {
  let argsArray = [{
    searchField: req.params.searchField,
    searchValue: req.params.searchValue,
    changeField: req.params.changeField,
    newValue: req.params.newValue
  }];
  ViewController.update(argsArray).then(c => {
    res.json(JSON.parse(c));
  });
});
router.get(['/resetdata'], (req, res) => {
  ViewController.reset().then(c => {
    // res.json(JSON.parse(c));
    res.send(c);
  });
});
module.exports = router; // export your module