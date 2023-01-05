// С помощью функции map, reduce, вывести url у которого самая большая площадь
const boxarts = [
  {
    width: 200,
    height: 200,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg",
  },
  {
    width: 150,
    height: 200,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg",
  },
  {
    width: 300,
    height: 200,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg",
  },
  {
    width: 425,
    height: 150,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg",
  },
];

const findMaxSquareUrl = (boxarts) => {
  return boxarts.reduce((currentBoxart, nextBoxart, index) => {
    const { width, height } = currentBoxart;
    const { width: nextBoxartWidth, height: nextBoxartHeight } = nextBoxart;

    const currentSquare = width * height;
    const nextSquare = nextBoxartWidth * nextBoxartHeight;

    return currentSquare > nextSquare ? currentBoxart : nextBoxart;
  }).url;
};

console.log(findMaxSquareUrl(boxarts));
