'use strict';
let A_VPP = {}	
let A_DBP = require("../../helpers/A_DBP/index");
A_VPP.ping = function ping() {
	console.log("A_VPP is ready with ping " + this.A_VPP_Counter++)
}
A_VPP.getIDBTblDt = function getIDBTblDt(tblName) {
	return A_DBP.getIdbTblData(tblName)
}
A_VPP.A_VPP_Counter = 0;
module.exports = A_VPP;