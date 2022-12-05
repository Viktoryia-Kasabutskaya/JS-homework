// Функция принимает, массив строчных и числовых значений. Функция должна вернуть новый массив состоящий только из строк,
// количество символов которых чётное.

const dummyData = [1, "adh", "Hi", "JS", "lol", 25];

// 1
const filterEvenStrings = (data) => {
  if (!Array.isArray(data)) return;

  return dummyData.filter((item) => {
    const isString = typeof item === "string";

    return isString && item.length % 2 === 0;
  });
};

console.log(filterEvenStrings(dummyData));

// 2
const filterEvenStrings2 = (data) => {
  if (!Array.isArray(data)) return;

  const result = [];

  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    const isString = typeof item === "string";

    if (isString && item.length % 2 === 0) {
      result.push(item);
    }
  }
  return result;
};

console.log(filterEvenStrings2(dummyData));

// 3
const filterEvenStrings3 = (data) => {
  if (!Array.isArray(data)) return;

  const result = [];

  let i = 0;
  while (i < data.length) {
    const item = data[i];
    const isString = typeof item === "string";

    if (isString && item.length % 2 === 0) {
      result.push(item);
    }
    i++;
  }
  return result;
};

console.log(filterEvenStrings3(dummyData));

// 4;
const filterEvenStrings4 = (data) => {
  if (!Array.isArray(data)) return;

  const result = [];

  for (const item of data) {
    const isString = typeof item === "string";

    if (isString && item.length % 2 === 0) {
      result.push(item);
    }
  }
  return result;
};

console.log(filterEvenStrings4(dummyData));
