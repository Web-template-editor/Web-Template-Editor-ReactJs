import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,
Route,
Switch}from 'react-router-dom';
import Header from './Components/Header';
import Project from './Components/Project';
import Details from './Components/Details';
// import Home from './Components/Home';
import './Components/components.css';
import Media from './Components/Media';
import Welcome from './Components/Welcome';
import Tableproject from './Components/Tableproject';
import Readmore from './Components/Readmore';
import Selection from './Components/Selection';
import Members from './Components/Members';
import Memberform from './Components/Memberform';
import Projectlist from './Components/Projectslist';
import Projectform from './Components/Projectform';
import UpdateProjectForm from './Components/UpdateProjectForm';
import Typing_effect from './Components/Typing_effect';


import './App.css';
import Projects from './Components/Projects';
import UpdateMemberForm from './Components/UpdateMemberForm';


function App(){

  
    return(
      <div className='app'>
      <Router >
      <Header/>
     
        <Switch>
        
        <Route path='/updatemember/:id' ><UpdateMemberForm/></Route>
        <Route path='/updateproject/:id' ><UpdateProjectForm/></Route>
        <Route path='/Projects'><Projects/></Route>
          <Route path='/project/:id'><Project/></Route>
          <Route path='/Details'><Details/></Route>
          <Route path='/Media/:id'><Media/></Route>
          <Route path='/Tableproject'><Tableproject/></Route>
          <Route path='/Readmore'><Readmore/></Route>
          <Route path='/Selection'><Selection/></Route>
          {/* <Route path='/Tablemember'><Tablemember/></Route> */}
          <Route path='/Members'><Members/></Route>
          <Route path='/Memberform'><Memberform/></Route>
          <Route path='/Projectlist'><Projectlist/></Route>
          <Route path='/Projectform'><Projectform/></Route>
          <Route path='/Typing_effect'><Typing_effect/></Route>
          

          <Route path='/'><Welcome/></Route>
       
         


       
        </Switch>
      </Router>
        
      </div>
    )
  }

export default App;