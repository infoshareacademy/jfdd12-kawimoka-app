import React, { Component } from "react";
import meals from "./meals.json";
import { MealCardShort } from "./MealCardShort";
import { MealCardFull } from "./MealCardFull";  // tutaj meal card short
import styles from './Meal.module.css';


export class MealsList extends Component {

state={
  selectedMeal: {},
  mealFilter: "",
}

  setMealFilter = (filterName) => {
    this.setState({
      mealFilter: filterName
    })
  }

  render() {
    console.log(meals)
    return (
    <div className={styles.bothCardsVisible}>
      <div >


        <h1 onClick={() => this.setMealFilter('breakfast')}> Breakfast</h1>
        <h1 onClick={() => this.setMealFilter('lunch')}> Lunch</h1>
        <h1 onClick={() => console.log('dinner')}> Dinner</h1>
        <h1 onClick={() => console.log('snacks')}> Snacks</h1>
        
      </div>

      <div>
        {meals.filter(meal => meal.type === this.state.mealFilter).map(filteredMeal => (
         <div onClick={()=> {
           this.setState({selectedMeal: filteredMeal})
         }}> <MealCardShort key={filteredMeal.id} meal={filteredMeal} /> </div>
        ))}
      </div>

      <div>
        {this.state.selectedMeal.id && <MealCardFull meal={this.state.selectedMeal}/> }
      </div>

    </div>
    );
  }
}
