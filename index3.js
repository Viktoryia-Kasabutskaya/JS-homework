// Напишите функцию min(a, b), которая возвращает меньшее из чисел a, b.


// вариант 1
const minvalue = function (a, b) {
    return Math.min(a, b);
}

console.log(minvalue(5, 67))


// вариант 2
const minvalue2 = function (a, b) {
    if (a < b) {
        return a
    }
    
    return b
}

console.log(minvalue2(25, 7))