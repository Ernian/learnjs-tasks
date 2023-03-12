const view = document.getElementById('view')

view.addEventListener('focus', () => {
  const textArea = document.createElement('textarea')
  textArea.classList.add('edit')
  textArea.value = view.innerHTML
  view.replaceWith(textArea)
  textArea.focus()

  function textAreaBlurHandler() {
    view.innerHTML = textArea.value
    textArea.blur()
    textArea.replaceWith(view)
  }

  textArea.addEventListener('blur', textAreaBlurHandler)
  textArea.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      textAreaBlurHandler()
    }
  })
})

