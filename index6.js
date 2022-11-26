// Написать функцию которая принимает в себя строчное значение состоящее из одного слова. В слове могут быть буквы разных 
// регистров. Результатом выполнения данной функции должна быть строка, в которой первая буквы заглавная, а все последующие 
// в нижнем регистре. Если в слове четное количество букв, то и последняя буква должна быть заглавной.


const capitalized = function (word) {
    const firstCapitalLetter = word[0].toUpperCase();
    const isCharsAmountEven = word.length % 2 === 0;
    

    if (isCharsAmountEven) {
        const restWord = word.slice(1, -1).toLowerCase();
        const lastCapitalLetter = word[word.length - 1].toUpperCase();

        return `${firstCapitalLetter}${restWord}${lastCapitalLetter}`
    }

    return `${firstCapitalLetter}${word.slice(1).toLowerCase()}`;
}


console.log(capitalized('name'))
console.log(capitalized('sun'))