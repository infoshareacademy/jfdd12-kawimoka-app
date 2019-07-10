import React from "react";
import styles from './Meal.module.css';

export function AddMealButton(props) {
  const { onAdd, selectedMealId } = props
  
  return <button onClick={(e) => onAdd(selectedMealId)} className={styles.addMealButton}> ADD +</button>
};

