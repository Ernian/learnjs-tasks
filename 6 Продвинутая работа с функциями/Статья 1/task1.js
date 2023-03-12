//Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

function sumToRec(n) {
  return n === 1 ? 1 : n + sumToRec(n - 1)
}

function sumToLoop(n) {
  let sum = 0
  for (let i = 1; i <= n; i++) {
    sum += i
  }
  return sum
}

function sumToGaus(n) {
  return n * (n + 1) / 2
}


console.time()
console.log(sumToRec(10_000))
console.timeEnd()

console.time()
console.log(sumToLoop(100_000))
console.timeEnd()

console.time()
console.log(sumToGaus(1_000_000))
console.timeEnd()