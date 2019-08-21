/* eslint-disable react/jsx-filename-extension */
import React, { useState, useContext } from 'react';

import AlertContext from '../../context/alert/alertContext';

const Register = () => {
  const alertContext = useContext(AlertContext);

  const { setAlert } = alertContext;

  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    password2: '',
  });

  const {
    firstName,
    lastName,
    username,
    email,
    password,
    password2,
  } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match');
      console.log('password no match');
    } else {
      console.log('Register submit');
    }
  };

  return (
    <div>
      <form className="form-container" onSubmit={onSubmit}>
        <div className="p-4">
          <label htmlFor="firstName">First Name</label>
          <input className="float-right" type="text" name="firstName" value={firstName} onChange={onChange} required />
        </div>
        <div className="p-4">
          <label htmlFor="lastName" >Last Name</label>
          <input className="float-right" type="text" name="lastName" value={lastName} onChange={onChange} required />
        </div>
        <div className="p-4">
          <label htmlFor="username">Username</label>
          <input className="float-right" type="text" name="username" value={username} onChange={onChange} required />
        </div>
        <div className="p-4">
          <label htmlFor="email">Email</label>
          <input className="float-right" type="email" name="email" value={email} onChange={onChange} required />
        </div>
        <div className="p-4">
          <label htmlFor="password">Password</label>
          <input className="float-right" type="password" name="password" value={password} onChange={onChange} required />
        </div>
        <div className="p-4">
          <label htmlFor="password2">Confirm Password</label>
          <input className="float-right" type="password" name="password2" value={password2} onChange={onChange} required />
        </div>
        <div>
          <input type="submit" value="Login" />
        </div>
      </form>
    </div>
  );
};

export default Register;
