import React from 'react';

import Card from './Card';

const CardList = ({products}) => {
    console.log(products);
    return (
        <div className="card-list">
            {
                products.map(item => {
                    return (
                        <Card key={item.id} data={item} />
                    )
                })
            }
        </div>
    )
}

export default CardList
