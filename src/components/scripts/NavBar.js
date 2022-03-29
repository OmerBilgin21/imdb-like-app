import React, { useState } from 'react';
import {
    Navbar,
    Nav,
    Container,
    NavDropdown,
    Offcanvas,
    Form,
    Button
} from 'react-bootstrap';
import { auth } from '../firebase/FirebaseConfig'
import {
    onAuthStateChanged,
    signOut
} from 'firebase/auth'
import Signin from './SignIn';
import Signup from './SignUp';
import HomePage from './HomePage';
import PopularAtUs from '../SortedByCategories/PopularAtUs';
import Firebasecrud from '../firebase/FirebaseCrud';
import Categories from './Categories';
import Mostpopular from '../SortedByCategories/MostPopular';
import Aboutus from './AboutUs';
import Categorizedmovies from '../SortedByCategories/CategorizedMovies';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import '../css/NavBar.css';

const NavBarr = () => {
    const [user, setUser] = useState({});
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });
    const logout = async () => {
        await signOut(auth);
    };
    return (
        <div>
            <Router>
                <Navbar bg="dark" expand={false} variant='dark'>
                    <Container fluid>
                        <Navbar.Brand href="/">Movie <span>Box</span></Navbar.Brand>
                        <Navbar.Toggle aria-controls="offcanvasNavbar" />
                        <Navbar.Offcanvas
                            id="offcanvasNavbar"
                            aria-labelledby="offcanvasNavbarLabel"
                            placement="end"
                            style={{ maxWidth: '350px' }}
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link><span>{<Link className='text-decoration-none' to="signup" >Sign Up</Link>}</span></Nav.Link>
                                    <Nav.Link >{<Link className='text-decoration-none' to="signIn">Sign In</Link>}</Nav.Link>
                                    <Nav.Link >{<Link className='text-decoration-none' to="firebaseCrud">Add Movie To Movie Box</Link>}</Nav.Link>
                                    <NavDropdown title="Categories" id="offcanvasNavbarDropdown" bg='outline-success'>
                                        <NavDropdown.Item>{<Link className='text-decoration-none' to="categories" style={{ color: '#195754' }}>All Categories</Link>}</NavDropdown.Item>
                                        <NavDropdown.Item>{<Link className='text-decoration-none' to="categorized" style={{color: 'black'}} >Go To</Link>}</NavDropdown.Item>
                                        <NavDropdown.Item>{<Link className='text-decoration-none' to="mostPopular" style={{ color: '#195754' }}>Most Popular Of All Time</Link>}</NavDropdown.Item>
                                        <NavDropdown.Item>{<Link className='text-decoration-none' to="PopularAtUs" style={{ color: '#195754' }}>Popular At Us</Link>}</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item>{<Link className='text-decoration-none' to="aboutCreator" style={{ color: '#195754' }}>About Us</Link>}</NavDropdown.Item>
                                    </NavDropdown>
                                    <br />
                                </Nav>
                                <Form>
                                    <Form.Label>
                                        <p><span>User: {user?.email}</span></p>
                                    </Form.Label>
                                    <br />
                                    <Button
                                        variant="outline-success"
                                        onClick={logout}
                                    >
                                        Sign Out</Button>
                                </Form>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
                {/* 00000000000000000000000000000000000000000 */}
                <Routes>
                    <Route exact path='/' element={< HomePage />}></Route>
                    <Route exact path='/categorized' element={< Categorizedmovies />}></Route>
                    <Route exact path='/signup' element={< Signup />}></Route>
                    <Route exact path='/signIn' element={< Signin />}></Route>
                    <Route exact path='/PopularAtUs' element={< PopularAtUs />}></Route>
                    <Route exact path='/firebaseCrud' element={< Firebasecrud />}></Route>
                    <Route exact path='/categories' element={< Categories />}></Route>
                    <Route exact path='/mostPopular' element={< Mostpopular />}></Route>
                    <Route exact path='/aboutCreator' element={< Aboutus />}></Route>
                </Routes>
            </Router>

        </div >
    );
}

export default NavBarr;
