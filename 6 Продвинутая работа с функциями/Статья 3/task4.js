// Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.

const sum = a => b => a + b

console.log(sum(3)(42))