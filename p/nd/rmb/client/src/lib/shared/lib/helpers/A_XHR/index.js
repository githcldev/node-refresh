'use strict';
let A_XHR = {}
function makeFetch(opts) {
		// let myHeaders = new Headers();
		let myInit = {
			method: "GET", // *GET, POST, PUT, DELETE, etc.
			mode: "cors", // no-cors, cors, *same-origin
			cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
			credentials: "same-origin", // include, *same-origin, omit
			headers: {
				"Content-Type": "application/json"	// "Content-Type": "application/x-www-form-urlencoded",
			},
			redirect: "follow", // manual, *follow, error
			referrer: "no-referrer" // no-referrer, *client
		};
		if(opts.params) myInit.body = JSON.stringify(opts.params) // body data type must match "Content-Type" header
		// let myRequest = new Request(opts.url, myInit);
		// return fetch(myRequest)
		return fetch(opts.url, myInit).then(response => {
			return response.json();
		})
		// .then(json => {
		// 	// console.log(JSON.stringify(json))
		// 	cb(json)
		// }).catch(error => {
		// 	// console.error(error.message)
		// 	cb(false)
		// })
	}
	function makePromise(opts) {
		return new Promise(function (resolve, reject) {
			let xhr = new XMLHttpRequest();
			xhr.open(opts.method, opts.url);
			xhr.onload = function () {
				if (this.status >= 200 && this.status < 300) {
					resolve(xhr.response);
				} else {
					reject({
						status: this.status,
						statusText: xhr.statusText
					});
				}
			};
			xhr.onerror = function () {
				reject({
					status: this.status,
					statusText: xhr.statusText
				});
			};
			if (opts.headers) {
				Object.keys(opts.headers).forEach(function (key) {
					xhr.setRequestHeader(key, opts.headers[key]);
				});
			}
			let params = opts.params;
			// We'll need to stringify if we've been given an object
			// If we have a string, this is skipped.
			if (params && typeof params === 'object') {
				params = Object.keys(params).map(function (key) {
					return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
				}).join('&');
			}
			xhr.send(params);
		});
	}
	async function sendRestRequest(opts){
		try{
		if (!!window.fetch === false && !!window.promise === false ) {
			let A_ER = require('../../helpers/A_ER/index')
			A_ER.requestUpdateChangeBrowser()
			return false;
		} else if(window.fetch) {
			return makeFetch(opts)
		} else if(window.promise) {
			return makePromise(opts)
		}
	} catch(er) {
		console.error('uncaught exception found')
		let A_ER = require('../../helpers/A_ER/index')
		A_ER.requestUpdateChangeBrowser()
		return false;
	}
	}
A_XHR.getStaticJsonData = function getStaticJsonData(resource) {
	return import(resource);
}
A_XHR.makeStaticJsonDataUrl = function makeStaticJsonDataUrl(resource) {
	return "/" + resource + ".json";
}
A_XHR.getTblData = async function getTblData(opts, cb = null) {
	console.log("A_XHR.getTblData " + A_XHR.A_XHR_COUNTER++)
	if(cmsDistributionMode === false && window.location.href.indexOf('localhost:3010') === -1) {
		opts.url = A_XHR.makeStaticJsonDataUrl(opts.url);
	} else {
		opts.url = 'sf/' + opts.url;
	}
	let res = await sendRestRequest(opts)
	// console.log(res)
	return res;
};
A_XHR.getRestData = async function getRestData(opts, cb = null) {
	console.log("A_XHR.getRestData " + A_XHR.A_XHR_COUNTER++)
	let res = await sendRestRequest(opts)
	// console.log(res)
	return res;
}
A_XHR.A_XHR_COUNTER = 0;
module.exports = A_XHR;