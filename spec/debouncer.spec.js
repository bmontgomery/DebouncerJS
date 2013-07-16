describe("Debouncer", function() {

  it("calls the debounced function", function() {
    var value = 0;
    runs(function() {
      var myFunction = function() {
        value = 1;
      };

      debounce(myFunction, 100)();
    });

    waitsFor(function() { return value === 1; }, "Value was never set to 1", 200);
  });

  it("debounces the function", function(){
    var value = 0;
    runs(function() {
      var myFunction = function() {
        value += 1;
      };

      var debouncedFn = debounce(myFunction, 100);

      // even though it's called a bunch of times, it should only execute once.
      debouncedFn();
      debouncedFn();
      debouncedFn();
      debouncedFn();
      debouncedFn();
      debouncedFn();
      debouncedFn();
      debouncedFn();
      debouncedFn();

      // the value should still be 0 at this point (assuming this line is executed 
      // less than 100ms after the last call to debouncedFn).
      expect(value).toBe(0);
    });

    waitsFor(function() { return value === 1; }, "Value was never set to 1", 200);
  });

  it("passes parameters through", function() {
    var value = 0;
    runs(function() {
      var myFunction = function(newValue) {
        value = newValue;
      };

      debounce(myFunction, 100)(1);
    });

    waitsFor(function() { return value === 1; }, "Value was never set to 1", 200);
  });

});