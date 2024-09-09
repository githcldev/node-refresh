'use strict';
let A_UTIL = {}	
A_UTIL.ping = function ping() {
	console.log("A_UTIL is ready with ping " + this.A_UTIL_Counter++)
}
A_UTIL.A_UTIL_Counter = 0;
module.exports = A_UTIL;