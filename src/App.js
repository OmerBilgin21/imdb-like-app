import Signup from "./components/scripts/SignUp"
import Signin from "./components/scripts/SignIn";
import Landing from "./components/scripts/Landing";
import Filmapi from "./components/scripts/FilmApi";
import Firebasecrud from "./components/firebase/FirebaseCrud";
import Films from "./components/scripts/Films";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import './App.css'

function App() {
  return (
    <Router>
      <div className="header">
        <ul>
          <li>
            <Link to="signup">Sign Up</Link>
          </li>
          <li>
            <Link to="signIn">Sign In</Link>
          </li>
          <li>
            <Link to="filmApi">Film Api</Link>
          </li>
          <li>
            <Link to="firebaseCrud">Firebase Crud</Link>
          </li>
          <li>
            <Link to="landing">Landing Page</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route exact path='/signup' element={< Signup />}></Route>
        <Route exact path='/signIn' element={< Signin />}></Route>
        <Route exact path='/filmApi' element={< Filmapi />}></Route>
        <Route exact path='/firebaseCrud' element={< Firebasecrud />}></Route>
        <Route exact path='/landing' element={< Landing />}></Route>
      </Routes>
    </Router>
  )
}

export default App;
