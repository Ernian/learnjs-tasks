// Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.
// Сделайте два решения: с использованием цикла и через рекурсию.

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
}

function printListReverseRec(list) {
  if (list.next) printListReverseRec(list.next)
  console.log(list.value)
}

function printListReverseLoop(list) {
  let arr = []
  let node = list

  while (node) {
    arr.push(node.value)
    node = node.next
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i])
  }
}

printListReverseRec(list)
printListReverseLoop(list)