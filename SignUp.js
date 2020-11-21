import React from 'react';
import '../../App.css';

export default function SignUp() {
    return (<div> <h1 className='signUp'>SIGN UP</h1>
     <p></p>   <form>
            <label>
               First Name:
    <input type="text" name="name" />

            </label>
            <label>
               <br></br> Last Name: 
    <input type="text" name="name" />
    Email: <input type="text" name="name" />
    Password: <input type="text" name="name" /> 
            </label>
            <input type="submit" value="Submit" />
        </form> </div>)

        
}

