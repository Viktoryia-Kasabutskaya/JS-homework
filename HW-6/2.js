const createFakeRequest = (value, delay) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  });
};
const procesRequest = (requestFn, timeout) => {
  const rejection = new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("Request is too slow!"));
    }, timeout);
  });

  return Promise.race([requestFn, rejection])
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error.message);
    });
};
procesRequest(createFakeRequest("Success", 1000), 2000);
