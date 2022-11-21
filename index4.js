// Напишите функцию isEven(n), которая принимает один параметр, число, и возвращает, четное ли оно. Т.е. функция может 
// возвращать два значения: четное или нечетное.

const isEven = function (number) {
    return number % 2 === 0
}

console.log(isEven(37))
console.log(isEven(2))