import React from 'react';
import Item from 'src/components/Item';

import style from './style.module.css';

export default function Grid({ locations }) {
    return (
        <>
            <h2>Grid</h2>
            <ul className={style.grid}>
            {locations.map((item) => {
                return (
                    <li key={item.curatedTripMasterInventoryId} className={style.grid__item}>
                        <Item
                            name={item.unitName}
                            unitStyle={item.unitStyleName}
                            date={item.checkInDate}
                            image={item.heroImage}
                        />
                    </li>
                )
            })};
            </ul>
        </>
    )
}