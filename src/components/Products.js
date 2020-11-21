import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function ProductItems() {
    return (
        <div className="cards">
             <h1>Please fill out the form below to place your order!</h1>
            <center>
                <p>10% of your purchase will be donated to <i>Girls Who Code</i>Thank You!</p>
            </center>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src="images/mug.png"
                        text="Have a cup of, Yo!"
                        label="7.99"
                        path='purchase'
                        />
                        <CardItem 
                        src="images/pillow.png"
                        text="Throw Pillow"
                        label="13.99"
                        path='purchase'
                        />
                        <CardItem 
                        src="images/sticker.png"
                        text="Stick It Up?"
                        label="2.99"
                        path='purchase'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProductItems;
