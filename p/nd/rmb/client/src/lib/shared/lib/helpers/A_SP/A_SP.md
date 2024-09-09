


-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------


// A_DB.prototype.insert({'key': 'a-k', 'value': 'a-v', 'modified_date': 'a-d'}, (status) => {
// 	if(status) {
// 		A_DB.prototype.read({}, (res) => {
// 			console.log(res)
// 		})
// 	}
// })

-------------------------------------------------

Fetch
A modern replacement for XMLHttpRequest.

-------------------------------------------------

Informs the browsers that a given resource should be prefetched so it can be loaded more quickly. This is indicated using <link rel="prefetch" href="(url)">

-------------------------------------------------

Gives a hint to the browser to perform a DNS lookup in the background to improve performance. This is indicated using <link rel="dns-prefetch" href="http://example-domain.com/">

-------------------------------------------------

AbortController & AbortSignal
Controller object that allows you to abort one or more DOM requests made with the Fetch API.

-------------------------------------------------

Using <link rel="preload">, browsers can be informed to prefetch resources without having to execute them, allowing fine-grained control over when and how resources are loaded.

-------------------------------------------------

A_SP	App_Script Populator


3-	A_SP.init // will populate html with cached scripts at A_I_DB
		// will populate html with given url input and return callback on success object integration
	  @input if any indexed resource need to update forced use A_WS
	  for ex-libraries and for app_js

	  .addScriptToHead(url | blob)	

/**
 * Comment
 *
 * @class
 * @param {string=} message The message.
 */