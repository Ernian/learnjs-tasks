// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

function printNumbersInterval(from, to) {
  let i = from
  const intervalId = setInterval(() => {
    console.log(i)
    if (i === to) {
      clearInterval(intervalId)
    }
    i++
  }, 1000)

}

function printNumbersSet(from, to) {
  let i = from
  setTimeout(function tick() {
    console.log(i)
    i++
    if (i <= to) {
      setTimeout(tick, 1000)
    }
  }, 1000)
}

printNumbersSet(1, 5)