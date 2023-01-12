import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Home = () => {
    const navigate = useNavigate();
    const handleClickLogin = () => navigate('/login');
    const handleClickRegister = () => navigate('/register');


    const navigateToLogin = (e) => {
        e.preventDefault();
        navigate('/login');
    };

    const navigateToRegister = (e) => {
        e.preventDefault()
        navigate('/register');
    };
    return (

        <div className="login-register">

            <div className="buttons">
                <form action="./" method="post">
                    <input id="account" onClick={navigateToLogin} className="log-btn" type="submit" value="Login/Out" name="login"></input>
                    <input id="peep" onClick={navigateToRegister} className="log-btn" type="submit" value="Register" name="register"></input>
                </form>

            </div>

        </div>

    );
}

export default Home;