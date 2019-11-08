import React, { Fragment, useState, useEffect } from 'react';

import Card from './Card';

const CardList = ({products, addToCart}) => {

    const [delay, setDelay] = useState(true)

    useEffect(() => {
        setDelay(true);
        setTimeout(() => {
            setDelay(false)
        }, 1000);
    }, [products])

    return (
        <Fragment>
            {
                delay ? <img src="https://career.alliedvision.com/persis/images_avt/gicccccphy.gif" alt="loader" className="loader" />
                :
                <div>
                    <span className="products-length">{products.length} Product(s) found.</span>
                    <div className="card-list">
                        {
                            products.length === 0 ? <p className="text-center">Sorry, No products of the specified categories :-(</p> :
                            products.map(item => {
                                return (
                                    <Card key={item.id} data={item} addToCart={addToCart} />
                                )
                            })
                        }
                    </div>
                </div>
            }
        </Fragment>
    )
}

export default CardList
