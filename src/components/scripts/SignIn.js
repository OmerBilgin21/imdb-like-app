import React, { useState } from 'react';
import { auth } from '../firebase/FirebaseConfig'
import { Card, Form, Button } from 'react-bootstrap'

import {
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth'


const Signin = () => {

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

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

    const logout = async () => {
        await signOut(auth);
    };


    return (
        <div className='reach-signin'>
            <Card className='w-100 d-flex align-items-center' style={{maxWidth: '720px'}}>
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
                        <Button className="w-100" onClick={login} >Sign In</Button>
                    </Form>
                    <div className='w-100 text-center mt-4'>
                        <h4>user logged in:</h4>
                        {user?.email}
                        <Button onClick={logout}>Sign Out</Button>
                    </div>
                </Card.Body>
            </Card>


        </div>
    );
}

export default Signin;
