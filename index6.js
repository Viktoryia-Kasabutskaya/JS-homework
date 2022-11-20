// Написать функцию которая принимает в себя строчное значение состоящее из одного слова. В слове могут быть буквы разных 
// регистров. Результатом выполнения данной функции должна быть строка, в которой первая буквы заглавная, а все последующие 
// в нижнем регистре. Если в слове четное количество букв, то и последняя буква должна быть заглавной.


const capitalized = function (stringValue) {
    const firstCapitalLetter = stringValue[0].toUpperCase();
    const restchars = stringValue.slice(1).toLowerCase();

    if (stringValue.length % 2 === 0) {
        const lastCapitalLetter = stringValue[stringValue.length - 1].toUpperCase()
        return firstCapitalLetter + restchars + lastCapitalLetter
    }

    return firstCapitalLetter + restchars;
}
console.log(capitalized('hjgfjdhgx'))