// Задача – написать функцию factorial(n), которая возвращает n!, используя рекурсию.

function factorial(n) {
  return n === 0 ? 1 : n * factorial(n - 1)
}

console.time()
console.log(factorial(17))
console.timeEnd()