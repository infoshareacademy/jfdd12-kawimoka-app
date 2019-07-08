
import React from 'react';

import {MealPhoto} from './MealPhoto';
import styles from './Meal.module.css';





export function MealCardFull(props) {
const {meal} = props;
const { name, type, time, image, kcal, nutritions, recipe, ingradients } = meal;
const {fat, carbs, protein} = nutritions;


  
  return (
  <div className={styles.mealCardFull}>
     

  <div className={styles.mealCardTop}>
        <div className={styles.mealCardFullInfo}>
          <h1> {name} </h1>
          <h2>Calories: {kcal} kcal</h2>
          <h2>Prep Time: {time} min </h2> 
        </div>

        <MealPhoto image={image} alt={"tu jest tekst"} /> 
  </div>  
            
  <div className={styles.mealCardMain}>  
    <div className={styles.mealCardMainLeft}>
        <div className={styles.nutritions}>
          <h3>Nutritions</h3>  
          <p>fat={fat}g</p>
          <p> carbs={carbs}g </p>
          <p>protein={protein}g </p> 
        </div>
        <div className={styles.ingradients}>
          <h3>Ingradients:</h3>
          <p>{ingradients}</p>
        </div>
    </div>

        <div className={styles.recipe}>       
          <h3> Recipe</h3>
          <p>{recipe}</p>
        </div>
  </div>
  <div className={styles.mealCardFooter}>

    <button onClick={() => props.onMealClose()} className={styles.closeCardButton}> CLOSE </button>
    <button onClick={() => alert("You've added this meal to the active day!!!!")} className={styles.addMealButton}> ADD + </button>
      
  </div>
    </div>
      
  );
}
  

  //TODO: Dopisać elementy nutritions, recipe, ingradients