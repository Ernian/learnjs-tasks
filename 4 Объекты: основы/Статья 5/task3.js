function Accumulator(startingValue) {
  this.value = startingValue

  this.read = function () {
    this.value += Number(prompt('Сколько нужно добавить?', 0))
  }
}