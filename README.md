# fp-compose

The compose function takes one to many functions as arguments and returns a function that takes a single value. When invoked the compose function invoked the last function argument with the value, then proceeds to pass the result to the previous function and repeats the process until all functions have been called from right to left. Finally returning the composed result to the caller.


```
const add2 = function (x) { return x + 2 }
const subtract3 = function (x) { return x - 3 }

const compute = compose(
  add2,
  subtract3  
)

const result = compute(6) // === 5

```
