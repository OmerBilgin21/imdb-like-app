import React, { useState, useEffect } from 'react';
import { Card, ListGroup, Button, Row, Col } from 'react-bootstrap'

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
    useEffect(() => {
        getData();
    }, []);

    return (

        <Row xs={2} md={2} className="g-2">
            {mostPop && mostPop.map(films =>
                <div className='reach-most-p' key={films.results}>
                    <Col>
                        <Card className='w-75'>
                            <Card.Img variant="top" src={IMG_URL + films.poster_path} />
                            <Card.Body>
                                <Card.Title>{films.title}</Card.Title>
                                <Card.Subtitle>{films.vote_average}</Card.Subtitle>
                                <Card.Text style={{ maxHeight: '100px', overflow: 'auto' }}>
                                    {films.overview}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </div>
            )}
        </Row>
    );
}

export default Mostpopular;
