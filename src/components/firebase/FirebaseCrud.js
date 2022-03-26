import React, { useEffect, useState } from 'react';
import { db } from '../firebase/FirebaseConfig'
import { Card, Form, Button } from 'react-bootstrap'
import { collection, getDocs, addDoc, doc } from "firebase/firestore";
const Firebasecrud = () => {

    const filmsCollectionReference = collection(db, "films");

    const [thisFilms, setThisFilms] = useState([]);
    const [newFilmName, setNewFilmName] = useState("");
    const [newProducer, setNewProducer] = useState("");

    const createUser = async () => {
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
            <Card className='w-75 align-items-center'>
                <Card.Body>
                    <h3>Adding films</h3>
                    <Form className='w-50'>
                        <Form.Group>
                            <Form.Label>Name: </Form.Label>
                            <Form.Control type="text" onChange={(e) => { setNewFilmName(e.target.value) }}></Form.Control>
                            <Form.Label>Producer: </Form.Label>
                            <Form.Control type="text" onChange={(e) => { setNewProducer(e.target.value) }}></Form.Control>
                        </Form.Group>
                    </Form>
                    <Button className='w-50 mt-2' onClick={createUser}>Create User</Button>
                </Card.Body>
            </Card>

            <div>
                {thisFilms.map((films) => {
                    return (
                        <Card className='mt-4'>
                            {/* <img className='width: 10px' src={films.img} alt="cover" /> */}

                            <Card.Body>
                                <h1>Name: {films.name}</h1>
                                <h1>Producer: {films.producer}</h1>
                                {/* <Button className='w-50 mt-2' onClick={updateUser(films.id,films.name, films.producer)}>Update User
                                </Button> */}
                            </Card.Body>


                        </Card>
                    );
                })}
            </div>
        </>
    );
}

export default Firebasecrud;
