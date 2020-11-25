import React from "react";
import errorImg from "../stylesheets/img/error-R&M.jpg";
import { Link } from "react-router-dom";
import gunPortal from "../stylesheets/img/gunportal.png";

const ErrorPage = () => {
  return (
    <>
      <Link to="/" className="home_link" title="Home l">
        <img className="home_link__img" src={gunPortal} alt="Gunportal" />
        <p className="home_link__text">Home </p>
      </Link>
      <div className="container_character__notfound">
        <h2 className="title_character__notfound">
          Watch the show!!!!! That's not a character's name
        </h2>
        <img className="img_notfound" src={errorImg} alt="Not found" />
      </div>
    </>
  );
};

export default ErrorPage;
