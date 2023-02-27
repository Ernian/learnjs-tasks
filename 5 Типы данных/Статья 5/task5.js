const arr = ["HTML", "JavaScript", "CSS"]

const sorted = copySorted(arr)

function copySorted(arr) {
  return [...arr].sort()
}

console.log(arr)
console.log(sorted)