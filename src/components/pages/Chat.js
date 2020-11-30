import React from 'react';
import '../../App.css';
import Products from '../Products'


export default function Chat() {
    return <div><h1 className='environment'>Chat Feed Coming Soon</h1>

        <div className="video-box d-flex justify-content-center">
            <iframe title="youtube" width="560" height="315" src="https://www.youtube.com/embed/BOdLmxy06H0?autoplay=1&controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        <br />

        <div>
            <Products />
        </div>
    </div>
};