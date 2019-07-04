
import React from 'react';
import {MealInfo} from './MealInfo';
import {MealPhoto} from './MealPhoto';
import styles from './Meal.module.css';




export function MealCardFull(props) {
const {meal} = props;
const { name, time, image, kcal, nutritions, recipe } = meal;
const {fat, carb, protein} = nutritions;


  
    return (
        <div className={styles.mealCardFull}>
        <MealInfo name={name} time={time} kcal={kcal} />
        <MealPhoto image={image} alt={"tu jest tekst"} />
        <p>fat={fat} carb={carb} protein={protein} </p> 
    
        
      </div>
       

    );
  }
  

  //TODO: Dopisać elementy nutritions, recipe, ingradients