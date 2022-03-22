
import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap'
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth'
import { auth } from '../firebase/FirebaseConfig'

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Switch,
    Link
} from 'react-router-dom';
import Signin from './SignIn';


const Signup = () => {

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

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
        <>
            <Router>
                <Card>
                    <Card.Body>
                        <h2 className='text-center mb-4'>Register</h2>
                        <Form>
                            <Form.Group >
                                <Form.Label>Email</Form.Label>
                                <Form.Control onChange={(event) => {
                                    setRegisterEmail(event.target.value);
                                }} />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control onChange={(event) => {
                                    setRegisterPassword(event.target.value);
                                }} />
                            </Form.Group>
                            <br />
                            <Button className="w-100" onClick={register} >Register</Button>
                        </Form>

                        <br />
                        <br />

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
                        <div className='w-100 text-center mt-2'>
                            <h4>user logged in:</h4>
                            {user?.email}
                            <Button onClick={logout}>Sign Out</Button>
                        </div>
                    </Card.Body>
                    <div className='w-100 text-center mt-2'>
                        Already have an account?
                        <Link to="/SingIn">singIn</Link>
                    </div>
                </Card>
                <Routes>
                    <Route exact path="/SingIn" element={<Signin />} />
                </Routes>
            </Router>
        </>
    );
}

export default Signup;
