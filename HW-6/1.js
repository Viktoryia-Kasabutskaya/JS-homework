const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

const getPokemons = async () => {
  try {
    const { results } = await fetch(BASE_URL).then((response) =>
      response.json()
    );
    const pokemonDetailRequests = results.map(({ url }) =>
      fetch(url).then((response) => response.json())
    );
    const result = await Promise.all(pokemonDetailRequests);
    console.log(result);
  } catch (error) {}
};

getPokemons();
