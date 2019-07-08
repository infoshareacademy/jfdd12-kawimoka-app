
import React from 'react';
import {MealPhoto} from './MealPhoto';
import styles from './Meal.module.css';


export function MealCardShort(props) {
const {meal} = props;
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
  
