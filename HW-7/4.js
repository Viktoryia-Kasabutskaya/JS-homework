// Написать метод, который повторяет логику Object.fromEntries().

const customFromEntries = (arrayEntries) => {
  return arrayEntries.reduce((result, [key, value]) => {
    result[key] = value;
    return result;
  }, {});
};

console.log(
  customFromEntries([
    ["a", 1],
    ["b", 2],
  ])
);
