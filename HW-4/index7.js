//	Написать свою реализацию метода массива map (myMap) которая работает точно так же как существующая. ВСЕ массивы должны
// иметь этот метод. Примеры ниже.


Array.prototype.myMap = function (arr, mapFunc) {
    const mapArr = [];                         
    
    for (let i = 0; i < arr.length; i++) {   
        const result = mapFunc(arr[i], i, arr);
        mapArr.push(result);       
    }
    return mapArr;                        
};

const numbers = [1, 2, 3];

const result1 = numbers.myMap(numbers, number => number * 2);
console.log(result1);

const result2 = numbers.myMap(numbers, number => String(number));
console.log(result2);
