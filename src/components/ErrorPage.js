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
      <div className="container__character--notfound">
        <h2 className="route__character-notfound">
          Watch the show!!!!! That's not a character's name
        </h2>
        <img src={errorImg} alt="no encontrado" />
      </div>
    </>
  );
};

export default ErrorPage;
