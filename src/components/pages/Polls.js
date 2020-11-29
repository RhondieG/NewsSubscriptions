import React from 'react';
import Products from '../Products'
import '../../App.css';



// const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems';

// export async function getServerSideProps() {
//     const res = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=w_Ma8oQLmSMmaxResults=50key=${process.env.YOUTUBE_API_KEY}`);
//     const data = await res.json();
//     return {
//         props: {
//             data
//         }
//     }
// }

export default function Polls ( { data }) {
    console.log(data, data);
    return <div>
        <h1 className='polls'>The Numbers Are In</h1>
        <div className="video-box d-flex justify-content-center">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/qhfFgKlDM8E?autoplay=1&controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
       

        </div>

        <br/>

       <div>
           <Products />
       </div>
        
        </div>
};