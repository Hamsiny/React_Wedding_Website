import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './ItemDetail.css';
import rawdata from '../../data/data';

const ItemDetail = () => {
    const [data, setData] = useState(rawdata);
    const {id} = useParams();

    const currentProduct = data.filter(product => product.prodId == id);
    console.log(currentProduct);
    const prodTitle = currentProduct[0].title;
    const prodDescription = currentProduct[0].description;
    const imgUrl = "https://storage.googleapis.com/luxe_media/wwwroot/" + currentProduct[0].productMedia[0].url;
    
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                <div className="col-lg-6 col-md-12" id="prodImg"><img src={imgUrl} className='detailimg'/></div>
                <div className="col-lg-6 col-md-12">
                    <h3 className="mt-5" id="prodTitle">{prodTitle}</h3>
                    <h5 className="mt-2" id="prodId">{id}</h5>
                    <p className="mt-5" id="prodDescription">{prodDescription}</p>
                    <Link to="/"><button className="btnn">Home</button></Link>
                </div>
                </div>
                <hr/>
                <div id="productDetail"></div>
            </div>
        </div>
    )
}

export default ItemDetail
