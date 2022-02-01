import React from 'react';

export default function Filter({ styles }) {
    return(
        <div>
            <h2>Styles</h2>
            <ul>
                {
                    Object.keys(styles).map((style, i) => {
                        return (
                            <li key={i}>{styles[style]}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}