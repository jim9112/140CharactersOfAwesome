import React, { useContext, useState, useEffect } from 'react';
import AuthContext from '../context/auth/authContext';
import AlertContext from '../context/alert/alertContext';

import { Link } from 'react-router-dom';

const Login = (props) => {
    
    const authContext = useContext(AuthContext);
    const alertContext = useContext(AlertContext);

    const { setAlert } = alertContext;
    const { login, error, clearErrors, isAuthenticated } = authContext;

    useEffect(() => {
        if (isAuthenticated) {
          props.history.push('/');
        }
    
        if (error === 'Invalid Credentials') {
          setAlert(error, 'danger');
          clearErrors();
        }
      }, [error, isAuthenticated, props.history]);


    const onSubmit = e => {
        e.preventDefault();
        console.log('Test');
        if (email === '' || password === '') {
            setAlert('Invalid Credentials')
          } else {
            login({
              email,
              password
            })
          }
    }
    
    const [user, setUser] = useState({
        email: '',
        password: '',
      });
    
      const { email, password} = user;
    
      const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value});

    return(
        <div className='container front-page'>
            <div className='half-screen'>
                <h1 className="text-center font-style top-20">Welcome to 140CharactersOfAwesome</h1>
                <h2 className="text-center">Kind of like that other social media site except:</h2>
                <ul className="center">
                    <li>No politicians</li>
                    <li>No celebrities</li>
                    <li>Way less features</li>
                    <li>Way more downtime</li>
                </ul>
            </div>
            <div className="other-half-screen">
                    <form className="center top-20" onSubmit={onSubmit} >
                        <input type="email" name="email" value={email} onChange={onChange} />
                        <input type="password" name="password" value={password} onChange={onChange}/>
                        <input type="submit" className="btn" value="Login" />
                    </form>
                    <div className="text-center">
                        <h2 className="">Dont have an account yet?</h2>
                        <h2 className="">Click below to get started</h2>
                        <Link to="/register"><button className="btn">Register</button></Link>
                        
                    </div>
            </div>
        </div>
    )
}

export default Login;