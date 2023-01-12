import './App.css';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx'
import AllPeeps from './components/AllPeeps.jsx'
import AddPeep from './components/AddPeep.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import NotFound from './components/utils/NotFound.jsx';
import Home from './components/Home.jsx';

import axios from 'axios';
import { useEffect, useState } from 'react';

import { Navigate, Routes, Route } from 'react-router-dom';


function App() {
  const [user, setLoginUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [peepData, setPeepData] = useState([]);
  const [errorStatus, setErrorStatus] = useState();
  const [getError, setGetError] = useState();

  const getPeepData = async () => {
    try {
      const response = await axios.get(process.env.REACT_APP_GET_PEEPS);

      (response.data.length ? setPeepData(response.data) : new Error(`Cannot find any peeps right now`));
      // console.log('Your data file contains ' + response.data.length + " items.");

    }
    catch (error) {
      console.log("Here is your error " + error.message);
      setErrorStatus(error.message);
      setGetError({ message: `Peeps not available from the server: ${error.message}`, count: 0 });
      return [];
    }
  }

  useEffect(() => {
    getPeepData();

  }, []);


  return (

    <div className="flex-container">
      <header className="App-header">
        <Header />
      </header>

      <div className="peeps-box">
        <Routes>
          <Route
            exact path="/"
            element={
              <>
                {user && user._id ? <Home setLoginUser={setLoginUser} user={user} /> : <Login setLoginUser={setLoginUser} />}
              </>
            } />
          <Route path="/login" element={<Login setLoginUser={setLoginUser} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />}></Route>
          <Route path="/allPeeps" element={<AllPeeps peepData={peepData} />}></Route>
          <Route
            exact path="/addPeep"
            element={
              <>
                {user && user._id ? <AddPeep /> : <Navigate to="/login" />}
              </>
            } />
          <Route path="/*" element={<NotFound />} />
          {/* <AllPeeps data={{ peepData, error: getError.message }} />
          <Route path="/" element={<AllPeeps peepData={peepData} />} /> */}
        </Routes>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>

  )
}

export default App;
