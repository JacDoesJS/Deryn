import './App.css';
import AllNewsItems from './Components/AllNewsItems.jsx';
import Footer from './Components/Footer.jsx';
import Header from './Components/Header.jsx';
import axios from 'axios';
import { useEffect, useState } from 'react';


function App() {
  const [newsData, setNewsData] = useState([]);
  const [errorStatus, setErrorStatus] = useState();
  const [getError, setGetError] = useState({ message: ``, count: 0 });

  const getNewsData = async () => {
    try {
      const response = await axios.get(process.env.REACT_APP_GUARDIANNEWSDATAURL);
      console.dir(response);

      (response.data.response.results.length ? setNewsData(response.data.response.results) : new Error(`Cannot find any news right now`));
    }
    catch (error) {
      console.log(error.message);
      setErrorStatus(error.message);
      setGetError({ message: `Data not available from the server: ${error.message}`, count: 0 });
    }
  }

  useEffect(() => {
    getNewsData();
  }, []);


  return (
    <main>
      {errorStatus && <p>There is an error: {errorStatus}</p>}
      {!errorStatus && newsData.length === 0 ? <p className="loading">Your news headlines are loading...</p> :

        <div className="App">
          <header className="App-header">
            <div>
              <Header />
            </div>
          </header>
          <AllNewsItems newsData={newsData} />
          <Footer />
        </div>
      }
    </main>
  )
}

export default App;
