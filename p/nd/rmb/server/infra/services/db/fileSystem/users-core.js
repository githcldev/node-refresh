const nodeVars = require('../../../../config/nodeVariable');
let fileData = require(nodeVars.db.users.fsPath);

module.exports = {
    getAll: () => fileData
}