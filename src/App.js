import React, {useState} from 'react';
import Login from './login';
import { UserContext } from './UserContext';

import './App.css';
import axios from 'axios';
const api = axios.create({baseURL: 'http://localhost:3000/api'});

function App() {
  const [user, setUser] = useState();
  return (
    <div className="App" >
      <UserContext.Provider value={{user,setUser}}>
        <Login />
        {user ? <h1>{user.username}</h1>: null}
      </UserContext.Provider>
    </div>
  );
}


export default App;
