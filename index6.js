// Написать функцию которая принимает в себя строчное значение состоящее из одного слова. В слове могут быть буквы разных 
// регистров. Результатом выполнения данной функции должна быть строка, в которой первая буквы заглавная, а все последующие 
// в нижнем регистре. Если в слове четное количество букв, то и последняя буква должна быть заглавной.


// const capitalized = function (stringValue) {
//     const firstCapitalLetter = stringValue[0].toUpperCase();
//     const restChars = stringValue.slice(1).toLowerCase();

//     if (stringValue.length % 2 === 0) {
//         const lastCapitalLetter = stringValue[stringValue.length - 1].toUpperCase()
//         return firstCapitalLetter + restChars + lastCapitalLetter
//     }

//     return firstCapitalLetter + restChars;
// }

const capitalized = function (stringValue) {
    if (stringValue.length % 2 === 0) {
        return stringValue[0].toUpperCase() + 
               stringValue.slice(1, stringValue.length - 1).toLowerCase() + 
               stringValue[stringValue.length - 1].toUpperCase();
    }

    return stringValue[0].toUpperCase() + stringValue.slice(1).toLowerCase();
}


console.log(capitalized('name'))
console.log(capitalized('sun'))