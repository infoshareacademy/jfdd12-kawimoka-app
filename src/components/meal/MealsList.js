import React, { Component } from "react";
import meals from "./meals.json";
import { MealCardShort } from "./MealCardShort";
import { MealCardFull } from "./MealCardFull";  // tutaj meal card short
import styles from './Meal.module.css';


export class MealsList extends Component {

state={
  selectedMealType: meals[0],
  selectedMeal: meals[0]
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
        {meals.map(mealFromJson => (
         <div onClick={()=> {
           this.setState({selectedMeal: mealFromJson})
         }}> <MealCardShort key={mealFromJson.id} meal={mealFromJson} /> </div>
        ))}
      </div>
      <div>
          <MealCardFull meal={this.state.selectedMeal}/>
      </div>
      </div>
    );
  }
}
