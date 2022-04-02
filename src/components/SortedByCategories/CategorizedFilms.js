import React, { useState, useEffect } from 'react';
import {
    Card,
    Button,
    Row,
    Col,
    ButtonToolbar,
    ButtonGroup,
    Container,
    Form,
    FormControl
} from 'react-bootstrap';

const Categorizedfilms = () => {
    const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
    const [genredFilms, setGenredFilms] = useState([]);
    const IMG_URL = 'https://image.tmdb.org/t/p/w500';
    const [myGenres, setMyGenres] = useState([]);
    const [myGenreId, setMyGenreId] = useState(16);
    const [page, setPage] = useState(1);
    const [searchedKeyword, setSearchedKeyword] = useState("Search");
    const [searchedArr, setSearchedArr] = useState([]);

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

    const setupSearchFilms = (searchedKeyword) => {
        if (searchedKeyword === undefined) return searchFilms(" ");

        console.log("searched keyword: ", searchedKeyword);
        searchFilms(searchedKeyword);
    }

    const searchFilms = (myKeyword) => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${myKeyword}&page=1&include_adult=false`)
            .then(response => response.json())
            .then(function (searchFilmsJson) {
                console.log("searchFilmsJson: ", searchFilmsJson);
                displaySearchedFunc(searchFilmsJson.results);
            })
            .catch(err => console.error(err));
    }

    const displaySearchedFunc = (searchedFilmsJson) => {
        setSearchedArr(searchedFilmsJson);
        console.log("searchedArr: ", searchedArr);
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
        const overview = document.getElementById(descId);
        overview.classList.toggle('d-none');
    }

    useEffect(() => {
        getGenres();
        setupFilms();
    }, []);

    const checkEr = (myImg) => {
        if(myImg === null) return 'https://drive.google.com/uc?export=download&id=1GWvewAMlc1ZcGtOqD1eLwX_klApenL6T'
        const regularImg = `${IMG_URL+myImg}`;
        return regularImg;
    }

    return (
        <>
            <br />
            <Container className='d-flex align-items-start justify-content-start'>
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        id='controller'
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        defaultValue=""
                        onChange={(e) => { setSearchedKeyword(e.target.value); setupSearchFilms(searchedKeyword) }}
                    />
                    <Button onClick={(e) => { setSearchedKeyword(" "); setupSearchFilms() }} variant="outline-light">Close</Button>
                </Form>
                <br />
                <br />
            </Container>
            <Row xs={3} md={6} className="g-3">
                {searchedArr && searchedArr.map(searched =>
                    <div key={searched.id}>
                        <Col>
                            <Card className="w-75" style={{ color: 'black', maxHeight: '250px' }}>
                                <Card.Img style={{ maxHeight: '150px' }} variant="top" src={checkEr(searched.poster_path)} />
                                <Card.Body>
                                    <Card.Title style={{ maxHeight: '28px' }}>{searched.title}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    </div>
                )}
            </Row>
            <br />
            <br />
            <br />
            <h1 style={{ color: 'white', textAlign: 'center' }}>Sort By Category!</h1>
            {myGenres && myGenres.map(genres =>
                <ButtonToolbar className='d-inline-flex mt-3' aria-label="Toolbar with button groups">
                    <ButtonGroup className="me-2" aria-label="First group">
                        <Button onClick={() => setupFilms(genres.id)} style={{ borderRadius: '5em' }} variant='outline-light'>{genres.name}</Button>
                    </ButtonGroup>
                </ButtonToolbar>

            )}
            <br />
            <br />
            <Row xs={3} md={6} className="g-3">
                {genredFilms && genredFilms.map(genred =>
                    <div className='final-film' key={genred.id}>
                        <Col>
                            <Card style={{ border: '0' }} className='w-100'>
                                <Card.Img style={{ maxHeight: '280px', overflow: 'hidden' }} onMouseEnter={() => viewDesc(genred.id)} onMouseLeave={() => viewDesc(genred.id)} variant="top" src={checkEr(genred.poster_path)} />
                                <Card.Body>
                                    <Card.Title style={{ maxHeight: '25px', overflow: 'visible' }}>{genred.title}</Card.Title>
                                    <Card.Subtitle style={{ marginTop: '4rem' }}>{genred.vote_average}</Card.Subtitle>
                                    <Card.Text drop='up' id={genred.id} className="d-none">
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
