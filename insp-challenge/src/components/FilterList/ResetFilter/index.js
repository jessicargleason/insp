import { string, func, array } from "prop-types";

import style from "../style.module.css";

export default function ResetFilter({
  name,
  handleFilterChange,
  activeFilters,
}) {
  let selected = false;
  const handleClick = () => {
    handleFilterChange({
      type: "reset",
    });
  };
  if (activeFilters.length === 0) {
    selected = true;
  }
  return (
    <button
      onClick={handleClick}
      className={`${style.filter} ${selected ? style.selected : ""}`}
      aria-pressed={selected}
    >
      {name}
    </button>
  );
}

ResetFilter.propTypes = {
  handleFilterChange: func.isRequired,
  activeFilters: array.isRequired,
  name: string.isRequired,
};
