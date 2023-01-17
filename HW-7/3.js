// Написать метод, который повторяет логику Object.entries().

Object.myOwnEntries = (obj) => {
  let objKeys = Object.keys(obj);
  let i = objKeys.length;
  let resArray = [];
  while (i > 0) {
    i--;
    resArray[i] = [objKeys[i], obj[objKeys[i]]];
  }

  return resArray;
};

console.log(Object.myOwnEntries({ a: "1", b: "2", c: "3", d: "4" }));
