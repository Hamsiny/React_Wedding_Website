import React from 'react'
import Item from '../Item/Item'
import './ShowBox.css'

const ShowBox = ({ products }) => {

    console.log(products);

    return (
        <>
            <div className="mt-5 mx-4 showbox">
                <div className="row w-100" id="display">
                    {products.map(product => (
                        (product.productMedia[0] && product.productMedia[0].url) &&
                        <Item 
                            key={product.prodId}
                            prodId={product.prodId}
                            prodIndex={product.productMedia[0]}
                            prodUrl={product.productMedia[0].url}
                            prodTitle={product.title}
                            prodPrice={product.price}/>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ShowBox
