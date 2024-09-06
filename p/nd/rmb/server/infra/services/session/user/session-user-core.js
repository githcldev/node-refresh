let SessionUserCore = (function () {
    if (typeof SessionUserCoreInstance === 'undefined') {
        var SessionUserCoreInstance = null,
            nodeVars = require('../../../../config/nodeVariable');
        var fsCrudO = null;
    } else console.log('SessionUserCoreInstance already exists')
    class SessionUserCore {
        findById(id, cb) {
            process.nextTick(() => {
                var idx = id - 1;
                if (this.records[idx]) {
                    cb(null, this.records[idx]);
                } else {
                    cb(new Error('User ' + id + ' does not exist'));
                }
            });
        }
        findByUsername(username, cb) {
            process.nextTick(() => {
                for (var i = 0, len = this.records.length; i < len; i++) {
                    var record = this.records[i];
                    if (record.username === username) {
                        return cb(null, record);
                    }
                }
                return cb(null, null);
            });
        }
        init() {
            var CrudCore = require('../../../services/db/fileSystem/CrudCore')
            fsCrudO = new CrudCore(nodeVars.db.users.fsPath);
            CrudCore = null;
            this.records = fsCrudO.getData()
        }
        constructor() {
            if (!SessionUserCoreInstance) {
                this.init()
                SessionUserCoreInstance = this
            }
            return SessionUserCoreInstance;
        };
    }
    return SessionUserCore
})();
module.exports = SessionUserCore;