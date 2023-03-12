function debounce(cb, ms) {
  let flag = false
  return function () {
    if (flag) return
    cb.apply(this, arguments)
    flag = true
    setTimeout(() => flag = false, ms)
  }
}