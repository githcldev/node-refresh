'use strict';
let A_SP = {}
A_SP.checkScriptObject = function checkScriptObject(objName, cb) {
	let checkIntervalTime = 100;
	let checkAttempts = 0, checkAttemptsLimit = 10;
	function cancelCheckInterval(result){
		clearInterval(checkInterval);
		cb(result)
	}
	let checkInterval = setInterval(function(){
		if(objName in window === true && typeof window[objName] === "object"){
			cancelCheckInterval(true)
		} else if (checkAttempts > checkAttemptsLimit) {
			cancelCheckInterval(false)
		} else {
			checkAttempts++;			
		}
	}, checkIntervalTime)
}
A_SP.addScriptToHead = function addScriptToHead(url) {
	console.log("A_SP.addScriptToHead is ready => " + A_SP.A_SP_Counter++)
	let script = document.createElement('script');
	script.setAttribute('rel', 'prefetch');
	script.setAttribute('type', 'text/javascript');
	script.setAttribute('src', url);
	document.getElementsByTagName('head')[0].appendChild(script);
	script = null;
}
A_SP.prepareDbLibs = async function prepareDbLibs() {
	console.log("A_SP.prepareDbLibs is ready with ping => " + A_SP.A_SP_Counter++)
	return new Promise(function (resolve, reject) {
		if (cmsDistributionMode === true)
			A_SP.addScriptToHead('https://unpkg.com/zangodb@1.0.7/dist/zangodb.min.js')
		else 
			A_SP.addScriptToHead('zangodb.min.js')
		A_SP.checkScriptObject('zango', resolve)
	})
}
A_SP.localDbInit = function localDbInit(cms_config_tbl, cb) {
	console.log("A_SP is ready with localDbInit => " + A_SP.A_SP_Counter++)
	//	call A_DBP.init(cms_config_tbl) to 
	let A_DBP = require('../A_DBP/index')
	//	store cms_config_tbl
	A_DBP.init(cms_config_tbl, (status) => {
		cb(status)
	})
	// cb(false)
}
A_SP.ping = function ping() {
	console.log("A_SP is ready with ping => " + A_SP.A_SP_Counter++)
}
A_SP.A_SP_Counter = 0;
module.exports = A_SP;