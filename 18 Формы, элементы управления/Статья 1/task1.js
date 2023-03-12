const select = document.getElementById('genres')

let selectedOption = select.options[select.selectedIndex]
console.log(selectedOption.value)
console.log(selectedOption.text)

let newOption = new Option("Классика", "classic");
select.append(newOption);

newOption.selected = true;