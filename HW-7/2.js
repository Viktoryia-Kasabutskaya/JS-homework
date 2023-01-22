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

    const UserIdPostsMap = new Map();

    posts.forEach((post) => {
      if (!UserIdPostsMap.has(post.userId)) {
        UserIdPostsMap.set(post.userId, []);
      }

      UserIdPostsMap.get(post.userId).push(post);
    }, {});

    const usersPosts = users.map((user) => {
      return {
        ...user,
        myPosts: UserIdPostsMap.get(user.id),
      };
    });

    return console.log(usersPosts);
  } catch (error) {}
};

getUsersPosts();
