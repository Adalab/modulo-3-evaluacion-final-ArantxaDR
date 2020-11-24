import React from "react";

const name = () => {
  return (
    <section>
      <form>
        <label className="form_label" htmlFor="name">
          Filtrar por nombre
        </label>
        <input className="form_input__text" type="name" name="name" id="name" />

        <label className="form_label" htmlFor="species">
          Especie
        </label>
        <select className="form_input__text" name="species" id="species">
          <option value="">Humano</option>
          <option value="">Alien</option>
        </select>
      </form>
    </section>
  );
};

export default name;
