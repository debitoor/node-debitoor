# debitoor #
This small module wraps [`request`](https://github.com/mikeal/request) in order to provide easy access to the [Debitoor REST API](https://api.debitoor.com/api).

## Usage ##
Use it like you would use `request`. The main difference is that you only have to specify relative URLs and that authentication is handled for you. Just provide a valid access token and you're ready to go:

```js
var access_token = 'your-token';

var debitoor = require('debitoor')(access_token);

debitoor('/customers', function (error, response, body) {
	console.log(body);
});
```

## Getting Access ##
In order to get access to the API you need to register an app with Debitoor ([contact us!](mailto:team@debitoor.com)). With that in place you need to run your users through an OAuth2 flow in order to obtain an access_token that you can use to interact with their data.


## API Documentation ##
The Debitoor REST API documenation can be found here: https://api.debitoor.com/api