import {BrowserRouter as Router, Route } from 'react-router-dom';
import  { clienteAxios } from "../config/axios";
import { useFormik } from "formik";
import { useHistory } from "react-router";
import "../styles/index.css"
import {FaTimes} from 'react-icons/fa'



export const LombriComposta=() => {

  //const formik = useFormik=({
    //initialValues:{
    //},
    //onClick: async values => {
    //  alert('Cámara')
   // }
    
  //})

  

  let history = useHistory();

  


    return (
        
            <Router>
                <Route path='/composta' 
         exact 
         render={(props) =>(
           
           <div className="container">
             <h3> {""} <FaTimes style={{color: 'black', cursor: 'pointer'}} onClick={()=>history.push('/panel')}></FaTimes></h3>

             
            <p className="worms"></p>
             
                
    
           </div>  
         )}/> 
                
            
            </Router>
            
    )
}

export default LombriComposta
