const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

const totalSum = Object.values(salaries)
  .reduce((sum, salary) => sum += salary, 0)
