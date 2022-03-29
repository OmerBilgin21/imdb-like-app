import React from 'react';
import { Carousel, Placeholder } from 'react-bootstrap';
import '../css/HomePage.css';
import { } from '../images/pp.jpeg'
const HomePage = () => {
    return (
        <div className='reach-home'>

            <Carousel bg='dark' variant='light'>

                <Carousel.Item>
                    <img
                        className="d-block"
                        style={{ width: '100%', height: '25%', maxHeight: '480px' }}
                        src="https://drive.google.com/uc?export=download&id=1BKt644BLhLmgFUdgK06qFNFAViRAZEii"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Spider Man: No Way Home</h3>
                        <p>With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block"
                        style={{ width: '100%', height: '25%', maxHeight: '480px' }}
                        src="https://drive.google.com/uc?export=download&id=1dSl7_6WU4Ee9Uv15sp1b5-LBx-aRThYD"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>The Batman</h3>
                        <p>When the Riddler, a sadistic serial killer, begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block"
                        style={{ width: '100%', height: '25%', maxHeight: '480px' }}
                        src="https://drive.google.com/uc?export=download&id=1KYPVr70oSlo2g9BsDt4_haO9h-0iV3-F"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Star Wars: Episode: III - Revenge of the Sith</h3>
                        <p>Three years into the Clone Wars, the Jedi rescue Palpatine from Count Dooku. As Obi-Wan pursues a new threat, Anakin acts as a double agent between the Jedi Council and Palpatine and is lured into a sinister plan to rule the galaxy.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className='spacer-convince'>
                <br />
            </div>

            <div className="container px-4 py-5">
                <h2 className="pb-2 border-bottom">What Movie Box Offers</h2>

                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
                    <div className="col d-flex align-items-start">

                        <svg xmlns="http://www.w3.org/2000/svg" style={{ width: '35px', height: '16px' }} fill="currentColor" className="adjust bi bi-film mt-3" viewBox="0 0 16 16">
                            <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z" />
                        </svg>
                        <div>
                            <h4 className="fw-bold mb-0">Dynamic Lists</h4>
                            <p>Organize your lists as genres, rates, views... However you like.</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" style={{ width: '45px', height: '16px' }} fill="currentColor" className="adjust bi bi-film mt-3" viewBox="0 0 16 16">
                            <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z" />
                        </svg>
                        <div>
                            <h4 className="fw-bold mb-0">Rate movies</h4>
                            <p>You can up or downvote the movies as you like. Also see what other people thinks.</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" style={{ width: '35px', height: '16px' }} fill="currentColor" className="adjust bi bi-film mt-3" viewBox="0 0 16 16">
                            <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z" />
                        </svg>
                        <div>
                            <h4 className="fw-bold mb-0">New Social Media</h4>
                            <p>Add movies to your watchlist & share it with your friends.</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" style={{ width: '40px', height: '16px' }} fill="currentColor" className="adjust bi bi-film mt-3" viewBox="0 0 16 16">
                            <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z" />
                        </svg>
                        <div>
                            <h4 className="fw-bold mb-0">Save Time</h4>
                            <p>Search through hundreds of movies and find the one to invest your time.</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" style={{ width: '35px', height: '16px' }} fill="currentColor" className="adjust bi bi-film mt-3" viewBox="0 0 16 16">
                            <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z" />
                        </svg>
                        <div>
                            <h4 className="fw-bold mb-0">Get Recommendations</h4>
                            <p>According to your upvote and downvote's we prepare a list of movies just for you.</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" style={{ width: '40px', height: '16px' }} fill="currentColor" className="adjust bi bi-film mt-3" viewBox="0 0 16 16">
                            <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z" />
                        </svg>
                        <div>
                            <h4 className="fw-bold mb-0">Absolute Privacy</h4>
                            <p>We don't store or share your data with anyone. Only your email & password is stored.</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" style={{ width: '35px', height: '16px' }} fill="currentColor" className="adjust bi bi-film mt-3" viewBox="0 0 16 16">
                            <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z" />
                        </svg>
                        <div>
                            <h4 className="fw-bold mb-0">No Adult Content</h4>
                            <p>Our website has completely adult free content & safe for childrens.</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" style={{ width: '35px', height: '16px' }} fill="currentColor" className="adjust bi bi-film mt-3" viewBox="0 0 16 16">
                            <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z" />
                        </svg>
                        <div>
                            <h4 className="fw-bold mb-0">New Features</h4>
                            <p>Coming soon...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
