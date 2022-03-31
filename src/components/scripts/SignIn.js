import React, { useState } from 'react';
import { auth } from '../firebase/FirebaseConfig'
import { Card, Form, Button } from 'react-bootstrap'

import { signInWithEmailAndPassword } from 'firebase/auth'


const Signin = () => {

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div className='reach-signin'>
            <Card className='w-100 d-flex align-items-center' style={{ height: '100vh',color: 'white',backgroundColor: '#212529' }} >
                <Card.Body>
                    <h2 className='text-center mb-4'>Log In</h2>
                    <Form>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' required onChange={(event) => {
                                setLoginEmail(event.target.value);
                            }} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' required onChange={(event) => {
                                setLoginPassword(event.target.value);
                            }} />
                        </Form.Group>
                        <br />
                        <Button variant='outline-light' className="w-100" onClick={login} >Sign In</Button>
                    </Form>
                </Card.Body>
            </Card>


        </div>
    );
}

export default Signin;
