//Написать функцию, которая склеивает 2 строки друг с другом. Имейте ввиду, между ними должен быть пробел.


const concatenateFunction = function (firstString, secondString) {
    return (`${firstString} ${secondString}`);

}

console.log(concatenateFunction('hello', 'world'))