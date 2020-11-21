import React from 'react';
import Products from '../Products'
import '../../App.css';



const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems';

export async function getServerSideProps() {
    const res = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=w_Ma8oQLmSMmaxResults=50key=${process.env.YOUTUBE_API_KEY}`);
    const data = await res.json();
    return {
        props: {
            data
        }
    }
}

export default function Polls ( { data }) {
    console.log(data, data);
    return <div>
        <h1 className='polls'>Recounting, Really?</h1>
        <div className="video-box">
            
       

        </div>

        <br/>

       <div>
           <Products />
       </div>
        
        </div>
};