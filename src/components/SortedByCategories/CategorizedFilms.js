import React, { useState, useEffect } from 'react';
import { Card, Button, CardGroup, Badge, Row, Col, ButtonToolbar, ButtonGroup } from 'react-bootstrap';

const Categorizedfilms = () => {
    const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
    const [genredFilms, setGenredFilms] = useState([]);
    const IMG_URL = 'https://image.tmdb.org/t/p/w500';
    const [myGenres, setMyGenres] = useState([]);
    const [myGenreId, setMyGenreId] = useState(16);

    const getGenres = () => {
        fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`)
            .then(response => response.json())
            .then(function (genresJson) {
                console.log("myJson: ", genresJson);
                settingData(genresJson.genres);
            })
            .catch(err => console.error(err));
    }

    const settingData = (filmGenres) => {
        setMyGenres(filmGenres);
        console.log("myGenres: ", myGenres);
        console.log("filmGenres", filmGenres);
    }

    const setupFilms = (myId) => {
        setMyGenreId(myId);
        sortFilms(myGenreId);
    }

    const sortFilms = (genreId) => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}&with_watch_monetization_types=flatrate`)
            .then(response => response.json())
            .then(function (genredFilmsJson) {
                console.log("genredFilmsJson: ", genredFilmsJson);
                filmSorting(genredFilmsJson.results);
            })
            .catch(err => console.error(err));
    }

    const filmSorting = (genredFilmsJson) => {
        setGenredFilms(genredFilmsJson);
        console.log("genredFilms: ", genredFilms);
        
    }
    
    useEffect(() => {
        getGenres();
        setupFilms();
    }, []);

    console.log("myGenreId",myGenreId);
    return (
        <>
            <h1 style={{color: 'white', textAlign: 'center'}}>Sort By Category!</h1>
            {myGenres && myGenres.map(genres =>
                <ButtonToolbar className='d-inline-flex mt-3' aria-label="Toolbar with button groups">
                    <ButtonGroup className="me-2" aria-label="First group">
                        <Button onClick={() => setupFilms(genres.id)} style={{borderRadius: '5em'}} variant='outline-light'>{genres.name} {genres.id}</Button>
                    </ButtonGroup>
                </ButtonToolbar>

            )}
            <br />
            <br />
            <Row xs={2} md={2} className="g-2">
                {genredFilms && genredFilms.map(genred =>
                    <div className='final-film' key={genred.id}>
                        <Col>
                            <Card className='w-75'>
                                <Card.Img variant="top" src={IMG_URL + genred.poster_path} />
                                <Card.Body>
                                    <Card.Title>{genred.title}</Card.Title>
                                    <Card.Text style={{ maxHeight: '100px', overflow: 'auto' }}>
                                        {genred.overview}
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

export default Categorizedfilms;
