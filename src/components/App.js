import "../stylesheets/App.scss";
import Header from "./Header";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import getDataFromApi from "../services/DatafromApi";
import { Route, Switch } from "react-router-dom";

const App = () => {
  const [items, setItems] = useState([]);
  const [nameFilter, setNameFilter] = useState("");
  const [speciesFilter, setSpeciesFilter] = useState("All");
  const [locationFilter, setLocationFilter] = useState("");
  useEffect(() => {
    getDataFromApi().then((data) => setItems(data));
  }, []);

  const handleFilters = (data) => {
    if (data.key === "name") {
      setNameFilter(data.value);
    } else if (data.key === "species") {
      setSpeciesFilter(data.value);
    } else if (data.key === "location") {
      setLocationFilter(data.value);
      console.log(data);
    }
  };
  const filteredCharacters = items
    .filter((item) => {
      return item.name.toUpperCase().includes(nameFilter.toUpperCase());
    })
    .filter((item) => {
      return speciesFilter === "All" ? true : item.species === speciesFilter;
    })
    .filter((item) => {
      return item.location.toUpperCase().includes(locationFilter.toUpperCase());
    });

  const renderCharacterDetail = (props) => {
    const itemId = parseInt(props.match.params.id);

    const findCharacter = items.find((item) => {
      return item.id === itemId;
    });

    return <CharacterDetail item={findCharacter} />;
  };

  return (
    <>
      <Header />

      <main className="main">
        <Route exact path="/">
          <Filters handleFilters={handleFilters} />
          <CharacterList items={filteredCharacters} />
        </Route>
        <Switch>
          <Route path="/character/:id" render={renderCharacterDetail} />
        </Switch>
      </main>
      <Footer />
    </>
  );
};

export default App;
