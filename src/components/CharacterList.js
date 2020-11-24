import React from "react";
import CharacterCard from "./CharacterCard";
import PropTypes from "prop-types";

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

CharacterList.propTypes = {
  characters: PropTypes.array,
};

export default CharacterList;
