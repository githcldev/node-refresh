'use strict';
let A_CE = {}	
A_CE.ping = function ping() {
	console.log("CustomEvent is ready with ping " + this.A_CE_COUNTER++)
}
A_CE.addEventListener = function addEventListener(el, eventName, handler) {
  if (el.addEventListener) {
    el.addEventListener(eventName, handler);
  } else {
    el.attachEvent('on' + eventName, function() {
      handler.call(el);
    });
  }
}
A_CE.triggerEvent = function triggerEvent(el, eventName, options) {
  let event;
  if (window.CustomEvent) {
    event = new CustomEvent(eventName, options);
  } else {
    event = document.createEvent('CustomEvent' + this.customEventCounter++);
    event.initCustomEvent(eventName, true, true, options);
  }
  el.dispatchEvent(event);
}
A_CE.A_CE_COUNTER = 0;
module.exports = A_CE;