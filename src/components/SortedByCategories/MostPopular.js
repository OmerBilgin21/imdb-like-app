import React, { useState, useEffect } from 'react';
import { Card, ListGroup, Button } from 'react-bootstrap'

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
        mostPop && mostPop.map(films =>
            <div className='reach-most-p' key={films.results}>
                <Card className='d-flex mt-4' style={{ width: '18rem' }}>
                    <Card.Img style={{ width: 'auto', height: 'auto', maxHeight: '300px' }} variant="top" src={IMG_URL + films.poster_path} />
                    <Card.Body>
                        <Card.Title>{films.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Rank: {films.vote_average}</Card.Subtitle>
                        <Card.Text>
                            Release Date: {films.release_date}
                            <br />
                            Description: {films.overview}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    );
}

export default Mostpopular;
