import React, { useState, useEffect } from 'react';
import { Card, Row, Col } from 'react-bootstrap'
const PopularAtUs = () => {

    const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
    const [comingFilms, setComingFilms] = useState([]);
    const IMG_URL = 'https://image.tmdb.org/t/p/w500';
    const getData = () => {
        fetch(`https://api.themoviedb.org/3/trending/tv/week?api_key=${API_KEY}`)
            .then(response => response.json())
            .then(function (myJson) {
                console.log("myJson: ", myJson);
                trials(myJson.results);
            })
            .catch(err => console.error(err));
    }
    const trials = (filmData) => {
        setComingFilms(filmData);
        console.log("coming films: ", comingFilms);
    }

    const viewDesc = (descId) => {
        document.getElementById(descId).classList.toggle('d-none')
    }

    useEffect(() => {
        getData();
    }, []);
    return (
        <>
            <h1 style={{ textAlign: 'center', color: 'white' }}>Most Popular TV Shows</h1>
            <br />
            <Row xs={3} md={6} className="g-2">
                {comingFilms && comingFilms.map(films =>

                    <div key={films.results}>
                        <Col>
                            <Card className='w-100'>
                                <Card.Img style={{ maxHeight: '280px', overflow: 'hidden' }} onMouseEnter={() => viewDesc(films.id)} onMouseLeave={() => viewDesc(films.id)} variant="top" src={IMG_URL + films.poster_path} />
                                <Card.Body>
                                    <Card.Title style={{ maxHeight: '25px', overflow: 'visible' }} >{films.name}</Card.Title>
                                    <Card.Subtitle style={{ marginTop: '4rem' }} >{films.vote_average}</Card.Subtitle>
                                    <Card.Text className='d-none' id={films.id}>
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

export default PopularAtUs;
