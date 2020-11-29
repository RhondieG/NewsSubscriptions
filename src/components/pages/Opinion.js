import React from 'react';
import Products from '../Products'
import '../../App.css';
import Tvbox from '../Tvbox';



export default function Opinion () {
    return <div><h1 className='opinion'>Have We All lost our Minds?</h1>
            <div className="video-container">
            <div className="video-box d-flex justify-content-center">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/MzbjSDA1uVM?autoplay=1&controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            </div>
        <div>
            <Products />
        </div>
       </div>

};