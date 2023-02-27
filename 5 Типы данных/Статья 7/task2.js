function aclean(arr) {
  let obj = {}

  for (let word of arr) {
    let sorted = word.toLowerCase().split("").sort().join("")
    obj[sorted] = word
  }

  return Object.values(obj)
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"]

console.log(aclean(arr))