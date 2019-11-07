import React from 'react';

import Card from './Card';
import products from '../products.json';

const CardList = () => {
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
