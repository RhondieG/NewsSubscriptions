import React from 'react';
import Products from '../Products'
import '../../App.css';
import Tvbox from '../Tvbox';



export default function Polls () {
    return <div>
        <h1 className='polls'>Recounting, Really?</h1>
        
        <div className="video-container">
            <Tvbox />
        </div>

        <br/>

       <div>
           <Products />
       </div>
        
        </div>
};