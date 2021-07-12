import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({ prodId, prodUrl, prodTitle, prodPrice }) => {


    // console.log(product);

    const imgUrl = "https://storage.googleapis.com/luxe_media/wwwroot/" + prodUrl;
    const urlParams = "./detail.html?prodId=" + prodId + "&prodTitle=" + prodTitle;

    return (
        <>
            <div className="col-lg-2 col-md-4 col-sm-12 mb-3">
                <Link to={urlParams} className='itemlink'>
                    <img src={imgUrl} className='itemimage'/>
                    <p className='itemp'>{prodTitle}</p>
                    <p>$ {prodPrice}</p>
                </Link>
            </div>          
        </>
    )
}

export default Item
