import Button from './Button'
import index from "../styles/index.css"
import {BrowserRouter as Router, Route, useHistory } from 'react-router-dom';
import {FaTimes} from 'react-icons/fa'
import { useState } from 'react';
import { Formik, useFormik } from 'formik';
import Swal from 'sweetalert2';




 const Alimento = () => {

  

  //const formik = useFormik=({
    //initialValues:{
      //compuerta : 'cerrada'
    //},
    //onClick: async values => {
      //const { compuerta } = values;
   // }
    
  //})

  

  let history = useHistory();

  
    return (
        <Router>
          <Route path='/alimento' 
     exact 
     render={(props) =>(
       
       <div className="container">
          <h3> {""} <FaTimes style={{color: 'black', cursor: 'pointer'}} onClick={()=>history.push('/panel')}></FaTimes></h3>



         <div className="div">
           <header>

            <Button color='black' text='Abrir compuerta' onClick={
              Swal.fire({
                icon: "warning",
                text: "compuerta abierta"
              })
            }></Button>
            
                        <Button color='black' text='Cerrar compuerta'></Button>
                       
                        </header>
                        </div>

       </div>  
     )}/> 
            
        
        </Router>
        )
}

export default Alimento
