
import React from 'react'
import styles from './Meal.module.css';




export function MealPhoto(props) {

    const { name, image} = props;
    
  
    return (
       
    <div>
        <img className={styles.mealPhoto} src={image} alt={name}/>
    </div>
     
    );
  }
  