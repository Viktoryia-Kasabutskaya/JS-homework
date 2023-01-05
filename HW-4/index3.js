//	Функция принимает массив чисел. Функция должна вернуть число, которое встречается больше всего раз.

const findMostFrequent = (numbers) => {
  const meetingsCountMap = numbers.reduce((countMap, number) => {
    if (!countMap.hasOwnProperty(number)) {
      countMap[number] = 1;
    } else {
      countMap[number] += 1;
    }

    return countMap;
  }, {});

  const entries = Object.entries(meetingsCountMap);

  const [key] = entries.reduce((result, currentSubArray, index) => {
    const [resultKey, resultValue] = result;
    const [currentKey, currentValue] = currentSubArray;

    if (resultValue === currentValue) {
      return +resultKey > +currentKey ? result : currentSubArray;
    }

    return resultValue > currentValue ? result : currentSubArray;
  });

  return Number(key);
};

console.log(findMostFrequent([1, 1, 2, 3]));