// Функция принимает массив объектов пользователей первым параметром, вторым параметром принимает массив строк (id). Функция
// должна удалить всех пользователей, чьи id будут найдены в массиве id, которые передаются нашей функции вторым параметром и
// вернуть массив, с оставшимися пользователями.

const users = [
  {
    id: 1,
    name: "Alex",
  },
  {
    id: 2,
    name: "Tomara",
  },
  {
    id: 3,
    name: "Max",
  },
];

const filterUsers = (users, blackListeds) => {
  return users.filter(({ id }) => !blackListeds.includes(id));
};

console.log(filterUsers(users, [2, 3]));
