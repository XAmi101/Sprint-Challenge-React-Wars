import React from "react";
import { Card, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';


function CharacterCard({name, height, gender, eye_color, birth_year}) {
   return(
   <div className='character-card'>
   <div className='character-description'>

   <Card.Group>
         <Card color='black' centered={true}>
           <Card.Content>
             <Card.Header> Name: {name}</Card.Header>
             <Card.Meta> Birth Year: {birth_year}</Card.Meta>
         <Card.Description> Height: {height}</Card.Description>
         <Card.Description> Gender: {gender}</Card.Description>
          <Card.Description> Eye Color: {eye_color}</Card.Description>
          </Card.Content>
                 </Card>
               </Card.Group>
               </div>
  </div>
)

}
export default CharacterCard;
