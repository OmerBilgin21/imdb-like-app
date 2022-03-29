import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';

const Categorizedmovies = () => {
    const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
    const [getGenredFilms, setGetGenredFilms] = useState([]);
    const [myGenres, setMyGenres] = useState([]);

    const getGenres = () => {
        fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`)
            .then(response => response.json())
            .then(function (myJson) {
                settingData(myJson.genres);
            })
            .catch(err => console.error(err));
    }

    const settingData = (filmGenres) => {
        setMyGenres(filmGenres);
    }

    const getByGenre = (a) => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${a}&with_watch_monetization_types=flatrate`)
            .then(response => response.json())
            .then(function (genredFilms) {
                // console.log("genred films: ", genredFilms);
                setupFilms(genredFilms.results);
            })
            .catch(err => console.error(err));
    }

    const setupFilms = (bored) => {
        setGetGenredFilms(bored.results);
        console.log("olması lazım", getGenredFilms)
    }

    useState(() => {
        getGenres();
    }, []);



    return (
        myGenres && myGenres.map(gettingGenres =>
            <div className='aga'>
                <Card className='d-flex mt-4 w-50'>
                        <Card.Body>
                            <ul>
                                <li>genre name: {gettingGenres.name}</li>
                                <li>genre id: {gettingGenres.id}</li>
                                <br />
                                <Button onClick={getByGenre(gettingGenres.id)} variant='outline-success'>Go to  {gettingGenres.name}</Button>
                            </ul>
                        </Card.Body>
                </Card>                
            </div>
        )

    );
}

export default Categorizedmovies;
