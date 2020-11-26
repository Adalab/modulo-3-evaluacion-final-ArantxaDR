import React from "react";

const Location = (props) => {
  console.log(props);
  const handleChange = (ev) => {
    ev.preventDefault();
    props.handleFilters({ value: ev.target.value, key: ev.target.id });
  };
  return (
    <>
      <label className="form_label" htmlFor="location">
        Search by location
      </label>
      <input
        type="text"
        name="location"
        id="location"
        onChange={handleChange}
        placeholder="Location"
      ></input>
    </>
  );
};

export default Location;
