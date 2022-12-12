const videos = [
  {
    id: 65432445,
    title: "The Chamber",
  },
  {
    id: 675465,
    title: "Fracture",
  },
  {
    id: 70111470,
    title: "Die Hard",
  },
  {
    id: 654356453,
    title: "Bad Boys",
  },
];

const createIdTitle = (videos) => {
  return videos.reduce((result, { id, title }) => {
    result[id] = title;
    return result;
  }, {});
};

console.log(createIdTitle(videos));
