var request = require('request');

module.exports = function(token) {
	return request.defaults({}, function(options, callback) {
		if (options.uri[0] === '/') {
			options.uri = 'https://api.debitoor.com/api/v1.0'+options.uri;
		}
		options.headers = options.headers || {};
		options.headers['x-token'] = token;
		if (!('json' in options) && callback) {
			options.json = true;
		}
		return request(options, callback);
	});
};