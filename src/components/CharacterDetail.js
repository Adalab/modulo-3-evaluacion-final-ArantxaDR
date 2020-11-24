import React from "react";

const CharacterDetail = (props) => {
  return (
    <div className="card_detail__container">
      <img
        src={props.items.photo}
        alt={`${props.items.name} portrait`}
        title={`${props.items.name} portrait`}
      />
      <div className="card_text">
        <div className="card_title">
          <h2>{props.items.name}</h2>
        </div>
        <ul>
          <li>{`Estado: ${props.items.status}`}</li>
          <li>{`Especie: ${props.items.species}`}</li>
          <li>{`Planeta de origen: ${props.items.origin}`}</li>
          <li>{`Nº de episodios: ${props.items.episodes}`}</li>
        </ul>
      </div>
    </div>
  );
};

export default CharacterDetail;
