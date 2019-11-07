import React, {Fragment} from 'react';

import Card from './Card';

const CardList = ({products}) => {
    return (
        <Fragment>
            <span className="products-length">{products.length} Product(s) found.</span>
            <div className="card-list">
                {
                    products.length == 0 ? <h3 className="text-center">Loading Data...</h3> :
                    products.map(item => {
                        return (
                            <Card key={item.id} data={item} />
                        )
                    })
                }
            </div>
        </Fragment>
    )
}

export default CardList
