import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Feeds.css';

function Feeds() {
    return (
        <div className="feed-container">
            <video src="/video/traffic.mp4" autoPlay loop muted />
            <h1>Get the latest <i>CHATTER</i> here!</h1>
            <div className="sub-btns">
                    <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    GET STARTED
                    </Button>
                    {/* <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                >
                        PICK A TOPIC <i className='far-play-circle' />
                    </Button> */}
                </div>
            </div>
        );
    }


export default Feeds;
