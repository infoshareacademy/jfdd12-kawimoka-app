import React from 'react'
import SingleDay from './SingleDay'
import { MealsList } from '../meal/MealsList'
import './PlanDietContainer.css'

export class PlanDietContainer extends React.Component{

  state = {
      breakfast: new Meal(),
      lunch: new Meal(),
      snack: new Meal(),
      dinner: new Meal()
  };

  componentDidUpdate = () => {
    localStorage.meals = JSON.stringify(this.state)
  };

  componentDidMount = () => {
    const newState = JSON.parse(localStorage.getItem('meals'));
    this.setState(newState);
  };

  onAdd = meal => {
    this.setState({
        [meal.type]: {
          id: meal.id,
          kcal: parseInt(meal.kcal),
          fat: parseInt(meal.nutritions.fat),
          carbs: parseInt(meal.nutritions.carbs),
          protein: parseInt(meal.nutritions.protein)
        }
    })
  };

  onDelete = meal => {
    this.setState({
        [meal.type]: new Meal()
    })
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
        <SingleDay
          date={this.props.date}
          breakfastId={this.state.breakfast.id}
          lunchId={this.state.lunch.id}
          snackId={this.state.snack.id}
          dinnerId={this.state.dinner.id}
          sumNutrition={this.sumNutrition}
          onDelete={this.onDelete}
        />
        <MealsList onAdd={this.onAdd} />
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
