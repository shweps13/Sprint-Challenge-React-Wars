import React from "react";
import { Card } from 'semantic-ui-react'

const StarCard = props => {

    if (!props.name) return <h3>Loading...</h3>;
    else
    return (
     
      <div className="slide" key={props.created}>
          <h2>{props.name}</h2>
          <h3> Hair: {props.hair_color}</h3>
          <p>{props.gender}</p>
      </div>

    );
  };
  
  export default StarCard;