// Какие из этих 3-х команд работают одинаково?

// elem.append(document.createTextNode(text))
// elem.innerHTML = text
// elem.textContent = text

// Ответ: 1 и 3.

let text = '<b>текст</b>';

elem1.append(document.createTextNode(text))
elem2.innerHTML = text
elem3.textContent = text