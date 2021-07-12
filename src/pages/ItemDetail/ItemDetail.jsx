import React from 'react'

const ItemDetail = () => {
    return (
        <div>
            <div class="container mt-5">
                <div class="row">
                <div class="col-lg-6 col-md-12" id="prodImg"></div>
                <div class="col-lg-6 col-md-12">
                    <h3 class="mt-5" id="prodTitle"></h3>
                    <h5 class="mt-2" id="prodId"></h5>
                    <p class="mt-5" id="prodDescription"></p>
                    <a href="./index.html"><button class="btn">Home</button></a>
                </div>
                </div>
                <hr/>
                <div id="productDetail"></div>
            </div>
        </div>
    )
}

export default ItemDetail
