import React from "react";
import CharacterCard from "./CharacterCard";
import PropTypes from "prop-types";
import ErrorPage from "./ErrorPage";

const CharacterList = (props) => {
  const itemsElements = props.items.map((items) => {
    return <CharacterCard key={items.id} items={items} />;
  });

  return (
    <section>
      {itemsElements.length === 0 ? (
        <ErrorPage />
      ) : (
        <ul className="card">{itemsElements}</ul>
      )}
    </section>
  );
};

CharacterList.propTypes = {
  characters: PropTypes.array,
};

export default CharacterList;
