import React from "react";
import styles from './Meal.module.css';

export const CloseCardButton = () => (
  <button onClick={() => onMealClose() } className={styles.closeCardButton}> X </button>
);

