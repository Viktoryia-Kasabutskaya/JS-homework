// Напишите функцию min(a, b), которая возвращает меньшее из чисел a, b.


// вариант 1
const minvalue = function (a, b) {
    if (a === b) {
        return 'Numbers are equal'
    }

    return Math.min(a, b);
}

console.log(minvalue(5, 5))