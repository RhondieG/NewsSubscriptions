import React from 'react';
import Products from '../Products'
import '../../App.css';
import Tvbox from '../Tvbox';


export default function Market () {
    return <div><h1 className='market'>Whats the Market up to?</h1>

    <div className="video-container">
            <Tvbox />
        </div>

        <br/>

       <div>
           <Products />
       </div>
       </div>
};