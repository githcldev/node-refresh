'use strict';
let A_AM = {}
A_AM.getImage = function getImage(sri) {
	// console.log(this.targetFramework)
	console.log('getImage' + A_AM.A_AM_COUNTER++);
	// debugger;
};
A_AM.getCounter = function getCounter() {
	return A_AM.A_AM_COUNTER;	
};
A_AM.A_AM_COUNTER = 0;
module.exports = A_AM;