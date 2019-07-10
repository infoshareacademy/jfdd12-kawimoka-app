
import React from 'react';
import {MealInfo} from './MealInfo';
import {MealPhoto} from './MealPhoto';
// import {Draggable} from 'react-beautiful-dnd'
import styles from './Meal.module.css';


export function MealCardShort(props) {
const {meal} = props;
const { name, time, image, kcal } = meal;

    return (
      <div className={styles.mealCardShort} >
        <MealInfo name={name} time={time} kcal={kcal} />
        <MealPhoto image={image} alt={"tu jest tekst"} />
      </div>
    )  

};
  
