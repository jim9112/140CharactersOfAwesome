import React from 'react';

const Login = () => {
    
    const onSubmit = e => {
        e.preventDefault();
    }
    
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
                        <input type="text" className="light-input" placeholder="Username" />
                        <input type="text" className="light-input" placeholder="Password" />
                        <input type="button" className="btn" value="Login" />
                    </form>
                    <div className="text-center">
                        <h2 className="">Dont have an account yet?</h2>
                        <h2 className="">Click below to get started</h2>
                        <button className="btn">Register</button>
                    </div>
            </div>
        </div>
    )
}

export default Login;