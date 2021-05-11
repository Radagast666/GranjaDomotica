import React, { useState } from 'react';
import '../styles/index.css';
import {BrowserRouter as Router, useHistory } from 'react-router-dom';


const Login = () => {

    let history = useHistory()

    const datos = [
        
            "admin",
             "admin123"

    
]
const[user, setUser] = useState([])
const[password, setPassword] = useState([])

const validation=() =>{

    if(datos[0] === user){
        history.push("/panel")
        return
    }
    else{
        alert("Por favor registrese")
        history.push("/register")
        return
    }
}
    return (

        <Router>
        <>
        <header>Granja Domotica</header>
            <div className="main">
                <form >
                    <h3 className="titulo">Login</h3>
                        <input 
                            type="text"
                            placeholder="Usuario"
                            name="user"
                            className="input"
                            autoComplete="off"
                            value={user}
                            onChange={(e) => setUser(e.target.value)}
                        />

                        <input 
                            type="password"
                            placeholder="Contraseña"
                            name="password"
                            className="input"
                            autoComplete="off"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button 
                        type="submit"
                        className="btn btn-primary btn-block" onClick={()=>{
                            validation()
                        }}> Iniciar sesión</button>




                        
                </form>
                

                

        </div>
       

    

     
     
        </>
        </Router>
    )
}

export default Login