(function (name, context, definition) {
  if (typeof module != 'undefined' && module.exports) module.exports = definition()
  else if (typeof define == 'function' && define.amd) define(definition)
  else context[name] = definition()
})('C_SM', this, function () {
  function uniq() {
    return "message"
  }
  function core() {
    return require('./csm');
  }
  function start() {
    return require('./lib/flow/A_START/index');
  }
  function appViewPartialPopulator() {
    return require('./lib/flow/A_VPP/index'); 
  }
  function scriptPopulator() {
    return require('./lib/helpers/A_SP/index');
  }
  function er() {
    return require('./lib/helpers/A_ER/index');
  }
  function sharedHelper() {
    return require('./lib/helpers/A_SH/index');
  }
  function customEvents() {
    return require('./lib/modules/A_CE/index');
  }
  function overlay() {
    return require('./lib/modules/A_OL/index'); 
  }
  function xhr() {
    return require('./lib/helpers/A_XHR/index'); 
  }
  function C_SM(targetFramework = null) {
    let customEventInst = null, overlayInst = null, sharedHelperInst = null, 
      scriptPopulatorInst = null, startInst = null, erInst = null, xhrInst = null, viewPartialPopulatorInst = null;
    if(!erInst) erInst = new er()
    if(!startInst) startInst = new start()
    if(!viewPartialPopulatorInst) viewPartialPopulatorInst = new appViewPartialPopulator()
    if(!scriptPopulatorInst) scriptPopulatorInst = new scriptPopulator()
    if(!sharedHelperInst) sharedHelperInst = new sharedHelper()
      if(!xhrInst) xhrInst = new xhr()
    if(!customEventInst) customEventInst = new customEvents()
    if(!overlayInst) overlayInst = new overlay()
    return {
      "msg": uniq,
      "A_ER": erInst,
      "A_START": startInst,
      "A_VPP": viewPartialPopulatorInst,
      "A_SP": scriptPopulatorInst,
      "A_SH": sharedHelperInst,
      "A_XHR": xhrInst,
      "A_CE": customEventInst,
      "A_OL": overlayInst,
      "core": core
    }
  }
  return C_SM
}, this);
