let ViewController = (function() {
    const nodeVars = require('../../../../config/nodeVariable');
    var fsCrudO;
    function initialiseViewController(){
        var CrudCore = require('../../../services/db/fileSystem/CrudCore');
        fsCrudO = new CrudCore(nodeVars.db.posts.fsPath);
        CrudCore = null;
    }
    class ViewController {
        static getData(){
            initialiseViewController();
            return fsCrudO.getData();
        };
        static createRecord(record){
            initialiseViewController();
            return fsCrudO.create(record);
        };
        static read3(findWhere){
            initialiseViewController();
            return fsCrudO.read3(findWhere);
        };
        static read2(findWhere){
            initialiseViewController();
            return fsCrudO.read2(findWhere);
        };
        static read(findWhere){
            initialiseViewController();
            return fsCrudO.read(findWhere);
        };
        static delete(findWhere){
            initialiseViewController();
            return fsCrudO.delete(findWhere);
        };
        // update 2 use read(readable)/write stream in objectMode
        static update2(argsArray){
            initialiseViewController();
            return fsCrudO.update2(argsArray);
        };
        static update(argsArray){
            initialiseViewController();
            return fsCrudO.update(argsArray);
        };
        static write(){
            initialiseViewController();
            var ws = fsCrudO.fsWriteStream();
            ws.write('test')
            // Mark the end of file
            ws.end();
            // Handle stream events --> finish, and error
            ws.on('finish', function() {
                console.log("Write completed.");
            });
            ws.on('error', function(err) {
                console.log(err.stack);
            });
        }
        static finci(){
            initialiseViewController();
            return fsCrudO.getData(2);
        };
        static reset(){
            initialiseViewController();
            var dataBase = require(nodeVars.db.test.fsPath1)[0].features;
            var newData = [];
            var item = {};

            var dataBaseSize = dataBase.length, properties = {},
            dataBaseCounter = 0, calculatedPropertiesKeyIndex = 0,
            propertiesKeySize = 0, propertiesKeys = [], itemProperty = "";
            for(dataBaseCounter = 0; dataBaseCounter < dataBaseSize / nodeVars.db.test.resetDataThresHold; ++dataBaseCounter){
                properties = dataBase[dataBaseCounter].properties;
                propertiesKeys = Object.keys(properties);
                propertiesKeySize = propertiesKeys.length;
                
                calculatedPropertiesKeyIndex = dataBaseCounter % propertiesKeySize;
                itemProperty = propertiesKeys[calculatedPropertiesKeyIndex];
                
                item = null; item = {};
                item["id"] = dataBaseCounter;
                item["type"] = dataBase[dataBaseCounter].type;
                item["geometry"] = dataBase[dataBaseCounter].geometry.type;

                item["property"] = itemProperty;
                item["value"] = properties[itemProperty];
                newData.push(item);
            }
            
            return fsCrudO.resetData(newData);
        };
    }
    return ViewController;
})();
module.exports = ViewController;