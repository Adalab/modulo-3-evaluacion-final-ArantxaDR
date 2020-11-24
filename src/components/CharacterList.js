import React from "react";
import CharacterCard from "./CharacterCard";

const CharacterList = (props) => {
  const itemsElements = props.items.map((items) => {
    return <CharacterCard key={items.id} items={items} />;
  });

  return (
    <section>
      <ul className="card">{itemsElements}</ul>
    </section>
  );
};

export default CharacterList;
