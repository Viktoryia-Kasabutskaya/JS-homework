// Функция принимает объект с неограниченным количеством полей. Результатом выполнения функции должен быть объект, в котором
// были отсеяны поля со значениями null или undefined

const filterNullUndefined = (data) => {
    const arrayOfData = Object.entries(data);
    // console.log(arrayOfData);
    return arrayOfData.reduce((result, [key, value]) => {
      if (value !== undefined && value !== null) {
        result[key] = value;
      }
      return result;
    }, {});
};

console.log(filterNullUndefined({a: 1, b: 'Hello', c: null, z: undefined}));