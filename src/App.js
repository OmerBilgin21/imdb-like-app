import { Container } from "react-bootstrap";
import Signup from "./components/scripts/SignUp"
import './app.css'

function App() {
  return (
    <Container>
        <div className="sign-up w-100">
          <Signup />
        </div>
    </Container>
  )
}

export default App;
