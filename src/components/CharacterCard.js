import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CharacterCard = (props) => {
  return (
    <Link to={`/character/${props.items.id}`}>
      <li className="card_item">
        <img
          className="card_item__img"
          src={props.items.photo}
          alt={`${props.items.name} portrait`}
          title={`${props.items.name} portrait`}
        />
        <h1 className="card_item__name">{props.items.name}</h1>
        <p className="card_item__species">{props.items.species}</p>
      </li>{" "}
    </Link>
  );
};

CharacterCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.string,
  species: PropTypes.string,
};
export default CharacterCard;
