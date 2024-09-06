var pathHelp = require('../variables');
let gWpConfig = [];
// console.log(pathHelp.cmdFlags);
if(typeof pathHelp.cmdFlags.modules !== 'undefined' && pathHelp.cmdFlags.modules) {
  switch(pathHelp.cmdFlags.modules) {
    default:
      gWpConfig.config = require(pathHelp.gWebpack.modules[path.cmdFlags.modules].wpConfig);
      break;
  }
} else {
  gWpConfig.config1 = require(pathHelp.gWebpack.modules.login.wpConfig);
  gWpConfig.config2 = require(pathHelp.gWebpack.modules.index.wpConfig);
}
if(typeof pathHelp.cmdFlags.env !== 'undefined' && pathHelp.cmdFlags.env.production) {
  gWpConfig.intermediatConfig = require(pathHelp.gWebpack.config.production);
  module.exports = pathHelp.gWebpack.tools.webMerge(
    require(pathHelp.gWebpack.config.common),
    gWpConfig.intermediatConfig,
    gWpConfig.config2,
    gWpConfig.config1
  );
} else {
  gWpConfig.intermediatConfig = require(pathHelp.gWebpack.config.development);
  module.exports = pathHelp.gWebpack.tools.webMerge(
    require(pathHelp.gWebpack.config.common),
    gWpConfig.intermediatConfig,
    // gWpConfig.config2,
    gWpConfig.config1
  );
}
