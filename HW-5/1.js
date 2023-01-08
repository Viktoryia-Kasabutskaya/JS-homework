// Complete the solution so that fanction will break up camel casing, using a space between words
// EX: fn('camelCasing')  'camel Casing'

const camelCasing = (str) => {
  let result = "";
  for (const letter of str) {
    const isBigLetter = letter === letter.toUpperCase();
    if (isBigLetter) {
      result += ` ${letter}`;
    } else {
      result += letter;
    }
  }
  return result;
};

console.log(camelCasing("helloWord"));
