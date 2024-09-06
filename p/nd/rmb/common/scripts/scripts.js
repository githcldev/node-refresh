var _c = require('./constant');
const _clh = require('../../server/infra/helpers/consoleLogHelper')
const ModulesScriptCore = require('./modules/modules.core')
try {
  if (!process.env[_c.f]) {
    _clh.e(_c.e.rf)
    return false;
  } else if (_c.r.indexOf(process.env[_c.f]) < 0) {
    _clh.e(_c.e.nrv)
    return false;
  }
  ModulesScriptCore.init(process.env[_c.f])
} catch (e) {
  _clh.e(_c.e.e);
  _clh.e(e)
}