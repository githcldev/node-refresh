'use strict';
// function DialogService(targetFramework) {
// 	this.targetFramework = targetFramework;
// }
function DialogService() {
}
DialogService.prototype.emit = function emit(message = null, theme = null, position = null) {
	// console.log(this.targetFramework)
	console.log('emit');
	// debugger;
};
DialogService.prototype.__DialogService__ = true;
module.exports = DialogService;