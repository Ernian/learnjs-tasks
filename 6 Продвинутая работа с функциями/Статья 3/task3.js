'use strict'

let phrase = "Hello"

if (true) {
  let user = "John"

  function sayHi() {
    console.log(`${phrase}, ${user}`)
  }
}

sayHi() //ReferenceError: sayHi is not defined