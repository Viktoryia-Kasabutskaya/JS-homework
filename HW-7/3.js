// Написать метод, который повторяет логику Object.entries().

const customEntries = (obj) => {
  const result = [];
  for (const key in obj) {
    const chunk = [key, obj[key]];
    result.push(chunk);
  }

  return result;
};

console.log(customEntries({ a: "1", b: "2", c: "3", d: "4" }));
