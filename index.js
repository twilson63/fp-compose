const reduce = require('fp-reduce')

module.exports = compose

function compose(...fns) {
  return function(x) {
    return reduce(
      function(acc, fn) {
        return fn(acc)
      },
      x,
      fns.reverse()
    )
  }
}
