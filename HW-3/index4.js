// Функция принимает строку и проверяет ее на палиндром. В случае если строка является палиндромом возвращается true иначе
// false.

const isPalindrom = (str) => {
  const word = str.toLowerCase();
  return word === word.split("").reverse().join("");
};

console.log(isPalindrom("АнНа"));
console.log(isPalindrom("кот"));
