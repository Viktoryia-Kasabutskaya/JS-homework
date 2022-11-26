// Ваша цель - создать функцию deleteCharts(str), которая удаляет первый и последний символы строки, которая передается в 
// параметр, и возвращает новую строку без этих символов.

const deleteCharts = function (str) {
    return str.slice(1, -1)
}

console.log(deleteCharts('hello'))
