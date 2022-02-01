import React from 'react';

export default function Item({ image, name, style, date }) {
    const formatDate = new Date(date);
    const displayDate = formatDate.toDateString();
    return (
        <div>
            <ul>
                <li>{name}</li>
                <li>{style}</li>
                <li>{displayDate}</li>
            </ul>
        </div>
    )
}