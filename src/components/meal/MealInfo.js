import React from 'react'
import styles from './Meal.module.css';

export function MealInfo(props) {

    const { mealType, name, time, kcal} = props;
    
  
    return (
     
        
        <div  className={styles.mealInfo}>
            <h1> {name}</h1>
            <h2>Rodzaj posiłku: {mealType}</h2>
            <h3>Kaloryczność: {kcal} kcal</h3>
            <h3>Czas przygotowania: {time} </h3>
            
        </div>
     
    );
  }
  