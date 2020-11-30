import React from 'react';
import Products from '../Products'
import '../../App.css';


export default function Market() {
    return <div><h1 className='market'>Whats the Market up to?</h1>
        <div className="video-box d-flex justify-content-center">
            <iframe title="youtube" width="560" height="315" src="https://www.youtube.com/embed/OfHhpyuXV5Y?autoplay=1&controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        <br />

        <div>
            <Products />
        </div>
    </div>
};