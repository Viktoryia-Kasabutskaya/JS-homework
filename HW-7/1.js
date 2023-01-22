// Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.

const chunk = (list, size) => {
  const copy = [...list];
  const result = [];

  while (copy.length > 0) {
    result.push(copy.splice(0, size));
  }

  return result;
};

console.log(chunk(["a", "b", "c", "d"], 3));
