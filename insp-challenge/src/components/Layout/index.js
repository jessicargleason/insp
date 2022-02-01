import React, { useEffect, useState, useReducer } from "react";
import Grid from "src/components/Grid";
import Filter from "src/components/FilterList";
import Sort from "src/components/Sort";

export default function Layout() {
  const { tripSet, styles } = require("src/trips.json");
  let sortedLocations = tripSet;
  const [selectedLocations, setSelectedLocations] = useState(tripSet);
  const updateFilters = (currentFilters, action) => {
    let updatedFilters;
    switch (action.type) {
      case "add":
        updatedFilters = [...currentFilters];
        updatedFilters.push(action.filterName);
        break;
      case "remove":
        const filterIndex = currentFilters.indexOf(action.filterName);
        updatedFilters = [...currentFilters];
        if (filterIndex !== -1) {
          updatedFilters = currentFilters.splice(filterIndex, 1);
        }
        break;
      case "reset":
        updatedFilters = [];
        break;
      default:
        throw new Error();
    }
    return updatedFilters;
  };
  const [activeFilters, setActiveFilters] = useReducer(updateFilters, []);
  const [direction, setDirection] = useState("asc");

  if (direction === "dsc") {
    sortedLocations = tripSet.sort(
      (first, second) =>
        new Date(second.checkInDate) - new Date(first.checkInDate)
    );
  } else if (direction === "asc") {
    sortedLocations = tripSet.sort(
      (first, second) =>
        new Date(first.checkInDate) - new Date(second.checkInDate)
    );
  }

  const handleSort = event => {
    setDirection(event.target.value);
  }

  useEffect(() => {
    let filteredTrips;
    //if no filters are selected, show everything
    if (activeFilters.length > 0) {
      filteredTrips = sortedLocations.filter((item) =>
        activeFilters.includes(item.unitStyleName)
      );
    } else {
      filteredTrips = sortedLocations;
    }
    setSelectedLocations(filteredTrips);
  }, [activeFilters, sortedLocations, direction]);

  return (
    <main>
      <h1>Locations</h1>
      <Sort handleChange={handleSort} direction={direction} />
      <Filter
        styles={styles}
        handleFilterChange={setActiveFilters}
        activeFilters={activeFilters}
      />
      <Grid locations={selectedLocations} />
    </main>
  );
}
