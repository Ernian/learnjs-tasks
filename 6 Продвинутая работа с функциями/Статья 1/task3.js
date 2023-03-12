// Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.

// const cache = {}
// function fib(n) {
//   if (cache[n]) return cache[n]
//   if (n === 1 || n === 2) return 1
//   result = fib(n - 1) + fib(n - 2)
//   cache[n] = result
//   return result
// }

function fib(n) {
  const cache = {}
  return (function innerFib(i = n) {
    if (cache[i]) return cache[i]
    if (i === 1 || i === 2) return 1
    result = innerFib(i - 1) + innerFib(i - 2)
    cache[i] = result
    return result
  })()
}

console.time()
console.log(fib(3))
console.timeEnd()

console.time()
console.log(fib(7))
console.timeEnd()

console.time()
console.log(fib(77))
console.timeEnd()

console.time()
console.log(fib(777))
console.timeEnd()