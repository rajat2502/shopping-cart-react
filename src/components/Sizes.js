import React from 'react'

const Sizes = ({selectedSizes, setSize}) =>  {

    const sizes = ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'];

    return (
        <div className="sizes">
            <h3>Sizes</h3>
            <div className="size-list">
                {
                    sizes.map((size, index) => {
                        return (
                            <button 
                                className={ "size" + (selectedSizes.includes(size) ? " selected-size" : "")}
                                key={index}
                                onClick={() => setSize(size)}
                            >
                                {size}
                            </button>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Sizes;
