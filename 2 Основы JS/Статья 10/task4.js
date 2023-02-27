const login = prompt('enter login')
let message = login == 'employee' ? 'Hi' :
  login == 'chief' ? 'Hello' :
    login == '' ? 'No login' : ''

alert(message)

