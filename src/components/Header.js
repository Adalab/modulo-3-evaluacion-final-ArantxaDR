import React from "react";
import headerImg from "../stylesheets/img/R&M-logo.png";

class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <img src={headerImg} alt="Catch them all" />
      </header>
    );
  }
}
export default Header;
