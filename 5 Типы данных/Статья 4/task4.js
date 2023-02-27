function sumInput() {
  let numbers = []

  while (true) {

    let value = prompt("Введите число", 0)

    if (value === "" || value === null || !isFinite(value)) break

    numbers.push(+value)
  }

  return numbers.reduce((sum, next) => sum += next)
}

alert(sumInput());