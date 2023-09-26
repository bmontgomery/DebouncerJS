var Debouncer, debounce;

Debouncer = (function() {
  var options, timeoutHandle;

  timeoutHandle = null;

  options = {
    callback: null,
    timeout: 200
  };

  function Debouncer(callback, timeout) {
    timeoutHandle = null;
    options.callback = callback;
    options.timeout = timeout;
  }

  /*
  This is the entry point for triggering the desired function, and will delay
  calling the orginal callback for the set amount of time.
  */
  Debouncer.prototype.triggerEvent = function() {
    clearTimeout(timeoutHandle);
    var args = arguments;
    return timeoutHandle = setTimeout(function() { 
      options.callback.apply(this, args);
    }, options.timeout);
  };

  return Debouncer;
})();

debounce = function(callback, timeout) {
  var debouncer = new Debouncer(callback, timeout);
  return debouncer.triggerEvent;
};
