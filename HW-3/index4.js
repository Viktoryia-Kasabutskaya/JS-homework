// Функция принимает строку и проверяет ее на палиндром. В случае если строка является палиндромом возвращается true иначе
// false.

const isPalindrom = (str) => {
  const word = str.toLowerCase();
  if (word === word.split("").reverse().join("")) {
    return true;
  }
  return false;
};

console.log(isPalindrom("Анна"));
console.log(isPalindrom("кот"));
