function f1() {
  try {
    alert('начало');
    return "result";
  } catch (e) {
    /// ...
  } finally {
    alert('очистка!');
  }
}

f1(); // очистка!

function f2() {
  try {
    alert('начало');
    throw new Error("ошибка");
  } catch (e) {
    // ...
    if ("не могу обработать ошибку") {
      throw e;
    }

  } finally {
    alert('очистка!')
  }
}

f2(); // очистка!