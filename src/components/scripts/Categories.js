import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import Categorizedmovies from '../SortedByCategories/CategorizedMovies';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';

const Categories = () => {
    const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
    const [myGenres, setMyGenres] = useState([]);

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`)
            .then(response => response.json())
            .then(function (myJson) {
                console.log("myJson: ", myJson);
                settingData(myJson.genres);
            })
            .catch(err => console.error(err));
    }

    const settingData = (filmGenres) => {
        setMyGenres(filmGenres);
        console.log("myGenres: ", myGenres);
        console.log("filmGenres", filmGenres);
    }
    
    useState(() => {
        getData();
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
                                <Button variant='outline-success'>{<Link className='text-decoration-none' to="categorized" style={{ color: 'black' }} >Go To {gettingGenres.name}</Link>}</Button>
                            </ul>
                        </Card.Body>
                </Card>                
            </div>
        )

    );
}

export default Categories;
