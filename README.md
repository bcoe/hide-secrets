# hide-secrets

[![Build Status][travis-image]][travis-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![NPM version][npm-image]][npm-url]
[![js-standard-style][standard-image]][standard-url]

```js
var hide = require('hide-secrets')

var obj = {
  innerObject: {
    password: 'abc123',
    email: 'ben@npmjs.com',
    token: 'my-secret-token'
  },
  auth: '' // empty strings are left empty.
}

console.log(hide(obj))
```

outputs

```
{
  innerObject: {
    password: '[SECRET]',
    email: 'ben@npmjs.com',
    token: '[SECRET]'
  },
  auth: ''
}
```

Currently the following fields are obfuscated by default:

`password`, `pass`, `token`, `auth`, `secret`, `passphrase`.

If you want to hide `key` not in above:

```
const badWords = [
  'yourkey',
]
```

And then:
```
const hideKeys = { badWords }
```

Finally:
```
console.log(hide(obj, hideKeys))
```

Any keys within obj that are contained within the `badWords` array will be hidden.

## License

ISC

[travis-url]: https://travis-ci.org/bcoe/hide-secrets
[travis-image]: https://img.shields.io/travis/bcoe/hide-secrets.svg
[coveralls-url]: https://coveralls.io/github/bcoe/hide-secrets
[coveralls-image]: https://img.shields.io/coveralls/bcoe/hide-secrets.svg
[npm-url]: https://npmjs.org/package/hide-secrets
[npm-image]: https://img.shields.io/npm/v/hide-secrets.svg
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[standard-url]: https://github.com/feross/standard
