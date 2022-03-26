
import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap'
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from 'firebase/auth'
import { auth } from '../firebase/FirebaseConfig'
import '../css/SignUp.css'

const Signup = () => {

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

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

    const logout = async () => {
        await signOut(auth);
    };


    return (
        <>
            <Card className='w-75 align-items-center'>
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
                        <Button className="w-100" onClick={register} >Sign Up</Button>
                    </Form>

                    <div className='w-100 text-center mt-4'>
                        <h4>user logged in:</h4>
                        {user?.email}
                        <Button onClick={logout}>Sign Out</Button>
                    </div>
                </Card.Body>
            </Card>
        </>
    );
}

export default Signup;
