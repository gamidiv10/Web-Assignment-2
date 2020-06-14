import React from 'react';
import './App.css';
import {Register} from './components/register/Register'
import {Login} from './components/login/Login'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Home} from './components/home/Home'
import {People} from './components/role_management/People'
import {ResetPassword} from './components/reset_password/ResetPassword'
import { CreateProject } from './components/create_project/CreateProject'
import {AddUser} from './components/add_user/AddUser'

function App() {
  return (
    <section className="App">
      
      <Router>
        <Switch>
        <Route path="/register" component={Register}/>
        <Route exact path="/" component={Login}/>
        <Route path="/home" component={Home}/>
        <Route path="/resetPassword" component={ResetPassword}/>
        <Route path="/people" component={People}/>
        <Route path="/createProject" component={CreateProject}/>
        <Route path="/addUser" component={AddUser}/>

      </Switch>
      </Router>
    </section>
  );
}

export default App;
