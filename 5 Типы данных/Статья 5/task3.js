function filterRangeInPlace(arr, a, b) {
  arr.forEach((num, index) => {
    if (num < a || num > b) {
      arr.splice(index, 1)
    }
  })
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4)

console.log(arr)