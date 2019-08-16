import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";
import 'semantic-ui-css/semantic.min.css'
import Starcard from './components/Starcard'
import { Container, Header, Segment, Grid } from 'semantic-ui-react'
import styled from 'styled-components'

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

 
  const CenteredContainer= styled(Container)`
  margin-top: 1%;
  `;

  return (
    <CenteredContainer text>
      <Segment raised>
      <Header as='h1' textAlign='center'>Star Wars</Header>
        <Grid divided='vertically'>
          <Grid.Row columns={2} >
    {starobj.map(data => {
      return (
        <Grid.Column >
          <Starcard
          key={data.created}
          name={data.name}
          hair_color={data.hair_color}
          gender={data.gender}
          height={data.height}
          
          />
        </Grid.Column>
      );
    })}
        </Grid.Row>
      </Grid>
    </Segment>
  </CenteredContainer>
  );
}

export default App;
