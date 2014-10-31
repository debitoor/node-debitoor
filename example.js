var access_token = 'access_token';

var debitoor = require('debitoor')(access_token);

debitoor('/customers/v1', function (error, response, body) {
	console.log(body);
});