var dbStrategy;
// dbStrategy = "local";
dbStrategy = "fs";
exports.users = require('./' + dbStrategy + '/index');
