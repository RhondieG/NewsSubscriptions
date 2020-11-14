import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, 
  Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import SignUp from './components/pages/SignUp';
import AboutUs from './components/pages/AboutUs';
import Enviornment from './components/pages/Enviornment';
import Market from './components/pages/Market';
import Polls from './components/pages/Polls';
import Opinion from './components/pages/Opinion';
import Stories from './components/pages/Stories';
import Numbers from './components/pages/Numbers';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component ={Home} />
          <Route path='/signUp' component ={SignUp} />
          <Route path='/aboutUs'  component ={AboutUs} />
          <Route path='/enviornment'  component ={Enviornment} />
          <Route path='/market'  component ={Market} />
          <Route path='/polls'  component ={Polls} />
          <Route path='/opinion'  component ={Opinion} />
          <Route path='/stories'  component ={Stories} />
          <Route path='/numbers'  component ={Numbers} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
