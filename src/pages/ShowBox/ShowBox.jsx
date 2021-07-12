import React from 'react'
import Item from '../Item/Item'
import './ShowBox.css'

const ShowBox = ({ products }) => {
    return (
        <>
            <div className="mt-5 mx-4 showbox">
                <div className="row w-100" id="display">
                    {products.map(product => (
                        <Item 
                            key={product.prodId}
                            product={product}/>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ShowBox
