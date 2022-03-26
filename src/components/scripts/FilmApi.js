import React, { useState, useEffect } from 'react';
import { Card, Form, Button } from 'react-bootstrap'

import '../css/FilmApi.css'

const Filmapi = () => {

    const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
    const [comingFilms, setComingFilms] = useState([]);

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`)
            .then(response => response.json())
            .then(function (myJson) {
                console.log("myJson: ",myJson);
                trials(myJson.results);
            })
            .catch(err => console.error(err));
    }
    const trials = (filmData) => {
        setComingFilms(filmData);
        console.log("coming films: ", comingFilms);
    }
    useEffect(() => {
        getData();
    }, []);
    return (
        comingFilms && comingFilms.map(films =>
            <div key={films.results}>
                <Card className='mt-4'>
                    <img src={'https://image.tmdb.org/t/p/w500'+films.poster_path} alt="" />
                    <Card.Body>
                        <ul>
                            <li>
                                <h5 className='card-title'>
                                    Name: {films.original_title}
                                </h5>
                                <p className='card-text'>
                                    Rank: {films.vote_average}
                                </p>
                                <p className='card-text'>
                                    Description: {films.overview}
                                </p>
                            </li>
                        </ul>
                    </Card.Body>

                </Card>

            </div>
        )
    );
}

export default Filmapi;
