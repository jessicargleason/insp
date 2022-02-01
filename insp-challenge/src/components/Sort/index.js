import React from 'react';

export default function Sort({ handleChange, direction }) {
    return (
        <>
            <label for="dateSort">Sort By Date</label>
            <select name="dateSort" onChange={handleChange}>
                <option value="asc" selected={direction === "asc"}>Ascending</option>
                <option value="dsc" selected={direction === "dsc"}>Descending</option>
            </select>
        </>
    )
}