import React from "react";
import errorImg from "../stylesheets/img/error-R&M.jpg";

const ErrorPage = () => {
  return (
    <>
      <div className="container_character__notfound">
        <h2 className="title_character__notfound">
          Watch the show! That's not a character's name{" "}
        </h2>

        <h3 className="title_character__tryagain">Try a new search</h3>
        <img className="img_notfound" src={errorImg} alt="Not found" />
      </div>
    </>
  );
};

export default ErrorPage;
