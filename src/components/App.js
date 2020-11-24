import "../stylesheets/App.scss";
import Header from "./Header";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import React, { useEffect } from "react";
import Footer from "./Footer";

const App = () => {
  useEffect(() => {
    console.log("me estoy montando");
  });
  return (
    <>
      {/* <Header /> */}
      <h1 className="title">Buscador de personajes</h1>
      <main className="main">
        <Filters />
        <CharacterList />
      </main>
      <Footer />
    </>
  );
};

export default App;
