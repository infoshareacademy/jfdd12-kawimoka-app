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

clearMeal =() => {
  this.setState({
    selectedMeal: {},
  })
}



  render() {
    console.log(meals)
    return (
    <div className={styles.bothCardsVisible}>
      <div className={styles.mealsTypesList}>

      <div><h1 onClick={() => this.setMealFilter('breakfast')}> Breakfast</h1></div>
      <div><h1 onClick={() => this.setMealFilter('lunch')}> Lunch</h1></div>
      <div><h1 onClick={() => this.setMealFilter('Dinner')}> Dinner</h1></div>
      <div><h1 onClick={() => this.setMealFilter('Snack')}> Snacks</h1></div> 
        
        
      </div>

      <div>
        {meals.filter(meal => meal.type === this.state.mealFilter).map(filteredMeal => (
         <div onClick={()=> {
           this.setState({selectedMeal: filteredMeal})
         }}> <MealCardShort key={filteredMeal.id} meal={filteredMeal} /> </div>
        ))}
      </div>

      <div>
        {this.state.selectedMeal.id && <MealCardFull meal={this.state.selectedMeal} onMealClose={this.clearMeal}/> }
      </div>

    </div>
    )
  }

}