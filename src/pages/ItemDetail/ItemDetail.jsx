import React from 'react'

const ItemDetail = () => {
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                <div className="col-lg-6 col-md-12" id="prodImg"></div>
                <div className="col-lg-6 col-md-12">
                    <h3 className="mt-5" id="prodTitle"></h3>
                    <h5 className="mt-2" id="prodId"></h5>
                    <p className="mt-5" id="prodDescription"></p>
                    <a href="./index.html"><button className="btn">Home</button></a>
                </div>
                </div>
                <hr/>
                <div id="productDetail"></div>
            </div>
        </div>
    )
}

export default ItemDetail
