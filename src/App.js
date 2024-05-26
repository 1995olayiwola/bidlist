
import './App.css';
import {Route,BrowserRouter as Router,Link} from 'react-router-dom';
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Project from './Components/Project';
import Tenders from './Components/Tenders';
import About from './Components/About';
import Bidlists from './Components/Bidlists';

function App() {
  return (
    
    <Router>
      <div className="App">
      <Route  component={Home} path="/" exact />
      <Route  component={Contact} path="/contact" exact/>
      <Route component={Bidlists} path="/bidlist" exact/>
      <Route  component={Project} path="/project" exact/>
      <Route  component={Tenders} path="/tender" exact/>
      <Route  component={About} path="/about" exact/>
      
      </div>
    </Router>
   
  );
}

export default App;
