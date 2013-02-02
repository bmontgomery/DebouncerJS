DebouncerJS
===========

A small library which allows functions to be "debounced". This provides a convenience method for decreasing "chatter" for potentially frequent function calls. This can be especially useful for events fired when an onkeyup event fires, for instance, to avoid several AJAX calls from an HTML page.

Example
=====

The `window` object's `resize` event fires very frequently in IE. This can cause performance problems. Use the debouncer library to improve perceived performance. This example uses jQuery.

	var windowResize = function() {
		/* processing here */
	};

	var debouncedWindowResize = debounce(windowResize, 200);

	$(window).resize(debouncedWindowResize);