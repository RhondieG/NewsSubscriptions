import React from 'react';
import Products from '../Products'
import '../../App.css';


export default function Stories () {
    return <div><h1 className='stories'>This is Us</h1>
    <div className="video-box d-flex justify-content-center">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/KQDBVyAOAHg?autoplay=1&controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
       </div>

        <br/>

       <div>
           <Products />
       </div>
       </div>
};