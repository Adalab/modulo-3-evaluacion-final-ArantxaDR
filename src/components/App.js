import "../stylesheets/App.scss";
import Header from "./Header";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import getDataFromApi from "../services/DataFromApi";
import { computeHeadingLevel } from "@testing-library/react";

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

  return (
    <>
      {/* <Header /> */}
      <h1 className="title">Buscador de personajes</h1>
      <main className="main">
        <Filters handleFilters={handleFilters} />
        <CharacterList items={items} />
      </main>
      <Footer />
    </>
  );
};

export default App;
