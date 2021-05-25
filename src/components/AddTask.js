import {useState} from 'react'
import {FaTimes} from 'react-icons/fa'
import { useHistory } from 'react-router-dom'
import { useFormik } from 'formik';



 const AddRiego = ( onAdd ) => {

    //const formik = useFormik=({
    //initialValues:{
      //riego : ''
    //},
    //onClick: async values => {
        //const {riego} = values;
    //  alert(')
   // }
    
  //})

   

    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState()
    let history = useHistory();

    const onSubmit= (e) => {
        e.preventDefault()
    
        if(!text){
            alert('Por favor agrega campos validos')
            return
            
        }
    
        onAdd({text, day, reminder})

        setText('')
        setDay('')
        setReminder(false)

    }




    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className="container">
            <h3> {""} <FaTimes style={{color: 'black', cursor: 'pointer'}} onClick={()=>history.push('/panel')}></FaTimes></h3>

            <div class="form-group row">
            <label for="example-datetime-local-input" class="col-2 col-form-label">Fecha y hora</label>
                <div class="col-10">
                    <input class="form-control" type="datetime-local" value="2021-05-20T13:00:00" id="example-datetime-local-input"></input>
                </div>

            </div>
            
            
            <div className= 'form-control from-control-check'>
                <label>
                    Recordatorio
                </label>
                <input type ='checkbox' checked={reminder} value={reminder} onChange={
                    (e)=> setReminder(e.currentTarget.checked)
                }/>
            </div>
            
            

            <input type = 'submit' value='Guardar' className='btn btn-block'></input>
            
            </div>
        </form>
    )
}

export default AddRiego
