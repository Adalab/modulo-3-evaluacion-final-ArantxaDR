import "../stylesheets/App.scss";
import Header from "./Header";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import getDataFromApi from "../services/DataFromApi";

const App = () => {
  const [items, setItems] = useState([]);
  const [nameFilter, setNameFilter] = useState("");
  const [speciesFilter, setSpeciesFilter] = useState("All");
  useEffect(() => {
    getDataFromApi().then((data) => setItems(data));
  }, []);

  const handleFilters = (data) => {
    if (data.key === "name") {
      setNameFilter(data.value);
    } else if (data.key === "species") {
      setSpeciesFilter(data.value);
    }
  };
  const filteredCharacters = items
    .filter((item) => {
      return item.name.toUpperCase().includes(nameFilter.toUpperCase());
    })
    .filter((item) => {
      return speciesFilter === "All" ? true : item.species === speciesFilter;
    });
  return (
    <>
      {/* <Header /> */}
      <h1 className="title">Buscador de personajes</h1>
      <main className="main">
        <Filters handleFilters={handleFilters} />
        <CharacterList items={filteredCharacters} />
      </main>
      <Footer />
    </>
  );
};

export default App;
