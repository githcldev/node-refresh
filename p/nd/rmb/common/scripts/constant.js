module.exports = {
  e: {
    rf: "Required flag not found",
    nrv: "No registered route for given value of flag",
    np:"No procedure for given route value of flag",
    e: "Error with customized npm scripts"
  },
  f: "npm_config_r",
  r: [
    'adnd', // dev env for all client modules with node dev
    'ud',
    'ad',
    'id',   // webpack-dev-server
    'idnd', // webpack-dev-server with nodemon
    'ipnd', // raw prod build with node dev
    'ipnp', // optimised prod build with node prod
    'ipd',   // webpack optimised prod dev build with local file for dependencies
    'ip',   // webpack optimised prod build
    'up',
    'ap',
    'idp',  // webpack raw build
    'nd',
    'ns',
    'np',
  ],
};