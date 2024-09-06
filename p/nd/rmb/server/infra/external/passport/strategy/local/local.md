Use utf8 character encoding while reading the private.key and private.key to get string as content instead of byte array. There are many options available as signOption. To make the JWT efficient we will be using only the following:
  issuer — Software organization who issues the token.
  subject — Intended user of the token.
  audience — Basically identity of the intended recipient of the token..
    Basically usefull in case if you pass user-access-level in request
    Read More at: https://github.com/auth0/node-jsonwebtoken
  expiresIn — Expiration time after which the token will be invalid.
  algorithm — Encryption algorithm to be used to protect the token