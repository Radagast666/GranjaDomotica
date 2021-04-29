import React from 'react'
import '../styles/auth.css';


export const Register = () => {
    return (
        <>
        <header>Granja Domotica</header>
            <div className="main">
                <form> 
                    <h3 className="titulo">Registrar</h3>
                        <input
                            type="text"
                            placeholder="Nombre (s)"
                            name="nombre"
                            className="input"
                            autoComplete="off"
                        />

                        <input
                            type="text"
                            placeholder="Apellidos"
                            name="apellidoPaterno"
                            className="input"
                            autoComplete="off"
                        />

                        <input
                            type="text"
                            placeholder="Numero Telefonico"
                            name="numTelefono"
                            className="input"
                            autoComplete="off"
                        />

                        <input
                            type="text"
                            placeholder="Usuario"
                            name="user"
                            className="input"
                            autoComplete="off"
                        />

                        <input
                            type="password"
                            placeholder="Contraseña"
                            name="password"
                            className="input"
                        />

                        <button
                            type="submit"
                            className="btn btn-primary btn-block"
                        >
                            Registar
                        </button>  
                </form>
            </div>
        </>
    )
}
