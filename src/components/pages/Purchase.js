import React from 'react';
import { useHistory } from "react-router-dom";




export default function Purchase() {
    let history = useHistory();

const handleSubmit = (event) =>{

    event.preventDefault();
    // submit form to backend using event.target.inputName.value
    console.log(event.target.last_name.value)
    history.push('/')
}

    return (<div className='purchase'>
        <h1>Please fill out the form below to place your order!</h1>
        <center>
            <p>10% of your purchase will be donated to <i>Girls Who Code</i>Thank You!</p>
        </center>
         
        <form onSubmit={handleSubmit}> 
            <label>
                First Name:
                <input type="text" name="first_name" />
            </label>
            <label>
                    <br></br> Last Name:
                <input type="text" name="last_name" />
                Email: <input type="text" name="email" /> <p></p>
                Address: <input type="text" name="address" />
                        </label>
                        <input type="submit" value="Submit" />
                    </form> 
        </div>)



};
