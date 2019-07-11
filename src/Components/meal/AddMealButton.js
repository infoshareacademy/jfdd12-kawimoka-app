import React from "react";
import styles from './Meal.module.css';

export function AddMealButton(props) {
  const { onAdd, meal } = props
  
  return <button onClick={(e) => onAdd(meal)} className={styles.addMealButton}> ADD + </button>
};

