# hide-secrets

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

Currently the following fields are obfuscated:

`password`, `pass`, `token`, `auth`, `secret`, `passphrase`.

## License

ISC
