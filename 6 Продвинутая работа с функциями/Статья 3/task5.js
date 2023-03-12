// Сделайте набор «готовых к употреблению» фильтров:
// inBetween(a, b) – между a и b (включительно).
// inArray([...]) – находится в данном массиве.

const inBetween = (a, b) => item => a <= item && item <= b
const inArray = (arr) => item => arr.includes(item)


let arr = [1, 2, 3, 4, 5, 6, 7]

console.log('inBetween', arr.filter(inBetween(3, 6))) // 3,4,5,6

console.log('inArray', arr.filter(inArray([1, 2, 10])))