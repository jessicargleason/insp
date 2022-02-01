import React, { useEffect, useState } from 'react';
import Grid from 'src/components/Grid';
import Filter from 'src/components/Filter';

export default function Layout() {
    const { tripSet, styles } = require('src/trips.json');
    const [selectedLocations, setSelectedLocations] = useState(tripSet);
    const [activeFilters, setActiveFilters] = useState(["Mountain"]);

    const filteredTrips = tripSet.filter(item => activeFilters.includes(item.unitStyleName));

    useEffect(() => {
        setSelectedLocations(filteredTrips);
    }, []);

    return (
        <main>
            <h1>Locations</h1>
            <Filter styles={styles} />
            <Grid locations={selectedLocations} />
        </main>
    )
}