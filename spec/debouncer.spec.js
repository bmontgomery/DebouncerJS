describe("Debouncer", function() {

  it("calls the debounced function", function() {
    var value = 0;
    runs(function() {
      var myFunction = function() {
        value = 1;
      };

      debounce(myFunction, 100)();
    });

    expect(value).toBe(0);

    waitsFor(function() { return value === 1; }, "Value was never set to 1", 200);

    runs(function() {
      expect(value).toBe(1);    
    });
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
    });

    expect(value).toBe(0);

    waitsFor(function() { return value === 1; }, "Value was never set to 1", 200);

    runs(function() {
      expect(value).toBe(1);
    });
  });

  it("passes parameters through", function() {
    var value = 0;
    runs(function() {
      var myFunction = function(newValue) {
        value = newValue;
      };

      debounce(myFunction, 100)(1);
    });

    expect(value).toBe(0);

    waitsFor(function() { return value === 1; }, "Value was never set to 1", 200);

    runs(function() {
      expect(value).toBe(1);    
    });
  });

});