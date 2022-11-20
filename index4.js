// Напишите функцию isEven(n), которая принимает один параметр, число, и возвращает, четное ли оно. Т.е. функция может 
// возвращать два значения: четное или нечетное.

const isEven = function (number) {
    if (number % 2 === 0) {
        return true;;
    }
    
    return false
}

console.log(isEven(38))