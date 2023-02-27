const vasya = { name: "Вася", age: 25 }
const petya = { name: "Петя", age: 30 }
const masha = { name: "Маша", age: 29 }

const arr = [vasya, petya, masha]

function getAverageAge(arr) {
  return arr.reduce((totalAge, user) => totalAge + user.age, 0) / arr.length
}

console.log(getAverageAge(arr))