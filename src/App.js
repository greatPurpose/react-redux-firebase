import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetail'
import SignIn from './components/auth/Signin'
import SignUp from './components/auth/Signup'
import CreateProject from './components/projects/CreateProject'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>
        <Switch>
          <Route exact path='/' component={ Dashboard } />
          <Route path='/project/:id' component= { ProjectDetails }></Route>
          <Route path='/signin' component={SignIn}></Route>
          <Route path='/signup' component={SignUp}></Route>
          <Route path='/create' component={CreateProject}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
