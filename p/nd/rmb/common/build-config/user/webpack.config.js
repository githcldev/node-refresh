switch (process.env.NODE_ENV) {
  case 'prod':
  case 'production':
    module.exports = require('./webpack.prod')({env: 'production'});
    break;
  case 'test':
  case 'testing':
    module.exports = require('./webpack.test')({env: 'test'});
    break;
  case 'dev':
  case 'development':
  default:
    module.exports = require('./webpack.dev')({env: 'development'});
}
