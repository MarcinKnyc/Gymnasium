import React, { useEffect, useState } from 'react'
import axios from 'axios'

const PassesPage = ({ storedAuthToken }) => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios
      .get('http://localhost/WeatherForecast', {
        headers: {
          Authorization: `Bearer ${storedAuthToken}`,
        },
      })
      .then((res) => {
        //console.log(res.data)
        setData(res.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [storedAuthToken])
  return (
    <div id="login">
      {data.map((item) => {
        return <h1>{item.date}</h1>
      })}
    </div>
  )
}

export default PassesPage
