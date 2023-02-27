let login = prompt('Enter login')

if (login == null) {
  alert('Canceled')
} else if (login.toLowerCase() === 'admin') {
  let pass = prompt('Enter password')

  if (pass == null) {
    alert('Canceled')
  } else if (pass.toLowerCase() === 'chief') {
    alert('Hello')
  } else {
    alert('Wrong password')
  }
} else {
  alert('I don`t know you')
}