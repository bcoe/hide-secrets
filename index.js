var traverse = require('traverse')

var defaultBadWords = [
  'password',
  'pass',
  'token',
  'auth',
  'secret',
  'passphrase'
]

var replacement = '[SECRET]'

module.exports = function (obj, opts) {
  opts = opts || {}
  opts.badWords = opts.badWords || defaultBadWords

  return traverse(obj).map(function (n) {
    for (var i = 0, key; (key = this.path[i]) !== undefined; i++) {
      if (~defaultBadWords.indexOf(key)) {
        if (typeof n === 'string') return replaceString(n)
      }
    }
  })
}

function replaceString (str) {
  if (str) return replacement
}
