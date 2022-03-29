import './App.css'
import Signin from "./components/scripts/SignIn";
import Signup from "./components/scripts/SignUp";
import PopularAtUs from './components/SortedByCategories/PopularAtUs'; 
import Firebasecrud from "./components/firebase/FirebaseCrud";
import Categories from "./components/scripts/Categories";
import HomePage from "./components/scripts/HomePage";
import { Navbar, Nav, Container } from 'react-bootstrap';
import Footer from './components/scripts/Footer';
import NavBar from './components/scripts/NavBar';


function App() {
  return (
    <div className='all'>
        <NavBar/>
        <Footer />
    </div>
  )
}

export default App;
