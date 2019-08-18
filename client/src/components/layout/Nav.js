import React from 'react';

import { Link } from 'react-router-dom';
import chicken from '../media/chicken.png';

const Nav = () => {
    return (
        <div className='text-center'>
           <img src={chicken} alt="Chicken Icon" className="top-20" />
            <ul className="no-pad">
                <li><Link to="./index.html">Home</Link></li>
                <li><Link to="">Account</Link></li>
                <li><Link to="/login">Logout</Link></li>
            </ul> 
        </div>
    )
}

export default Nav;
