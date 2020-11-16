import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
            <h1>Check Out Our Awesome Channels</h1> 
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src="images/covid.jpg"
                        text="Get latest updates here"
                        label="Numbers"
                        path='numbers'
                        />
                        <CardItem 
                        src="images/fakeNews.jpg"
                        text="Fake News/Fact Check"
                        label="Stories"
                        path='stories'
                        />
                        <CardItem 
                        src="images/opinion.jpg"
                        text="Give Us Your Opinion?"
                        label="Opinion"
                        path='opinion'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                            src="images/polls.jpg"
                            text="Dem v.s. GOP"
                            label="Polls"
                            path='polls'
                            />
                        <CardItem 
                            src="images/bull.jpg"
                            text="Bull v.s Bear"
                            label="Market"
                            path='market'
                            />
                        <CardItem 
                            src="images/pollution.jpg"
                            text="Save Our Planet"
                            label="Environment"
                            path='environment'
                            />
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Cards;
