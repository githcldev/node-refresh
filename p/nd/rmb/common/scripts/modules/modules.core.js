/**
 * ModulesScriptCore comprise all client-index npm scripts
 */
// const nodeVars = require('../../../config/nodeVariable');
const _clh = require('../../../server/infra/helpers/consoleLogHelper')
const clientIndexScripts = require('./client/index')
const clientUserScripts = require('./client/user')
const clientAdminScripts = require('./client/admin')
const serverNodeScripts = require('./server/node')
let ModulesScriptCore = (function () {
  class ModulesScriptCore {
    static init(flag) {
      _clh.i('Init:: Module Script Core')
      switch (flag) {
        case 'ud':
          _clh.log('Start:: user raw dev')
          process.env.npm_config_dev = true;
          clientUserScripts.debug()
          break;
        case 'ad':
          _clh.log('Start:: admin raw dev')
          process.env.npm_config_dev = true;
          clientAdminScripts.debug()
          break;
        case 'un':
          _clh.log('un')
          break;
        case 'up':
          _clh.log('Start:: user raw prod')
          process.env.npm_config_dev = true;
          clientUserScripts.rawProd()
          _clh.log('up')
          break;
        case 'ap':
          _clh.log('Start:: admin raw prod')
          process.env.npm_config_dev = true;
          clientAdminScripts.rawProd()
          _clh.log('ap')
          break;
        case 'id':
          _clh.log('Start:: index raw dev')
          process.env.npm_config_dev = true;
          clientIndexScripts.debug()
          break;
        case 'ipnd':
          _clh.log('Start:: index raw prod + node dev')
          process.env.npm_config_dev = true;
          clientIndexScripts.rawProd(serverNodeScripts.debug)
          break;
        case 'idnd':
          _clh.log('Start:: index dev + node dev')
          process.env.npm_config_dev = true;
          serverNodeScripts.debug()
          break;
        case 'ipd':
          _clh.log('Start:: index raw prod dev')
          process.env.npm_config_dev = true;
          clientIndexScripts.prodDebug()
          _clh.log('ipd')
          break;
        case 'ip':
          _clh.log('Start:: index raw prod')
          process.env.npm_config_dev = true;
          clientIndexScripts.rawProd()
          _clh.log('ip')
          break;
        case 'inp':
          break;
        case 'nd':
          _clh.log('Start:: node dev')
          serverNodeScripts.debug()
          break;
        case 'ns':
          _clh.log('Start:: node start')
          serverNodeScripts.start()
          break;
        case 'np':
          _clh.log('Start:: node prod')
          process.env.npm_config_production = true;
          break;
        case 'd':
          _clh.log('d')
          break;
        case 'n':
          _clh.log('n')
          break;
        case 'p':
          _clh.log('p')
          break;
        default:
          _clh.e(_c.e.np)
          break;
      }
    }
  }
  return ModulesScriptCore;
})();
module.exports = ModulesScriptCore;