import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { Login } from './components/Login';
import Inicio from './components/Inicio';
import { Register } from './components/Register';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/login" component={ Login } />
          <Route exact path="/inicio" component={ Inicio } />
          <Route exact path="/registro" component={ Register } />
          <Redirect to="/login" />
        </Switch>
      </Router>
    
    </div>
  );
}

export default App;
