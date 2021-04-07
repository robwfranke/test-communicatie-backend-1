import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';


import './App.css';
import axios from "axios";


const apiKey = 'a95ffa740846f24a0d03465edc5e8294';
const location="utrecht"




function App() {




  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(false);



  useEffect(() => {

    async function fetchData() {
      setError(false);

      try {
        const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location},nl&appid=${apiKey}&lang=nl`);
        setWeatherData(result.data);
        console.log(result.data)

      } catch (e) {
        console.error(e);
        setError(true);
              }
    }

    if (location) {
      fetchData();
    }

  }, []);



  return (
    <div className="App">

<span className="location-details">
            {/*{loading && (<span>Loading...</span>)}*/}

  {weatherData &&
  <>
    <h2>{weatherData.weather[0].description}</h2>
    <h3>{weatherData.name}</h3>
    <h3>{weatherData.main.temp}K</h3>
    <h3>{Math.round(10*((weatherData.main.temp) - 273.15))/10}</h3>
  </>
  }
          </span>



    </div>
  );
}

export default App;
