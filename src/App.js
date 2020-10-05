import React, {useState} from 'react';
import Login from './login';
import { UserContext } from './UserContext';
import {Route, Link, Switch, Redirect} from 'react-router-dom';
import Home from './home';
import UnauthenticatedRoute from './UnauthenticatedRoute';
import AuthenticatedRoute from './AuthenticatedRoute';


import './App.css';
import axios from 'axios';
const api = axios.create({baseURL: 'http://localhost:3001/api'});

function App() {
  const [user, setUser] = useState({username: null, loggedIn: false});
  return (
    <div className="App" >
      <UserContext.Provider value={{user,setUser}}>
        <Switch>
            <Route exact component={Login} path='/'/>
            <Route exact component={Home} path='/home'/>
        </Switch>
      </UserContext.Provider>
    </div>
  );
}



export default App;
