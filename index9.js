// Написать функцию, которая принимает 2 значения. 1 – строка, 2 – число. Если длинна строки, больше чем число функция 
// должна вернуть – ‘String is too long!’ в ином случае вернуть переданную строку. 



const checkStringLength = function (stringValue, availableLength) {
    return stringValue.length > availableLength ? 'String is too long!' : stringValue
}

console.log(checkStringLength('hello', 7))