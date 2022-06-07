import React, { useState, useEffect } from 'react';
import { Card, Row, Col } from 'react-bootstrap'

const Mostpopular = () => {

    const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
    const [mostPop, setMostPop] = useState([]);
    const IMG_URL = 'https://image.tmdb.org/t/p/w500';
    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
            .then(response => response.json())
            .then(function (myJson) {
                console.log("myJson: ", myJson);
                adj(myJson.results);
            })
            .catch(err => console.error(err));
    }
    const adj = (mostPopData) => {
        setMostPop(mostPopData);
        console.log("most popular films: ", mostPop);
    }

    const viewDesc = (myId) => {
        document.getElementById(myId).classList.toggle('d-none');
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <h1 style={{ textAlign: 'center', color: 'white' }}>Most Popular Movies of All Time</h1>
            <br />
            <Row xs={3} md={6} className="g-2">
                {mostPop && mostPop.map(films =>
                    <div className='reach-most-p' key={films.id}>
                        <Col>
                            <Card className='w-100'>
                                <Card.Img style={{ maxHeight: '280px', overflow: 'hidden' }} onMouseEnter={() => viewDesc(films.id)} onMouseLeave={() => viewDesc(films.id)} variant="top" src={IMG_URL + films.poster_path} />
                                <Card.Body>
                                    <Card.Title style={{ maxHeight: '25px', overflow: 'visible' }} >{films.title}</Card.Title>
                                    <Card.Subtitle style={{ marginTop: '4rem' }} >{films.vote_average}</Card.Subtitle>
                                    <Card.Text id={films.id} className='d-none' >
                                        {films.overview}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </div>
                )}
            </Row>
        </>
    );
}

export default Mostpopular;
