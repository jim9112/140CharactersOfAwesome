/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';


const Register = () => {
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
    console.log('Register submit');
  };

  return (
    <div>
      <form className="form-container">
        <div className="p-4">
          <label htmlFor="firstName">First Name</label>
          <input className="float-right" type="text" name="firstName" value={firstName} onChange={onChange} />
        </div>
        <div className="p-4">
          <label htmlFor="lastName" >Last Name</label>
          <input className="float-right" type="text" name="lastName" value={lastName} onChange={onChange} />
        </div>
        <div className="p-4">
          <label htmlFor="username">Username</label>
          <input className="float-right" type="text" name="username" value={username} onChange={onChange} />
        </div>
        <div className="p-4">
          <label htmlFor="email">Email</label>
          <input className="float-right" type="email" name="email" value={email} onChange={onChange} />
        </div>
        <div className="p-4">
          <label htmlFor="password">Password</label>
          <input className="float-right" type="password" name="password" value={password} onChange={onChange} />
        </div>
        <div className="p-4">
          <label htmlFor="password2">Confirm Password</label>
          <input className="float-right" type="password" name="password2" value={password2} onChange={onChange} />
        </div>
        <div>
          <input type="submit" value="Login" onSubmit={onSubmit} />
        </div>
      </form>
    </div>
  );
};

export default Register;
