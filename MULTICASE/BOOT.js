require('../UPPERCASE/BOOT.js');

var
// origin BOOT
_BOOT = BOOT;

global.BOOT = function(params) {

	var
	// Coffee Script
	CoffeeScript = require('./coffee-script.js').CoffeeScript,

	// Python
	Python = require('rapydscript');

	params.MULTI_LANG_SUPPORT = {

		coffee : function(source, path) {
			return CoffeeScript.compile(source);
		},

		litcoffee : function(source, path) {
			return CoffeeScript.compile(source, {
				literate : true
			});
		},

		py : function(source, path) {

			var
			// output
			output = Python.OutputStream({
				beautify : true,
				private_scope : false
			});

			Python.parse(source, {
				filename : path
			}).print(output);

			return output.toString();
		}
	};

	return _BOOT(params);
};
