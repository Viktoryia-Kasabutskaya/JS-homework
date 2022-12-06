// Функция принимает массив слов,возвращает новый массив слов, у которых первая буква большая, остальные маленькие.
// Чем-то очень похоже на функцию, которую мы писали для одного слова.

const arrayOfWords = (letters) => {
  if (!Array.isArray(letters)) return;

  return letters.map(
    (letter) => letter[0].toUpperCase() + letter.slice(1).toLowerCase()
  );
};

console.log(arrayOfWords(["hello", "world", "SUN"]));
