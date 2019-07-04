import React from 'react'
import styles from './Meal.module.css';

export function Nutritions(props) {

    const { nutritions} = props;
    const {fat, carb, protein}=nutritions;
    
  
    return (
     
        
        <div  className={styles.nutritions}>
            <p> Fat: {fat}g</p>
            <p> Carb: {carb}g</p>
            <p> Protein: {protein}g</p>
        </div>
     
    );
  }
  

  //TODO: Nie odczytuje NUtritions, trzeba zmienic w MealCardFull