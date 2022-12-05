// Функция принимает массив букв разных регистров. Результатом функции должен быть новый массив, где 
// буквы которые были в нижнем регистре станут в верхнем, а в верхнем станут в нижнем

// N1
const transformLetters1 = (letters) => {
    if (!Array.isArray(letters)) return;

    const newArray = [];
    for (let i = 0; i < letters.length; i++) {
      const letter = letters[i];

      if (letter === letter.toUpperCase()) {
        newArray.push(letter.toLowerCase());
      } else {
        newArray.push(letter.toUpperCase());
      }
    }

    return newArray;
};
  
console.log(transformLetters1(["a", "B", "c"]));


// N2
const transformLetters2 = (letters) => {
    if (!Array.isArray(letters)) return;

    const newArray = [];
    let i = 0;
    while (i < letters.length) {
      const letter = letters[i];

      if (letter === letter.toUpperCase()) {
        newArray.push(letter.toLowerCase());
      } else {
        newArray.push(letter.toUpperCase());
      }
       i++;
    }
    return newArray;
}

console.log(transformLetters2(["a", "B", "c"]));


// N3
const transformLetters3 = (letters) => {
    if (!Array.isArray(letters)) return;
    
    const newArray = [];
    for (const letter of letters) {

      if (letter === letter.toUpperCase()) {
        newArray.push(letter.toLowerCase());
      } else {
        newArray.push(letter.toUpperCase());
      }
    }

    return newArray;
};
  
console.log(transformLetters3(["a", "B", "c"]));


// N4
const transformLetters4 = (letters) => {
    if (!Array.isArray(letters)) return;
    return letters.map((letter) => {
        if (letter === letter.toUpperCase()) {
            return letter.toLowerCase();
        }

        return letter.toUpperCase();
    }) 
};
  
console.log(transformLetters4(["a", "B", "c"]));