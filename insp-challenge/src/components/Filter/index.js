import React from 'react';

export default function Filter({ name, handleFilterChange, activeFilters }) {
    let selected = false;
    if (activeFilters.includes(name)) {
        selected = true;
    }
    const handleClick = () => {
        if (!selected) {
            handleFilterChange({
                type: "add",
                filterName: name
            });
        } else {
            handleFilterChange({
                type: "remove",
                filterName: name
            })
        }
    }
    return (
        <button onClick={handleClick}>{selected ? "*" : ""} {name}</button>
    )
}