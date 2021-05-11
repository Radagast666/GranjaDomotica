import React, { useEffect, useState } from 'react'
import '../styles/auth.css';
import {BrowserRouter as Router, useHistory } from 'react-router-dom';

import axios from 'axios'
   

const Register = () => {


    let history = useHistory()

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [nombre, setNombre] = useState([])
    const [users, setUsers] = useState([])
    const [apellidoPaterno, setApellidoPaterno] = useState([])
    const [numTelefono, setNumTelefono] = useState([])
    const [user, setUser] = useState([])
    const [password, setPassword] = useState([])
    const [reminder, setReminder] = useState(false)
    const baseUrl= 'http://25.77.243.46:8080'


    async function getUser(){
        try{
            const response  = await axios({
                url: `${baseUrl}/usuarios/`,
                method: 'GET'
            })
            return response
        } catch(e){
            console.log(e)
        }
    }


    async function saveUser(userData){
        try{
            const formData = new FormData()
    
            formData.append('nombre', userData.nombre)
            formData.append('apellidoPaterno',userData.apellidoPaterno)
    
            formData.append('numTelefono', userData.numTelefono)
            formData.append('user',userData.user)
            formData.append('password', userData.password)
            

            const response = await axios({
                url: `${baseUrl}/usuarios/`,
                method: 'POST',
                data: formData,
            })
    
            return response
    
        }catch(e){
            console.log(e)
        }
    
    }



    async function loadUsers(){
        const response = await getUser()

        if(response.status === 200){
            setUsers(response.data.users)
        }
    }

    useEffect(() => {
        loadUsers()
    }, [])


    const onSubmit = (e) => {
        e.preventDefault()
       // if(!text){
          //  alert('Por favor escriba algo')
            //return
        //}
        handleSubmit(nombre, apellidoPaterno, numTelefono, user, password)
        setApellidoPaterno('')
        setPassword('')
        setUser('')
        setNombre('')
        setNumTelefono('')
        setReminder(false)
        history.push("/")

        
    }

   
    const handleSubmit = async (data) => {
        await saveUser(data)
        loadUsers()
        setIsModalOpen(false)
      }


    return (
        <Router>
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
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                        />

                        <input
                            type="text"
                            placeholder="Apellidos"
                            name="apellidoPaterno"
                            className="input"
                            autoComplete="off"
                            value={apellidoPaterno}
                            onChange={(e)=> setApellidoPaterno(e.target.value)}
                        />

                        <input
                            type="text"
                            placeholder="Numero Telefonico"
                            name="numTelefono"
                            className="input"
                            autoComplete="off"
                            value={numTelefono}
                            onChange={(e) => setNumTelefono(e.target.value)}
                        />

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
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className='form-control form-control-check'>
                            <label>Aceptar términos y condiciones</label>
                            <input
                              type='checkbox'
                              checked={reminder}
                                value={reminder}
                                onChange={(e) => setReminder(e.currentTarget.checked)}>

                                </input>

                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary btn-block" onClick={()=>{
                                onSubmit(this)
                            }}
                        >
                            Registar
                        </button>




                        

                </form>

            </div>

        </>
        </Router>
    )
}

export default Register