import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({ product }) => {

    const imgUrl = "https://storage.googleapis.com/luxe_media/wwwroot/" + product.productMedia[0].url;
    const urlParams = "./detail.html?prodId=" + product.prodId + "&prodTitle=" + product.title;

    return (
        <>
            {(product.productMedia[0] && product.productMedia[0].url) ? 
                <div class="col-lg-2 col-md-4 col-sm-12 mb-3">
                    <Link to={urlParams} className='itemlink'>
                        <img src={imgUrl} className='itemimage'/>
                        <p className='itemp'>{product.title}</p>
                        <p>$ {product.price}</p>
                    </Link>
                </div> : 
                <p>There has no products.</p>}
        </>
    )
}

export default Item
