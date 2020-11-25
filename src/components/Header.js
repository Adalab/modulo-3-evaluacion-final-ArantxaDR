import React from "react";
import headerImg from "../stylesheets/img/R&M-logo.png";

class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <img src={headerImg} alt="Rick and Morty" />{" "}
        <h1 className="title">Take a look </h1>
      </header>
    );
  }
}
export default Header;
