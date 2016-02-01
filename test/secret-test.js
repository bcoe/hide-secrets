var secret = require('../')
var tap = require('tap')

tap.test('it hides secrets in top level keys', function (t) {
  var obj = {
    auth: 'abc123',
    password: '123abc'
  }

  var out = secret(obj)
  t.equal(out.auth, '[SECRET]')
  t.end()
})

tap.test('it does not hide strings that are not secret', function (t) {
  var obj = {
    auth: 'abc123',
    email: 'ben@example.com'
  }

  var out = secret(obj)
  t.equal(out.auth, '[SECRET]')
  t.equal(out.email, 'ben@example.com')
  t.end()
})

tap.test('it hides secrets in arrays', function (t) {
  var obj = {
    auth: ['a', 'b'],
    email: 'ben@example.com'
  }

  var out = secret(obj)
  t.equal(out.auth[0], '[SECRET]')
  t.equal(out.auth[1], '[SECRET]')
  t.equal(out.email, 'ben@example.com')
  t.end()
})

tap.test('it hides secrets in objects', function (t) {
  var obj = {
    auth: {foo: 'a', bar: 'b'},
    email: 'ben@example.com'
  }

  var out = secret(obj)
  t.equal(out.auth.foo, '[SECRET]')
  t.equal(out.auth.bar, '[SECRET]')
  t.equal(out.email, 'ben@example.com')
  t.end()
})

tap.test('it hides secrets nested in objects', function (t) {
  var obj = {
    credentials: {
      body: {
        email: 'ben@example.com',
        pass: 'abc123'
      }
    }
  }

  var out = secret(obj)
  t.equal(out.credentials.body.pass, '[SECRET]')
  t.equal(out.credentials.body.email, 'ben@example.com')
  t.end()
})

tap.test('it hides secrets in inner objects and arrays', function (t) {
  var obj = {
    credentials: {
      body: {
        password: {foo: 'bar'},
        pass: ['abc123']
      }
    }
  }

  var out = secret(obj)
  t.equal(out.credentials.body.password.foo, '[SECRET]')
  t.equal(out.credentials.body.pass[0], '[SECRET]')
  t.end()
})

tap.test('it does not explode if a null object is passed in', function (t) {
  var out = secret(null)
  t.equal(out, null)
  t.end()
})

tap.test('it does not explode if a string is passed in', function (t) {
  var out = secret('hello')
  t.equal(out, 'hello')
  t.end()
})

tap.test('it does not hide empty strings', function (t) {
  var obj = {
    auth: ''
  }

  var out = secret(obj)
  t.equal(out.auth, '')
  t.end()
})
