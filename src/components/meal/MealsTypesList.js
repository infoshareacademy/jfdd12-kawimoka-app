import React, { Component } from "react";

import styles from './Meal.module.css';


export class MealsTypesList extends Component {

  state={

  }

  render() {
    return (
      <div className={styles.bothCardsVisible}>
      <div >
        <h1> Breakfast</h1>
        <h1> Lunch</h1>
        <h1> Dinner</h1>
        <h1> Snacks</h1>
      </div>
      <div>
          <h1> tu beda posilki</h1>
      </div>
      </div>


    );
  }
}
