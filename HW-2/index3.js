// Функция принимает массив чисел. Возвращает массив строк такого вида:
// fn([3,4,6]); 
// ['Value: 3; Index: 0; Squared: 9','Value: 4; Index: 1; Squared: 16','Value: 6; Index: 2; Squared: 36']

// 1
const squareNumbers = (numbers) => {
    if (!Array.isArray(numbers)) return;

    return numbers.map((number, index) => 
        `Value: ${number}; Index: ${index}, Squared: ${number**2}`
    )
}

console.log(squareNumbers([3,4,6]));


// 2
const squareNumbers2 = (numbers) => {
    if (!Array.isArray(numbers)) return;

    const result = [];

    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];

        const detailedString = `Value: ${number}; Index: ${i}; Squared: ${number ** 2}`;
        result.push(detailedString);
    }
    return result;
}

console.log(squareNumbers2([3,4,6]));


// 3
const squareNumbers3 = (numbers) => {
    if (!Array.isArray(numbers)) return;

    const result = [];

    let i = 0;
    while (i < numbers.length) {
        const number = numbers[i];

        const detailedString = `Value: ${number}; Index: ${i}; Squared: ${number ** 2}`;
        result.push(detailedString);
        i++;
    }
    return result;
}

console.log(squareNumbers3([3,4,6]));


// 4
const squareNumbers4 = (numbers) => {
    if (!Array.isArray(numbers)) return;

    const result = [];

    let index = 0;
    for (const number of numbers) {
        const detailedString = `Value: ${number}; Index: ${index}; Squared: ${number ** 2}`;
        result.push(detailedString);
        index++;
    }
    return result;
}

console.log(squareNumbers4([3,4,6]));