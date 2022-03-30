import React, { useState, useEffect } from 'react';
import {
    Card,
    Button,
    Row,
    Col,
    ButtonToolbar,
    ButtonGroup,
    Form,
    FormControl,
    Container
} from 'react-bootstrap';

const Categorizedfilms = () => {
    const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
    const [genredFilms, setGenredFilms] = useState([]);
    const IMG_URL = 'https://image.tmdb.org/t/p/w500';
    const [myGenres, setMyGenres] = useState([]);
    const [myGenreId, setMyGenreId] = useState(16);
    const [page, setPage] = useState(1);
    const [searchedFilms, setSearchedFilms] = useState("hob");

    const getGenres = () => {
        fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`)
            .then(response => response.json())
            .then(function (genresJson) {
                console.log("myJson: ", genresJson);
                settingGenres(genresJson.genres);
            })
            .catch(err => console.error(err));
    }

    const settingGenres = (filmGenres) => {
        setMyGenres(filmGenres);
        console.log("myGenres: ", myGenres);
        console.log("filmGenres", filmGenres);
    }

    const setupFilms = (myId) => {
        setMyGenreId(myId);
        sortFilms(myGenreId, page);
    }

    const goToNextPage = () => {
        setPage(page + 1);
        sortFilms(myGenreId, page);
    }

    const goToPreviousPage = () => {
        if (page === 1) return setPage(1);
        setPage(page - 1);
        sortFilms(myGenreId, page);
    }

    const sortFilms = (genreId, myPage) => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${myPage}&with_genres=${genreId}&with_watch_monetization_types=flatrate`)
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

    const viewDesc = (descId) => {
        document.getElementById(descId).classList.toggle('d-none')
    }

    useEffect(() => {
        getGenres();
        setupFilms();
    }, []);

    return (
        <>
            <h1 style={{ color: 'white', textAlign: 'center' }}>Sort By Category!</h1>
            {myGenres && myGenres.map(genres =>
                <ButtonToolbar className='d-inline-flex mt-3' aria-label="Toolbar with button groups">
                    <ButtonGroup className="me-2" aria-label="First group">
                        <Button className='btn-' onClick={() => setupFilms(genres.id)} style={{ borderRadius: '5em' }} variant='outline-light'>{genres.name}</Button>
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
                                <Card.Img onMouseEnter={() => viewDesc(genred.id)} onMouseLeave={() => viewDesc(genred.id)} variant="top" src={IMG_URL + genred.poster_path} />
                                <Card.Body>
                                    <Card.Title style={{maxHeight: '25px', overflow: 'visible'}}>{genred.title}</Card.Title>
                                    <Card.Subtitle className='mt-4'>{genred.vote_average}</Card.Subtitle>
                                    <Card.Text id={genred.id} className="d-none">
                                        {genred.overview}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </div>
                )}
            </Row>
            <br />
            <Container className='d-flex'>
                <Button style={{ marginRight: '10px', borderRadius: '5em' }} onClick={() => goToPreviousPage()} variant='outline-light'>Go Back!</Button>
                <Button style={{ borderRadius: '5em' }} onClick={() => goToNextPage()} variant='outline-light'>Next Page</Button>
                <Card.Text>
                    <p style={{ color: 'white', marginLeft: '10px' }}>page: {page}</p>
                </Card.Text>
            </Container>
        </>
    );
}

export default Categorizedfilms;
