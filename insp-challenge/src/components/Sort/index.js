import React from "react";

import style from "./style.module.css";

export default function Sort({ handleChange, direction }) {
  return (
    <>
      <label htmlFor="dateSort" className={style.label}>
        Sort By Date
      </label>
      <select name="dateSort" onChange={handleChange} value={direction}>
        <option value="asc">Ascending</option>
        <option value="dsc">Descending</option>
      </select>
    </>
  );
}
