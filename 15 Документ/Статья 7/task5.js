let data = {
  "Рыбы": {
    "форель": {},
    "лосось": {}
  },

  "Деревья": {
    "Огромные": {
      "секвойя": {},
      "дуб": {}
    },
    "Цветковые": {
      "яблоня": {},
      "магнолия": {}
    }
  }
}


function createTree(root, data) {

  const recursionTree = (obj) => {

    if (!Object.keys(obj).length) return null

    const ul = document.createElement('ul')
    for (let [title, list] of Object.entries(obj)) {
      const titleLi = document.createElement('li')
      titleLi.textContent = title

      const innerUl = recursionTree(list)
      if (innerUl) {
        titleLi.append(innerUl)
      }
      ul.append(titleLi)
    }
    return ul
  }
  root.append(recursionTree(data))
}

createTree(document.body, data)