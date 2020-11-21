import React from 'react';




export default function Purchase () {

    return ( <div className='purchase'>
            <h1>Please fill out the form below to place your order!</h1>
            <center>
                <p>10% of your purchase will be donated to <i>Girls Who Code</i>Thank You!</p>
            </center>
            <p></p>   <form>
            <label>
               First Name:
    <input type="text" name="name" />

            </label>
            <label>
               <br></br> Last Name: 
    <input type="text" name="name" />
    Email: <input type="text" name="name" /> <p></p>
    Address: <input type="text" name="name" /> 
            </label>
            <input type="submit" value="Submit" />
        </form> </div>)
        
            
        
};
