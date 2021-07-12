import React from 'react'
import './Filter.css'

const Filter = () => {   
    return (
        <div>
            <div className="row mt-3 mx-4">
                <div className="col-lg-3 col-md-6 col-sm-12 mt-3">
                    <h4>Category</h4>
                    <select id="category" className="categoryselector">
                        <option value="0">All Hires</option>
                        <option value="1">ARCHES & BALLOON/FLOWER STANDS</option>
                        <option value="2">CARTS</option>
                        <option value="3">PARTY HIRE</option>
                        <option value="5">TABLEWARE</option>
                        <option value="25">LED LETTER & NUMBER LIGHTS</option>
                        <option value="11">CENTREPIECE HIRE - CANDLES & VASES</option>
                        <option value="15">BACKDROPS & FLOWER WALLS</option>
                        <option value="21">CAKE & DESSERT STANDS</option>
                        <option value="18">TABLES & CONSOLES</option>
                        <option value="12">PLINTHS</option>
                        <option value="27">TABLECLOTHS</option>
                        <option value="16">CHAIRS</option>
                        <option value="20">WOODEN CRATES</option>
                        <option value="51">MIRRORS</option>
                        <option value="14">WEDDING HIRE</option>
                        <option value="10">BABY SHOWER</option>
                        <option value="47">Luxe Dream Wedding Flowers</option>
                        <option value="49">Luxe Dream Floral Studio</option>
                    </select>
                    <button className="btnn mx-1">
                        Show
                    </button>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 mt-3">
                    <h4>Price</h4>
                    <select id="price" className="priceselector">
                        <option value="0">All</option>
                        <option value="100">0 - 100</option>
                        <option value="500">101 - 500</option>
                        <option value="1000">501 - 1000</option>
                        <option value="1001">Over 1000</option>
                    </select>
                    <button className="btnn mx-1">
                        Filter
                    </button>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 mt-3">
                    <h4>Sort</h4>
                    <button className="btnn mr-2">
                        Ascending
                    </button>
                    <button className="btnn mr-2">
                        Decending
                    </button>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 mt-3">
                    <h4>Reset</h4>
                    <button className="btnn mr-2">
                        Reset
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Filter
