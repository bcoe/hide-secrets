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

If you want to override this list of obfuscated terms, simply:

1. create your own list of terms:

    ```js
    const badWords = [
      'super-secret-1', 'double-secret-probation'
    ]
    ```

1. pass this as configuration to hide-secrets:

    ```js
    console.log(hide(obj, {badWords}))
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
