import React from 'react'
import styles from './Meal.module.css';



export function MealsTypesList(props) {
    const {type} = props;
  
    return (
             
        <div className={styles.mealsTypesList} type={type}>
        <h1>Breakfast</h1>
        <h1>Lunch</h1>
        <h1>Dinner</h1>
        <h1>Snacks</h1>
      </div>
      )
     
  
  }
  