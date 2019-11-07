import React from 'react';

import Card from './Card';

const CardList = () => {
    return (
        <div className="card-list">
            {
                [1, 23, 2, 35, 5 ,5, 5 ,5, 1, 1, 1, 1, 1 ,1 ,1, ].map(() => <Card />)
            }
        </div>
    )
}

export default CardList
