// Функция принимает массив чисел, а возвращает чсло которое встречается лишь 1 раз.

const findNumber = (numbers) => {
    return numbers.find(
      (number) => numbers.indexOf(number) === numbers.lastIndexOf(number)
    );
};

console.log(findNumber([1, 2, 2, 3, 4, 3, 4]));