const tree = document.getElementById('tree')

tree.addEventListener('click', event => {
  if (event.target.tagName === 'LI') {
    const ul = event.target.querySelector('ul')
    if (ul) {
      ul.hidden = !ul.hidden
    }
  }
})