import React from 'react'

const Card = ({data}) => {
    return (
        <div className="card">
            <img src={data.url} className="card-image" />
            <h3 className="card-title">{data.title}</h3>
            <p className="price">price: <span>$ {data.price}</span></p>
            <button className="add-to-cart">Add to cart</button>
        </div>
    )
}

export default Card
