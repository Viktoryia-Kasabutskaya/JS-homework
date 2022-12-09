// Функция принимает массив чисел, возвращает новый массив, в котором все четные числа получили +1,
// а нечетные -1. Использовать метод map.

const arrayOfNumbers = (numbers) => {
  if (!Array.isArray(numbers)) return;

  return numbers.map((number) => (number % 2 === 0 ? number + 1 : number - 1));
};

console.log(arrayOfNumbers([1, 2, 3, 4, 5]));
