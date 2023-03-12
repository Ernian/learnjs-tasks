const content = document.getElementById('contents')

content.addEventListener('click', event => {
  if (event.target.closest('a')) {
    const permission = confirm('Подтвердите переход по ссылке')
    if (!permission) {
      event.preventDefault()
    }
  }
})