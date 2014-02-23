// run: nodemon WebPageExample.js

require('./MULTICASE/BOOT.js');

BOOT({
	CONFIG : {
		defaultBoxName : 'WebPageExample',
		isDevMode : true
	},
	SERVER_CONFIG : {
		isNotUseDB : true
	}
});
