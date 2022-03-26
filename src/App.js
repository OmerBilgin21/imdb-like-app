import './App.css'
import Signin from "./components/scripts/SignIn";
import Signup from "./components/scripts/SignUp";
import Filmapi from "./components/scripts/FilmApi";
import Firebasecrud from "./components/firebase/FirebaseCrud";
import Categories from "./components/scripts/Categories";
import HomePage from "./components/scripts/HomePage";
import { Navbar, Nav, Container } from 'react-bootstrap';
import Footer from './components/scripts/Footer';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
function App() {
  return (
    <div className='all'>
      <Router>
        <Navbar sticky="top" style={{ maxHeight: '50px' }} bg="dark" variant="dark">
          <Container>
            <Nav className="me-auto align-items-space-between">
              <Nav.Link>{<Link className='text-decoration-none' to="/">Home</Link>}</Nav.Link>
            </Nav>
            <Nav className="me-auto">
              <Nav.Link variant='dark'>{<Link className='text-decoration-none' to="signup">Sign Up</Link>}</Nav.Link>
              <Nav.Link >{<Link className='text-decoration-none' to="signIn">Sign In</Link>}</Nav.Link>
              <Nav.Link >{<Link className='text-decoration-none' to="filmApi">Film Api</Link>}</Nav.Link>
              <Nav.Link >{<Link className='text-decoration-none' to="firebaseCrud">Firebase Crud</Link>}</Nav.Link>
              <Nav.Link >{<Link className='text-decoration-none' to="categories">Categories</Link>}</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Routes>
          <Route exact path='/' element={< HomePage />}></Route>
          <Route exact path='/signup' element={< Signup />}></Route>
          <Route exact path='/signIn' element={< Signin />}></Route>
          <Route exact path='/filmApi' element={< Filmapi />}></Route>
          <Route exact path='/firebaseCrud' element={< Firebasecrud />}></Route>
          <Route exact path='/categories' element={< Categories />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App;
