// Напишите функцию printList(list), которая выводит элементы списка по одному.
// Сделайте два варианта решения: используя цикл и через рекурсию.

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

function printListRec(list) {
  console.log(list.value)
  if (list.next) printListRec(list.next)
}

function printListLoop(list) {
  let node = list
  while (node) {
    console.log(node.value)
    node = node.next
  }
}

printListRec(list)
printListLoop(list)