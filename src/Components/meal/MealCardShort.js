import React from "react";
import "./Meal.css";
import { Card, Icon, Image } from 'semantic-ui-react'

export function MealCardShort(props) {
  const { meal } = props;
  const { name, time, image, kcal } = meal;

  return (
        <div className="mealCardShort">
          <img className="mealPhoto" src={image} alt={"tu jest tekst"} />
          <div className="mealCardShortInfo">
            <h1> {name} </h1>
            <h2>Calories: {kcal} kcal</h2>
            <h2>Prep Time: {time} min </h2>
          </div>
        </div>
  );
}



export const MealCardShort2 = props => (
  <Card>
    <Image src={props.meal.image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{props.meal.name}</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Calories: {props.meal.kcal} kcal      
        </Card.Description>
    </Card.Content>
    <Card.Content extra>
    
        

    </Card.Content>
  </Card>
)