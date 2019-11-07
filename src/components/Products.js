import React, {useState} from 'react';

import CardList from './CardList';

const Products = () =>  {

    const [value, setValue] = useState('Select');
    
    return (
        <div className="products">

            <div className="products-nav">
                <h3>Products:</h3>
                <div className="sort-list">
                    <select value={value} onChange={e => setValue(e.target.value)}>
                        <option value="Select">Select</option>
                        <option value="Highest to Lowest">Highest to Lowest</option>
                        <option value="Lowest to Highest">Lowest to Highest</option>
                    </select>
                </div>
            </div>

            <CardList />
            
        </div>
    )
}

export default Products;
