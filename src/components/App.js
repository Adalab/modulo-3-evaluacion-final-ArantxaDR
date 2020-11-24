import "../stylesheets/App.scss";
import Header from "./Header";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import getDataFromApi from "../services/DataFromApi";

const App = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    getDataFromApi().then((data) => setItems(data));
  }, []);
  return (
    <>
      {/* <Header /> */}
      <h1 className="title">Buscador de personajes</h1>
      <main className="main">
        <Filters />
        <CharacterList items={items} />
      </main>
      <Footer />
    </>
  );
};

export default App;
