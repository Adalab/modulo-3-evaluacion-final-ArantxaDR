import React from "react";
import icon from "../stylesheets/img/zelda.png";
class Footer extends React.Component {
  render() {
    return (
      <footer className="App-footer">
        <small>
          Rick and Morty character's search made with
          <img className="icon" src={icon} alt="Icon" /> &copy; ArantxaDR
        </small>
        <small className="credits">
          Icons made by
          <a
            href="https://www.flaticon.com/authors/vitaly-gorbachev"
            title="Vitaly Gorbachev"
          >
            Vitaly Gorbachev
          </a>
          from
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </small>
      </footer>
    );
  }
}
export default Footer;
