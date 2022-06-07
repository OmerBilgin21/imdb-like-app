import React, { useEffect, useState } from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'
import { db } from '../firebase/FirebaseConfig'
import { getDocs, collection, doc } from 'firebase/firestore'


export default function Lists() {

    const userListCollectionReference = collection(db, "userList");
    const [filmsInLists, setFilmsInLists] = useState([])
    useEffect(() => {
        const getFilms = async () => {
            const data = await getDocs(userListCollectionReference);
            setFilmsInLists(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
            console.log(filmsInLists);
        };
        getFilms();
    }, []);
    return (
        <div style={{height: '100vh'}}>
            <div className='view-the-films'>
                <h1 style={{ color: 'white', textAlign: 'center' }}>Watchlist</h1>
                <Row xs={3} md={6} className="g-3">

                    {filmsInLists.map((films) => {
                        return (
                            <Col>
                                <Card style={{ border: '0', color: '#212529' }} className='w-100'>
                                    <Card.Img
                                        className='w-100'
                                        src={films.poster}
                                        variant="top"
                                        style={{ maxHeight: '280px', overflow: 'hidden' }}
                                    >

                                    </Card.Img>
                                    <Card.Body>
                                        <Card.Title style={{ maxHeight: '25px', overflow: 'visible' }}>
                                            {films.name}
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </div>
        </div>
    )
}
