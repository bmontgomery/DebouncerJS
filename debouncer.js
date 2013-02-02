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

  Debouncer.prototype.fireEvent = function(debounce) {
    clearTimeout(timeoutHandle);
    if (debounce !== false) {
      return timeoutHandle = setTimeout(options.callback, options.timeout);
    } else {
      return options.callback();
    }
  };

  return Debouncer;

})();

debounce = function(callback, timeout) {
    var debouncer = new Debouncer(callback, timeout);
    return debouncer.fireEvent;
};
