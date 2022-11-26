// Лизе нужно написать функцию sayHello(name), которая возвращает приветствие для пользователя. Тем не менее, она влюблена в 
// пользователя с именем "Mark", и хотела бы поприветствовать его немного иначе.


const sayHello = function(name) {
    const SPECIAL_NAME = 'mark';
    const isMark = name.toLowerCase() === SPECIAL_NAME;
    const greeting = isMark ? 'Hi' : 'Hello'

    return `${greeting}, ${name}!`
}

console.log(sayHello('MARK'))
console.log(sayHello('Alex'))