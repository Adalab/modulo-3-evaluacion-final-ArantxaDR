import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CharacterDetail = (props) => {
  console.log(props.item);
  return (
    <>
      <Link to="/" className="home_link" title="Home l">
        <p className="home_link__text">Home </p>
      </Link>
      <div className="card_detail__container">
        <img src={props.item.photo} alt={props.item.name} />
        <div className="card_text">
          <div className="card_title">
            <h2>{props.name}</h2>
          </div>
          <ul>
            <li>{`Status: ${props.item.status}`}</li>
            <li>{`Specie: ${props.item.species}`}</li>
            <li>{`Origin: ${props.item.origin}`}</li>
            <li>{`Episodes Nº: ${parseInt(props.item.episodes.lenght)}`}</li>
          </ul>
        </div>
      </div>
    </>
  );
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
