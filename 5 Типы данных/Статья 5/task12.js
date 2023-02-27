function unique(arr) {
  const result = []
  for (let word of arr) {
    if (!result.includes(word)) {
      result.push(word)
    }
  }
  return result
}

const strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
]

console.log(unique(strings))