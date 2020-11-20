import React from 'react';
import Products from '../Products'
import '../../App.css';
import Tvbox from '../Tvbox';



export default function Opinion () {
    return <div><h1 className='opinion'>Have We All lost our Minds?</h1>
        
        <div className="video-container">
            <Tvbox />
        </div>

        <br/>

       <div>
           <Products />
       </div>
       </div>

};