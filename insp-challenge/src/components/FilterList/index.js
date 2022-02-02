import React from "react";
import { array, func, object } from "prop-types";

import Filter from "src/components/FilterList/Filter";
import ResetFilter from "src/components/FilterList/ResetFilter";

import style from './style.module.css';

export default function FilterList({
  styles,
  handleFilterChange,
  activeFilters,
}) {
  return (
    <div>
      <h2>Filter By Style</h2>
      <ul className={style.list}>
        {Object.keys(styles).map((style, i) => {
          if (styles[style] === "All Vacations") {
            return (
              <li key={i}>
                <ResetFilter
                  handleFilterChange={handleFilterChange}
                  name={styles[style]}
                  activeFilters={activeFilters}
                />
              </li>
            );
          } else {
            return (
              <li key={i}>
                <Filter
                  handleFilterChange={handleFilterChange}
                  name={styles[style]}
                  activeFilters={activeFilters}
                />
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}

FilterList.propTypes = {
    styles: object.isRequired,
    activeFilters: array.isRequired,
    handleFilterChange: func.isRequired,
}