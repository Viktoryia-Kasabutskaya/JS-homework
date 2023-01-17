// Написать метод, который повторяет логику Object.fromEntries().

let myEntries = [
  ["fruit", "apple"],
  ["drink", "coffee"],
];
const obj = {};
myEntries.forEach((a) => (obj[a[0]] = a[1]));

console.log(obj);
