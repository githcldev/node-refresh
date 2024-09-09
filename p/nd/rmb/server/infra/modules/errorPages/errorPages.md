


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



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------
/**
 * 1xx Informational response: An informational response indicates that the request was received and understood. It is issued on a provisional basis while request processing continues. It alerts the client to wait for a final response. The message consists only of the status line and optional header fields, and is terminated by an empty line
 * 2xx Success: This class of status codes indicates the action requested by the client was received, understood and accepted
 * 3xx Redirection: This class of status code indicates the client must take additional action to complete the request.
 * 4xx Client errors: This class of status code is intended for situations in which the error seems to have been caused by the client.
 * 5xx Server errors: The server failed to fulfill a request
 * Unofficial codes: The following codes are not specified by any standard.
 * Internet Information Services: Microsoft's Internet Information Services web server expands the 4xx error space to signal errors with the client's request.
 * nginx: The nginx web server software expands the 4xx error space to signal issues with the client's request
 * Cloudflare: Cloudflare's reverse proxy service expands the 5xx series of errors space to signal issues with the origin server
 */

// Counting error hits on console
// router.get('/*', (req, res, next) => {
//     var requrl = nodeVars.tools.url.format({
//         protocol: req.protocol,
//         host: req.get('host'),
//         pathname: req.originalUrl,
//     });
//     console.log(new Date() + 'Client got hit to error page => ' + requrl)
//     next()
// })
