new Promise(function (resolve, reject) {
  setTimeout(() => {
    throw new Error("Whoops!");
  }, 1000);
}).catch(alert);

// ошибка генерируется не по ходу выполнения кода, а позже.
// Поэтому промис не может обработать её.