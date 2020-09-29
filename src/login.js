import React, {useContext, useState} from 'react';
import './login.css';
import axios from 'axios';
import { UserContext } from './UserContext';
const api = axios.create({baseURL: 'http://localhost:3000/api'});
function Login() {

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [loggedIn, setLoggedIn] = useState(false);
    const {user, setUser} = useContext(UserContext);
    return(
        <div className="login-container">
            <form className="login-form" onSubmit={(e) => handle_submit(e)}>
                <input type="text" placeholder="Enter your username" onChange={(e)=> setUserName(e.target.value)}/>
                <input type="text" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit">Login</button>
            </form>
        </div>
    );

    function handle_submit(e) {
        e.preventDefault();
        setUserName(username.trim());
        api.post('/login', null, {params: {username: username, password: password}}).then((res) => {
            console.log(res);
            if(res.data.success) 
            {
                setLoggedIn(true);
                setUser({username: username, loggedIn: loggedIn});
                console.log(user);
            }
        });
        // CODE FOR CREATE
        // api.post(`/create`, null, {params: {email: email, password: password}}).then((res) => {
        //     console.log(res);
        // });
    }
}

export default Login;