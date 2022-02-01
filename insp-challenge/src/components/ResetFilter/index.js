import React from 'react';

export default function ResetFilter({ name, handleFilterChange, activeFilters }) {
    let selected = false;
    const handleClick = () => {
        handleFilterChange({
            type: "reset",
        })
    }
    if (activeFilters.length === 0) {
        selected = true;
    }
    return (
        <button onClick={handleClick}>{selected ? "*" : ""} {name}</button>
    )
}