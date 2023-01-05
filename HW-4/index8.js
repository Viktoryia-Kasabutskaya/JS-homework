// Написать свою реализацию метода массива filter (myFilter) которая работает точно так же как существующая. ВСЕ массивы
// должны иметь этот метод. Примеры ниже.
const numbers = [1, 2, 3];
// const result1 = numbers.myFilter((number) => number > 2); // [3]
// const result2 = numbers.myFilter((number) => number % 2 === 0); // [2]


Array.prototype.customFilter = function(callback){
    const result = [];
    for(let i = 0; i < this.length; i++){
       const el = this[i];
       if(callback(el, i)){
          result.push(el);
       };
    };
    return result;
};


const result3 = numbers.customFilter((number) => number > 2);
console.log(result3);

const result4 = numbers.customFilter((number) => number % 2 === 0);
console.log(result4);