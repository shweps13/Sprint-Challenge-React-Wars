import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";
import 'semantic-ui-css/semantic.min.css'
import Starcard from './components/Starcard'
import { Container, Header, Segment } from 'semantic-ui-react'

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
    <Container text>
      <Segment raised>
      <Header as='h1' textAlign='center'>Star Wars</Header>
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
    </Segment>
  </Container>
  );
}

export default App;
