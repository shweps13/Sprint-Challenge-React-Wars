import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";

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
    <div className="App">
      <h1 className="Header">React Wars</h1>
    </div>
  );
}

export default App;
