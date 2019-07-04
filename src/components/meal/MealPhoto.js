
import React from 'react'
import styles from './Meal.module.css';




export function MealPhoto(props) {

    const { image} = props;
    
  
    return (
     
       
        <div >
            <img className={styles.mealPhoto} src={image} />
        </div>
     
    );
  }
  