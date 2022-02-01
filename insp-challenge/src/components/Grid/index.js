import React, { useEffect } from 'react';
import Item from '../Item';
import Filter from '../Filter';

export default function Grid() {
    const { tripSet, styles } = require('src/trips.json');
    //const tripSet = data.tripSet;
    //const styles = data.styles;
    useEffect(() => {
        console.log(styles);
    });
    return (
        <>
            <Filter styles={styles} />
            <h2>Grid</h2>
            {tripSet.map((item) => {
                return (
                    <Item
                        name={item.unitName}
                        style={item.unitStyleName}
                        date={item.checkInDate}
                    />
                )
            })};
        </>
    )
}