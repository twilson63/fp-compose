const test = require('tape')
const compose = require('./')

test('compose', function(t) {
  const add2 = function(x) {
    return x + 2
  }
  const subtract3 = function(x) {
    return x - 3
  }

  const compute = compose(add2, subtract3)

  t.equals(5, compute(6)) // === 5
  t.end()
})

test('compose2', function(t) {
  const add2 = function(x) {
    return x + 2
  }
  const subtract3 = function(x) {
    return x - 3
  }

  const compute = compose(add2, subtract3)

  t.equals(8, compute(9)) // === 5
  t.end()
})
