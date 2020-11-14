import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Feeds.css';

function Feeds() {
    return (
        <div className="feed-container">
            <video>
                <source src="https://drive.google.com/file/d/1Kg1V0b1ET0TWU9pJa2lti17cnYiargp3/preview"
                type='video/mp4'/> 
                </video>
            <h1>Get your latest <i>NEWS</i> here!</h1>
            <div className="sub-btns">
                    <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    GET STARTED
                    </Button>
                    <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                >
                        PICK A TOPIC <i className='far-play-circle' />
                    </Button>
                </div>
            </div>
        );
    }


export default Feeds;
