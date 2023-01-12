import PropTypes from 'prop-types';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';

const Login = ({ setLoginUser }) => {
    const [user, setUser] = useState({
        email: ``,
        password: ``,
        // loggedIn: false
    });
    const [loggedIn, setLoggedIn] = useState(false);

    const location = useLocation();

    const handleChange = e => {
        const { name, value, loggedIn } = e.target; // What is loggedIn here for?
        setUser({
            ...user,
            [name]: value,
            [loggedIn]: true
        });
    };
    const logout = async (e) => {
        e.preventDefault();
        const res = await axios.post(`http://localhost:4000/login`, user);
        setLoginUser(res.data.user ? false : true);
        // setLoggedIn({ isLoggedIn: false })  // THIS WAS CAUSING THE PROBLEMS!!!
        setLoggedIn(false);

        console.log("You are logged out")
        alert('You have been logged out of the system');
    }

    const login = async (e) => {
        e.preventDefault();

        const res = await axios.post(`http://localhost:4000/login`, user);
        alert(res.data.message);
        setLoggedIn(res.data.user ? true : false);
        setUser({ email: ``, password: `` });
        setLoginUser(res.data.user);
        // setUser({ loggedIn: 'true' });
        console.log(`You are logged in.`)

    };



    return (
        <>
            {loggedIn && <Navigate to="/addPeep" state={{ from: location }} />}
            <h3 className="logging">Log in to your account</h3>
            <div className="login">
                <form onSubmit={login}>
                    <input type="email" className="log" id="sign-in-email" name="email" value={user.email} onChange={handleChange} placeholder="Your email" />
                    <br />
                    <input type="password" className="log" id="sign-in-password" name="password" value={user.password} onChange={handleChange} placeholder="Your password" />
                    <br />
                    <input type="submit" className="log" value="Login" />
                </form>
                <Link to="/register" className="log">
                    Or register here!
                </Link>
                <div className="logout">
                    <form onSubmit={logout}>
                        <button onSubmit={logout}>Log Out</button>
                    </form>
                </div>
            </div>
        </>
    );
}

// Login.propTypes = {
//     setLoginUser: PropTypes.func.isRequired
// }

export default Login;

