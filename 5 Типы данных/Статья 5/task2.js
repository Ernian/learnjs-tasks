function filterRange(arr, a, b) {
  return arr.filter(num => num >= a && num <= b)
}

const arr = [5, 3, 8, 1]

console.log(filterRange(arr, 2, 7)) 