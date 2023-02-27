const menu = {
  width: 200,
  height: 300,
  title: "My menu"
}
console.log(menu)

function multiplyNumeric(obj) {
  for (let [key, value] of Object.entries(obj)) {
    if (typeof value === 'number') {
      obj[key] = value * 2
    }
  }
}

multiplyNumeric(menu)

console.log(menu)