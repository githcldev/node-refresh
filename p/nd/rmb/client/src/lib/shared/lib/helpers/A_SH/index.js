'use strict';
let A_SH = {}
A_SH.ping = function ping() {
	console.log("A_SH is ready with ping " + this.A_SH_Counter++)
}
A_SH.A_SH_Counter = 0;
module.exports = A_SH;