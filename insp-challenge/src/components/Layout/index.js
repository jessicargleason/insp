import React from 'react';
import Grid from 'src/components/Grid';
import Filter from 'src/components/Filter';

export default function Layout() {
    const { tripSet, styles } = require('src/trips.json');

    return (
        <main>
            <h1>Locations</h1>
            <Filter styles={styles} />
            <Grid locations={tripSet} />
        </main>
    )
}