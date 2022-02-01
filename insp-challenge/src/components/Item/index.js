import React from 'react';

import style from './style.module.css';

export default function Item({ image, name, unitStyle, date }) {
    const formatDate = new Date(date);
    const displayDate = formatDate.toDateString();
    return (
        <div className={style.location}>
            <div>
                <span className={style.tag}>{unitStyle}</span>
                <picture>
                    <source media="(min-width: 1200px)" srcSet={`https://cms.inspirato.com${image}?width=500`} />
                    <img src={`https://cms.inspirato.com${image}?width=300`} alt={name} />
                </picture>
            </div>
            <div>
                <h3>{name}</h3>
                <time>{displayDate}</time>
            </div>
        </div>
    )
}