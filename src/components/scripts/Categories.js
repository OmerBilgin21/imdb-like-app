import React, { useState } from 'react';
import { Card } from 'react-bootstrap'

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
        console.log("setGenres: ",myGenres);
    }

    useState(() => {
        
        getData();
    },[]);

    

    return (
        myGenres && myGenres.map(gettingGenres =>
            <div className='aga'>
            <Card className='mt-4'>
                <Card.Body>
                    <ul>
                        <li>genre: {gettingGenres.name}</li>
                    </ul>
                </Card.Body>
            </Card>
        </div>
        )
        
    );
}

export default Categories;
