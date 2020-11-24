import "../stylesheets/App.scss";
import Header from "./Header";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import React from "react";
import Footer from "./Footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        {/* <Header /> */}
        <Filters />
        <CharacterList />
        <Footer />
      </>
    );
  }
}

export default App;
