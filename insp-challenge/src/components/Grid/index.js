import React from 'react';
import Item from 'src/components/Item';

export default function Grid({ locations }) {
    return (
        <>
            <h2>Grid</h2>
            {locations.map((item) => {
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