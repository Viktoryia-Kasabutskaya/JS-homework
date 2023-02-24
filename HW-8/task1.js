// Дан массив купюр со следующим номиналом banknotes = [1, 5, 10, 20, 50, 100, 500];
// Количество банкнот не ограничено
// Функция принимает число (сумму, которую хочет списать пользователь) возвращает массив банкнот с наибольшим номиналом

const BANKNOTES = [1, 5, 10, 20, 50, 100, 500];

const atm = (amount) => {
  const sortedBanknotes = [...BANKNOTES].sort((prev, next) => next - prev);
  const result = [];

  sortedBanknotes.forEach((banknote) => {
    while (amount >= banknote) {
      amount -= banknote;
      result.push(banknote);
    }
  });
  return result;
};

console.log(atm(1385));
