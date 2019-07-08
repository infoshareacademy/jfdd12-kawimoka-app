import React from 'react'
import styles from './Meal.module.css';

export function MealInfo(props) {

    const { name, time, kcal} = props;
    
  
    return (   
        <div  className={styles.mealInfo}>
            <h1> {name}</h1>
            <div>
                <h3>Calories: {kcal} kcal</h3>
                <h3>Prep Time: {time} min </h3>
            </div>
        </div>
    );
  }
  