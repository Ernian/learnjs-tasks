const table = document.getElementById('grid')

table.addEventListener('click', event => {
  const tbody = table.querySelector('tbody')

  switch (event.target.dataset.type) {
    case 'number':
      rows = Array.from(tbody.rows)
        .sort((prev, next) => {
          return prev.cells[event.target.cellIndex].innerHTML - next.cells[event.target.cellIndex].innerHTML
        })

      tbody.append(...rows)
      break
    case 'string':
      console.log(tbody.rows)
      rows = Array.from(tbody.rows)
        .sort((prev, next) => {
          return prev.cells[event.target.cellIndex].innerHTML > next.cells[event.target.cellIndex].innerHTML ? 1 : -1
        })
      tbody.append(...rows)
      break
    default:
      return
  }
})