// Функция принимает массив чисел, возвращает новый массив, в котором все четные числа получили +1,
// а нечетные -1. Использовать метод map.

const arrayOfNumbers = (numbers) => {
  if (!Array.isArray(numbers)) return;

  return numbers.map((number) => {
    if (number % 2 === 0) {
      return number + 1;
    }
    return number - 1;
  });
};

console.log(arrayOfNumbers([1, 2, 3, 4, 5]));
