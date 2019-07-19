import React from 'react'
import SingleDay from './SingleDay'
import { MealsList } from '../meal/MealsList'
import './PlanDietContainer.css'
import { Nutrition } from './Nutrition/Nutrition'

export class PlanDietContainer extends React.Component{

  state = {
      breakfast: new Meal(),
      lunch: new Meal(),
      snack: new Meal(),
      dinner: new Meal()
  };

  sumNutrition = (field) => {
    return this.state.breakfast[field] +
        this.state.lunch[field] +
        this.state.snack[field] +
        this.state.dinner[field];
  };

  render() {
    return (
      <div className="planDietContainer">
        <Nutrition sumNutrition={this.sumNutrition}/>
        <SingleDay sumNutrition={this.sumNutrition}/>
        <MealsList/>
      </div>
    )
  }
}

class Meal {
  id = undefined;
  kcal = 0;
  fat = 0;
  carbs = 0;
  protein = 0;
}
