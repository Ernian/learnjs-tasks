// Создайте декоратор delay(f, ms), который задерживает каждый вызов f на ms миллисекунд.

function f(x) {
  console.log(x)
}

function delay(cb, ms) {
  return function (...args) {
    // setTimeout(cb, ms, ...args)
    setTimeout(() => cb.apply(this, args), ms)
  }
}

// создаём обёртки
let f1000 = delay(f, 1000)
let f1500 = delay(f, 1500)

f1000("test1") // показывает "test" после 1000 мс
f1500("test2") // показывает "test" после 1500 мс
