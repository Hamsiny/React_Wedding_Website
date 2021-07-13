import React, { Component } from 'react'
import rawdata from '../../data/data.js'
import ShowBox from '../ShowBox/ShowBox'
import './Filter.css'

export class Filter extends Component {  
    state = {
        data: rawdata
    };

    // componentdidmount

    // whole filter function
    showWithFilter = () => {
        this.setState({data: rawdata});
        const proWithCate = this.filterCategory(rawdata, document.getElementById('category').value);
        const proWithFilter = this.filterPrice(proWithCate, document.getElementById('price').value);
        this.setState({data: proWithFilter});
    }
    
    // category filter
    filterCategory = (productsArray, cateId) => {
        return productsArray.filter(product => (product.categoryId == cateId || cateId == "0"));
    }

    // price filter
    filterPrice = (productsArray, priceFilter) => {
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
    productsAsc = () => {
        this.setState({data: this.state.data.sort((a, b) => a.price - b.price)});
    }

    // sorting products descending
    productsDesc = () => {
        this.setState({data: this.state.data.sort((a, b) => b.price - a.price)});
    }

    // reset products to origin
    resetFilter = () => {
        document.getElementById('category').value = "0";
        document.getElementById('price').value = "0";
        this.setState({data: rawdata});
    }
    
    render() {
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
                        <button className="btnn mx-1" onClick={this.showWithFilter}>
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
                        <button className="btnn mx-1" onClick={this.showWithFilter}>
                            Filter
                        </button>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 mt-3">
                        <h4>Sort</h4>
                        <button className="btnn mr-2" onClick={this.productsAsc}>
                            Ascending
                        </button>
                        <button className="btnn mr-2" onClick={this.productsDesc}>
                            Decending
                        </button>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 mt-3">
                        <h4>Reset</h4>
                        <button className="btnn mr-2" onClick={this.resetFilter}>
                            Reset
                        </button>
                    </div>
                </div>
                <ShowBox products={this.state.data}/>
            </>
        );
    }
    
}

export default Filter
