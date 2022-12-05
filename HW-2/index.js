// Функция принимает 2 аргумента 1 – массив имён, 2 – массив букв;
// Если имя пользователя из первого массива начинается с буквы, которая есть во втором аргументе –
// этот пользователь не должен попасть в массив результата.

// 1
const filterUsers = (users, blackListedLetters) => {
  if (!Array.isArray(users) || !Array.isArray(blackListedLetters)) return;

  const lowerCasedBlackListedLetters = blackListedLetters.map((letter) =>
    letter.toLowerCase()
  );

  return users.filter((userName) => {
    const filterLetter = userName[0].toLowerCase();

    return !lowerCasedBlackListedLetters.includes(filterLetter);
  });
};

console.log(filterUsers(["Alex", "Max", "Lena", "Kate"], ["m", "a"]));

// 2
const filterUsers2 = (users, blackListedLetters) => {
  if (!Array.isArray(users) || !Array.isArray(blackListedLetters)) return;

  const result = [];
  const lowerCasedBlackListedLetters = [];

  for (let i = 0; i < blackListedLetters.length; i++) {
    const letter = blackListedLetters[i].toLowerCase();
    lowerCasedBlackListedLetters.push(letter);
  }

  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    const firstNameLetter = user[0].toLowerCase();

    if (!lowerCasedBlackListedLetters.includes(firstNameLetter)) {
      result.push(user);
    }
  }
  return result;
};

console.log(filterUsers2(["Alex", "Max", "Lena", "Kate"], ["m", "a"]));

// 3
const filterUsers3 = (users, blackListedLetters) => {
  if (!Array.isArray(users) || !Array.isArray(blackListedLetters)) return;

  const result = [];
  const lowerCasedBlackListedLetters = [];

  let i = 0;
  while (i < blackListedLetters.length) {
    const letter = blackListedLetters[i].toLowerCase();
    lowerCasedBlackListedLetters.push(letter);
    i++;
  }

  let j = 0;
  while (j < users.length) {
    const user = users[j];
    const firstNameLetter = user[0].toLowerCase();

    if (!lowerCasedBlackListedLetters.includes(firstNameLetter)) {
      result.push(user);
    }
    j++;
  }

  return result;
};

console.log(filterUsers3(["Alex", "Max", "Lena", "Kate"], ["m", "a"]));

// 4
const filterUsers4 = (users, blackListedLetters) => {
  if (!Array.isArray(users) || !Array.isArray(blackListedLetters)) return;

  const result = [];
  const lowerCasedBlackListedLetters = [];

  for (const letter of blackListedLetters) {
    lowerCasedBlackListedLetters.push(letter.toLowerCase());
  }

  for (const user of users) {
    const firstNameLetter = user[0].toLowerCase();

    if (!lowerCasedBlackListedLetters.includes(firstNameLetter)) {
      result.push(user);
    }
  }
  return result;
};

console.log(filterUsers4(["Alex", "max", "Lena", "Kate"], ["m", "a"]));
