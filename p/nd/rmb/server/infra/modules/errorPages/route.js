let express = require('express'), router = express.Router();
let nodeVars = require('../../../config/nodeVariable');

// OK Success
router.get('/200', (req, res) => {  //  Ok
    res.status(200);
    res.send('<h1>200</h1><br /><p>Standard response for successful HTTP requests. The actual response will depend on the request method used. In a GET request, the response will contain an entity corresponding to the requested resource. In a POST request, the response will contain an entity describing or containing the result of the action.</p>');
});

// New record insertion
router.get('/201', (req, res) => {  //  Created
    res.status(201);
    res.send('<h1> 201 </h1><p>The request has been fulfilled, resulting in the creation of a new resource.</p>');
});

// Request accepted for processing, but the processing has not been completed
router.get('/202', (req, res) => {  //  Accepted
    res.status(202);
    res.send('<h1> 202 </h1><p>The request has been accepted for processing, but the processing has not been completed. The request might or might not be eventually acted upon, and may be disallowed when processing occurs.</p>');
});

// The server successfully processed the request and is not returning any content.
router.get('/204', (req, res) => {  //  No Content
    res.status(204);
    res.send('<h1> 204 </h1><p>The server successfully processed the request and is not returning any content.</p>');
});

// Response requires that the requester reset the document view.
router.get('/205', (req, res) => {  //  Reset Content
    res.status( 205 )
    res.send('<h1> 205 </h1><p> The server successfully processed the request, but is not returning any content. Unlike a 204 response, this response requires that the requester reset the document view. </p>')
});

// The server is delivering only part of resource due to range header sent by client
router.get('/206', (req, res) => {  //  Partial Content
    res.status( 206 )
    res.send('<h1> 206 </h1><p> The server is delivering only part of the resource (byte serving) due to a range header sent by the client. The range header is used by HTTP clients to enable resuming of interrupted downloads, or split a download into multiple simultaneous streams. </p>')
});

// Already reported
router.get('/208', (req, res) => { //  Already reported
    res.status( 208 )
    res.send('<h1> 208 </h1><p> The members of a DAV binding have already been enumerated in a preceding part of the (multistatus) response, and are not being included again. </p>')
});

// Url for resource changed and you should check {{this}} new url
router.get('/301', (req, res) => { //  Moved Permanently alse work for 308 Permanent Redirect
    res.status( 301 )
    res.send('<h1> 301 </h1><p> This and all future requests should be directed to the given URI. </p>')
});

// Go to GET verb in place of put/delete
router.get('/303', (req, res) => { //  See Other
    res.status( 303 )
    res.send('<h1> 303 </h1><p> The response to the request can be found under another URI using the GET method. When received in response to a POST (or PUT/DELETE), the client should presume that the server has received the data and should issue a new GET request to the given URI. </p>')
});

// No update to resource for which client requested in request header
router.get('/304', (req, res) => { //  Not Modified
    res.status( 304 )
    res.send('<h1> 304 </h1><p> Indicates that the resource has not been modified since the version specified by the request headers If-Modified-Since or If-None-Match. In such case, there is no need to retransmit the resource since the client still has a previously-downloaded copy </p>')
});

// You need to be on proxy server to access this resource
router.get('/305', (req, res) => { //  Use Proxy
    res.status( 305 )
    res.send('<h1> 305 </h1><p> The requested resource is available only through a proxy, the address for which is provided in the response. Many HTTP clients (such as Mozilla[27] and Internet Explorer) do not correctly handle responses with this status code, primarily for security reasons. </p>')
});

//  future requests should still use the original URI
router.get('/307', (req, res) => { //  Temporary Redirect
    res.status( 307 )
    res.send('<h1> 307 </h1><p> In this case, the request should be repeated with another URI; however, future requests should still use the original URI. In contrast to how 302 was historically implemented, the request method is not allowed to be changed when reissuing the original request. For example, a POST request should be repeated using another POST request. </p>')
});

// size too large, invalid request message framing, or deceptive request routing
router.get('/400', (req, res) => { //  Bad Request
    res.status( 400 )
    res.send('<h1> 400 </h1><p> The server cannot or will not process the request due to an apparent client error (e.g., malformed request syntax, size too large, invalid request message framing, or deceptive request routing) </p>')
});

// server response must include a WWW-Authenticate header field containing a challenge applicable to the requested resource
router.get('/401', (req, res) => { //  Unauthorized
    res.status( 401 )
    res.send('<h1> 401 </h1><p> Similar to 403 Forbidden, but specifically for use when authentication is required and has failed or has not yet been provided. The response must include a WWW-Authenticate header field containing a challenge applicable to the requested resource. </p>')
});

// Payment required to access resource
router.get('/402', (req, res) => { //  Payment Required
    res.status( 402 )
    res.send('<h1> 402 </h1><p> The original intention was that this code might be used as part of some form of digital cash or micropayment scheme, as proposed for example by GNU Taler[36], but that has not yet happened, and this code is not usually used. Google Developers API uses this status if a particular developer has exceeded the daily limit on requests.[37] Sipgate uses this code if an account does not have sufficient funds to start a call.[38] Shopify uses this code when the store has not paid their fees and is temporarily disabled. </p>')
});

// user might not have the necessary permissions for a resource
router.get('/403', (req, res) => { //  Forbidden
    res.status( 403 )
    res.send('<h1> 403 </h1><p> The request was valid, but the server is refusing action. The user might not have the necessary permissions for a resource, or may need an account of some sort. </p>')
});

// Resource not found but may be available in future
router.get('/404', (req, res) => { //  Not Found
    res.status( 404 )
    res.send('<h1> 404 </h1><p> The requested resource could not be found but may be available in the future. Subsequent requests by the client are permissible. </p>')
});

// request method is not supported for the requested resource
router.get('/405', (req, res) => { //  Method not allowed
    res.status( 405 )
    res.send('<h1> 405 </h1><p> A request method is not supported for the requested resource; for example, a GET request on a form that requires data to be presented via POST, or a PUT request on a read-only resource. </p>')
});

// Resource not available in requested format. Server should send list of availabe formats
router.get('/406', (req, res) => { //  Not Acceptable
    res.status( 406 )
    res.send(`
    <h1> 406 </h1>
    <p> The requested resource is capable of generating only content not acceptable according to the Accept headers sent in the request. </p>
    <p>Content negotiation refers to mechanisms defined as a part of HTTP that make it possible to serve different versions of a document (or more generally, representations of a resource) at the same URI, so that user agents can specify which version fits their capabilities the best. One classical use of this mechanism is to serve an image in GIF or PNG format, so that a browser that cannot display PNG images (e.g. MS Internet Explorer 4) will be served the GIF version.</p>
    <p>A resource may be available in several different representations; for example, it might be available in different languages or different media types.</p><p> One way of selecting the most appropriate choice is to give the user an index page and let them select the most appropriate choice; however it is often possible to automate the choice based on some selection criteria.</p>
    `)
});

// The client must first authenticate itself with the proxy.
router.get('/407', (req, res) => { //  Proxy Authentication Required
    res.status( 407 )
    res.send('<h1>  </h1><p> The client must first authenticate itself with the proxy. </p>')
});

// The server timed out waiting for the request. The client did not produce a request within the time that the server was prepared to wait.
router.get('/408', (req, res) => { //  Request Timeout
    res.status( 408 )
    res.send('<h1> 408 </h1><p> The server timed out waiting for the request. According to HTTP specifications: "The client did not produce a request within the time that the server was prepared to wait. The client MAY repeat the request without modifications at any later time." </p>')
});

// Resource stuck in multiple simultaneous updates
router.get('/409', (req, res) => { //  Conflict
    res.status( 409 )
    res.send('<h1> 409 </h1><p> Indicates that the request could not be processed because of conflict in the current state of the resource, such as an edit conflict between multiple simultaneous updates. </p>')
});

// resource requested is no longer available and will not be available again
router.get('/410', (req, res) => { //  Gone
    res.status( 410 )
    res.send('<h1> 410 </h1><p> Indicates that the resource requested is no longer available and will not be available again. This should be used when a resource has been intentionally removed and the resource should be purged. Upon receiving a 410 status code, the client should not request the resource in the future. Clients such as search engines should remove the resource from their indices.[43] Most use cases do not require clients and search engines to purge the resource, and a "404 Not Found" may be used instead. </p>')
});

// request did not specify length/range of its content, which is required by resource
router.get('/411', (req, res) => { //  Length Required
    res.status( 411 )
    res.send('<h1> 411 </h1><p> The request did not specify the length of its content, which is required by the requested resource </p>')
});

// Any preconditions that the requester put on the request does not match
router.get('/412', (req, res) => { //  Precondition Failed
    res.status( 412 )
    res.send('<h1> 412 </h1><p> The server does not meet one of the preconditions that the requester put on the request </p>')
});

// request is larger than the server is able or willing to process
router.get('/413', (req, res) => { //  Payload Too Large / Request Entity Too Large
    res.status( 413 )
    res.send('<h1> 413 </h1><p> The request is larger than the server is willing or able to process. Previously called "Request Entity Too Large". </p>')
});

// URI is very long for GET
router.get('/414', (req, res) => { //  URI Too Long / Request-URI Too Long
    res.status( 414 )
    res.send('<h1> 414 </h1><p> The URI provided was too long for the server to process. Often the result of too much data being encoded as a query-string of a GET request, in which case it should be converted to a POST request.[47] Called "Request-URI Too Long" previously </p>')
});

// Passing data to server in wrong format
router.get('/415', (req, res) => { //  Unsupported Media Type
    res.status( 415 )
    res.send('<h1> 415 </h1><p> The request entity has a media type which the server or resource does not support. For example, the client uploads an image as image/svg+xml, but the server requires that images use a different format. </p>')
});

// Cannot supply requested file/resource portion because of non availability
router.get('/416', (req, res) => { //  Range Not Satisfiable / Requested Range Not Satisfiable
    res.status( 416 )
    res.send('<h1> 416 </h1><p> The client has asked for a portion of the file (byte serving), but the server cannot supply that portion. For example, if the client asked for a part of the file that lies beyond the end of the file.[49] Called "Requested Range Not Satisfiable" previously. </p>')
});

// server cannot meet the requirements of the Expect request-header field
router.get('/417', (req, res) => { //  Expectation Failed
    res.status( 417 )
    res.send('<h1> 417 </h1><p> The server cannot meet the requirements of the Expect request-header field. </p>')
});

//  an Easter egg is an intentional inside joke, hidden message or image, or secret feature of a work. It is usually found in a computer program, video game, or DVD/Blu-ray Disc menu screen. The name is used to evoke the idea of a traditional Easter egg hunt.[2] The term was coined to describe a hidden message in the Atari video game Adventure that encouraged the player to find further hidden messages in later games, leading them on a 'hunt'.
router.get('/418', (req, res) => { //  I'm a teapot
    res.status( 418 )
    res.send('<h1> 418 </h1><p> This code was defined in 1998 as one of the traditional IETF April Fools jokes, in RFC 2324, Hyper Text Coffee Pot Control Protocol, and is not expected to be implemented by actual HTTP servers. The RFC specifies this code should be returned by teapots requested to brew coffee. This HTTP status is used as an Easter egg in some websites, including Google.com. </p>')
});

// server is not able to produce a response for requested resource
router.get('/421', (req, res) => { //  Misdirected Request 
    res.status( 421 )
    res.send('<h1> 421 </h1><p> The request was directed at a server that is not able to produce a response[55] (for example because of connection reuse). </p>')
});

// Resource reqested is locked
router.get('/423', (req, res) => { //  Locked
    res.status( 423 )
    res.send('<h1> 423 </h1><p> The resource that is being accessed is locked </p>')
});

// server failed to fulfill request because another dependant request has failed
router.get('/424', (req, res) => { //  Failed Dependency
    res.status( 424 )
    res.send('<h1> 424 </h1><p> The request failed because it depended on another request and that request failed (e.g., a PROPPATCH). </p>')
});

// resource got updated from last version which client got and client PUTs back to server for update
router.get('/428', (req, res) => { //  Precondition Required
    res.status( 428 )
    res.send('<h1> 428 </h1><p> The origin server requires the request to be conditional. Intended to prevent the {{ lost update }} problem, where a client GETs a resource state, modifies it, and PUTs it back to the server, when meanwhile a third party has modified the state on the server, leading to a conflict. </p>')
});

// User has sent too many requests in a given amount of time
router.get('/429', (req, res) => { //  Too Many Requests 
    res.status( 429 )
    res.send('<h1> 429 </h1><p> The user has sent too many requests in a given amount of time. Intended for use with rate-limiting schemes </p>')
});

// Any header is too large
router.get('/431', (req, res) => { //  Request Header Fields Too Large
    res.status( 431 )
    res.send('<h1>  </h1><p> The server is unwilling to process the request because either an individual header field, or all the header fields collectively, are too large </p>')
});

// Unavailable For Legal Reasons
router.get('/451', (req, res) => { //  Unavailable For Legal Reasons
    res.status( 451 )
    res.send('<h1> 451 </h1><p> A server operator has received a legal demand to deny access to a resource or to a set of resources that includes the requested resource.[59] The code 451 was chosen as a reference to the novel Fahrenheit 451 (see the Acknowledgements in the RFC). </p>')
});

// A generic error message, given when an unexpected condition was encountered and no more specific message is suitable
router.get('/500', (req, res) => { //  Internal Server Error
    res.status( 500 )
    res.send('<h1> 500 </h1><p> A generic error message, given when an unexpected condition was encountered and no more specific message is suitable </p>')
});

// new feature of a web-service API not implemented yet
router.get('/501', (req, res) => { //  Not Implemented
    res.status( 501 )
    res.send('<h1> 501 </h1><p> The server either does not recognize the request method, or it lacks the ability to fulfil the request. Usually this implies future availability (e.g., a new feature of a web-service API) </p>')
});

// 
router.get('/502', (req, res) => { //  Bad Gateway
    res.status( 502 )
    res.send('<h1> 502 </h1><p> The server was acting as a gateway or proxy and received an invalid response from the upstream server. </p>')
});

// Server received an invalid response from the upstream server
router.get('/502', (req, res) => { //  
    res.status( 502 )
    res.send('<h1> 502 </h1><p>  </p>')
});

// Service unavailable because it is overloaded or down for maintenance
router.get('/503', (req, res) => { //  Service Unavailable
    res.status( 503 )
    res.send('<h1> 503 </h1><p> The server is currently unavailable (because it is overloaded or down for maintenance). Generally, this is a temporary state. </p>')
});

// Server did not receive a timely response from the upstream server.
router.get('/504', (req, res) => { //  Gateway Timeout
    res.status( 504 )
    res.send('<h1> 504 </h1><p> The server was acting as a gateway or proxy and did not receive a timely response from the upstream server. </p>')
});

// Server does not support the HTTP protocol version used in request
router.get('/505', (req, res) => { //  HTTP Version Not Supported
    res.status( 505 )
    res.send('<h1> 505 </h1><p> The server does not support the HTTP protocol version used in the request. </p>')
});

// Server is unable to store the representation needed to complete the request
router.get('/507', (req, res) => { //  Insufficient Storage
    res.status( 507 )
    res.send('<h1> 507 </h1><p> The server is unable to store the representation needed to complete the request </p>')
});

// Further extensions to the request are required for the server to fulfill it
router.get('/510', (req, res) => { //  Not Extended
    res.status( 510 )
    res.send('<h1> 510 </h1><p> Further extensions to the request are required for the server to fulfill it </p>')
});

// Used in the resumable requests proposal to resume aborted PUT or POST requests
router.get('/103', (req, res) => { //  Checkpoint
    res.status( 103 )
    res.send('<h1> 103 </h1><p> Further extensions to the request are required for the server to fulfill it </p>')
});

// Method has failed
router.get('/420', (req, res) => { //  Method Failure
    res.status( 420 )
    res.send('<h1> 420 </h1><p> A deprecated response used by the Spring Framework when a method has failed </p>')
});

// Invalid SSL Certificate
router.get('/526', (req, res) => { //  Invalid SSL Certificate
    res.status( 526 )
    res.send('<h1> 526 </h1><p> Used by Cloudflare and Cloud Foundry gorouter to indicate failure to validate the SSL/TLS certificate that the origin server presented. </p>')
});

// The client's session has expired and must log in again
router.get('/440', (req, res) => { //  Login Time-out  
    res.status( 440 )
    res.send('<h1> 440 </h1><p> The client session has expired and must log in again </p>')
});

// Test Error Page
router.get('/', (req, res) => { //  Test Error Page
    res.status( 400 )
    res.send('<h1> Test Error Page </h1><p>  </p>')
});

module.exports = router;