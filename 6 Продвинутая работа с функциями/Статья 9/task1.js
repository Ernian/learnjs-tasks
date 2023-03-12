'use strict'
// Создайте декоратор spy(func), который должен возвращать обёртку,
// которая сохраняет все вызовы функции в своём свойстве calls.

// Каждый вызов должен сохраняться как массив аргументов.

function work(a, b) {
  console.log(a + b)
}

function spy(cb) {

  function fn(...args) {
    fn.calls.push(args)
    console.log(this)
    // return cb.apply(this, args)
    return cb(...args)
  }

  fn.calls = []
  return fn
}

work = spy(work)

work(1, 2)
work(4, 5)

for (let args of work.calls) {
  console.log('call:' + args.join())
}