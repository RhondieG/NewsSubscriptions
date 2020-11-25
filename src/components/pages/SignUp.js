import React from 'react';
import '../../App.css';
import { Form, Button } from "react-bootstrap";

    export default function SignUp() {
        return (<div> <h1 className='signUp'>SIGN UP</h1>

            <Form>
                <Form.Group controlId="formBasicUserName">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="userName" placeholder="User Name" />
                    
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                    {/* <Link to='/chat' className='btn-mobile'> */}
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    {/* </Link>  */}
            </Form>
        </div>)
    


    //submit button on signUp page should lead to Chat page
}