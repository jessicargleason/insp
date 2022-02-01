import React from 'react';

export default function Item({ image, name, style, date }) {
    return (
        <div>
            <ul>
                <li>{name}</li>
                <li>{style}</li>
                <li>{date}</li>
            </ul>
        </div>
    )
}