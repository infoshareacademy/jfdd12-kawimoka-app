import React from "react";
import styles from './Meal.module.css';

export const AddMealButton = (props) => {
  const { onAdd, selectedMealId } = props
  
  return <button onClick={() => onAdd(selectedMealId)} className={styles.addMealButton}> + </button>
};

