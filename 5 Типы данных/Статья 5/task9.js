const vasya = { name: "Вася", age: 25 }
const petya = { name: "Петя", age: 30 }
const masha = { name: "Маша", age: 28 }
const sasha = { name: "Cаша", age: 8 }

const arr = [vasya, petya, masha, sasha]

function sortByAge(arr) {
  arr.sort((prevUser, nextUser) => prevUser.age - nextUser.age)
}
sortByAge(arr)
console.log(arr)