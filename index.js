// Лизе нужно написать функцию sayHello(name), которая возвращает приветствие для пользователя. Тем не менее, она влюблена в 
// пользователя с именем "Mark", и хотела бы поприветствовать его немного иначе.


const sayHello = function(name) {
    if (name === 'Mark') {
        return ( `Hi, ${name}` );
    }

    return ( `Hello, ${name}` );
}

console.log(sayHello('Alex'))