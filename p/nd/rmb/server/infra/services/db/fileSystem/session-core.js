const nodeVars = require('../../../../config/nodeVariable');
let fileData = require(nodeVars.db.session.fsPath);

module.exports = {
    getAll: () => fileData
}