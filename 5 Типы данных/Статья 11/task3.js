function getLocalDay(date) {
  return date.getDay() || 7
}
console.log(getLocalDay(new Date(2023, 1, 27)))
console.log(getLocalDay(new Date(2023, 1, 19)))