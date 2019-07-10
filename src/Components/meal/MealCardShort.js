
import React from 'react';
import {MealPhoto} from './MealPhoto';
// import {Draggable} from 'react-beautiful-dnd'
import styles from './Meal.module.css';
import { AddMealButton } from './AddMealButton';


export function MealCardShort(props) {
const {meal, onAdd} = props;
const { name, time, type, image, kcal} = meal;

  return (
    <div className={styles.mealCardShort} >
      <div  className={styles.mealCardShortInfo}>
        <h1> {name} </h1>
        <h2>Calories: {kcal} kcal</h2>
        <h2>Prep Time: {time} min </h2> 
        
      </div>
      <MealPhoto  image={image} alt={"tu jest tekst"} />
        

    </div>
  );
}
  
