import Header from './components/Header';
import '../src/styles/index.css';
import Tasks from './components/Tasks';
import {useState} from 'react'
import Footer from './components/Footer';
import AddTask from './components/AddTask';
import {BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Landing from './components/Landing';




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
        
         <Landing></Landing> 

       </div>  
     )}/> 


      <Route path='/panel' 
      exact
      render={(props) => (
        <div className='container'>
            <Header onAdd={() => setShowAddTask(!showAddTask)}/>
      {showAddTask && <AddTask onAdd={addTask} />}

      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}/> : 'No hay actividades para realizar'}


        </div>

      )}/>

      
      
      <Footer> </Footer>

    </div>
    </Router>

    
  )
  
}

export default App