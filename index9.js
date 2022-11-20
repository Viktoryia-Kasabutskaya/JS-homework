// Написать функцию, которая принимает 2 значения. 1 – строка, 2 – число. Если длинна строки, больше чем число функция 
// должна вернуть – ‘String is too long!’ в ином случае вернуть переданную строку. 



const checkStringLength = function (a, b) {
    if (a.length > b) {
        return 'String is too long!'
    } 
    return a
}

console.log(checkStringLength('hello', 3))