import React, { useState, useEffect } from 'react';
import { Card, ListGroup, Row, Col } from 'react-bootstrap'
const PopularAtUs = () => {

    const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
    const [comingFilms, setComingFilms] = useState([]);
    const IMG_URL = 'https://image.tmdb.org/t/p/w500';
    // ${API_KEY}
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
    useEffect(() => {
        getData();
    }, []);
    return (

        <Row xs={2} md={2} className="g-2">
            {comingFilms && comingFilms.map(films =>

                <div key={films.results}>
                    <Col>
                        <Card className='w-75'>
                            <Card.Img variant="top" src={IMG_URL + films.poster_path} />
                            <Card.Body>
                                <Card.Title>{films.name}</Card.Title>
                                <Card.Text style={{ maxHeight: '100px', overflow: 'auto' }}>
                                    {films.overview}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </div>
            )}
        </Row>

        // comingFilms && comingFilms.map(films =>
        //     <div key={films.results}>
        //         <Card className='mt-4'>
        //             <Card.Body>
        //                 <img className='card-image-top' src={'https://image.tmdb.org/t/p/w500' + films.poster_path} alt="poster" />
        //                 <ListGroup>
        //                     <ListGroup.Item>
        //                         <h5 className='card-title'>
        //                             Name: {films.original_title}
        //                         </h5>
        //                         <p className='card-text'>
        //                             Rank: {films.vote_average}
        //                         </p>
        //                         <p className='card-text'>
        //                             Vote count: {films.vote_count}
        //                         </p>
        //                         <p className='card-text w-50'>
        //                             Description: {films.overview}
        //                         </p>
        //                         <p className='text-muted'>
        //                             Release date: {films.release_date}
        //                         </p>
        //                         <p className='text-muted'>
        //                             Viewed: {films.popularity}
        //                         </p>
        //                     </ListGroup.Item>
        //                 </ListGroup>
        //             </Card.Body>
        //         </Card>
        //     </div>
        // )
    );
}

export default PopularAtUs;
