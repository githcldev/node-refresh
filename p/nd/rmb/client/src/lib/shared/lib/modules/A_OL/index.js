'use strict';
// function DialogService(targetFramework) {
// 	this.targetFramework = targetFramework;
// }
let A_OL = {}
A_OL.text = function text(text = null) {
	document.getElementById('appLoadingOverlayRow').innerHTML = text
};
A_OL.hide = function hide() {
	document.getElementById('overlayWrapper').style.display = 'none'
};
A_OL.show = function show() {
	document.getElementById('overlayWrapper').style.display = 'block'
};
A_OL.__A_OL__ = true;
module.exports = A_OL;