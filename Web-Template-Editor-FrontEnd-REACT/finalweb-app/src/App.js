import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,
Route,
Switch}from 'react-router-dom';
import Header from './Components/Header';
import Project from './Components/Project';
import Details from './Components/Details';
import Home from './Components/Home';
import './Components/components.css';
import Media from './Components/Media';
import Welcome from './Components/Welcome';
import Tableproject from './Components/Tableproject';
import Readmore from './Components/Readmore';
import Selection from './Components/Selection';
import Tablemember from './Components/Tablemember';
import Members from './Components/Members';
import Memberform from './Components/Memberform';
import Projectlist from './Components/Projectslist';
import Projectform from './Components/Projectform';

import './App.css';


function App(){

  
    return(
      <div class='app'>
      <Router>
      <Header/>
      <Home/>
        <Switch>
        
          <Route path='/project/:id' render={(props) => <Project {...props} />}/> 
          <Route path='/Details'><Details/></Route>
          <Route path='/Media'><Media/></Route>
          <Route path='/Welcome'><Welcome/></Route>
          <Route path='/Tableproject'><Tableproject/></Route>
          <Route path='/Readmore'><Readmore/></Route>
          <Route path='/Selection'><Selection/></Route>
          <Route path='/Tablemember'><Tablemember/></Route>
          <Route path='/Members'><Members/></Route>
          <Route path='/Memberform'><Memberform/></Route>
          <Route path='/Projectlist'><Projectlist/></Route>
          <Route path='/Projectform'><Projectform/></Route>
       
         


       
        </Switch>
      </Router>
        
      </div>
    )
  }

export default App;