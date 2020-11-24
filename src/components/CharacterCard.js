import React from "react";

const CharacterCard = (props) => {
  return (
    <li className="card_item">
      <a href={`#/character/${props.items.id}`} />
      <img
        className="card_item__img"
        src={props.items.photo}
        alt={`${props.items.name} portrait`}
        title={`${props.items.name} portrait`}
      />
      <h1 className="card_item__name">{props.items.name}</h1>
      <p className="card_item__species">{props.items.species}</p>
    </li>
  );
};

export default CharacterCard;
