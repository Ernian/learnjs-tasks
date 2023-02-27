function Calculator() {

  this.read = function () {
    this.a = Number(prompt('a?', 0))
    this.b = Number(prompt('b?', 0))
  }

  this.sum = function () {
    return this.a + this.b
  }

  this.mul = function () {
    return this.a * this.b
  }
}

const calculator = new Calculator()
calculator.read()

console.log("Sum=" + calculator.sum())
console.log("Mul=" + calculator.mul())