
import React from 'react';
import {MealInfo} from './MealInfo';
import {MealPhoto} from './MealPhoto';
import styles from './Meal.module.css';
import {AddMealButton} from './AddMealButton';

export function MealCardFull(props) {
const {meal} = props;
const { name, type, time, image, kcal, nutritions, recipe } = meal;
const {fat, carbs, protein} = nutritions;


  
  return (
    <div className={styles.mealCardFull}>
      <div className={styles.mealCardFullTop}>
        <MealInfo name={name} time={time} kcal={kcal} type={type}/>        
        <MealPhoto image={image} alt={"tu jest tekst"} />

      </div>
      <div>
        <div>
        <h3>Nutritions</h3>  
        <p>fat={fat}g</p>
        <p>carbs={carbs}g </p>
        <p>protein={protein}g </p> 
        </div>
        <h3> Recipe</h3>
        <p>{recipe}</p>
      </div>
     <div>
       <AddMealButton />
       <button onClick={() => props.onMealClose()} className={styles.closeCardButton}> X </button>
     </div>
     
       
     
    </div>
       

  );
}
  

  //TODO: Dopisać elementy nutritions, recipe, ingradients