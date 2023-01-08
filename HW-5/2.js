// An Arithmetic Progression is defined as one in which there is a constant difference between the consecutive terms of a
// given series of numbers. You are provided with consecutive elements of an Arithmetic Progression. There is however one
// hitch: exactly one term from the original series is missing from the set of numbers which have been given to you. The rest
// of the given series is the same as the original AP. Find the missing term.
// You have to write a function that receives a list, list size will always be at least 3 numbers. The missing term will
// never be the first or last one.
// findMissing([1, 3, 5, 9, 11]) // 7

// v1
const findMissingNumber = (arithmeticProgression) => {
  const firstItemOfProgression = arithmeticProgression[0];
  const lastItemOfProgression = arithmeticProgression.at(-1);
  const itemQuality = arithmeticProgression.length;

  const step = (lastItemOfProgression - firstItemOfProgression) / itemQuality;

  for (let i = 0; i < itemQuality; i++) {
    if (arithmeticProgression[i] + step !== arithmeticProgression[i + 1]) {
      return arithmeticProgression[i] + step;
    }
  }
};
console.log(findMissingNumber([1, 3, 7, 9]));

// v2
const findMissingNumber2 = (numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];
    const nextNumber = numbers[i + 1];
    const numberafterNextNumber = numbers[i + 2];

    const currentDifference = nextNumber - currentNumber;
    const nextDifference = numberafterNextNumber - nextNumber;
    if (currentDifference !== nextDifference) {
      return currentNumber + nextDifference;
    }
  }
};
console.log(findMissingNumber2([1, 3, 5, 9, 11]));
