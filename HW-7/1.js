// Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.

const chunk = (arr, n) => {
  const result = [];

  while (arr.length > 0) {
    result.push(arr.splice(0, n));
  }

  return result;
};

console.log(chunk(["a", "b", "c", "d"], 3));
