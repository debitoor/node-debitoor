debitoor [![npm version](https://badge.fury.io/js/debitoor.svg)](http://badge.fury.io/js/debitoor) [![Dependency Status](https://david-dm.org/debitoor/node-debitoor.svg)](https://david-dm.org/debitoor/node-debitoor)
========
This small module wraps [`request`](https://github.com/mikeal/request) in order to provide easy access to the [Debitoor REST API](https://developers.debitoor.com).

## Usage ##

Install via npm:

```
npm install debitoor
```

Use it like you would use `request`. The main difference is that you only have to specify relative URLs and that authentication is handled for you. Just provide a valid access token and you're ready to go:

```js
var access_token = 'your-token';

var debitoor = require('debitoor')(access_token);

debitoor('/customers/v1', function (error, response, body) {
	console.log(body);
});
```
## API Documentation ##
The general Debitoor REST API documentaion can be found here: https://developers.debitoor.com
