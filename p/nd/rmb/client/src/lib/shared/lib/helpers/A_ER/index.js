'use strict';
let A_ER = {}
A_ER.requiredResourceNotFound = function requiredResourceNotFound() {
	console.log("A_ER.requiredResourceNotFound is ready with ping " + this.A_ER_Counter++)
	let A_OL = require('../../modules/A_OL/index')
	A_OL.show('Required resource to function not found')
}
A_ER.requestUpdateChangeBrowser = function requestUpdateChangeBrowser() {
	console.log("A_ER.requestUpdateChangeBrowser is ready with ping " + this.A_ER_Counter++)
	let A_OL = require('../../modules/A_OL/index')
	A_OL.show('Kindly use some other latest browser as the current browser not updated or outdated')
}
A_ER.ping = function ping() {
	console.log("A_ER is ready with ping " + this.A_ER_Counter++)
}
A_ER.A_ER_Counter = 0;
module.exports = A_ER;