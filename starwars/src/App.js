import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";
import 'semantic-ui-css/semantic.min.css'
import Starcard from './components/Starcard'

const App = () => {
  const [starobj, setStarobj] = useState([]);


  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/`, {
        params: {}
      })
      .then(response => {
        const starData = response.data.results;
        console.log("StarWars data is here", starData);
        setStarobj(starData);
      })
      .catch(function (error) {
          console.log("Oh-oh, something wrong", error);
      });
  }, []);



  return (
    <div className="container">
    {starobj.map(data => {
      return (
        <Starcard
          key={data.created}
          name={data.name}
          hair_color={data.hair_color}
          gender={data.gender}
        />
      );
    })}
  </div>
  );
}

export default App;
