// Ваша задача написать игру угадай число.
// Пользовательский ввод реализовать через promt() отображение подсказок через alert()

const LEVELS = {
  1: 15,
  2: 10,
  3: 5,
};

const random = () => Math.ceil(Math.random() * 100);

const pickLevel = (availableLevels) => {
  const pickedLevel = prompt(`Выберите уровень - ${JSON.stringify(LEVELS)}`);
  if (!LEVELS[pickedLevel]) {
    alert("Такого уровня не существует");
    return pickLevel(availableLevels);
  }

  return LEVELS[pickedLevel];
};

const pickPlayersAmount = () => {
  const playersAmount = +prompt("Введите количество игроков");

  if (isNaN(playersAmount)) {
    alert("Введите число!");
    return pickPlayersAmount();
  }

  return playersAmount;
};

const pickPlayerNames = (playersAmount) => {
  const players = [];

  for (let i = 0; i < playersAmount; i++) {
    const playerName = prompt(`Введите имя ${i + 1}-го игрока`);
    players.push(playerName);
  }
  return players;
};

const makeAnAssumption = (player) => {
  const assumption = Number(prompt(`${player}, введите ваш ответ`));

  if (isNaN(assumption)) {
    alert("Введите число!");
    return makeAnAssumption(player);
  }
  return assumption;
};

const GAME = () => {
  const secretNumber = random();
  let triesAmount = pickLevel(LEVELS);
  const playersAmount = pickPlayersAmount();
  const players = pickPlayerNames(playersAmount);

  let turnsCount = 1;

  while (true) {
    for (const player of players) {
      alert(`Ход ${turnsCount}. Очередь ${player}`);

      const assumption = makeAnAssumption(player);

      if (assumption === secretNumber) {
        alert(
          `Игрок ${player} победил! Загаданное число - ${secretNumber}. Количество попыток ${turnsCount}`
        );
        break;
      } else if (assumption > secretNumber) {
        alert("Загаданное число меньше");
      } else {
        alert("Загаданное число больше");
      }
    }

    if (triesAmount === turnsCount) {
      alert("Вы проиграли!");
      break;
    }

    turnsCount++;
  }

  const playAgain = confirm("Сыграть еще раз?");
  if (playAgain) {
    return GAME();
  }
};

GAME();
