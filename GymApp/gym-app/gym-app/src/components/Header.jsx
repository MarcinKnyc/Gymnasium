//import React from 'react'
import React, { useState, useEffect } from 'react';
import { ApiClient } from '../codegen/src/ApiClient';
import { WeatherForecastApi } from '../codegen/src/api/WeatherForecastApi';
import axios from 'axios'


const Header = ({storedAuthToken}) => {
  const apiClient = new ApiClient();
apiClient.basePath = 'http://localhost';
const weatherForecastApi = new WeatherForecastApi(apiClient);
const [weatherForecastData, setWeatherForecastData] = useState(null);

console.log(storedAuthToken)

  useEffect(() => {
    apiClient.authentications.oauth2.type='oauth2'
    apiClient.authentications.oauth2.accessToken=storedAuthToken
    
    console.log(apiClient.authentications.oauth2.accessToken)

    const request = weatherForecastApi.getWeatherForecast((error, data) => {
      if (error) {
        console.error('Error fetching weather forecast:', error);
        return;
      }
      setWeatherForecastData(data);
    });
    const authNames = ['oauth2'];
apiClient.applyAuthToRequest(request, authNames);
  }, [storedAuthToken]);

  return (
    <div id="main">
      <div className="name">
        {weatherForecastData ? (
          <h2>Pogoda: {weatherForecastData[0].summary}</h2>
        ) : (
          <p>Wystąpił błąd podczas ładowania danych pogodowych.</p>
        )}
        <h1>
          <span>GOTOWY</span> NA WYZWANIE?
        </h1>
        <p className="details">
          Zmień swoje ciało, zmień swoje życie - dołącz do naszej siłowni już
          dziś!
        </p>
      </div>
    </div>
  )
}

export default Header
