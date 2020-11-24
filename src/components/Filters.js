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
          Filtrar por nombre
        </label>
        <input
          className="form_input__text"
          type="name"
          name="name"
          id="name"
          placeholder="¿Quién es tu favorito?"
          onChange={handleChange}
        />

        <label className="form_label" htmlFor="species">
          Especie
        </label>
        <select
          className="form_input__text"
          name="species"
          id="species"
          onChange={handleChange}
        >
          <option value="All">Todos</option>
          <option value="Human">Humano</option>
          <option value="Alien">Alien</option>
        </select>
      </form>
    </section>
  );
};

export default Filters;
