// Являются ли фрагменты кода ниже эквивалентными? 

promise.then(f1).catch(f2);

promise.then(f1, f2);

// .then передаёт результат или ошибку следующему блоку .then/catch.
// Так как в первом примере в цепочке далее имеется блок catch,
// а во втором – нет, то ошибка в нём останется необработанной.