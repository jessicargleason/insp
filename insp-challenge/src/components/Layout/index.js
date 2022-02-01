import React, { useEffect, useState, useReducer } from 'react';
import Grid from 'src/components/Grid';
import Filter from 'src/components/FilterList';

export default function Layout() {
    const { tripSet, styles } = require('src/trips.json');
    const [selectedLocations, setSelectedLocations] = useState(tripSet);
    const updateFilters = (currentFilters, action) => {
        let updatedFilters;
        switch(action.type) {
            case 'add':
                updatedFilters = [...currentFilters];
                updatedFilters.push(action.filterName);
                break;
            case 'remove':
                const filterIndex = currentFilters.indexOf(action.filterName);
                updatedFilters = [...currentFilters];
                if (filterIndex !== -1) {
                    updatedFilters = currentFilters.splice(filterIndex, 1);
                }
                break;
            case 'reset':
                updatedFilters = [];
                break;
            default: 
                throw new Error();
        }
        return updatedFilters;
    }
    const [activeFilters, setActiveFilters] = useReducer(updateFilters, []);

    useEffect(() => {
        let filteredTrips;
        //if no filters are selected, show everything
        if (activeFilters.length > 0) {
            filteredTrips = tripSet.filter(item => activeFilters.includes(item.unitStyleName));
        } else {
            filteredTrips = tripSet;
        }
        setSelectedLocations(filteredTrips);
    }, [activeFilters, tripSet])

    return (
        <main>
            <h1>Locations</h1>
            <Filter styles={styles} handleFilterChange={setActiveFilters} activeFilters={activeFilters} />
            <Grid locations={selectedLocations} />
        </main>
    )
}