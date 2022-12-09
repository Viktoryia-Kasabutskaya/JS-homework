/*Функция принимает массив пользователей. Исходные данные см. ниже. Возвращает объект, состоящий из двух полей: women и men. 
 Данные поля являются массивами, в которых содержаться пользователи, подходящие по категории gender соответственно. Также, 
 вместо двух полей first_name и last_name у каждого из объектов должнобыть поле fullName в котором будут объеденины убранные 
 поля (first_name и last_name). Количество пользователей может быть не ограничено.*/

const usersArray = [
  {
    id: 1,
    first_name: "Jeanette",
    last_name: "Penddreth",
    email: "jpenddreth0@census.gov",
    gender: "Female",
    ip_address: "26.58.193.2",
  },
  {
    id: 2,
    first_name: "Petr",
    last_name: "Jackson",
    email: "gfrediani1@senate.gov",
    gender: "Male",
    ip_address: "229.179.4.212",
  },
  {
    id: 3,
    first_name: "Anna",
    last_name: "Maria",
    email: "fox@senate.gov",
    gender: "Female",
    ip_address: "26.179.2.22",
  },
  {
    id: 4,
    first_name: "Max",
    last_name: "Jackson",
    email: "htrhr@senate.gov",
    gender: "Male",
    ip_address: "229.34.4.21",
  },
];

const splitByGender = (users) => {
  const WOMEN = "Female";

  return users.reduce(
    (gendersCollection, { first_name, last_name, ...otherInfo }) => {
      const isWomen = otherInfo.gender === WOMEN;
      const gender = isWomen ? "women" : "men";

      const userToPush = {
        fullName: `${first_name} ${last_name}`,
        ...otherInfo,
      };
      gendersCollection[gender].push(userToPush);
      return gendersCollection;
    },
    { men: [], women: [] }
  );
};

console.log(splitByGender(usersArray));
