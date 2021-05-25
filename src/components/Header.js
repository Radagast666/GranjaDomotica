import PropTypes from 'prop-types';
import Button from './Button';
import Alimento from './Alimento'
import {BrowserRouter as Router, Link, Route, Switch, useHistory } from 'react-router-dom';
import LombriComposta from './LombriComposta'
import Agua from './Agua'
import { useState } from 'react';
import AddRiego from './AddTask';

const Header  = ({title, onAdd})=> {

    const[showAlimento, setShowAlimento] = useState(false)
    const[showComposta, setShowComposta] = useState(false)
    const[showAgua, setShowAgua] = useState(false)
    const[showRiego, setShowRiego] = useState(false)

    let history = useHistory();

   
    return(
        
        <Router>
         
            
        <header>
            <h1>{title}</h1>

            
                
            
            
            <Link to='/composta' className="btn">Cámara composta</Link>
            <Link to='/alimento'  className="btn">Control compuerta</Link>
            <Link to='/agua' className="btn">Estado del agua</Link>
            <Link to='/riego'  className="btn">Cultivos</Link>
            
            





        </header>
        <Switch>
        <Route exact path="/alimento" component={Alimento}/>
        <Route exact path="/composta" component={LombriComposta}/>
        <Route exact path="/agua" component={Agua}/>
        <Route exact path="/riego" component={AddRiego}/>
        </Switch>
        </Router>
    )
}

Header.defaultProps = {
    title: 'Granja Dómotica',
}

Header.prototype = {
    title: PropTypes.string.isRequired
}

export default Header