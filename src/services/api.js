const getDataFromApi = () => {
  return fetch('https://rickandmortyapi.com/api/character/?page=1')
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.results.map((user) => {
        return {
          name: user.name,
          id: user.id,
          image: user.image,
          species: user.species,
          status: user.status,
          origin: user.origin.name,
          episodes: user.episode,
        };
      });

      return cleanData;
    });
};

export default getDataFromApi;
