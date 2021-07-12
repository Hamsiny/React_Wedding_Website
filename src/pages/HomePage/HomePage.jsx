import React, { Fragment, useState, useEffect } from 'react'
import rawdata from '../../data/data.js'
import Filter from '../Filter/Filter'
import ShowBox from '../ShowBox/ShowBox'

const HomePage = () => {
    const [data, setData] = useState(rawdata);

    useEffect(() => {
        setData(rawdata); 
    });
    // console.log(data);

    return (
        <Fragment>
            <Filter />
            <ShowBox products={data}/>
        </Fragment>
    )
}

export default HomePage
