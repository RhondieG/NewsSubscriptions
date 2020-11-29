import React from 'react';
import { useState } from "react";
import '../../App.css';
import { Form, Button } from "react-bootstrap";



export default function SignUp(props)  {
 //   let history = useHistory();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        // submit form to backend using event.target.inputName.value
        const data = { 
            username: username, 
            email: email, 
            password: password
        };


        fetch('http://localhost:3001/registration', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }) .then(response => response.json())
        .then(data => {
            props.history.push('/login');
            console.log('Success:', data);
        })
        
    }


    return (<div> <h1 className='signUp'>SIGN UP</h1>
        <Form>
                <Form.Group controlId="formBasicUserName">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control onChange={(event) => setUsername(event.target.value)} type="userName" placeholder="User Name" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={(event) => setEmail(event.target.value)} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={(event) => setPassword(event.target.value)} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                    {/* <Link to='/chat' className='btn-mobile'> */}
                        <Button onClick={handleSubmit} variant="primary" type="submit">
                            Submit
                        </Button>
                    {/* </Link>  */}
            </Form>
        
         </div>)



    //submit button on signUp page should lead to Chat page
}