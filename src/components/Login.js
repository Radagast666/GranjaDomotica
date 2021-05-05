import React from 'react';
import '../styles/index.css';

const Login = () => {
    return (
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
                        />

                        <input 
                            type="password"
                            placeholder="Password"
                            name="password"
                            className="input"
                        />


                        <button
                            type="submit"
                            className="btn btn-primary btn-block"
                        >
                        Iniciar
                        </button>
                </form>
        </div>
        </>
    )
}

export default Login