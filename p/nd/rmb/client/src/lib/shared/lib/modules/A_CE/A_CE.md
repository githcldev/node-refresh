


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

function addEventListener(el, eventName, handler) {
  if (el.addEventListener) {
    el.addEventListener(eventName, handler);
  } else {
    el.attachEvent('on' + eventName, function() {
      handler.call(el);
    });
  }
}
function triggerEvent(el, eventName, options) {
  let event;
  if (window.CustomEvent) {
    event = new CustomEvent(eventName, options);
  } else {
    event = document.createEvent('CustomEvent');
    event.initCustomEvent(eventName, true, true, options);
  }
  el.dispatchEvent(event);
}
// Add an event listener.
addEventListener(document, 'customChangeEvent', function(e) {
  console.log('listernet 1 => ' + e.detail); });
addEventListener(document, 'customChangeEvent', function(e) {
  console.log('listernet 2 => ' + e.detail); });

// Trigger the event.
triggerEvent(document, 'customChangeEvent', { detail: 1 });
triggerEvent(document, 'customChangeEvent', { detail: 2 });
triggerEvent(document, 'customChangeEvent', { detail: 3 });

-------------------------------------------------

A_CE  // App_Custom Events

/**
 * Comment
 *
 * @class
 * @param {string=} message The message.
 */