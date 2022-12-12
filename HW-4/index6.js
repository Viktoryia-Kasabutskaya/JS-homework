// Написать функция которая принимает строку, и допустимое количество символов. Если длина строки превышает допустимое
// количество символов, функция должна обрезать строку, а в конец  добавить многоточие

const getString = (str, number) => {
    if (str.length <= number) {
      return str;
    }
    return str.slice(0, 3) + "...";
};

console.log(getString('Hello', 3));
console.log(getString('Hello', 5));