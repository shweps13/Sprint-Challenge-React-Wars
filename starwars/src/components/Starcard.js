import React from "react";
import { Card } from 'semantic-ui-react'



const StarCard = props => {
    const items = [
        {
          header: `${props.name}`,
          description: `${props.hair_color}`,
          meta: `${props.gender}`,
        }

      ]
      

    
    if (!props.name) return <h3>Loading...</h3>;
    else
    return (

    <Card.Group key={props.created} items={items} />
    
    );
  };
  
  export default StarCard;