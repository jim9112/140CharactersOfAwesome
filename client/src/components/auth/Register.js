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

      const { firstName, lastName, username, email, password, password2 } = user;

      const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value});

      const onSubmit = (e) => {
        e.preventDefault();
        console.log('Register submit');
    }

    return (
        <div>
            <form className="center">
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" name="firstName" value={firstName} onChange={onChange} />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" name="lastName" value={lastName} onChange={onChange} />
                </div>
               <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" value={username} onChange={onChange} />
               </div>
               <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={email} onChange={onChange} />
               </div>
               <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={password} onChange={onChange} />
               </div>
               <div>
                    <label htmlFor="password2">Confirm Password</label>
                    <input type="password" name="password2" value={password2} onChange={onChange} />
               </div>
                <input type="submit" value="Login" onSubmit={onSubmit} />
            </form>   
        </div>
    )
};

export default Register;
