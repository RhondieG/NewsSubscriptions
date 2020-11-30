import React from 'react';
import Products from '../Products'
import '../../App.css';



export default function Numbers() {
    return <div><h1 className='numbers'>Covid-19 Crisis</h1>
        <div className="video-box d-flex justify-content-center">
            <iframe title="youtube" width="560" height="315" src="https://www.youtube.com/embed/XnHuxlB70qY?autoplay=1&controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


        </div>


        <br />

        <div>
            <Products />
        </div>
    </div>
};

//?autoplay=1&controls=0