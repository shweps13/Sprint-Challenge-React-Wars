import React from "react";
import { Card } from 'semantic-ui-react'



const StarCard = props => {
    const items = [
        {
          header: `${props.name}`,
          meta: `Gender: ${props.gender}`,
          description: `Hair_color: ${props.hair_color}, Height: ${props.height}`,
        }

      ]
      

    
    if (!props.name) return <h3>Loading...</h3>;
    else
    return (

    <Card.Group key={props.created} items={items} />
    
    );
  };
  
  export default StarCard;