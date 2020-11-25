import React from "react";

const Filters = (props) => {
  const handleChange = (ev) => {
    ev.preventDefault();
    props.handleFilters({ value: ev.target.value, key: ev.target.id });
  };
  const handleSubmit = (ev) => {
    if (ev.key === "Enter") {
      ev.preventDefault();
    }
  };
  return (
    <section>
      <form className="form" onKeyDown={handleSubmit}>
        <label className="form_label" htmlFor="name">
          Search by name
        </label>
        <input
          className="form_input__text"
          type="name"
          name="name"
          id="name"
          placeholder="Who's your favourite?"
          onChange={handleChange}
        />

        <label className="form_label" htmlFor="species">
          Specie
        </label>
        <select
          className="form_input__text"
          name="species"
          id="species"
          onChange={handleChange}
        >
          <option value="All">All</option>
          <option value="Human">Human</option>
          <option value="Alien">Alien</option>
        </select>
      </form>
    </section>
  );
};

export default Filters;
