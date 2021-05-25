import React, { useEffect, useState } from 'react'
import index from '../styles/index.css'
import {BrowserRouter as Router, Route, useHistory } from 'react-router-dom';
import Button from './Button'
import {FaTimes} from 'react-icons/fa'
import Swal from 'sweetalert2';
import  { clienteAxios } from "../config/axios";


const Agua = () => {

  //const formik = useFormik=({
    //initialValues:{
      //ph : '6.4'
    //},
    //onClick: async values => {
      //const {ph} = values;
    //  alert('el ph ha subido')
   // }
    
  //})


  let history = useHistory();

    return (
        <Router>
        <Route path='/agua' 
        exact 
        render={(props) =>(
       <div className="container">
                    <h3> {""} <FaTimes style={{color: 'black', cursor: 'pointer'}} onClick={()=>history.push('/panel')}></FaTimes></h3>


         <div className="div">
            <nav>
              <header>
              <Button class="fa fa-arrow-circle-o-up" aria-hidden="true" color='black' text='Aumentar ph' onClick={
                  Swal.fire({
                    icon: "warning",
                    title: "ph demasiado ácido",
                    text: "el ph acutal es de 4.5"
                  })
              }></Button>
            
              <Button  color='black' text='Disminuir ph' ></Button>


              </header>
            

            </nav>

            

                        </div>

       </div>  
     )}/> 
            
        
        </Router>
    )
}

export default Agua
