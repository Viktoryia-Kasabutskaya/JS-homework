// factorial

//1
const factorialize = (number) => {
  if (number === 0) return;
  let result = 1;

  for (let i = 1; i <= number; i++) {
    result *= i;
  }
  return result;
};

console.log(factorialize(5));

//2
const factorialize2 = (num) => {
  if (num === 0) return 1;

  return num * factorialize2(num - 1);
};
console.log(factorialize2(5));
