import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './Login';
import Register from './Register'
import '../styles/auth.css';



const Landing = () => {
    return (
        <Router>
        <div>

           <Link to="/login" className="btn">Iniciar sesión</Link>
           <Link to="/register" className="btn">Registrarse</Link>


            
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={Register}/>

            
        </div>
        </Router>
    )
}

export default Landing
