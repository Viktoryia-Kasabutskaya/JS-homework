// Для задания вам понадобиться вот этот сайт https://jsonplaceholder.typicode.com/. Вам потребуется сделать 2 запроса на
// данные эндпоинты.

const getUsersPosts = async () => {
  try {
    const [users, posts] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users").then((responce) =>
        responce.json()
      ),
      fetch("https://jsonplaceholder.typicode.com/posts").then((responce) =>
        responce.json()
      ),
    ]);

    const postsId = posts.reduce((result, { userId, title }) => {
      if (!result[userId]) {
        result[userId] = [];
      }

      result[userId].push(title);
      return result;
    }, {});

    const usersPosts = users.map((user) => {
      return {
        ...user,
        myPosts: postsId[user.id],
      };
    });

    return console.log(usersPosts);
  } catch (error) {}
};

getUsersPosts();
