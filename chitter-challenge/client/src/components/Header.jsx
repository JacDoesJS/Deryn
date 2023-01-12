import logo from "./images/logo.png";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Login from "./Login.jsx";

const Header = () => {
    const navigate = useNavigate();
    const handleClickPeep = () => navigate('/addPeep');
    const handleClickAllPeeps = () => navigate('/allPeeps');
    const [user, setLoginUser] = useState({});


    const navigateToAllPeeps = (e) => {
        e.preventDefault();
        navigate('/allPeeps');
    };

    const navigateToAddPeep = (e) => {
        e.preventDefault()
        navigate('/addPeep');
    };

    const navigateToLogin = (e) => {
        e.preventDefault()
        navigate('/login');
    };

    return (

        <div className="head">

            <div className="logo">
                <img src={logo} alt="logo" width="100%" />
            </div>
            <div className="buttons">
                <form action="./" method="post">
                    <input id="loginout" onClick={navigateToLogin} className="button" type="submit" value="login/out" name="loginout"></input>
                    <input id="peep" onClick={navigateToAddPeep} className="button" type="submit" value="PEEP" name="peep"></input>
                    <input id="all-peeps" onClick={navigateToAllPeeps} className="button" type="submit" value="all peeps" name="all-peeps"></input>
                </form>

            </div>

        </div>

    );
}

export default Header;