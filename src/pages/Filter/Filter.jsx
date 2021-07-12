import React, { useState, useEffect } from 'react'
import rawdata from '../../data/data.js'
import ShowBox from '../ShowBox/ShowBox'
import './Filter.css'

const Filter = () => {  
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = () => {
            setData(rawdata); 
        }
        getData(); 
    }, []);

    // whole filter function
    const showWithFilter = () => {
        // setData(rawdata);
        let proWithCate = filterCategory(rawdata, document.getElementById('category').value);
        let proWithFilter = filterPrice(proWithCate, document.getElementById('price').value);
        setData(proWithFilter);
        // console.log(data);
    }
    
    // category filter
    const filterCategory = (productsArray, cateId) => {
        return productsArray.filter(product => (product.categoryId == cateId || cateId == "0"));
    }

    // price filter
    const filterPrice = (productsArray, priceFilter) => {
        let priceProducts;
        switch (priceFilter) {
            case "0":
                priceProducts = productsArray;
                break;
            case "100":
                priceProducts = productsArray.filter(product => 
                    product.price <= 100);
                break;
            case "500":
                priceProducts = productsArray.filter(product => 
                    (product.price > 100 && product.price <= 500));
                break;
            case "1000":
                priceProducts = productsArray.filter(product => 
                    (product.price > 500 && product.price <= 1000));
                break;
            case "1001":
                priceProducts = productsArray.filter(product => 
                    product.price > 1000);
                break;
            default:
                break;
        }
        return priceProducts;
    }

    // sorting products ascending
    const productsAsc = () => {
        setData(data.sort((a, b) => a.price - b.price));
        console.log(data);
    }

    // sorting products descending
    const productsDesc = () => {
        setData(data.sort((a, b) => b.price - a.price));
        console.log(data);
    }

    // reset products to origin
    const resetFilter = () => {
        document.getElementById('category').value = "0";
        document.getElementById('price').value = "0";
        setData(rawdata);
    }
    
    return (
        <>
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
                    <button className="btnn mx-1" onClick={showWithFilter}>
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
                    <button className="btnn mx-1" onClick={showWithFilter}>
                        Filter
                    </button>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 mt-3">
                    <h4>Sort</h4>
                    <button className="btnn mr-2" onClick={productsAsc}>
                        Ascending
                    </button>
                    <button className="btnn mr-2" onClick={productsDesc}>
                        Decending
                    </button>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 mt-3">
                    <h4>Reset</h4>
                    <button className="btnn mr-2" onClick={resetFilter}>
                        Reset
                    </button>
                </div>
            </div>
            <ShowBox products={data}/>
        </>
    )
}

export default Filter
