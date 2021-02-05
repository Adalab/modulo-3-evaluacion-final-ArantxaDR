const getDataFromApi = () => {
  return fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => {
      return data.results.map((item) => {
        return {
          name: item.name,
          species: item.species,
          status: item.status,
          origin: item.origin.name,
          episodes: item.episode,
          id: item.id,
          photo: item.image,
          location: item.location.name,
        };
      });
    });
};

export default getDataFromApi;
