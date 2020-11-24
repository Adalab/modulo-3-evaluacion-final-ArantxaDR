const getDataFromApi = () => {
  return fetch(
    "//raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json"
  )
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
        };
      });
    });
};

export default getDataFromApi;
