import React from "react";

const CharacterList = () => {
  return (
    <section>
      <ul className="card">
        <li className="card_item">
          <img className="card_item__img" alt="Character portrait"></img>
          <h1 className="card_item__name">Personaje</h1>
          <p className="card_item__species">Especie</p>
        </li>
      </ul>
    </section>
  );
};

export default CharacterList;
