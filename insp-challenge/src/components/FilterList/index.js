import React from "react";
import Filter from "src/components/Filter";
import ResetFilter from "src/components/ResetFilter";

export default function FilterList({
  styles,
  handleFilterChange,
  activeFilters,
}) {
  return (
    <div>
      <h2>Styles</h2>
      <ul>
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
