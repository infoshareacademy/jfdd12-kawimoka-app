import React from 'react'
import SingleDay  from './SingleDay'
import { MealsList } from '../meal/MealsList';
// import { UiStateLocalStorageService } from '../../ui-state-ls.service';
// import {DragDropContext} from 'react-beautiful-dnd';


export class PlanDietContainer extends React.Component{

  state = {
    breakfastId: undefined,
    breakfastKcal: 0,
    lunchId: undefined,
    lunchKcal: 0,
    snackId: undefined,
    snackKcal: 0,
    dinnerId: undefined,
    dinnerKcal: 0
  }
      
  componentDidUpdate= () => {
    localStorage.meals = JSON.stringify(this.state)
  }

  componentDidMount = () => {
    const newState = JSON.parse(localStorage.getItem('meals'))
    this.setState(newState)
  }

  onAdd = (meal) => {
    let mealKcalNumber = parseInt(meal.kcal)
    if (meal.type === "breakfast") {
        this.setState({breakfastId: meal.id, 
        breakfastKcal: mealKcalNumber}) 
    } else if (meal.type === "lunch") {
        this.setState({lunchId: meal.id,
        lunchKcal: mealKcalNumber})
    } else if (meal.type === 'snack') {
        this.setState({snackId: meal.id,
        snackKcal: mealKcalNumber})
    } else if (meal.type === "dinner") {
        this.setState({dinnerId: meal.id,
        dinnerKcal: mealKcalNumber})
    }
  }

  onDelete = (meal) => {
    if (meal.type === "breakfast") {
        this.setState({breakfastId: undefined,
        breakfastKcal: 0}) 
    } else if (meal.type === "lunch") {
        this.setState({lunchId: undefined,
        lunchKcal: 0})
    } else if (meal.type === 'snack') {
        this.setState({snackId: undefined,
        snackKcal: 0})
    } else if (meal.type === "dinner") {
        this.setState({dinnerId: undefined,
        dinnerKcal: 0})
    }
  }

  sumCalories = () => {
    let countedCalories =
      this.state.breakfastKcal +
      this.state.lunchKcal +
      this.state.snackKcal +
      this.state.dinnerKcal;
    return countedCalories;
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center"
        }}
      >
        <SingleDay
          date={this.props.date}
          breakfastId={this.state.breakfastId}
          lunchId={this.state.lunchId}
          snackId={this.state.snackId}
          dinnerId={this.state.dinnerId}
          sumCalories={this.sumCalories}
          onDelete={this.onDelete}
        />
        <MealsList onAdd={this.onAdd} />
      </div>
    );
  }
}

