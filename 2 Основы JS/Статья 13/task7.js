function findSimpleNums(num) {
  const isSimpleNum = n => {
    if (n === 1 || n === 2) return true
    for (let i = 2; i <= Math.floor(n / 2); i++) {
      if (n % i === 0) return false
    }
    return true
  }

  for (let i = 2; i <= num; i++) {
    if (isSimpleNum(i)) {
      console.log(i)
    }
  }
}

findSimpleNums(115)
