import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import gunPortal from "../stylesheets/img/gunportal.png";

const CharacterDetail = (props) => {
  if (props.item === undefined) {
    return <h1>No existe el ser sideral que estás buscando</h1>;
  } else {
    console.log(props.item);
    return (
      <>
        <Link to="/" className="home_link" title="Home l">
          <img className="home_link__img" src={gunPortal} alt="Gunportal" />
          <p className="home_link__text">Home </p>
        </Link>
        <div className="card_detail__container">
          <img src={props.item.photo} alt={props.item.name} />
          <div className="card_text">
            <div className="card_title">
              <h2>{props.name}</h2>
            </div>
            <ul className="card_detail__list">
              <li>{`Status: ${props.item.status}`}</li>
              <i class="fas fa-skull"></i>
              <i class="fas fa-heartbeat"></i>
              <li>{`Specie: ${props.item.species}`}</li>
              <i class="fas fa-user"></i>
              <i class="fas fa-rocket"></i>
              <li>{`Origin: ${props.item.origin}`}</li>
              <li>{`Episodes Nº: ${parseInt(props.item.episodes.lenght)}`}</li>
            </ul>
          </div>
        </div>
      </>
    );
  }
};

CharacterDetail.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.string,
  species: PropTypes.string,
  status: PropTypes.string,
  origin: PropTypes.string,
  episodes: PropTypes.number,
};

export default CharacterDetail;
