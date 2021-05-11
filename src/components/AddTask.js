import {useState} from 'react'




 const AddRiego = ( onAdd ) => {


    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState()


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
            <div className= 'form-control'>
                <label>
                    Riego de cultivos
                </label>
                <input type ='text' placeholder='Programar riego' value={text} onChange={
                    (e)=> setText(e.target.value)
                }/>
            </div>
            <div className= 'form-control'>
                <label>
                    Día y hora
                </label>
                <input type ='text' placeholder='Agregar día y hora' value={day} onChange={
                    (e)=> setDay(e.target.value)
                }/>
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
            
            
        </form>
    )
}

export default AddRiego
