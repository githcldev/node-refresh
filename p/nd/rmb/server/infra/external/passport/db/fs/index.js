const nodeVars = require('../../../../../config/nodeVariable')
var CrudCore = require('../../../../services/db/fileSystem/CrudCore')
var userFsDb = new CrudCore(nodeVars.db.users.fsPath)
exports.findById = function (id, cb) {
  process.nextTick(() => {
    let findWhere = {
      searchField: "id",
      searchValue: id
    };
    userFsDb.read1(findWhere).on('end', function () {
      if (this.recordFound) {
        cb(null, this.data)
      } else {
        cb(new Error('User for id :: ' + id + ' does not exist'));
      }
    });
  });
}
exports.findByUsername = function (username, cb) {
  process.nextTick(() => {
    let findWhere = {
      searchField: "username",
      searchValue: username
    };
    userFsDb.read1(findWhere).on('end', function () {
      if (this.recordFound) {
        return cb(null, this.data);
      } else {
        return cb(null, null);
      }
    });
  });
}