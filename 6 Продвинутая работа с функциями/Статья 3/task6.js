const users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" },
  { name: "Ben", age: 9, surname: "Parker" }
]
const users2 = JSON.parse(JSON.stringify(users))


const byField = field => (prev, next) => prev[field] > next[field] ? 1 : -1

console.log(users.sort(byField('name')))
console.log(users2.sort(byField('age')))