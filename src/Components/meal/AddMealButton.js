import React from "react";
import styles from './Meal.module.css';

export const AddMealButton = () => (
  <button onClick={() => alert("You've added this meal to the active day!!!!")} className={styles.addMealButton}> + </button>
);

