import React, { useEffect, useState } from 'react';
import { db } from '../firebase/FirebaseConfig'
import { Card, Form, Button, Container } from 'react-bootstrap'
import { collection, getDocs, addDoc, doc } from "firebase/firestore";
const Firebasecrud = () => {

    const filmsCollectionReference = collection(db, "films");

    const [thisFilms, setThisFilms] = useState([]);
    const [newFilmName, setNewFilmName] = useState("");
    const [newProducer, setNewProducer] = useState("");

    const createFilm = async () => {
        await addDoc(filmsCollectionReference, { name: newFilmName, producer: newProducer });
    }

    useEffect(() => {
        const getFilms = async () => {
            const data = await getDocs(filmsCollectionReference);
            setThisFilms(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
            console.log(thisFilms);
        };
        getFilms();
    }, []);

    return (
        <>
            <Container style={{color: 'black'}}>
                <Card className='w-100 align-items-center'>
                    <Card.Body>
                        <h3>Which movie is not on our website?</h3>
                        <Form className='w-50'>
                            <Form.Group>
                                <Form.Label>Name: </Form.Label>
                                <Form.Control type="text" onChange={(e) => { setNewFilmName(e.target.value) }}></Form.Control>
                                <Form.Label>Producer: </Form.Label>
                                <Form.Control type="text" onChange={(e) => { setNewProducer(e.target.value) }}></Form.Control>
                            </Form.Group>
                        </Form>
                        <Button variant='outline-dark' className='w-50 mt-2' onClick={createFilm}>Submit</Button>
                    </Card.Body>
                </Card>
            </Container>
            <br />

            <div className='rest'>
                <h1 style={{ color: 'white', textAlign: 'center' }}>Recommended So Far: </h1>
                {thisFilms.map((films) => {
                    return (
                        <Card style={{ maxWidth: '840px' }} className='w-100 align-items-center mt-4'>
                            <Card.Body>
                                <h1>Name: {films.name}</h1>
                                <h1>Producer: {films.producer}</h1>
                            </Card.Body>


                        </Card>
                    );
                })}
            </div>
        </>
    );
}

export default Firebasecrud;
