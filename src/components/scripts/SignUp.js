import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/FirebaseConfig'
import { Link } from 'react-router-dom';
import { hover } from '@testing-library/user-event/dist/hover';
import Signin from './SignIn';

const Signup = () => {

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            );
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <>
            <Card className='w-100 align-items-center' style={{ height: '100vh',color: 'white',backgroundColor: '#212529' }}>
                <Card.Body>
                    <h2 className='text-center mb-4'>Register</h2>
                    <Form>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' required onChange={(event) => {
                                setRegisterEmail(event.target.value);
                            }} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' required onChange={(event) => {
                                setRegisterPassword(event.target.value);
                            }} />
                        </Form.Group>
                        <br />
                        <Form.Label>Your password should contain 6 characters.</Form.Label>
                        <Button className="w-100" variant='outline-light' onClick={register} >{<a style={{textDecoration: 'none', color: 'white'}} href="/">Sign Up</a>}</Button>
                        <br/>
                        <br/>
                        <p>Already have an account?&nbsp;&nbsp; {<a style={{textDecoration: 'none', color: 'white'}} href="./SignIn">Sign In</a>}</p>
                    </Form>
                </Card.Body>
            </Card>
        </>
    );
}

export default Signup;
