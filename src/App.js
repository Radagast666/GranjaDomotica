import Header from './components/Header';
import '../src/styles/index.css';
import Tasks from './components/Tasks';
import {useState} from 'react'
import Footer from './components/Footer';
import AddTask from './components/AddTask';
import {BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register'
import Button from './components/Button';



const App = () =>{

  const[showAddTask, setShowAddTask] = useState(true)

  const [tasks, setTasks] = useState([
    {
      id:4,
      text: 'El ph actual es de 6.4',
      day: 'Lunes 3 de mayo a las 15:56',
      reminder:true,
  },
    
    
    
    {
    id:1,
    text: 'Los cultivos necesitan ser regados',
    day: 'Viernes 30 de abril a las 10:41',
    reminder:true,
},
{
    id:2,
    text: 'La compuerta de composta necesita ser abierta',
    day: 'Jueves 29 de abril a las 19:56',
    reminder:true,
},

])

const deleteTask = (id) => {
  setTasks(tasks.filter((task)=>task.id !==id))
}

const addTask = (task) => {
  const id = Math.floor(Math.random()* 10000) + 1

  const newTask = {id, ...task}

  setTasks([...tasks, newTask])
}



  return(
    <Router>
    <div >
      

     <Route path='/' 
     exact 
     render={(props) =>(
       <div>
          <Link to="/login" className="btn"
          > Iniciar sesión</Link>        

          <Link to="/register" className="btn">Registrarse</Link>    
            
            
            
            

       </div>  
     )}/> 

     <Route path='login'
     exact
     render={(props) => (
      
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

                        <div>
                            <Link to="/panel" className="btn">Iniciar</Link>

                        </div>


                        
                </form>
                

                

        </div>
       

    

     
     
        </>
        

     )}/>


      <Route path='/panel' 
      exact
      render={(props) => (
        <div className='container'>
            <Header onAdd={() => setShowAddTask(!showAddTask)}/>
      {showAddTask && <AddTask onAdd={addTask} />}

      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}/> : 'No hay actividades para realizar'}

      <Footer> </Footer>

        </div>

      )}/>

      
      
      <Route exact path="/login" component={Login}/>
      <Route exact path="/register" component={Register}/>
      
    </div>
    </Router>

    
  )
  
}

export default App