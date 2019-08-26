/* eslint-disable react/jsx-filename-extension */
import React, { useContext } from 'react';

import { Link } from 'react-router-dom';
import chicken from '../media/chicken.png';
import AuthContext from '../../context/auth/authContext';

const Nav = () => {

  const authContext = useContext(AuthContext);

  const { logout } = authContext;

  const onLogout = () => {
    logout();
  }

  return (
    <div className="text-center">
      <img src={chicken} alt="Chicken Icon" className="top-20" />
      <ul className="no-pad">
        {/* <li><Link to="./index.html">Home</Link></li>
        <li><Link to="">Account</Link></li> */}
        <li>
          <a onClick={onLogout} href="#!">Logout</a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
