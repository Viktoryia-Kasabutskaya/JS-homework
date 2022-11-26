//У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4). Найдите гипотенузу k по теореме.


const calculateHypotenuse = function (n, m) {
    return Math.sqrt(n**2 + m**2);

}

console.log(calculateCathet(3, 4));