import { string, func, array } from "prop-types";

import style from "../style.module.css";

export default function Filter({ name, handleFilterChange, activeFilters }) {
  let selected = false;
  if (activeFilters.includes(name)) {
    selected = true;
  }
  const handleClick = () => {
    if (!selected) {
      handleFilterChange({
        type: "add",
        filterName: name,
      });
    } else {
      handleFilterChange({
        type: "remove",
        filterName: name,
      });
    }
  };
  return (
    <button
      onClick={handleClick}
      className={`${style.filter} ${selected ? style.selected : ""}`}
    >
      {name}
    </button>
  );
}

Filter.propTypes = {
  handleFilterChange: func.isRequired,
  activeFilters: array.isRequired,
  name: string.isRequired,
};
