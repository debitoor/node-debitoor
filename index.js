var request = require('request');

module.exports = function(token) {
	return request.defaults({}, function(options, callback) {
		if (options.url) {
			options.uri = options.url;
			delete options.url;
		}
		if (options.uri[0] === '/') {
			options.uri = 'https://api.debitoor.com/api' + options.uri;
		}
		options.jar = false;
		options.headers = options.headers || {};
		options.headers['x-token'] = token;
		if (!('json' in options) && callback) {
			options.json = true;
		}
		return request(options, callback);
	});
};
